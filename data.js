// SGI 서울보증보험 대리점 관리시스템 - 공유 데이터 & 유틸리티
// data.js (admin.html, apply.html 에서 공통 사용)

const SGI_PRODUCTS = [
  // ── 일반계약/공사 ──
  {
    id:'gc01', cat:'일반계약/공사', icon:'📋',
    name:'입찰보증보험',
    desc:'입찰 참가자가 낙찰 후 계약 체결을 하지 않을 경우 발주자의 손해를 보전',
    docs:['사업자등록증','입찰참가자격서류','납세증명서'],
    optDocs:['재무제표','세금증명서'],
    addons:['progress_tracker'],
    fields:[{k:'입찰명',r:true},{k:'발주기관',r:true},{k:'입찰금액',r:true},{k:'입찰일',r:true}]
  },
  {
    id:'gc02', cat:'일반계약/공사', icon:'📋',
    name:'계약보증보험',
    desc:'계약자가 계약 내용을 이행하지 않을 경우 발주자의 손해를 보전',
    docs:['사업자등록증','계약서','납세증명서'],
    optDocs:['재무제표','이행실적서류'],
    addons:['progress_tracker'],
    fields:[{k:'계약상대방',r:true},{k:'계약금액',r:true},{k:'계약기간',r:true},{k:'계약목적물',r:true}]
  },
  {
    id:'gc03', cat:'일반계약/공사', icon:'🔧',
    name:'하자보증보험',
    desc:'수급인이 하자보수를 도급인의 요구대로 이행하지 않을 경우 도급인을 보전',
    docs:['사업자등록증','준공계약서','하자담보액수','납세증명서'],
    optDocs:['세금증명서'],
    addons:[],
    fields:[{k:'공사명',r:true},{k:'하자금액',r:true},{k:'계약기간',r:true},{k:'발주처',r:true}]
  },
  {
    id:'gc04', cat:'일반계약/공사', icon:'💰',
    name:'선급금보증보험',
    desc:'공사 완료 후 선급금 발생 시 도급인의 손해를 보전',
    docs:['사업자등록증','도급계약서','도급계약서'],
    optDocs:[],
    addons:[],
    fields:[{k:'공사명',r:true},{k:'도급금액',r:true},{k:'선급금보증기간',r:true},{k:'발주처',r:true}]
  },
  {
    id:'gc08', cat:'일반계약/공사', icon:'🏛️',
    name:'공사이행보증보험',
    desc:'수급인이 도급계약의 내용을 이행하지 않을 경우 도급인의 손해를 보전',
    docs:['사업자등록증','도급계약서','납세증명서','재무제표(최근2년)'],
    optDocs:['세금증명서','공사실적서류'],
    addons:['progress_tracker'],
    fields:[{k:'공사명',r:true},{k:'도급금액',r:true},{k:'공사기간',r:true},{k:'발주처',r:true}]
  },
  {
    id:'gc09', cat:'일반계약/공사', icon:'🏘️',
    name:'분양보증보험',
    desc:'분양사업자가 분양계약을 이행하지 않을 경우 입주자의 손해를 보전',
    docs:['사업자등록증','분양계획서','건축등기부등본','분양계약서','재무제표'],
    optDocs:['PF약정서','분양계약서'],
    addons:['unit_tracker'],
    fields:[{k:'분양사업명',r:true},{k:'분양세대수',r:true},{k:'착공예정일',r:true},{k:'시행사',r:true}]
  },

  // ── 주택/전세/임대 ──
  {
    id:'ho01', cat:'주택/전세/임대', icon:'🏠',
    name:'전세보증금반환보증보험',
    desc:'임대차 계약 종료 시 특수한 사정으로 보증금 반환이 어려운 경우의 보장',
    docs:['전입신고서','건물등기부등본','주민등록증'],
    optDocs:['임대차보험회사확인서'],
    addons:['loan_calc'],
    fields:[{k:'임차인명',r:true},{k:'전세보증금액',r:true},{k:'임대차기간',r:true},{k:'전세보증인',r:true}]
  },
  {
    id:'ho02', cat:'주택/전세/임대', icon:'🏡',
    name:'전세금보장신용보험',
    desc:'임차인이 전세금보험 계약 만료 후 전세금을 반환받지 못할 경우 보장',
    docs:['임대차계약서','전입신고서','임차인신분증','건물등기부등본'],
    optDocs:['확정일자서류'],
    addons:['loan_calc','lease_manager'],
    fields:[{k:'임차인명',r:true},{k:'임대인명',r:true},{k:'임대건물주소',r:true},{k:'전세금금액',r:true}]
  },
  {
    id:'ho03', cat:'주택/전세/임대', icon:'🔑',
    name:'전세금반환보증보험',
    desc:'임대인이 전세금 반환을 하지 않을 경우 임차인의 손해를 보전',
    docs:['임대차계약서','전입신고서','건물등기부등본','임대인사업자등록증'],
    optDocs:['확정일자서류','임차인신분증'],
    addons:['loan_calc','lease_manager'],
    fields:[{k:'임차인명',r:true},{k:'임대인명',r:true},{k:'임대건물주소',r:true},{k:'전세금금액',r:true}]
  },
  {
    id:'ho04', cat:'주택/전세/임대', icon:'🏢',
    name:'임대주택보증보험',
    desc:'임대사업자가 임대차 계약 종료 후 보증금 반환 의무를 이행하지 못하는 경우 보증',
    docs:['사업자등록증','임대사업자등록증','건물등기부등본','임대차계약서'],
    optDocs:[],
    addons:['lease_manager'],
    fields:[{k:'임대사업자명',r:true},{k:'건물주소',r:true},{k:'임대세대수',r:true},{k:'보증금액',r:true}]
  },
  {
    id:'ho08', cat:'주택/전세/임대', icon:'💼',
    name:'개인사업자금융신용보험',
    desc:'개인사업자의 금융기관 여신에 대한 보증',
    docs:['사업자등록증','재무제표','보증금액서류','납세증명서'],
    optDocs:['세금증명서','신용평가보고서'],
    addons:['loan_calc'],
    fields:[{k:'사업자명',r:true},{k:'전세보증금액',r:true},{k:'전세기간',r:true},{k:'전세보증인',r:true}]
  },

  // ── 관공서/공공기관/금융 ──
  {
    id:'pa01', cat:'관공서/공공기관/금융', icon:'📑',
    name:'인허가이행보증보험(사업허가)',
    desc:'사업 허가 조건에 따른 이행 내용을 이행하지 않을 경우 인허가관청의 손해를 보전',
    docs:['사업자등록증','사업허가증','보증금액서류','납세증명서'],
    optDocs:[],
    addons:['checklist'],
    fields:[{k:'사업자명',r:true},{k:'허가기관',r:true},{k:'보증금액',r:true},{k:'허가유효기간',r:true}]
  },
  {
    id:'pa06', cat:'관공서/공공기관/금융', icon:'📊',
    name:'납세보증보험',
    desc:'납세자가 세금 납부를 하지 않을 경우 과세관청의 손해를 보전',
    docs:['사업자등록증','세금납부고지서','납세증명서'],
    optDocs:['재무제표'],
    addons:[],
    fields:[{k:'납세이행여부',r:true},{k:'세목',r:true},{k:'납세금액',r:true},{k:'납부기한',r:true}]
  },
  {
    id:'pa10', cat:'관공서/공공기관/금융', icon:'🖥',
    name:'개인정보보호보증보험',
    desc:'개인정보 유출 시 개인정보 보호에 대한 이행을 보전',
    docs:['사업자등록증','개인정보보호위원회확인서(ISMS)','납세증명서'],
    optDocs:['개인정보관리계획'],
    addons:[],
    fields:[{k:'기업명',r:true},{k:'처리개인정보수',r:true},{k:'보증금액',r:true},{k:'보험기간',r:true}]
  },

  // ── 유통/물류/유통 ──
  {
    id:'rt01', cat:'유통/물류/유통', icon:'📦',
    name:'물품납품보증보험',
    desc:'물품 납품업체의 납기 미이행에 대비하여 발주처의 손해를 보전',
    docs:['사업자등록증','물품공급계약서','납품계산서'],
    optDocs:['재무제표'],
    addons:[],
    fields:[{k:'발주처명',r:true},{k:'납품업체명',r:true},{k:'물품명',r:true},{k:'계약금액',r:true}]
  },
  {
    id:'rt02', cat:'유통/물류/유통', icon:'🏪',
    name:'가맹사업자보증보험',
    desc:'가맹점주의 이행 내용을 가맹본부가 이행할 수 있도록 보장',
    docs:['사업자등록증','가맹계약서','납세증명서'],
    optDocs:['사업실적서류'],
    addons:[],
    fields:[{k:'가맹점명',r:true},{k:'가맹본부명',r:true},{k:'보증금액',r:true},{k:'계약기간',r:true}]
  },

  // ── 금융/신용/금융 ──
  {
    id:'tc01', cat:'금융/신용/금융', icon:'💳',
    name:'지급신용보험(카드가맹점)',
    desc:'카드가맹점의 대금 미지급에 대비하여 VAN사 또는 카드사의 손해를 보전',
    docs:['사업자등록증','카드가맹계약서','매출자료'],
    optDocs:['재무제표'],
    addons:[],
    fields:[{k:'가맹점명',r:true},{k:'카드사명',r:true},{k:'보장한도',r:true},{k:'보험기간',r:true}]
  },
  {
    id:'tc02', cat:'금융/신용/금융', icon:'🏦',
    name:'할부신용보험',
    desc:'할부 채무자의 채무불이행 및 채무자의 손해를 보전',
    docs:['사업자등록증','할부판매계약서','재무제표'],
    optDocs:[],
    addons:['loan_calc'],
    fields:[{k:'채무자명',r:true},{k:'상품명',r:true},{k:'할부금액',r:true},{k:'할부기간',r:true}]
  }
];

