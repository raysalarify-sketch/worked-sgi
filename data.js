// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  SGI ?쒖슱蹂댁쬆蹂댄뿕 ?由ъ젏 愿由ъ떆?ㅽ뀥 ??怨듭쑀 ?곗씠??& ?좏떥由ы떚
//  data.js  (admin.html, apply.html ?먯꽌 怨듯넻 ?ъ슜)
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?? 
// ?? ?곹뭹 移댄깉濡쒓렇 ??????????????????????????????????????????
const SGI_PRODUCTS = [
  // ?? ?쇰컲怨꾩빟/怨듭궗 ??
  {
    id: 'gc01', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?뱥',
    name: '?낆같蹂댁쬆蹂댄뿕',
    desc: '?낆같 李멸??먭? ?숈같 ??怨꾩빟 泥닿껐???댄뻾?섏? ?딆쓣 寃쎌슦 諛쒖＜???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?낆같李멸??먭꺽?쒕쪟', '?멸컧利앸챸??],
    optDocs: ['?щТ?쒗몴', '?⑹꽭利앸챸??],
    addons: ['progress_tracker'],
    fields: [{k:'?낆같紐?,r:true},{k:'諛쒖＜湲곌?',r:true},{k:'?낆같湲덉븸',r:true},{k:'?낆같??,r:true}]
  },
  {
    id: 'gc02', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?뱷',
    name: '怨꾩빟蹂댁쬆蹂댄뿕',
    desc: '怨꾩빟?먭? 怨꾩빟 ?댁슜???댄뻾?섏? ?딆쓣 寃쎌슦 諛쒖＜???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '怨꾩빟??, '?멸컧利앸챸??],
    optDocs: ['?щТ?쒗몴', '?댄뻾?ㅼ쟻利앸챸??],
    addons: ['progress_tracker'],
    fields: [{k:'怨꾩빟嫄대챸',r:true},{k:'怨꾩빟湲덉븸',r:true},{k:'怨꾩빟湲곌컙',r:true},{k:'怨꾩빟?곷?諛?,r:true}]
  },
  {
    id: 'gc03', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?뮥',
    name: '?좉툑蹂댁쬆蹂댄뿕',
    desc: '?섍툒?몄씠 ?좉툑???ъ슜 紐⑹쟻??留욊쾶 ?ъ슜?섏? ?딆쓣 寃쎌슦 諛쒖＜???섍툒 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?꾧툒怨꾩빟??, '?좉툑?곸닔利?, '?멸컧利앸챸??],
    optDocs: ['?⑹꽭利앸챸??],
    addons: [],
    fields: [{k:'怨듭궗紐?,r:true},{k:'?좉툑湲덉븸',r:true},{k:'怨꾩빟湲곌컙',r:true},{k:'諛쒖＜泥?,r:true}]
  },
  {
    id: 'gc04', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?뵩',
    name: '?섏옄蹂댁쬆蹂댄뿕',
    desc: '怨듭궗 ?꾨즺 ???섏옄 諛쒖깮 ???꾧툒???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '以怨듯솗?몄꽌', '?꾧툒怨꾩빟??],
    optDocs: [],
    addons: [],
    fields: [{k:'怨듭궗紐?,r:true},{k:'以怨듦툑??,r:true},{k:'?섏옄蹂댁쬆湲곌컙',r:true},{k:'諛쒖＜泥?,r:true}]
  },
  {
    id: 'gc05', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?룧',
    name: '二쇳깮?섏옄蹂댁쬆蹂댄뿕',
    desc: '二쇳깮 遺꾩뼇쨌怨듦툒 ???섏옄 諛쒖깮 ???낆＜???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '二쇳깮嫄댁꽕?ъ뾽?먮벑濡앹쬆', '以怨듦??ы븘利?, '遺꾩뼇怨꾩빟??],
    optDocs: ['?섏옄蹂댁닔怨꾪쉷??],
    addons: [],
    fields: [{k:'?⑥?紐?,r:true},{k:'?몃???,r:true},{k:'以怨듭씪',r:true},{k:'?섏옄湲곌컙',r:true}]
  },
  {
    id: 'gc06', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?뮩',
    name: '吏湲됰낫利앸낫??,
    desc: '梨꾨Т?먭? 湲덉쟾 梨꾨Т瑜??댄뻾?섏? ?딆쓣 寃쎌슦 梨꾧텒???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '嫄곕옒?쎌젙??, '?멸컧利앸챸??],
    optDocs: ['?щТ?쒗몴'],
    addons: ['loan_calc'],
    fields: [{k:'梨꾨Т?먮챸',r:true},{k:'梨꾧텒?먮챸',r:true},{k:'梨꾨Т湲덉븸',r:true},{k:'?댄뻾湲고븳',r:true}]
  },
  {
    id: 'gc07', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?뱪',
    name: '?ㅺ퀎쨌媛먮━蹂댁쬆蹂댄뿕',
    desc: '?ㅺ퀎쨌媛먮━ ?⑹뿭??遺덉씠?됱뿉 ?곕Ⅸ 諛쒖＜???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?⑹뿭怨꾩빟??, '湲곗닠?ъ궗臾댁냼?깅줉利?, '?멸컧利앸챸??],
    optDocs: ['?⑹꽭利앸챸??],
    addons: ['progress_tracker'],
    fields: [{k:'?⑹뿭紐?,r:true},{k:'怨꾩빟湲덉븸',r:true},{k:'?⑹뿭湲곌컙',r:true},{k:'諛쒖＜泥?,r:true}]
  },
  {
    id: 'gc08', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?룛截?,
    name: '怨듭궗?댄뻾蹂댁쬆蹂댄뿕',
    desc: '?섍툒?몄씠 ?꾧툒怨꾩빟???섎Т瑜??댄뻾?섏? ?딆쓣 寃쎌슦 ?꾧툒???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?꾧툒怨꾩빟??, '?멸컧利앸챸??, '?щТ?쒗몴(理쒓렐2??'],
    optDocs: ['?⑹꽭利앸챸??, '怨듭궗?ㅼ쟻利앸챸??],
    addons: ['progress_tracker'],
    fields: [{k:'怨듭궗紐?,r:true},{k:'?꾧툒湲덉븸',r:true},{k:'怨듭궗湲곌컙',r:true},{k:'諛쒖＜泥?,r:true}]
  },
  {
    id: 'gc09', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?룫',
    name: '遺꾩뼇蹂댁쬆蹂댄뿕',
    desc: '遺꾩뼇?ъ뾽?먭? 遺꾩뼇?湲덉쓣 諛섑솚?섏? ?딆쓣 寃쎌슦 ?섎텇?묒옄 ?먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '遺꾩뼇怨꾪쉷??, '?좎??깃린遺?깅낯', '嫄댁텞?덇???, '?щТ?쒗몴'],
    optDocs: ['PF?뺤빟??, '遺꾩뼇怨꾩빟??],
    addons: ['unit_tracker'],
    fields: [{k:'遺꾩뼇?ъ뾽紐?,r:true},{k:'遺꾩뼇?몃???,r:true},{k:'珥앸텇?묎툑??,r:true},{k:'?쒗뻾??,r:true}]
  },
  {
    id: 'gc10', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?뱤',
    name: '留ㅼ텧梨꾧텒?좎슜蹂댄뿕',
    desc: '留ㅼ텧梨꾧텒 誘명쉶???꾪뿕??蹂댄뿕?쇰줈 蹂댁쟾?섎뒗 湲곗뾽 ?좎슜蹂댄뿕',
    docs: ['?ъ뾽?먮벑濡앹쬆', '嫄곕옒泥섏옣', '留ㅼ텧梨꾧텒?꾪솴', '?щТ?쒗몴'],
    optDocs: ['?⑹꽭利앸챸??],
    addons: [],
    fields: [{k:'蹂댄뿕??곴굅?섏쿂',r:true},{k:'留ㅼ텧梨꾧텒湲덉븸',r:true},{k:'蹂댄뿕湲곌컙',r:true},{k:'寃곗젣議곌굔',r:true}]
  },
  {
    id: 'gc11', cat: '?쇰컲怨꾩빟/怨듭궗', icon: '?쩃',
    name: '?곸깮?좎슜蹂댄뿕',
    desc: '?쨌以묒냼湲곗뾽 ?곸깮?묐젰???꾪븳 以묒냼湲곗뾽 ?좎슜蹂댄뿕',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?곸깮?묐젰?쎌젙??, '?щТ?쒗몴'],
    optDocs: ['?⑹꽭利앸챸??],
    addons: [],
    fields: [{k:'?湲곗뾽紐?,r:true},{k:'以묒냼湲곗뾽紐?,r:true},{k:'嫄곕옒湲덉븸',r:true},{k:'?묐젰湲곌컙',r:true}]
  },
 
  // ?? 痍⑥뾽/援먯쑁/蹂댄뿕?곸뾽 ??
  {
    id: 'ed01', cat: '痍⑥뾽/援먯쑁/蹂댄뿕?곸뾽', icon: '?뫀',
    name: '?좎썝蹂댁쬆蹂댄뿕',
    desc: '?쇱슜?먯쓽 遺덉꽦?ㅒ룸??뺥뻾?꾨줈 ?명븳 怨좎슜二??먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '怨좎슜怨꾩빟??, '?좎썝蹂댁쬆怨꾩빟??, '?ъ쭅利앸챸??],
    optDocs: ['?멸컧利앸챸??],
    addons: [],
    fields: [{k:'?쇱슜?먮챸',r:true},{k:'怨좎슜二쇰챸',r:true},{k:'吏곸쐞/吏곷Т',r:true},{k:'蹂댁쬆湲곌컙',r:true}]
  },
  {
    id: 'ed02', cat: '痍⑥뾽/援먯쑁/蹂댄뿕?곸뾽', icon: '?럳',
    name: '援먯쑁?덈젴鍮꾨낫利앸낫??,
    desc: '援먯쑁?덈젴湲곌????먯뾽 ?깆쑝濡?援먯쑁??以묐떒??寃쎌슦 ?덈젴鍮??섍툒 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '吏곸뾽?λ젰媛쒕컻?덈젴湲곌??몄젙??, '?덈젴怨꾪쉷??],
    optDocs: ['?щТ?쒗몴'],
    addons: [],
    fields: [{k:'?덈젴湲곌?紐?,r:true},{k:'?덈젴怨쇱젙紐?,r:true},{k:'?덈젴鍮꾩슜',r:true},{k:'?덈젴湲곌컙',r:true}]
  },
  {
    id: 'ed03', cat: '痍⑥뾽/援먯쑁/蹂댄뿕?곸뾽', icon: '?룜截?,
    name: '二쇳깮愿由ъ궗蹂댁쬆蹂댄뿕',
    desc: '二쇳깮愿由ъ궗???낅Т???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '二쇳깮愿由ъ궗?먭꺽利?, '愿由ш퀎?쎌꽌', '?멸컧利앸챸??],
    optDocs: [],
    addons: [],
    fields: [{k:'愿由ъ궗紐?,r:true},{k:'愿由щ떒吏紐?,r:true},{k:'愿由ъ꽭???,r:true},{k:'蹂댁쬆湲곌컙',r:true}]
  },
  {
    id: 'ed04', cat: '痍⑥뾽/援먯쑁/蹂댄뿕?곸뾽', icon: '?뱴',
    name: '吏湲됱떊?⑸낫???쇱씪?숈뒿)',
    desc: '?쇱씪?숈뒿吏 怨듦툒?먯쓽 ?湲?誘몄?湲????먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?숈뒿吏怨꾩빟??, '嫄곕옒?댁뿭??],
    optDocs: [],
    addons: [],
    fields: [{k:'怨듦툒?낆껜紐?,r:true},{k:'嫄곕옒泥섎챸',r:true},{k:'?붽났湲됯툑??,r:true},{k:'怨꾩빟湲곌컙',r:true}]
  },
 
  // ?? 二쇨굅/?꾨?/?앺솢 ??
  {
    id: 'ho01', cat: '二쇨굅/?꾨?/?앺솢', icon: '?룱',
    name: '?앺솢?덉젙?먭툑蹂댁쬆蹂댄뿕',
    desc: '?쒕? ?앺솢?덉젙???꾪븳 ?뚯븸 ?異?蹂댁쬆',
    docs: ['?좊텇利?, '?뚮뱷利앸튃?쒕쪟', '?ъ쭅利앸챸??],
    optDocs: ['嫄닿컯蹂댄뿕?⑸??뺤씤??],
    addons: ['loan_calc'],
    fields: [{k:'?좎껌?몃챸',r:true},{k:'?異쒓툑?듦린愿',r:true},{k:'?異쒓툑??,r:true},{k:'?異쒓린媛?,r:true}]
  },
  {
    id: 'ho02', cat: '二쇨굅/?꾨?/?앺솢', icon: '?뵎',
    name: '?꾩꽭湲덈낫?μ떊?⑸낫??,
    desc: '?꾩감?몄씠 ?꾩꽭怨꾩빟 醫낅즺 ???꾩꽭湲덉쓣 諛섑솚諛쏆? 紐삵븷 寃쎌슦 蹂댁쟾',
    docs: ['?꾨?李④퀎?쎌꽌', '?좊텇利?, '?꾩엯?몃??뺤씤??, '嫄대Ъ?깃린遺?깅낯'],
    optDocs: ['?뺤젙?쇱옄利앸챸'],
    addons: ['loan_calc', 'lease_manager'],
    fields: [{k:'?꾩감?몃챸',r:true},{k:'?꾨??몃챸',r:true},{k:'?꾨?二쇱냼',r:true},{k:'?꾩꽭湲덉븸',r:true}]
  },
  {
    id: 'ho03', cat: '二쇨굅/?꾨?/?앺솢', icon: '?룧',
    name: '?꾩꽭湲덈컲?섎낫利앸낫??,
    desc: '?꾨??몄씠 ?꾩꽭湲덉쓣 諛섑솚?섏? ?딆쓣 寃쎌슦 ?꾩감??蹂댁쟾',
    docs: ['?꾨?李④퀎?쎌꽌', '?좊텇利?, '嫄대Ъ?깃린遺?깅낯', '?꾨??ъ뾽?먮벑濡앹쬆'],
    optDocs: ['?뺤젙?쇱옄利앸챸', '?꾩엯?몃??뺤씤??],
    addons: ['loan_calc', 'lease_manager'],
    fields: [{k:'?꾩감?몃챸',r:true},{k:'?꾨??몃챸',r:true},{k:'?꾨?二쇱냼',r:true},{k:'?꾩꽭湲덉븸',r:true}]
  },
  {
    id: 'ho04', cat: '二쇨굅/?꾨?/?앺솢', icon: '?룛截?,
    name: '?꾨?二쇳깮蹂댁쬆蹂댄뿕',
    desc: '?꾨?二쇳깮?ъ뾽?먯쓽 ?꾨?蹂댁쬆湲?諛섑솚 ?섎Т 遺덉씠????蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?꾨??ъ뾽?먮벑濡앹쬆', '嫄대Ъ?깃린遺?깅낯', '?꾨?李④퀎?쎌꽌'],
    optDocs: [],
    addons: ['lease_manager'],
    fields: [{k:'?꾨??ъ뾽?먮챸',r:true},{k:'嫄대Ъ二쇱냼',r:true},{k:'?꾨??몃???,r:true},{k:'蹂댁쬆湲덉븸',r:true}]
  },
  {
    id: 'ho05', cat: '二쇨굅/?꾨?/?앺솢', icon: '?룵',
    name: '?곴?蹂댁쬆湲덈낫?μ떊?⑸낫??,
    desc: '?곴? ?꾩감?몄쓽 蹂댁쬆湲?誘몃컲???먰빐 蹂댁쟾',
    docs: ['?꾨?李④퀎?쎌꽌', '?ъ뾽?먮벑濡앹쬆', '嫄대Ъ?깃린遺?깅낯'],
    optDocs: ['?뺤젙?쇱옄利앸챸'],
    addons: ['lease_manager'],
    fields: [{k:'?꾩감?몃챸',r:true},{k:'?꾨??몃챸',r:true},{k:'?곴?二쇱냼',r:true},{k:'蹂댁쬆湲덉븸',r:true}]
  },
  {
    id: 'ho06', cat: '二쇨굅/?꾨?/?앺솢', icon: '?썳截?,
    name: '沅뚮━湲덈낫?몄떊?⑸낫??,
    desc: '?곴? ?꾩감?몄쓽 沅뚮━湲??뚯닔 諛⑺빐 ???먰빐 蹂댁쟾',
    docs: ['?꾨?李④퀎?쎌꽌', '?ъ뾽?먮벑濡앹쬆', '沅뚮━湲덇퀎?쎌꽌'],
    optDocs: ['?곸뾽?먮즺'],
    addons: [],
    fields: [{k:'?꾩감?몃챸',r:true},{k:'?곴?二쇱냼',r:true},{k:'沅뚮━湲덉븸',r:true},{k:'怨꾩빟湲곌컙',r:true}]
  },
  {
    id: 'ho07', cat: '二쇨굅/?꾨?/?앺솢', icon: '?룜截?,
    name: '?꾩꽭?꾨?二쇳깮?좎슜蹂댄뿕',
    desc: 'LH ??怨듦났湲곌? ?꾩꽭?꾨?二쇳깮??蹂댁쬆湲?諛섑솚 蹂댁쟾',
    docs: ['?꾨?李④퀎?쎌꽌', '?좊텇利?, '?꾩꽭?꾨?吏?먰솗?몄꽌'],
    optDocs: [],
    addons: ['lease_manager'],
    fields: [{k:'?꾩감?몃챸',r:true},{k:'二쇳깮二쇱냼',r:true},{k:'?꾩꽭湲덉븸',r:true},{k:'?꾨?湲곌?',r:true}]
  },
  {
    id: 'ho08', cat: '二쇨굅/?꾨?/?앺솢', icon: '?뮳',
    name: '媛쒖씤?ъ뾽?먭툑?듭떊?⑸낫??,
    desc: '媛쒖씤?ъ뾽?먯쓽 湲덉쑖湲곌? ?異??좎슜 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?щТ?쒗몴', '?뚮뱷湲덉븸利앸챸', '?멸컧利앸챸??],
    optDocs: ['?⑹꽭利앸챸??, '?대낫臾쇨굔?됯???],
    addons: ['loan_calc'],
    fields: [{k:'?ъ뾽?먮챸',r:true},{k:'?異쒓툑?듦린愿',r:true},{k:'?異쒓툑??,r:true},{k:'?異쒓린媛?,r:true}]
  },
  {
    id: 'ho09', cat: '二쇨굅/?꾨?/?앺솢', icon: '?뫀',
    name: '媛쒖씤湲덉쑖?좎슜蹂댄뿕',
    desc: '媛쒖씤??湲덉쑖湲곌? ?異쒖뿉 ????좎슜 蹂댁쟾',
    docs: ['?좊텇利?, '?뚮뱷利앸튃?쒕쪟', '?ъ쭅利앸챸??, '嫄닿컯蹂댄뿕?⑸??뺤씤??],
    optDocs: ['湲덉쑖嫄곕옒?뺤씤??],
    addons: ['loan_calc'],
    fields: [{k:'?좎껌?몃챸',r:true},{k:'?異쒓툑?듦린愿',r:true},{k:'?異쒓툑??,r:true},{k:'?異쒓린媛?,r:true}]
  },
  {
    id: 'ho10', cat: '二쇨굅/?꾨?/?앺솢', icon: '?룧',
    name: '紐④린吏蹂댄뿕(MI)',
    desc: '二쇳깮?대낫?異쒖쓽 李⑥＜ 梨꾨Т遺덉씠????湲덉쑖湲곌? ?먰빐 蹂댁쟾',
    docs: ['?좊텇利?, '遺?숈궛留ㅻℓ怨꾩빟??, '嫄대Ъ?깃린遺?깅낯', '?뚮뱷利앸튃?쒕쪟'],
    optDocs: ['媛먯젙?됯???],
    addons: ['loan_calc'],
    fields: [{k:'李⑥＜紐?,r:true},{k:'湲덉쑖湲곌?',r:true},{k:'?대낫二쇳깮二쇱냼',r:true},{k:'?異쒓툑??,r:true}]
  },
  {
    id: 'ho11', cat: '二쇨굅/?꾨?/?앺솢', icon: '?룱',
    name: 'Mortgage Credit Insurance(MCI)',
    desc: '吏묐떒 二쇳깮?대낫?異쒖뿉 ????좎슜蹂댄뿕',
    docs: ['?좊텇利?, '遺?숈궛?깃린遺?깅낯', '?뚮뱷利앸튃?쒕쪟', '?異쒖빟?뺤꽌'],
    optDocs: ['媛먯젙?됯???],
    addons: ['loan_calc'],
    fields: [{k:'李⑥＜紐?,r:true},{k:'湲덉쑖湲곌?',r:true},{k:'?대낫二쇳깮二쇱냼',r:true},{k:'?異쒓툑??,r:true}]
  },
 
  // ?? 怨듦났?됱젙/踰뺤썝/?명뿀媛 ??
  {
    id: 'pa01', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?룢截?,
    name: '?맞룻뿀媛蹂댁쬆蹂댄뿕(?먭꺽?깅줉)',
    desc: '?먭꺽 ?깅줉 ???붽뎄?섎뒗 蹂댁쬆 ?섎Т 遺덉씠???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?먭꺽?깅줉利?, '?멸컧利앸챸??],
    optDocs: [],
    addons: ['checklist'],
    fields: [{k:'?ъ뾽紐?,r:true},{k:'?덇?湲곌?',r:true},{k:'蹂댁쬆湲덉븸',r:true},{k:'?깅줉?좏슚湲곌컙',r:true}]
  },
  {
    id: 'pa02', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뱥',
    name: '?맞룻뿀媛蹂댁쬆蹂댄뿕(?곸뾽?깅줉)',
    desc: '?곸뾽 ?깅줉 議곌굔??遺덉씠?됱뿉 ?곕Ⅸ ?됱젙湲곌? ?먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?곸뾽?덇?利?, '?멸컧利앸챸??],
    optDocs: ['?ъ뾽怨꾪쉷??],
    addons: ['checklist'],
    fields: [{k:'?낆쥌紐?,r:true},{k:'?덇?愿泥?,r:true},{k:'蹂댁쬆湲덉븸',r:true},{k:'?곸뾽湲곌컙',r:true}]
  },
  {
    id: 'pa03', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뵪',
    name: '?맞룻뿀媛蹂댁쬆蹂댄뿕(?먯긽蹂듦뎄)',
    desc: '?명뿀媛 議곌굔???먯긽蹂듦뎄 ?섎Т 遺덉씠?????먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?명뿀媛利?, '?먯긽蹂듦뎄怨꾪쉷??, '?멸컧利앸챸??],
    optDocs: [],
    addons: ['checklist'],
    fields: [{k:'?ъ뾽紐?,r:true},{k:'?덇?湲곌?',r:true},{k:'?먯긽蹂듦뎄鍮?,r:true},{k:'?먯긽蹂듦뎄湲고븳',r:true}]
  },
  {
    id: 'pa04', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뫕',
    name: '?맞룻뿀媛蹂댁쬆蹂댄뿕(怨좎슜?덇?)',
    desc: '?멸뎅??怨좎슜?덇? 議곌굔 遺덉씠?????먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '怨좎슜?덇???, '?멸컧利앸챸??, '?⑹꽭利앸챸??],
    optDocs: ['?ъ쭅利앸챸??],
    addons: [],
    fields: [{k:'怨좎슜二쇰챸',r:true},{k:'愿?좉린愿',r:true},{k:'?멸뎅?멸렐濡쒖옄??,r:true},{k:'怨좎슜?덇?湲곌컙',r:true}]
  },
  {
    id: 'pa05', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뙻',
    name: '?맞룻뿀媛蹂댁쬆蹂댄뿕(怨꾩젅洹쇰줈)',
    desc: '怨꾩젅洹쇰줈??怨좎슜?덇? 愿???섎Т 遺덉씠???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '怨꾩젅洹쇰줈?덇???, '?멸컧利앸챸??],
    optDocs: [],
    addons: [],
    fields: [{k:'怨좎슜二쇰챸',r:true},{k:'愿?좉린愿',r:true},{k:'怨꾩젅洹쇰줈?먯닔',r:true},{k:'洹쇰줈湲곌컙',r:true}]
  },
  {
    id: 'pa06', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?㎨',
    name: '?⑹꽭蹂댁쬆蹂댄뿕',
    desc: '?⑹꽭?먭? ?멸툑???⑸??섏? ?딆쓣 寃쎌슦 ?몃Т???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?⑹꽭?좉퀬??, '?멸컧利앸챸??],
    optDocs: ['?щТ?쒗몴'],
    addons: [],
    fields: [{k:'?⑹꽭?섎Т??,r:true},{k:'?몃ぉ',r:true},{k:'?⑹꽭湲덉븸',r:true},{k:'?⑸?湲고븳',r:true}]
  },
  {
    id: 'pa07', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뽳툘',
    name: '怨듯긽蹂댁쬆蹂댄뿕',
    desc: '踰뺤썝 怨듯긽 ?섎Т瑜?蹂댄뿕?쇰줈 ?泥댄븯??蹂댁쬆',
    docs: ['?ъ뾽?먮벑濡앹쬆', '怨듯긽愿?⑦뙋寃곕Ц', '?멸컧利앸챸??],
    optDocs: [],
    addons: [],
    fields: [{k:'怨듯긽?먮챸',r:true},{k:'踰뺤썝紐?,r:true},{k:'怨듯긽湲덉븸',r:true},{k:'怨듯긽?ъ쑀',r:true}]
  },
  {
    id: 'pa08', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뵑',
    name: '蹂댁꽍蹂댁쬆蹂댄뿕',
    desc: '?뺤궗 ?쇱쓽?먃룻뵾怨좎씤??蹂댁꽍 議곌굔 ?댄뻾 蹂댁쬆',
    docs: ['?좊텇利?, '踰뺤썝蹂댁꽍?덇?寃곗젙臾?, '?멸컧利앸챸??],
    optDocs: ['?ъ궛利앸튃?쒕쪟'],
    addons: [],
    fields: [{k:'?쇰낫利앹씤紐?,r:true},{k:'踰뺤썝紐?,r:true},{k:'蹂댁쬆湲덉븸',r:true},{k:'蹂댁꽍湲곌컙',r:true}]
  },
  {
    id: 'pa09', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '??,
    name: '?좎썝蹂댁쬆蹂댄뿕',
    desc: '?좎썝踰뺤뿉 ?곕Ⅸ ?좊컯?뚯쑀?먯쓽 ?좎썝 愿???섎Т ?댄뻾 蹂댁쬆',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?좊컯?깅줉利?, '?좎썝紐낅?', '?멸컧利앸챸??],
    optDocs: ['?⑹꽭利앸챸??],
    addons: [],
    fields: [{k:'?좊컯?뚯쑀??,r:true},{k:'?좊컯紐?,r:true},{k:'?좎썝??,r:true},{k:'蹂댁쬆湲곌컙',r:true}]
  },
  {
    id: 'pa10', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뵏',
    name: '?뺣낫蹂댄샇蹂댁쬆蹂댄뿕',
    desc: '媛쒖씤?뺣낫 ?좎텧 ???뺣낫蹂댄샇 ?섎Т 遺덉씠?????먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?뺣낫蹂댄샇愿由ъ껜怨꾩씤利앹꽌(ISMS)', '?멸컧利앸챸??],
    optDocs: ['媛쒖씤?뺣낫泥섎━諛⑹묠'],
    addons: [],
    fields: [{k:'湲곗뾽紐?,r:true},{k:'痍④툒媛쒖씤?뺣낫??,r:true},{k:'蹂댁쬆湲덉븸',r:true},{k:'蹂댄뿕湲곌컙',r:true}]
  },
  {
    id: 'pa11', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뤇截?,
    name: '寃쎈ℓ蹂댁쬆蹂댄뿕',
    desc: '踰뺤썝 寃쎈ℓ ?낆같 蹂댁쬆湲????蹂댁쬆',
    docs: ['?좊텇利?, '踰뺤썝寃쎈ℓ?낆같怨듦퀬', '?멸컧利앸챸??],
    optDocs: ['?ъ궛利앸튃?쒕쪟'],
    addons: [],
    fields: [{k:'?낆같?먮챸',r:true},{k:'踰뺤썝紐?,r:true},{k:'?낆같湲덉븸',r:true},{k:'寃쎈ℓ湲곗씪',r:true}]
  },
  {
    id: 'pa12', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?뤇截?,
    name: '怨듬ℓ蹂댁쬆蹂댄뿕',
    desc: '怨듦났湲곌? 怨듬ℓ ?낆같 蹂댁쬆湲????蹂댁쬆',
    docs: ['?ъ뾽?먮벑濡앹쬆', '怨듬ℓ怨듦퀬臾?, '?멸컧利앸챸??],
    optDocs: [],
    addons: [],
    fields: [{k:'?낆같?먮챸',r:true},{k:'怨듬ℓ湲곌?',r:true},{k:'?낆같湲덉븸',r:true},{k:'怨듬ℓ湲곗씪',r:true}]
  },
  {
    id: 'pa13', cat: '怨듦났?됱젙/踰뺤썝/?명뿀媛', icon: '?럳',
    name: '吏湲됱떊?⑸낫???ν븰湲덉???',
    desc: '?ν븰湲?吏?먭린愿???ν븰湲?吏湲??섎Т 遺덉씠??蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?ν븰吏?먰삊?쎌꽌', '?щТ?쒗몴'],
    optDocs: [],
    addons: [],
    fields: [{k:'吏?먭린愿紐?,r:true},{k:'?섑삙?먯닔',r:true},{k:'吏?먭툑??,r:true},{k:'吏?먭린媛?,r:true}]
  },
 
  // ?? ?좏넻/?먮ℓ/?쇳븨 ??
  {
    id: 'rt01', cat: '?좏넻/?먮ℓ/?쇳븨', icon: '?벀',
    name: '臾쇳뭹?湲덈낫利앸낫??,
    desc: '臾쇳뭹 援щℓ?먯쓽 ?湲?誘몄?湲???怨듦툒???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '臾쇳뭹怨듦툒怨꾩빟??, '?멸툑怨꾩궛??],
    optDocs: ['?щТ?쒗몴'],
    addons: [],
    fields: [{k:'怨듦툒?먮챸',r:true},{k:'援щℓ?먮챸',r:true},{k:'臾쇳뭹紐?,r:true},{k:'怨꾩빟湲덉븸',r:true}]
  },
  {
    id: 'rt02', cat: '?좏넻/?먮ℓ/?쇳븨', icon: '?룵',
    name: '媛留뱀궗?낆옄蹂댁쬆蹂댄뿕',
    desc: '媛留뱀젏二쇱쓽 ?섎Т 遺덉씠????媛留밸낯遺 ?먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '媛留밴퀎?쎌꽌', '?멸컧利앸챸??],
    optDocs: ['?곸뾽?ㅼ쟻利앸챸'],
    addons: [],
    fields: [{k:'媛留뱀젏紐?,r:true},{k:'媛留밸낯遺紐?,r:true},{k:'蹂댁쬆湲덉븸',r:true},{k:'怨꾩빟湲곌컙',r:true}]
  },
  {
    id: 'rt03', cat: '?좏넻/?먮ℓ/?쇳븨', icon: '?룫',
    name: '媛留밸낯遺蹂댁쬆蹂댄뿕',
    desc: '媛留밸낯遺???섎Т 遺덉씠????媛留뱀젏二??먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '媛留밴퀎?쎌꽌', '?뺣낫怨듦컻??, '?щТ?쒗몴'],
    optDocs: ['?⑹꽭利앸챸??],
    addons: [],
    fields: [{k:'媛留밸낯遺紐?,r:true},{k:'媛留뱀젏??,r:true},{k:'蹂댁쬆湲덉븸',r:true},{k:'怨꾩빟湲곌컙',r:true}]
  },
  {
    id: 'rt04', cat: '?좏넻/?먮ℓ/?쇳븨', icon: '?썟',
    name: '?꾩옄?곴굅???쇳븨紐?',
    desc: '?꾩옄?곴굅???ъ뾽?먯쓽 ?뚮퉬???쇳빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?듭떊?먮ℓ?낆떊怨좎쬆', '?먯뒪?щ줈?댁슜?뺤씤??],
    optDocs: ['?щТ?쒗몴'],
    addons: [],
    fields: [{k:'?쇳븨紐곕챸',r:true},{k:'?ъ뾽?먮챸',r:true},{k:'?뷀룊洹좉굅?섏븸',r:true},{k:'蹂댄뿕湲곌컙',r:true}]
  },
 
  // ?? ?듭떊/寃곗젣/?뚰깉 ??
  {
    id: 'tc01', cat: '?듭떊/寃곗젣/?뚰깉', icon: '?뮩',
    name: '吏湲됱떊?⑸낫??移대뱶媛留뱀젏)',
    desc: '移대뱶媛留뱀젏???湲?誘몄?湲???VAN??룹뭅?쒖궗 ?먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '移대뱶媛留밴퀎?쎌꽌', '留ㅼ텧?먮즺'],
    optDocs: ['?щТ?쒗몴'],
    addons: [],
    fields: [{k:'媛留뱀젏紐?,r:true},{k:'移대뱶?щ챸',r:true},{k:'?붾ℓ異쒖븸',r:true},{k:'蹂댄뿕湲곌컙',r:true}]
  },
  {
    id: 'tc02', cat: '?듭떊/寃곗젣/?뚰깉', icon: '?봽',
    name: '?좊??좎슜蹂댄뿕',
    desc: '?좊? 援щℓ?먯쓽 ?湲?誘몃궔 ???먮ℓ???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '?좊??먮ℓ怨꾩빟??, '?щТ?쒗몴'],
    optDocs: [],
    addons: ['loan_calc'],
    fields: [{k:'?먮ℓ?먮챸',r:true},{k:'?곹뭹紐?,r:true},{k:'?좊?湲덉븸',r:true},{k:'?좊?湲곌컙',r:true}]
  },
  {
    id: 'tc03', cat: '?듭떊/寃곗젣/?뚰깉', icon: '?뱟',
    name: '遺꾪븷寃곗젣?좎슜蹂댄뿕',
    desc: '遺꾪븷寃곗젣 援щℓ?먯쓽 誘몃궔 ??怨듦툒???먰빐 蹂댁쟾',
    docs: ['?ъ뾽?먮벑濡앹쬆', '遺꾪븷寃곗젣怨꾩빟??],
    optDocs: ['?щТ?쒗몴'],
    addons: ['loan_calc'],
    fields: [{k:'怨듦툒?먮챸',r:true},{k:'援щℓ?먮챸',r:true},{k:'寃곗젣湲덉븸',r:true},{k:'遺꾪븷?잛닔',r:true}]
  },
];
 
// ?? 移댄뀒怨좊━ 紐⑸줉 ??
const SGI_CATEGORIES = [...new Set(SGI_PRODUCTS.map(p => p.cat))];
 
// ?? ?곹깭 留???
const STATUS_MAP = {
  '?묒닔?湲?:'b-wait','?쒕쪟寃??:'b-review','?뱀씤?꾨즺':'b-approved',
  '利앷텒諛쒗뻾':'b-issued','諛섎젮':'b-rejected','異붽??쒕쪟?붿껌':'b-extra'
};
const CONTRACT_STATUS_MAP = {
  '?쒖꽦':'b-active','留뚭린?꾨컯':'b-expiring','留뚭린':'b-expired',
  '?곗옣':'b-extended','?댁?':'b-terminated'
};
 
// ?? ?섑뵆 ?묒닔 ?곗씠????
const SAMPLE_APPLICATIONS = [
  { id:'A2024-0041', name:'(二??쒓뎅嫄댁꽕', contact:'010-1234-5678', productId:'gc08', product:'怨듭궗?댄뻾蹂댁쬆蹂댄뿕', amount:500000000, date:'2024-06-01', status:'?묒닔?湲?, docs:{'?ъ뾽?먮벑濡앹쬆':true,'?꾧툒怨꾩빟??:true,'?멸컧利앸챸??:false,'?щТ?쒗몴(理쒓렐2??':false}, memo:'' },
  { id:'A2024-0040', name:'??먭컻諛?二?', contact:'010-2345-6789', productId:'gc09', product:'遺꾩뼇蹂댁쬆蹂댄뿕', amount:2000000000, date:'2024-05-31', status:'?쒕쪟寃??, docs:{'?ъ뾽?먮벑濡앹쬆':true,'遺꾩뼇怨꾪쉷??:true,'?좎??깃린遺?깅낯':true,'嫄댁텞?덇???:false,'?щТ?쒗몴':false}, memo:'' },
  { id:'A2024-0039', name:'?댁젙??, contact:'010-3456-7890', productId:'ho03', product:'?꾩꽭湲덈컲?섎낫利앸낫??, amount:150000000, date:'2024-05-31', status:'?뱀씤?꾨즺', docs:{'?꾨?李④퀎?쎌꽌':true,'?좊텇利?:true,'嫄대Ъ?깃린遺?깅낯':true}, memo:'' },
  { id:'A2024-0038', name:'(二??ㅻ쭏?명뀒??, contact:'010-4567-8901', productId:'ho08', product:'媛쒖씤?ъ뾽?먭툑?듭떊?⑸낫??, amount:300000000, date:'2024-05-30', status:'利앷텒諛쒗뻾', docs:{'?ъ뾽?먮벑濡앹쬆':true,'?щТ?쒗몴':true,'?뚮뱷湲덉븸利앸챸':true,'?멸컧利앸챸??:true,'?⑹꽭利앸챸??:true}, memo:'' },
  { id:'A2024-0037', name:'泥?쭊臾쇱궛(二?', contact:'010-5678-9012', productId:'gc01', product:'?낆같蹂댁쬆蹂댄뿕', amount:50000000, date:'2024-05-30', status:'諛섎젮', docs:{'?ъ뾽?먮벑濡앹쬆':true,'?낆같李멸??먭꺽?쒕쪟':false}, memo:'?щТ?붽굔 誘몄땐議? },
  { id:'A2024-0036', name:'?쒕튆醫낇빀嫄댁꽕', contact:'010-6789-0123', productId:'gc04', product:'?섏옄蹂댁쬆蹂댄뿕', amount:80000000, date:'2024-05-29', status:'?쒕쪟寃??, docs:{'?ъ뾽?먮벑濡앹쬆':true,'以怨듯솗?몄꽌':true,'?꾧툒怨꾩빟??:false}, memo:'' },
  { id:'A2024-0035', name:'(二?肄붾━?꾨궔??, contact:'010-7890-1234', productId:'rt01', product:'臾쇳뭹?湲덈낫利앸낫??, amount:120000000, date:'2024-05-28', status:'?뱀씤?꾨즺', docs:{'?ъ뾽?먮벑濡앹쬆':true,'臾쇳뭹怨듦툒怨꾩빟??:true,'?멸툑怨꾩궛??:true}, memo:'' },
  { id:'A2024-0034', name:'誘몃옒遺?숈궛(二?', contact:'010-8901-2345', productId:'pa06', product:'?⑹꽭蹂댁쬆蹂댄뿕', amount:45000000, date:'2024-05-27', status:'?묒닔?湲?, docs:{'?ъ뾽?먮벑濡앹쬆':true,'?⑹꽭?좉퀬??:false,'?멸컧利앸챸??:false}, memo:'' },
  { id:'A2024-0033', name:'源泥좎닔', contact:'010-9012-3456', productId:'ho02', product:'?꾩꽭湲덈낫?μ떊?⑸낫??, amount:200000000, date:'2024-05-26', status:'?쒕쪟寃??, docs:{'?꾨?李④퀎?쎌꽌':true,'?좊텇利?:true,'?꾩엯?몃??뺤씤??:false,'嫄대Ъ?깃린遺?깅낯':true}, memo:'?뺤젙?쇱옄 ?뺤씤 ?꾩슂' },
  { id:'A2024-0032', name:'湲濡쒕쾶?듭떊(二?', contact:'010-0123-4567', productId:'tc01', product:'吏湲됱떊?⑸낫??移대뱶媛留뱀젏)', amount:30000000, date:'2024-05-25', status:'利앷텒諛쒗뻾', docs:{'?ъ뾽?먮벑濡앹쬆':true,'移대뱶媛留밴퀎?쎌꽌':true,'留ㅼ텧?먮즺':true}, memo:'' },
];
 
// ?? ?섑뵆 怨꾩빟 ?곗씠????
const SAMPLE_CONTRACTS = [
  { id:'C2024-001', appId:'A2024-0039', name:'?댁젙??, contact:'010-3456-7890', productId:'ho03', product:'?꾩꽭湲덈컲?섎낫利앸낫??, amount:150000000, startDate:'2024-01-15', endDate:'2025-01-14', status:'?쒖꽦', landlord:'諛뺤쿋??, landlordTel:'010-1111-2222', address:'?쒖슱??媛뺣궓援???궪??123-4', units:0, premiumPaid:true, memo:'', requests:[], loanInfo:{principal:130000000,rate:4.2,months:24,type:'?먮━湲덇퇏??} },
  { id:'C2024-002', appId:'A2024-0038', name:'(二??ㅻ쭏?명뀒??, contact:'010-4567-8901', productId:'ho08', product:'媛쒖씤?ъ뾽?먭툑?듭떊?⑸낫??, amount:300000000, startDate:'2024-02-01', endDate:'2024-07-31', status:'留뚭린?꾨컯', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:true, memo:'', requests:[], loanInfo:{principal:300000000,rate:5.2,months:6,type:'留뚭린?쇱떆?곹솚'} },
  { id:'C2024-003', appId:'A2024-0035', name:'(二?肄붾━?꾨궔??, contact:'010-7890-1234', productId:'rt01', product:'臾쇳뭹?湲덈낫利앸낫??, amount:120000000, startDate:'2024-03-01', endDate:'2024-08-31', status:'?쒖꽦', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:false, memo:'', requests:[], loanInfo:null },
  { id:'C2024-004', appId:null, name:'誘몃옒二쇳깮(二?', contact:'010-9999-8888', productId:'ho04', product:'?꾨?二쇳깮蹂댁쬆蹂댄뿕', amount:500000000, startDate:'2023-07-01', endDate:'2024-06-30', status:'留뚭린', landlord:'源?곹씗', landlordTel:'010-3333-4444', address:'?쒖슱??留덊룷援??⑹젙??77-2', units:5, premiumPaid:true, memo:'5?몃? 鍮뚮씪', requests:[{type:'媛깆떊?붿껌',date:'2024-05-20',note:'1??媛깆떊 ?붿껌'}], loanInfo:{principal:300000000,rate:3.8,months:24,type:'?먮━湲덇퇏??} },
  { id:'C2024-005', appId:null, name:'泥?슫嫄댁꽕(二?', contact:'010-1111-2222', productId:'gc08', product:'怨듭궗?댄뻾蹂댁쬆蹂댄뿕', amount:800000000, startDate:'2024-01-01', endDate:'2024-12-31', status:'?쒖꽦', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:true, memo:'?꾨줈怨듭궗 ?댄뻾', requests:[], loanInfo:null, progress:42 },
  { id:'C2024-006', appId:null, name:'?됰났?좏넻(二?', contact:'010-5555-6666', productId:'rt02', product:'媛留뱀궗?낆옄蹂댁쬆蹂댄뿕', amount:50000000, startDate:'2024-04-01', endDate:'2025-03-31', status:'?쒖꽦', landlord:'-', landlordTel:'-', address:'-', units:0, premiumPaid:true, memo:'', requests:[], loanInfo:null },
];
 
// ?? SMS ?쒗뵆由???
const SMS_TEMPLATES = {
  '?묒닔?꾨즺':    (a) => `[SGI?由ъ젏] ${a.name}?? ${a.product} ?좎껌???뺤긽 ?묒닔?섏뿀?듬땲?? ?쒕쪟 寃?????곕씫?쒕━寃좎뒿?덈떎. ??02-0000-0000`,
  '異붽??쒕쪟?붿껌': (a) => `[SGI?由ъ젏] ${a.name}?? ${a.product} 泥섎━瑜??꾪빐 異붽? ?쒕쪟 ?쒖텧???꾩슂?⑸땲?? ?대떦?먯뿉寃?臾몄쓽?댁＜?몄슂. ??02-0000-0000`,
  '?뱀씤?꾨즺':    (a) => `[SGI?由ъ젏] ${a.name}?? ${a.product} ?뱀씤???꾨즺?섏뿀?듬땲?? 利앷텒 諛쒗뻾 ?덈궡瑜??꾪빐 ?곕씫?쒕━寃좎뒿?덈떎.`,
  '利앷텒諛쒗뻾':    (a) => `[SGI?由ъ젏] ${a.name}?? 蹂댁쬆蹂댄뿕 利앷텒??諛쒗뻾?섏뿀?듬땲?? 利앷텒 ?섎졊 諛⑸쾿? ?대떦?먯뿉寃?臾몄쓽 諛붾엻?덈떎.`,
  '諛섎젮?덈궡':    (a) => `[SGI?由ъ젏] ${a.name}?? ${a.product} ?좎껌??諛섎젮?섏뿀?듬땲?? ?먯꽭???ъ쑀???대떦?먯뿉寃?臾몄쓽 諛붾엻?덈떎. ??02-0000-0000`,
  '留뚭린?덈궡':    (a) => `[SGI?由ъ젏] ${a.name}?? 蹂댁쬆蹂댄뿕 怨꾩빟 留뚭린媛 ?꾨옒?⑸땲?? 媛깆떊 ?щ?瑜??뺤씤 遺?곷뱶由쎈땲?? ??02-0000-0000`,
  '媛깆떊?꾨즺':    (a) => `[SGI?由ъ젏] ${a.name}?? 蹂댁쬆蹂댄뿕 怨꾩빟??媛깆떊 ?꾨즺?섏뿀?듬땲?? 媛먯궗?⑸땲??`,
};
 
// ?? ?좏떥由ы떚 ?⑥닔 ??
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
  if (diff < 0)  return `<span class="dday past">留뚭린</span>`;
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

// ── AGENCIES (MULTI-TENANT) ──
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
