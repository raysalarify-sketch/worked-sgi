// ═══════════════════════════════════════════════════════════
//  SGI 서울보증보험 대리점 관리시스템 — 공유 데이터 & 유틸리티
//  data.js  (admin.html, apply.html 에서 공통 사용)
// ═══════════════════════════════════════════════════════════
 
// ── 상품 카탈로그 ──────────────────────────────────────────
const SGI_PRODUCTS = [
  // ── 일반계약/공사 ──
  {
    id: 'gc01', cat: '일반계약/공사', icon: '📋',
    name: '입찰보증보험',
    desc: '입찰 참가자가 낙찰 후 계약 체결을 이행하지 않을 경우 발주자 손해 보전',
    docs: ['사업자등록증', '입찰참가자격서류', '인감증명서'],
    optDocs: ['재무제표', '납세증명서'],
    addons: ['progress_tracker'],
    fields: [{k:'입찰명',r:true},{k:'발주기관',r:true},{k:'입찰금액',r:true},{k:'입찰일',r:true}]
  },
  {
    id: 'gc02', cat: '일반계약/공사', icon: '📝',
    name: '계약보증보험',
    desc: '계약자가 계약 내용을 이행하지 않을 경우 발주자 손해 보전',
    docs: ['사업자등록증', '계약서', '인감증명서'],
    optDocs: ['재무제표', '이행실적증명서'],
    addons: ['progress_tracker'],
    fields: [{k:'계약건명',r:true},{k:'계약금액',r:true},{k:'계약기간',r:true},{k:'계약상대방',r:true}]
  },
  {
    id: 'gc03', cat: '일반계약/공사', icon: '💰',
    name: '선금보증보험',
    desc: '수급인이 선금을 사용 목적에 맞게 사용하지 않을 경우 발주자 환급 보전',
    docs: ['사업자등록증', '도급계약서', '선금영수증', '인감증명서'],
    optDocs: ['납세증명서'],
    addons: [],
    fields: [{k:'공사명',r:true},{k:'선금금액',r:true},{k:'계약기간',r:true},{k:'발주처',r:true}]
  },
  {
    id: 'gc04', cat: '일반계약/공사', icon: '🔧',
    name: '하자보증보험',
    desc: '공사 완료 후 하자 발생 시 도급인 손해 보전',
    docs: ['사업자등록증', '준공확인서', '도급계약서'],
    optDocs: [],
    addons: [],
    fields: [{k:'공사명',r:true},{k:'준공금액',r:true},{k:'하자보증기간',r:true},{k:'발주처',r:true}]
  },
  {
    id: 'gc05', cat: '일반계약/공사', icon: '🏠',
    name: '주택하자보증보험',
    desc: '주택 분양·공급 후 하자 발생 시 입주자 손해 보전',
    docs: ['사업자등록증', '주택건설사업자등록증', '준공검사필증', '분양계약서'],
    optDocs: ['하자보수계획서'],
    addons: [],
    fields: [{k:'단지명',r:true},{k:'세대수',r:true},{k:'준공일',r:true},{k:'하자기간',r:true}]
  },
  {
    id: 'gc06', cat: '일반계약/공사', icon: '💳',
    name: '지급보증보험',
    desc: '채무자가 금전 채무를 이행하지 않을 경우 채권자 손해 보전',
    docs: ['사업자등록증', '거래약정서', '인감증명서'],
    optDocs: ['재무제표'],
    addons: ['loan_calc'],
    fields: [{k:'채무자명',r:true},{k:'채권자명',r:true},{k:'채무금액',r:true},{k:'이행기한',r:true}]
  },
  {
    id: 'gc07', cat: '일반계약/공사', icon: '📐',
    name: '설계·감리보증보험',
    desc: '설계·감리 용역의 불이행에 따른 발주자 손해 보전',
    docs: ['사업자등록증', '용역계약서', '기술사사무소등록증', '인감증명서'],
    optDocs: ['납세증명서'],
    addons: ['progress_tracker'],
    fields: [{k:'용역명',r:true},{k:'계약금액',r:true},{k:'용역기간',r:true},{k:'발주처',r:true}]
  },
  {
    id: 'gc08', cat: '일반계약/공사', icon: '🏗️',
    name: '공사이행보증보험',
    desc: '수급인이 도급계약상 의무를 이행하지 않을 경우 도급인 손해 보전',
    docs: ['사업자등록증', '도급계약서', '인감증명서', '재무제표(최근2년)'],
    optDocs: ['납세증명서', '공사실적증명서'],
    addons: ['progress_tracker'],
    fields: [{k:'공사명',r:true},{k:'도급금액',r:true},{k:'공사기간',r:true},{k:'발주처',r:true}]
  },
  {
    id: 'gc09', cat: '일반계약/공사', icon: '🏢',
    name: '분양보증보험',
    desc: '분양사업자가 분양대금을 반환하지 않을 경우 수분양자 손해 보전',
    docs: ['사업자등록증', '분양계획서', '토지등기부등본', '건축허가서', '재무제표'],
    optDocs: ['PF확약서', '분양계약서'],
    addons: ['unit_tracker'],
    fields: [{k:'분양사업명',r:true},{k:'분양세대수',r:true},{k:'총분양금액',r:true},{k:'시행사',r:true}]
  },
  {
    id: 'gc10', cat: '일반계약/공사', icon: '📊',
    name: '매출채권신용보험',
    desc: '매출채권 미회수 위험을 보험으로 보전하는 기업 신용보험',
    docs: ['사업자등록증', '거래처장', '매출채권현황', '재무제표'],
    optDocs: ['납세증명서'],
    addons: [],
    fields: [{k:'보험대상거래처',r:true},{k:'매출채권금액',r:true},{k:'보험기간',r:true},{k:'결제조건',r:true}]
  },
  {
    id: 'gc11', cat: '일반계약/공사', icon: '🤝',
    name: '상생신용보험',
    desc: '대·중소기업 상생협력을 위한 중소기업 신용보험',
    docs: ['사업자등록증', '상생협력약정서', '재무제표'],
    optDocs: ['납세증명서'],
    addons: [],
    fields: [{k:'대기업명',r:true},{k:'중소기업명',r:true},{k:'거래금액',r:true},{k:'협력기간',r:true}]
  },
 
  // ── 취업/교육/보험영업 ──
  {
    id: 'ed01', cat: '취업/교육/보험영업', icon: '👤',
    name: '신원보증보험',
    desc: '피용자의 불성실·부정행위로 인한 고용주 손해 보전',
    docs: ['사업자등록증', '고용계약서', '신원보증계약서', '재직증명서'],
    optDocs: ['인감증명서'],
    addons: [],
    fields: [{k:'피용자명',r:true},{k:'고용주명',r:true},{k:'직위/직무',r:true},{k:'보증기간',r:true}]
  },
  {
    id: 'ed02', cat: '취업/교육/보험영업', icon: '🎓',
    name: '교육훈련비보증보험',
    desc: '교육훈련기관의 폐업 등으로 교육이 중단될 경우 훈련비 환급 보전',
    docs: ['사업자등록증', '직업능력개발훈련기관인정서', '훈련계획서'],
    optDocs: ['재무제표'],
    addons: [],
    fields: [{k:'훈련기관명',r:true},{k:'훈련과정명',r:true},{k:'훈련비용',r:true},{k:'훈련기간',r:true}]
  },
  {
    id: 'ed03', cat: '취업/교육/보험영업', icon: '🏘️',
    name: '주택관리사보증보험',
    desc: '주택관리사의 업무상 손해 보전',
    docs: ['사업자등록증', '주택관리사자격증', '관리계약서', '인감증명서'],
    optDocs: [],
    addons: [],
    fields: [{k:'관리사명',r:true},{k:'관리단지명',r:true},{k:'관리세대수',r:true},{k:'보증기간',r:true}]
  },
  {
    id: 'ed04', cat: '취업/교육/보험영업', icon: '📚',
    name: '지급신용보험(일일학습)',
    desc: '일일학습지 공급자의 대금 미지급 시 손해 보전',
    docs: ['사업자등록증', '학습지계약서', '거래내역서'],
    optDocs: [],
    addons: [],
    fields: [{k:'공급업체명',r:true},{k:'거래처명',r:true},{k:'월공급금액',r:true},{k:'계약기간',r:true}]
  },
 
  // ── 주거/임대/생활 ──
  {
    id: 'ho01', cat: '주거/임대/생활', icon: '🏦',
    name: '생활안정자금보증보험',
    desc: '서민 생활안정을 위한 소액 대출 보증',
    docs: ['신분증', '소득증빙서류', '재직증명서'],
    optDocs: ['건강보험납부확인서'],
    addons: ['loan_calc'],
    fields: [{k:'신청인명',r:true},{k:'대출금융기관',r:true},{k:'대출금액',r:true},{k:'대출기간',r:true}]
  },
  {
    id: 'ho02', cat: '주거/임대/생활', icon: '🔑',
    name: '전세금보장신용보험',
    desc: '임차인이 전세계약 종료 시 전세금을 반환받지 못할 경우 보전',
    docs: ['임대차계약서', '신분증', '전입세대확인서', '건물등기부등본'],
    optDocs: ['확정일자증명'],
    addons: ['loan_calc', 'lease_manager'],
    fields: [{k:'임차인명',r:true},{k:'임대인명',r:true},{k:'임대주소',r:true},{k:'전세금액',r:true}]
  },
  {
    id: 'ho03', cat: '주거/임대/생활', icon: '🏠',
    name: '전세금반환보증보험',
    desc: '임대인이 전세금을 반환하지 않을 경우 임차인 보전',
    docs: ['임대차계약서', '신분증', '건물등기부등본', '임대사업자등록증'],
    optDocs: ['확정일자증명', '전입세대확인서'],
    addons: ['loan_calc', 'lease_manager'],
    fields: [{k:'임차인명',r:true},{k:'임대인명',r:true},{k:'임대주소',r:true},{k:'전세금액',r:true}]
  },
  {
    id: 'ho04', cat: '주거/임대/생활', icon: '🏗️',
    name: '임대주택보증보험',
    desc: '임대주택사업자의 임대보증금 반환 의무 불이행 시 보전',
    docs: ['사업자등록증', '임대사업자등록증', '건물등기부등본', '임대차계약서'],
    optDocs: [],
    addons: ['lease_manager'],
    fields: [{k:'임대사업자명',r:true},{k:'건물주소',r:true},{k:'임대세대수',r:true},{k:'보증금액',r:true}]
  },
  {
    id: 'ho05', cat: '주거/임대/생활', icon: '🏪',
    name: '상가보증금보장신용보험',
    desc: '상가 임차인의 보증금 미반환 손해 보전',
    docs: ['임대차계약서', '사업자등록증', '건물등기부등본'],
    optDocs: ['확정일자증명'],
    addons: ['lease_manager'],
    fields: [{k:'임차인명',r:true},{k:'임대인명',r:true},{k:'상가주소',r:true},{k:'보증금액',r:true}]
  },
  {
    id: 'ho06', cat: '주거/임대/생활', icon: '🛡️',
    name: '권리금보호신용보험',
    desc: '상가 임차인의 권리금 회수 방해 시 손해 보전',
    docs: ['임대차계약서', '사업자등록증', '권리금계약서'],
    optDocs: ['영업자료'],
    addons: [],
    fields: [{k:'임차인명',r:true},{k:'상가주소',r:true},{k:'권리금액',r:true},{k:'계약기간',r:true}]
  },
  {
    id: 'ho07', cat: '주거/임대/생활', icon: '🏘️',
    name: '전세임대주택신용보험',
    desc: 'LH 등 공공기관 전세임대주택의 보증금 반환 보전',
    docs: ['임대차계약서', '신분증', '전세임대지원확인서'],
    optDocs: [],
    addons: ['lease_manager'],
    fields: [{k:'임차인명',r:true},{k:'주택주소',r:true},{k:'전세금액',r:true},{k:'임대기관',r:true}]
  },
  {
    id: 'ho08', cat: '주거/임대/생활', icon: '💼',
    name: '개인사업자금융신용보험',
    desc: '개인사업자의 금융기관 대출 신용 보전',
    docs: ['사업자등록증', '재무제표', '소득금액증명', '인감증명서'],
    optDocs: ['납세증명서', '담보물건평가서'],
    addons: ['loan_calc'],
    fields: [{k:'사업자명',r:true},{k:'대출금융기관',r:true},{k:'대출금액',r:true},{k:'대출기간',r:true}]
  },
  {
    id: 'ho09', cat: '주거/임대/생활', icon: '👤',
    name: '개인금융신용보험',
    desc: '개인의 금융기관 대출에 대한 신용 보전',
    docs: ['신분증', '소득증빙서류', '재직증명서', '건강보험납부확인서'],
    optDocs: ['금융거래확인서'],
    addons: ['loan_calc'],
    fields: [{k:'신청인명',r:true},{k:'대출금융기관',r:true},{k:'대출금액',r:true},{k:'대출기간',r:true}]
  },
  {
    id: 'ho10', cat: '주거/임대/생활', icon: '🏠',
    name: '모기지보험(MI)',
    desc: '주택담보대출의 차주 채무불이행 시 금융기관 손해 보전',
    docs: ['신분증', '부동산매매계약서', '건물등기부등본', '소득증빙서류'],
    optDocs: ['감정평가서'],
    addons: ['loan_calc'],
    fields: [{k:'차주명',r:true},{k:'금융기관',r:true},{k:'담보주택주소',r:true},{k:'대출금액',r:true}]
  },
  {
    id: 'ho11', cat: '주거/임대/생활', icon: '🏦',
    name: 'Mortgage Credit Insurance(MCI)',
    desc: '집단 주택담보대출에 대한 신용보험',
    docs: ['신분증', '부동산등기부등본', '소득증빙서류', '대출약정서'],
    optDocs: ['감정평가서'],
    addons: ['loan_calc'],
    fields: [{k:'차주명',r:true},{k:'금융기관',r:true},{k:'담보주택주소',r:true},{k:'대출금액',r:true}]
  },
 
  // ── 공공행정/법원/인허가 ──
  {
    id: 'pa01', cat: '공공행정/법원/인허가', icon: '🏛️',
    name: '인·허가보증보험(자격등록)',
    desc: '자격 등록 시 요구되는 보증 의무 불이행 손해 보전',
    docs: ['사업자등록증', '자격등록증', '인감증명서'],
    optDocs: [],
    addons: ['checklist'],
    fields: [{k:'사업명',r:true},{k:'허가기관',r:true},{k:'보증금액',r:true},{k:'등록유효기간',r:true}]
  },
  {
    id: 'pa02', cat: '공공행정/법원/인허가', icon: '📋',
    name: '인·허가보증보험(영업등록)',
    desc: '영업 등록 조건의 불이행에 따른 행정기관 손해 보전',
    docs: ['사업자등록증', '영업허가증', '인감증명서'],
    optDocs: ['사업계획서'],
    addons: ['checklist'],
    fields: [{k:'업종명',r:true},{k:'허가관청',r:true},{k:'보증금액',r:true},{k:'영업기간',r:true}]
  },
  {
    id: 'pa03', cat: '공공행정/법원/인허가', icon: '🔨',
    name: '인·허가보증보험(원상복구)',
    desc: '인허가 조건인 원상복구 의무 불이행 시 손해 보전',
    docs: ['사업자등록증', '인허가증', '원상복구계획서', '인감증명서'],
    optDocs: [],
    addons: ['checklist'],
    fields: [{k:'사업명',r:true},{k:'허가기관',r:true},{k:'원상복구비',r:true},{k:'원상복구기한',r:true}]
  },
  {
    id: 'pa04', cat: '공공행정/법원/인허가', icon: '👷',
    name: '인·허가보증보험(고용허가)',
    desc: '외국인 고용허가 조건 불이행 시 손해 보전',
    docs: ['사업자등록증', '고용허가서', '인감증명서', '납세증명서'],
    optDocs: ['재직증명서'],
    addons: [],
    fields: [{k:'고용주명',r:true},{k:'관할기관',r:true},{k:'외국인근로자수',r:true},{k:'고용허가기간',r:true}]
  },
  {
    id: 'pa05', cat: '공공행정/법원/인허가', icon: '🌾',
    name: '인·허가보증보험(계절근로)',
    desc: '계절근로자 고용허가 관련 의무 불이행 손해 보전',
    docs: ['사업자등록증', '계절근로허가서', '인감증명서'],
    optDocs: [],
    addons: [],
    fields: [{k:'고용주명',r:true},{k:'관할기관',r:true},{k:'계절근로자수',r:true},{k:'근로기간',r:true}]
  },
  {
    id: 'pa06', cat: '공공행정/법원/인허가', icon: '🧾',
    name: '납세보증보험',
    desc: '납세자가 세금을 납부하지 않을 경우 세무서 손해 보전',
    docs: ['사업자등록증', '납세신고서', '인감증명서'],
    optDocs: ['재무제표'],
    addons: [],
    fields: [{k:'납세의무자',r:true},{k:'세목',r:true},{k:'납세금액',r:true},{k:'납부기한',r:true}]
  },
  {
    id: 'pa07', cat: '공공행정/법원/인허가', icon: '⚖️',
    name: '공탁보증보험',
    desc: '법원 공탁 의무를 보험으로 대체하는 보증',
    docs: ['사업자등록증', '공탁관련판결문', '인감증명서'],
    optDocs: [],
    addons: [],
    fields: [{k:'공탁자명',r:true},{k:'법원명',r:true},{k:'공탁금액',r:true},{k:'공탁사유',r:true}]
  },
  {
    id: 'pa08', cat: '공공행정/법원/인허가', icon: '🔓',
    name: '보석보증보험',
    desc: '형사 피의자·피고인의 보석 조건 이행 보증',
    docs: ['신분증', '법원보석허가결정문', '인감증명서'],
    optDocs: ['재산증빙서류'],
    addons: [],
    fields: [{k:'피보증인명',r:true},{k:'법원명',r:true},{k:'보증금액',r:true},{k:'보석기간',r:true}]
  },
  {
    id: 'pa09', cat: '공공행정/법원/인허가', icon: '⚓',
    name: '선원보증보험',
    desc: '선원법에 따른 선박소유자의 선원 관련 의무 이행 보증',
    docs: ['사업자등록증', '선박등록증', '선원명부', '인감증명서'],
    optDocs: ['납세증명서'],
    addons: [],
    fields: [{k:'선박소유자',r:true},{k:'선박명',r:true},{k:'선원수',r:true},{k:'보증기간',r:true}]
  },
  {
    id: 'pa10', cat: '공공행정/법원/인허가', icon: '🔒',
    name: '정보보호보증보험',
    desc: '개인정보 유출 등 정보보호 의무 불이행 시 손해 보전',
    docs: ['사업자등록증', '정보보호관리체계인증서(ISMS)', '인감증명서'],
    optDocs: ['개인정보처리방침'],
    addons: [],
    fields: [{k:'기업명',r:true},{k:'취급개인정보수',r:true},{k:'보증금액',r:true},{k:'보험기간',r:true}]
  },
  {
    id: 'pa11', cat: '공공행정/법원/인허가', icon: '🏷️',
    name: '경매보증보험',
    desc: '법원 경매 입찰 보증금 대납 보증',
    docs: ['신분증', '법원경매입찰공고', '인감증명서'],
    optDocs: ['재산증빙서류'],
    addons: [],
    fields: [{k:'입찰자명',r:true},{k:'법원명',r:true},{k:'입찰금액',r:true},{k:'경매기일',r:true}]
  },
  {
    id: 'pa12', cat: '공공행정/법원/인허가', icon: '🏷️',
    name: '공매보증보험',
    desc: '공공기관 공매 입찰 보증금 대납 보증',
    docs: ['사업자등록증', '공매공고문', '인감증명서'],
    optDocs: [],
    addons: [],
    fields: [{k:'입찰자명',r:true},{k:'공매기관',r:true},{k:'입찰금액',r:true},{k:'공매기일',r:true}]
  },
  {
    id: 'pa13', cat: '공공행정/법원/인허가', icon: '🎓',
    name: '지급신용보험(장학금지원)',
    desc: '장학금 지원기관의 장학금 지급 의무 불이행 보전',
    docs: ['사업자등록증', '장학지원협약서', '재무제표'],
    optDocs: [],
    addons: [],
    fields: [{k:'지원기관명',r:true},{k:'수혜자수',r:true},{k:'지원금액',r:true},{k:'지원기간',r:true}]
  },
 
  // ── 유통/판매/쇼핑 ──
  {
    id: 'rt01', cat: '유통/판매/쇼핑', icon: '📦',
    name: '물품대금보증보험',
    desc: '물품 구매자의 대금 미지급 시 공급자 손해 보전',
    docs: ['사업자등록증', '물품공급계약서', '세금계산서'],
    optDocs: ['재무제표'],
    addons: [],
    fields: [{k:'공급자명',r:true},{k:'구매자명',r:true},{k:'물품명',r:true},{k:'계약금액',r:true}]
  },
  {
    id: 'rt02', cat: '유통/판매/쇼핑', icon: '🏪',
    name: '가맹사업자보증보험',
    desc: '가맹점주의 의무 불이행 시 가맹본부 손해 보전',
    docs: ['사업자등록증', '가맹계약서', '인감증명서'],
    optDocs: ['영업실적증명'],
    addons: [],
    fields: [{k:'가맹점명',r:true},{k:'가맹본부명',r:true},{k:'보증금액',r:true},{k:'계약기간',r:true}]
  },
  {
    id: 'rt03', cat: '유통/판매/쇼핑', icon: '🏢',
    name: '가맹본부보증보험',
    desc: '가맹본부의 의무 불이행 시 가맹점주 손해 보전',
    docs: ['사업자등록증', '가맹계약서', '정보공개서', '재무제표'],
    optDocs: ['납세증명서'],
    addons: [],
    fields: [{k:'가맹본부명',r:true},{k:'가맹점수',r:true},{k:'보증금액',r:true},{k:'계약기간',r:true}]
  },
  {
    id: 'rt04', cat: '유통/판매/쇼핑', icon: '🛒',
    name: '전자상거래(쇼핑몰)',
    desc: '전자상거래 사업자의 소비자 피해 보전',
    docs: ['사업자등록증', '통신판매업신고증', '에스크로이용확인서'],
    optDocs: ['재무제표'],
    addons: [],
    fields: [{k:'쇼핑몰명',r:true},{k:'사업자명',r:true},{k:'월평균거래액',r:true},{k:'보험기간',r:true}]
  },
 
  // ── 통신/결제/렌탈 ──
  {
    id: 'tc01', cat: '통신/결제/렌탈', icon: '💳',
    name: '지급신용보험(카드가맹점)',
    desc: '카드가맹점의 대금 미지급 시 VAN사·카드사 손해 보전',
    docs: ['사업자등록증', '카드가맹계약서', '매출자료'],
    optDocs: ['재무제표'],
    addons: [],
    fields: [{k:'가맹점명',r:true},{k:'카드사명',r:true},{k:'월매출액',r:true},{k:'보험기간',r:true}]
  },
  {
    id: 'tc02', cat: '통신/결제/렌탈', icon: '🔄',
    name: '할부신용보험',
    desc: '할부 구매자의 대금 미납 시 판매자 손해 보전',
    docs: ['사업자등록증', '할부판매계약서', '재무제표'],
    optDocs: [],
    addons: ['loan_calc'],
    fields: [{k:'판매자명',r:true},{k:'상품명',r:true},{k:'할부금액',r:true},{k:'할부기간',r:true}]
  },
  {
    id: 'tc03', cat: '통신/결제/렌탈', icon: '📅',
    name: '분할결제신용보험',
    desc: '분할결제 구매자의 미납 시 공급자 손해 보전',
    docs: ['사업자등록증', '분할결제계약서'],
    optDocs: ['재무제표'],
    addons: ['loan_calc'],
    fields: [{k:'공급자명',r:true},{k:'구매자명',r:true},{k:'결제금액',r:true},{k:'분할횟수',r:true}]
  },
];
 