const SGI_CATEGORIES = [...new Set(SGI_PRODUCTS.map(p => p.cat))];

const STATUS_MAP = {
  '접수대기':'b-wait','서류검토':'b-review','승인완료':'b-approved',
  '증권발행':'b-issued','반려':'b-rejected','추가서류요청':'b-extra'
};
const CONTRACT_STATUS_MAP = {
  '활성':'b-active','만기임박':'b-expiring','만기':'b-expired',
  '연장':'b-extended','해지':'b-terminated'
};

const SAMPLE_APPLICATIONS = [
  { id:'A2024-0041', agencyId:'ag01', name:'(주)한국건설', contact:'010-1234-5678', productId:'gc08', product:'공사이행보증보험', amount:500000000, date:'2024-06-01', status:'접수대기', docs:{'사업자등록증':true,'도급계약서':true,'납세증명서':false,'재무제표(최근2년)':false}, memo:'' },
  { id:'A2024-0040', agencyId:'ag01', name:'삼성개발(주)', contact:'010-2345-6789', productId:'gc09', product:'분양보증보험', amount:2000000000, date:'2024-05-31', status:'서류검토', docs:{'사업자등록증':true,'분양계획서':true,'건축등기부등본':true,'분양계약서':false,'재무제표':false}, memo:'' },
  { id:'A2024-0039', agencyId:'ag01', name:'이정민', contact:'010-3456-7890', productId:'ho03', product:'전세금반환보증보험', amount:150000000, date:'2024-05-31', status:'승인완료', docs:{'임대차계약서':true,'전입신고서':true,'건물등기부등본':true}, memo:'' },
  { id:'A2024-0038', agencyId:'ag02', name:'(주)라이트테크', contact:'010-4567-8901', productId:'ho08', product:'개인사업자금융신용보험', amount:300000000, date:'2024-05-30', status:'증권발행', docs:{'사업자등록증':true,'재무제표':true,'보증금액서류':true,'납세증명서':true,'세금증명서':true}, memo:'' },
  { id:'A2024-0037', agencyId:'ag02', name:'대림산업(주)', contact:'010-5678-9012', productId:'gc01', product:'입찰보증보험', amount:50000000, date:'2024-05-30', status:'반려', docs:{'사업자등록증':true,'입찰참가자격서류':false}, memo:'서류미비 반려' },
  { id:'A2024-0036', agencyId:'ag01', name:'새빛종합건설', contact:'010-6789-0123', productId:'gc04', product:'선급금보증보험', amount:80000000, date:'2024-05-29', status:'서류검토', docs:{'사업자등록증':true,'도급계약서':true,'도급계약서':false}, memo:'' },
  { id:'A2024-0035', agencyId:'ag01', name:'(주)코리아납품', contact:'010-7890-1234', productId:'rt01', product:'물품납품보증보험', amount:120000000, date:'2024-05-28', status:'승인완료', docs:{'사업자등록증':true,'물품공급계약서':true,'납품계산서':true}, memo:'' },
  { id:'A2024-0034', agencyId:'ag02', name:'미래부동산(주)', contact:'010-8901-2345', productId:'pa06', product:'납세보증보험', amount:45000000, date:'2024-05-27', status:'접수대기', docs:{'사업자등록증':true,'세금납부고지서':false,'납세증명서':false}, memo:'' },
  { id:'A2024-0033', agencyId:'ag01', name:'김철수', contact:'010-9012-3456', productId:'ho02', product:'전세금보장신용보험', amount:200000000, date:'2024-05-26', status:'서류검토', docs:{'임대차계약서':true,'전입신고서':true,'임차인신분증':false,'건물등기부등본':true}, memo:'확정일자 확인 필요' },
  { id:'A2024-0032', agencyId:'ag02', name:'글로벌신용(주)', contact:'010-0123-4567', productId:'tc01', product:'지급신용보험(카드가맹점)', amount:30000000, date:'2024-05-25', status:'증권발행', docs:{'사업자등록증':true,'카드가맹계약서':true,'매출자료':true}, memo:'' }
];

