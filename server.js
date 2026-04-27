/**
 * SGI 대리점 관리 시스템 - 백엔드 프록시 서버
 * NHN Cloud Email / SMS 연동 (API Key는 환경변수로만 관리)
 */
require('dotenv').config();   // 로컬 개발: .env 파일 자동 로드

const express = require('express');
const cors    = require('cors');
const fetch   = require('node-fetch');
const multer  = require('multer');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── 미들웨어 ──────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(express.static(path.join(__dirname)));   // HTML/JS/CSS 정적 서빙

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

// ── NHN Cloud 환경변수 ────────────────────────────────────
const EMAIL_APP_KEY   = process.env.NHN_EMAIL_APP_KEY;
const EMAIL_SECRET    = process.env.NHN_EMAIL_SECRET;
const EMAIL_FROM      = process.env.NHN_EMAIL_FROM    || 'service@salarify.kr';
const EMAIL_FROM_NAME = process.env.NHN_EMAIL_FROM_NAME || 'SGI 대리점 시스템';

const SMS_APP_KEY  = process.env.NHN_SMS_APP_KEY;
const SMS_SECRET   = process.env.NHN_SMS_SECRET;
const SMS_FROM     = process.env.NHN_SMS_FROM || '0221351916';

// ── 헬스체크 ─────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ─────────────────────────────────────────────────────────
// ① 이메일 발송 API
//    POST /api/send-email
//    Body: { to, toName, subject, body, attachments? }
//    attachments: [{ name, base64, contentType }]
// ─────────────────────────────────────────────────────────
app.post('/api/send-email', async (req, res) => {
  const { to, toName, subject, body, attachments = [] } = req.body;

  if (!to || !subject || !body) {
    return res.status(400).json({ ok: false, message: '필수 항목 누락 (to, subject, body)' });
  }

  // NHN Cloud Email API 페이로드
  const payload = {
    senderAddress: EMAIL_FROM,
    senderName: EMAIL_FROM_NAME,
    title: subject,
    body: body,
    receiverList: [{ receiveMailAddr: to, receiveName: toName || to, receiveType: 'MRT0' }]
  };

  // 첨부파일 처리 (base64 → NHN Cloud 포맷)
  if (attachments.length > 0) {
    payload.attachFileIdList = [];   // 파일 업로드 후 ID 첨부 방식 사용
    // 첨부파일은 별도 /attachments 엔드포인트로 먼저 업로드 후 ID 사용 필요
    // 여기서는 base64 직접 포함 (NHN Cloud가 지원하는 경우)
    // NHN Cloud는 일반적으로 파일 ID 방식을 사용하므로 아래처럼 처리
    payload.attachments = attachments.map(f => ({
      filename: f.name,
      content: f.base64,
      contentType: f.contentType || 'application/octet-stream'
    }));
  }

  try {
    const url = `https://email.api.nhncloudservice.com/email/v2.0/appKeys/${EMAIL_APP_KEY}/sender/mail`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Secret-Key': EMAIL_SECRET
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log('[EMAIL]', to, '->', response.status, JSON.stringify(data).substring(0, 200));

    if (response.ok && data.header?.isSuccessful) {
      res.json({ ok: true, requestId: data.body?.data?.requestId });
    } else {
      res.status(502).json({ ok: false, message: data.header?.resultMessage || '발송 실패', raw: data });
    }
  } catch (err) {
    console.error('[EMAIL ERROR]', err.message);
    res.status(500).json({ ok: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────
// ② SMS 발송 API
//    POST /api/send-sms
//    Body: { to, message }
// ─────────────────────────────────────────────────────────
app.post('/api/send-sms', async (req, res) => {
  const { to, message } = req.body;

  if (!to || !message) {
    return res.status(400).json({ ok: false, message: '필수 항목 누락 (to, message)' });
  }

  const payload = {
    body: message,
    sendNo: SMS_FROM,
    recipientList: [{ recipientNo: to.replace(/-/g, '') }]
  };

  try {
    const url = `https://sms.api.nhncloudservice.com/sms/v3.0/appKeys/${SMS_APP_KEY}/sender/sms`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Secret-Key': SMS_SECRET
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log('[SMS]', to, '->', response.status, JSON.stringify(data).substring(0, 200));

    if (response.ok && data.header?.isSuccessful) {
      res.json({ ok: true, requestId: data.body?.data?.requestId });
    } else {
      res.status(502).json({ ok: false, message: data.header?.resultMessage || '발송 실패', raw: data });
    }
  } catch (err) {
    console.error('[SMS ERROR]', err.message);
    res.status(500).json({ ok: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────
// ③ 접수 완료 통합 알림
//    POST /api/notify-application
//    Body: { agencyEmail, agencyName, applicantName, contact,
//            productName, amount, appId, attachments? }
// ─────────────────────────────────────────────────────────
app.post('/api/notify-application', async (req, res) => {
  const {
    agencyEmail, agencyName, applicantName,
    contact, productName, amount, appId,
    agencyPhone, attachments = []
  } = req.body;

  const results = { email: null, sms: null };
  const errors  = [];

  // 이메일 발송 (대리점으로)
  if (agencyEmail) {
    const emailSubject = `[SGI 접수] ${productName} - ${applicantName} (${appId})`;
    const emailBody = `
<h2 style="color:#1356A2">신규 보증보험 접수 알림</h2>
<table border="0" cellpadding="8" style="border-collapse:collapse;width:100%;font-size:14px">
  <tr><td style="color:#666;width:120px">접수번호</td><td><strong>${appId}</strong></td></tr>
  <tr><td style="color:#666">신청인</td><td>${applicantName}</td></tr>
  <tr><td style="color:#666">연락처</td><td>${contact}</td></tr>
  <tr><td style="color:#666">상품명</td><td>${productName}</td></tr>
  <tr><td style="color:#666">보증금액</td><td>${Number(amount).toLocaleString()}원</td></tr>
  <tr><td style="color:#666">대리점</td><td>${agencyName}</td></tr>
  <tr><td style="color:#666">접수시각</td><td>${new Date().toLocaleString('ko-KR')}</td></tr>
</table>
<p style="margin-top:20px;color:#888;font-size:12px">
  ※ 본 메일은 SGI 대리점 관리 시스템에서 자동 발송되었습니다.<br>
  ※ 관리자 페이지에서 상세 내용 및 제출 서류를 확인하세요.
</p>
    `.trim();

    try {
      const r = await fetch(`http://localhost:${PORT}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: agencyEmail, toName: agencyName, subject: emailSubject, body: emailBody, attachments })
      });
      results.email = await r.json();
    } catch (e) {
      errors.push('email: ' + e.message);
    }
  }

  // SMS 발송 (대리점 담당자 휴대폰으로)
  if (agencyPhone) {
    const smsBody = `[SGI대리점] 신규접수\n상품: ${productName}\n신청인: ${applicantName}\n금액: ${Number(amount).toLocaleString()}원\n접수번호: ${appId}`;
    try {
      const r = await fetch(`http://localhost:${PORT}/api/send-sms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: agencyPhone, message: smsBody })
      });
      results.sms = await r.json();
    } catch (e) {
      errors.push('sms: ' + e.message);
    }
  }

  res.json({ ok: errors.length === 0, results, errors });
});

// ── 서버 시작 ────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ SGI 서버 실행 중 → http://localhost:${PORT}`);
  console.log(`   Email AppKey: ${EMAIL_APP_KEY ? '✓ 설정됨' : '✗ 미설정'}`);
  console.log(`   SMS AppKey:   ${SMS_APP_KEY   ? '✓ 설정됨' : '✗ 미설정'}`);
});