// ── 카테고리 목록 ──
const SGI_CATEGORIES = [...new Set(SGI_PRODUCTS.map(p => p.cat))];
 
// ── 상태 맵 ──
const STATUS_MAP = {
  '접수대기':'b-wait','서류검토':'b-review','승인완료':'b-approved',
  '증권발행':'b-issued','반려':'b-rejected','추가서류요청':'b-extra'
};
const CONTRACT_STATUS_MAP = {
  '활성':'b-active','만기임박':'b-expiring','만기':'b-expired',
  '연장':'b-extended','해지':'b-terminated'
};
 
// ── 샘플 접수 데이터 ──
const SAMPLE_APPLICATIONS = [
  { id:'A2024-0041', name:'(주)한국건설', contact:'010-1234-5678', productId:'gc08', product:'공사이행보증보험', amount:500000000, date:'2024-06-01', status:'접수대기', docs:{'사업자등록증':true,'도급계약서':true,'인감증명서':false,'재무제표(최근2년)':false}, memo:'' },
  { id:'A2024-0040', name:'대원개발(주)', contact:'010-2345-6789', productId:'gc09', product:'분양보증보험', amount:2000000000, date:'2024-05-31', status:'서류검토', docs:{'사업자등록증':true,'분양계획서':true,'토지등기부등본':true,'건축허가서':false,'재무제표':false}, memo:'' },
  { id:'A2024-0039', name:'이정호', contact:'010-3456-7890', productId:'ho03', product:'전세금반환보증보험', amount:150000000, date:'2024-05-31', status:'승인완료', docs:{'임대차계약서':true,'신분증':true,'건물등기부등본':true}, memo:'' },
  { id:'A2024-0038', name:'(주)스마트테크', contact:'010-4567-8901', productId:'ho08', product:'개인사업자금융신용보험', amount:300000000, date:'2024-05-30', status:'증권발행', docs:{'사업자등록증':true,'재무제표':true,'소득금액증명':true,'인감증명서':true,'납세증명서':true}, memo:'' },
  { id:'A2024-0037', name:'청진물산(주)', contact:'010-5678-9012', productId:'gc01', product:'입찰보증보험', amount:50000000, date:'2024-05-30', status:'반려', docs:{'사업자등록증':true,'입찰참가자격서류':false}, memo:'재무요건 미충족' },
  { id:'A2024-0036', name:'한빛종합건설', contact:'010-6789-0123', productId:'gc04', product:'하자보증보험', amount:80000000, date:'2024-05-29', status:'서류검토', docs:{'사업자등록증':true,'준공확인서':true,'도급계약서':false}, memo:'' },
  { id:'A2024-0035', name:'(주)코리아납품', contact:'010-7890-1234', productId:'rt01', product:'물품대금보증보험', amount:120000000, date:'2024-05-28', status:'승인완료', docs:{'사업자등록증':true,'물품공급계약서':true,'세금계산서':true}, memo:'' },
  { id:'A2024-0034', name:'미래부동산(주)', contact:'010-8901-2345', productId:'pa06', product:'납세보증보험', amount:45000000, date:'2024-05-27', status:'접수대기', docs:{'사업자등록증':true,'납세신고서':false,'인감증명서':false}, memo:'' },
  { id:'A2024-0033', name:'김철수', contact:'010-9012-3456', productId:'ho02', product:'전세금보장신용보험', amount:200000000, date:'2024-05-26', status:'서류검토', docs:{'임대차계약서':true,'신분증':true,'전입세대확인서':false,'건물등기부등본':true}, memo:'확정일자 확인 필요' },
  { id:'A2024-0032', name:'글로벌통신(주)', contact:'010-0123-4567', productId:'tc01', product:'지급신용보험(카드가맹점)', amount:30000000, date:'2024-05-25', status:'증권발행', docs:{'사업자등록증':true,'카드가맹계약서':true,'매출자료':true}, memo:'' },
];
 