const SAMPLE_CONTRACTS = [
  { id:'C2024-001', agencyId:'ag01', appId:'A2024-0039', name:'이정민', contact:'010-3456-7890', productId:'ho03', product:'전세금반환보증보험', amount:150000000, startDate:'2024-01-15', endDate:'2025-01-14', status:'활성', landlord:'박철진', landlordTel:'010-1111-2222', address:'서울시 강남구 역삼동 123-4', units:0, premiumPaid:true, memo:'', requests:[], loanInfo:{principal:130000000,rate:4.2,months:24,type:'원리금균등'} },
  { id:'C2024-002', agencyId:'ag02', appId:'A2024-0038', name:'(주)라이트테크', contact:'010-4567-8901', productId:'ho08', product:'개인사업자금융신용보험', amount:300000000, startDate:'2024-02-01', endDate:'2024-07-31', status:'만기임박', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:true, memo:'', requests:[], loanInfo:{principal:300000000,rate:5.2,months:6,type:'만기일시상환'} },
  { id:'C2024-003', agencyId:'ag01', appId:'A2024-0035', name:'(주)코리아납품', contact:'010-7890-1234', productId:'rt01', product:'물품납품보증보험', amount:120000000, startDate:'2024-03-01', endDate:'2024-08-31', status:'활성', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:false, memo:'', requests:[], loanInfo:null },
  { id:'C2024-004', agencyId:'ag01', appId:null, name:'미래주택(주)', contact:'010-9999-8888', productId:'ho04', product:'임대주택보증보험', amount:500000000, startDate:'2023-07-01', endDate:'2024-06-30', status:'만기', landlord:'김영희', landlordTel:'010-3333-4444', address:'서울시 마포구 합정동 77-2', units:5, premiumPaid:true, memo:'5세대 빌라', requests:[{type:'갱신요청',date:'2024-05-20',note:'1년 갱신 요청'}], loanInfo:{principal:300000000,rate:3.8,months:24,type:'원리금균등'} },
  { id:'C2024-005', agencyId:'ag02', appId:null, name:'대림건설(주)', contact:'010-1111-2222', productId:'gc08', product:'공사이행보증보험', amount:800000000, startDate:'2024-01-01', endDate:'2024-12-31', status:'활성', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:true, memo:'도로공사 진행', requests:[], loanInfo:null, progress:42 }
];

const SMS_TEMPLATES = {
  '접수완료':    (a) => `[SGI대리점] ${a.name}님, ${a.product} 신청이 정상 접수되었습니다. 서류 검토 후 연락드리겠습니다. ☎02-0000-0000`,
  '추가서류요청': (a) => `[SGI대리점] ${a.name}님, ${a.product} 처리를 위해 추가 서류 제출이 필요합니다. 담당자에게 문의해주세요. ☎02-0000-0000`,
  '승인완료':    (a) => `[SGI대리점] ${a.name}님, ${a.product} 승인이 완료되었습니다. 증권 발행 안내를 위해 연락드리겠습니다.`,
  '증권발행':    (a) => `[SGI대리점] ${a.name}님, 보증보험 증권이 발행되었습니다. 증권 수령 방법은 담당자에게 문의 바랍니다.`,
  '반려안내':    (a) => `[SGI대리점] ${a.name}님, ${a.product} 신청이 반려되었습니다. 자세한 사유는 담당자에게 문의 바랍니다. ☎02-0000-0000`,
  '만기안내':    (a) => `[SGI대리점] ${a.name}님, 보증보험 계약 만기가 도래합니다. 갱신 여부를 확인 부탁드립니다. ☎02-0000-0000`,
  '갱신완료':    (a) => `[SGI대리점] ${a.name}님, 보증보험 계약이 갱신 완료되었습니다. 감사합니다.`,
};