// ── 샘플 계약 데이터 ──
const SAMPLE_CONTRACTS = [
  { id:'C2024-001', appId:'A2024-0039', name:'이정호', contact:'010-3456-7890', productId:'ho03', product:'전세금반환보증보험', amount:150000000, startDate:'2024-01-15', endDate:'2025-01-14', status:'활성', landlord:'박철수', landlordTel:'010-1111-2222', address:'서울시 강남구 역삼동 123-4', units:0, premiumPaid:true, memo:'', requests:[], loanInfo:{principal:130000000,rate:4.2,months:24,type:'원리금균등'} },
  { id:'C2024-002', appId:'A2024-0038', name:'(주)스마트테크', contact:'010-4567-8901', productId:'ho08', product:'개인사업자금융신용보험', amount:300000000, startDate:'2024-02-01', endDate:'2024-07-31', status:'만기임박', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:true, memo:'', requests:[], loanInfo:{principal:300000000,rate:5.2,months:6,type:'만기일시상환'} },
  { id:'C2024-003', appId:'A2024-0035', name:'(주)코리아납품', contact:'010-7890-1234', productId:'rt01', product:'물품대금보증보험', amount:120000000, startDate:'2024-03-01', endDate:'2024-08-31', status:'활성', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:false, memo:'', requests:[], loanInfo:null },
  { id:'C2024-004', appId:null, name:'미래주택(주)', contact:'010-9999-8888', productId:'ho04', product:'임대주택보증보험', amount:500000000, startDate:'2023-07-01', endDate:'2024-06-30', status:'만기', landlord:'김영희', landlordTel:'010-3333-4444', address:'서울시 마포구 합정동 77-2', units:5, premiumPaid:true, memo:'5세대 빌라', requests:[{type:'갱신요청',date:'2024-05-20',note:'1년 갱신 요청'}], loanInfo:{principal:300000000,rate:3.8,months:24,type:'원리금균등'} },
  { id:'C2024-005', appId:null, name:'청운건설(주)', contact:'010-1111-2222', productId:'gc08', product:'공사이행보증보험', amount:800000000, startDate:'2024-01-01', endDate:'2024-12-31', status:'활성', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:true, memo:'도로공사 이행', requests:[], loanInfo:null, progress:42 },
  { id:'C2024-006', appId:null, name:'행복유통(주)', contact:'010-5555-6666', productId:'rt02', product:'가맹사업자보증보험', amount:50000000, startDate:'2024-04-01', endDate:'2025-03-31', status:'활성', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:true, memo:'', requests:[], loanInfo:null },
];
 