// ── 유틸리티 함수 ──
function today() {
  return new Date().toISOString().slice(0, 10);
}
function todayFmt() {
  return today().replace(/-/g, '');
}
function calcDday(endDate) {
  const now = new Date(); now.setHours(0,0,0,0);
  const end = new Date(endDate);
  return Math.round((end - now) / (1000 * 60 * 60 * 24));
}
function ddayBadge(diff) {
  if (diff < 0)  return `<span class="dday past">만기</span>`;
  if (diff === 0) return `<span class="dday danger">D-0</span>`;
  if (diff <= 30) return `<span class="dday danger">D-${diff}</span>`;
  if (diff <= 90) return `<span class="dday warn">D-${diff}</span>`;
  return `<span class="dday ok">D-${diff}</span>`;
}
function showToast(msg, type = 'info') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(t._to);
  t._to = setTimeout(() => t.classList.remove('show'), 3500);
}
function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function formatNum(n) {
  return Number(n || 0).toLocaleString();
}
function parseNum(s) {
  return parseInt(String(s).replace(/[^0-9]/g, '') || '0');
}

// ── 대리점 계정 관리 ──
const DEFAULT_AGENCIES = [
  { id: 'master', pw: 'master1234', name: '최상위 관리자', role: 'super' },
  { id: 'ag01', pw: 'sgi1234', name: '중앙대리점', role: 'agency' },
  { id: 'ag02', pw: 'sgi1234', name: '강남대리점', role: 'agency' }
];
function loadAgencies() {
  const data = localStorage.getItem('sgi_agencies');
  return data ? JSON.parse(data) : DEFAULT_AGENCIES;
}
function saveAgencies(arr) {
  localStorage.setItem('sgi_agencies', JSON.stringify(arr));
}
let agencies = loadAgencies();