// ── SMS 템플릿 ──
const SMS_TEMPLATES = {
  '접수완료':    (a) => `[SGI대리점] ${a.name}님, ${a.product} 신청이 정상 접수되었습니다. 서류 검토 후 연락드리겠습니다. ☎ 02-0000-0000`,
  '추가서류요청': (a) => `[SGI대리점] ${a.name}님, ${a.product} 처리를 위해 추가 서류 제출이 필요합니다. 담당자에게 문의해주세요. ☎ 02-0000-0000`,
  '승인완료':    (a) => `[SGI대리점] ${a.name}님, ${a.product} 승인이 완료되었습니다. 증권 발행 안내를 위해 연락드리겠습니다.`,
  '증권발행':    (a) => `[SGI대리점] ${a.name}님, 보증보험 증권이 발행되었습니다. 증권 수령 방법은 담당자에게 문의 바랍니다.`,
  '반려안내':    (a) => `[SGI대리점] ${a.name}님, ${a.product} 신청이 반려되었습니다. 자세한 사유는 담당자에게 문의 바랍니다. ☎ 02-0000-0000`,
  '만기안내':    (a) => `[SGI대리점] ${a.name}님, 보증보험 계약 만기가 도래합니다. 갱신 여부를 확인 부탁드립니다. ☎ 02-0000-0000`,
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
