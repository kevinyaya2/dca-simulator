const toeicVocabData = [
  {
    "word": "streamline",
    "partOfSpeech": "v",
    "meaning": "簡化；使效率更高",
    "category": "strategy",
    "level": 750
  },
  {
    "word": "restructuring",
    "partOfSpeech": "n",
    "meaning": "改組；轉型",
    "category": "strategy",
    "level": 800
  },
  {
    "word": "oversight",
    "partOfSpeech": "n",
    "meaning": "監督；疏忽(雙重含義)",
    "category": "strategy",
    "level": 750
  },
  {
    "word": "synergy",
    "partOfSpeech": "n",
    "meaning": "綜效；協同作用",
    "category": "strategy",
    "level": 800
  },
  {
    "word": "pivot",
    "partOfSpeech": "v",
    "meaning": "轉向；圍繞...中心旋轉",
    "category": "strategy",
    "level": 800
  },
  {
    "word": "diversify",
    "partOfSpeech": "v",
    "meaning": "多角化經營；多樣化",
    "category": "strategy",
    "level": 750
  },
  {
    "word": "feasibility",
    "partOfSpeech": "n",
    "meaning": "可行性",
    "category": "strategy",
    "level": 750
  },
  {
    "word": "solvency",
    "partOfSpeech": "n",
    "meaning": "償付能力",
    "category": "finance",
    "level": 800
  },
  {
    "word": "audit",
    "partOfSpeech": "v",
    "meaning": "審計；查帳",
    "category": "finance",
    "level": 750
  },
  {
    "word": "indemnify",
    "partOfSpeech": "v",
    "meaning": "保障；賠償",
    "category": "finance",
    "level": 800
  },
  {
    "word": "clause",
    "partOfSpeech": "n",
    "meaning": "條款",
    "category": "legal",
    "level": 750
  },
  {
    "word": "breach",
    "partOfSpeech": "n",
    "meaning": "違約；違反",
    "category": "legal",
    "level": 750
  },
  {
    "word": "liable",
    "partOfSpeech": "adj",
    "meaning": "負有法律責任的",
    "category": "legal",
    "level": 750
  },
  {
    "word": "stringent",
    "partOfSpeech": "adj",
    "meaning": "嚴格的；嚴厲的",
    "category": "legal",
    "level": 800
  },
  {
    "word": "niche",
    "partOfSpeech": "n",
    "meaning": "利基(市場)；合適的位置",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "monopolize",
    "partOfSpeech": "v",
    "meaning": "壟斷",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "saturated",
    "partOfSpeech": "adj",
    "meaning": "飽和的",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "obsolete",
    "partOfSpeech": "adj",
    "meaning": "過時的；淘汰的",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "incentive",
    "partOfSpeech": "n",
    "meaning": "獎勵；誘因",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "unprecedented",
    "partOfSpeech": "adj",
    "meaning": "史無前例的",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "provisional",
    "partOfSpeech": "adj",
    "meaning": "臨時的；暫定的",
    "category": "hr",
    "level": 750
  },
  {
    "word": "delegate",
    "partOfSpeech": "v",
    "meaning": "委派；授權",
    "category": "hr",
    "level": 700
  },
  {
    "word": "probation",
    "partOfSpeech": "n",
    "meaning": "試用期",
    "category": "hr",
    "level": 750
  },
  {
    "word": "appraisal",
    "partOfSpeech": "n",
    "meaning": "績效考核；評價",
    "category": "hr",
    "level": 750
  },
  {
    "word": "credentials",
    "partOfSpeech": "n",
    "meaning": "資歷；證書",
    "category": "hr",
    "level": 750
  },
  {
    "word": "reimburse",
    "partOfSpeech": "v",
    "meaning": "報銷；償還",
    "category": "hr",
    "level": 750
  },
  {
    "word": "expedite",
    "partOfSpeech": "v",
    "meaning": "加快(進度/發貨)",
    "category": "operations",
    "level": 750
  },
  {
    "word": "inventory",
    "partOfSpeech": "n",
    "meaning": "庫存；盤點",
    "category": "operations",
    "level": 750
  },
  {
    "word": "discrepancy",
    "partOfSpeech": "n",
    "meaning": "差異；不一致",
    "category": "operations",
    "level": 800
  },
  {
    "word": "meticulous",
    "partOfSpeech": "adj",
    "meaning": "一絲不苟的；細心的",
    "category": "operations",
    "level": 800
  },
  {
    "word": "contingency",
    "partOfSpeech": "n",
    "meaning": "應變計劃；偶發事件",
    "category": "operations",
    "level": 800
  },
  {
    "word": "specification",
    "partOfSpeech": "n",
    "meaning": "規格；詳述",
    "category": "operations",
    "level": 800
  },
  {
    "word": "adjourn",
    "partOfSpeech": "v",
    "meaning": "（會議）休會；延期",
    "category": "hr",
    "level": 800
  },
  {
    "word": "tenure",
    "partOfSpeech": "n",
    "meaning": "任期；終身職位",
    "category": "hr",
    "level": 800
  },
  {
    "word": "liaison",
    "partOfSpeech": "n",
    "meaning": "聯絡人；聯絡",
    "category": "hr",
    "level": 800
  },
  {
    "word": "prerequisite",
    "partOfSpeech": "n",
    "meaning": "先決條件；前提",
    "category": "hr",
    "level": 800
  },
  {
    "word": "severance",
    "partOfSpeech": "n",
    "meaning": "遣散費；斷絕關係",
    "category": "hr",
    "level": 800
  },
  {
    "word": "interim",
    "partOfSpeech": "adj",
    "meaning": "過渡期的；暫時的",
    "category": "hr",
    "level": 750
  },
  {
    "word": "nominee",
    "partOfSpeech": "n",
    "meaning": "被提名人",
    "category": "hr",
    "level": 800
  },
  {
    "word": "dividend",
    "partOfSpeech": "n",
    "meaning": "紅利；股息",
    "category": "finance",
    "level": 750
  },
  {
    "word": "fluctuation",
    "partOfSpeech": "n",
    "meaning": "波動；變動",
    "category": "finance",
    "level": 800
  },
  {
    "word": "premium",
    "partOfSpeech": "n",
    "meaning": "保險費；加價；優質的",
    "category": "finance",
    "level": 750
  },
  {
    "word": "fiscal",
    "partOfSpeech": "adj",
    "meaning": "財政的；會計的",
    "category": "finance",
    "level": 800
  },
  {
    "word": "mortgage",
    "partOfSpeech": "n",
    "meaning": "抵押貸款",
    "category": "finance",
    "level": 800
  },
  {
    "word": "default",
    "partOfSpeech": "v",
    "meaning": "違約；拖欠（債務）",
    "category": "finance",
    "level": 750
  },
  {
    "word": "speculative",
    "partOfSpeech": "adj",
    "meaning": "投機的；推測的",
    "category": "finance",
    "level": 800
  },
  {
    "word": "waive",
    "partOfSpeech": "v",
    "meaning": "放棄（權利、限制）",
    "category": "legal",
    "level": 800
  },
  {
    "word": "litigation",
    "partOfSpeech": "n",
    "meaning": "訴訟",
    "category": "legal",
    "level": 800
  },
  {
    "word": "stipulate",
    "partOfSpeech": "v",
    "meaning": "明訂；規定",
    "category": "legal",
    "level": 800
  },
  {
    "word": "validity",
    "partOfSpeech": "n",
    "meaning": "有效性；效力",
    "category": "legal",
    "level": 800
  },
  {
    "word": "infringement",
    "partOfSpeech": "n",
    "meaning": "侵權；違背",
    "category": "legal",
    "level": 850
  },
  {
    "word": "affidavit",
    "partOfSpeech": "n",
    "meaning": "宣誓書",
    "category": "legal",
    "level": 850
  },
  {
    "word": "scrutinize",
    "partOfSpeech": "v",
    "meaning": "詳細檢查；細讀",
    "category": "operations",
    "level": 800
  },
  {
    "word": "defective",
    "partOfSpeech": "adj",
    "meaning": "有瑕疵的",
    "category": "operations",
    "level": 750
  },
  {
    "word": "standardization",
    "partOfSpeech": "n",
    "meaning": "標準化",
    "category": "operations",
    "level": 800
  },
  {
    "word": "redundant",
    "partOfSpeech": "adj",
    "meaning": "多餘的；被裁員的",
    "category": "operations",
    "level": 800
  },
  {
    "word": "outsource",
    "partOfSpeech": "v",
    "meaning": "委外；外包",
    "category": "operations",
    "level": 750
  },
  {
    "word": "rectify",
    "partOfSpeech": "v",
    "meaning": "糾正；修復",
    "category": "operations",
    "level": 800
  },
  {
    "word": "versatile",
    "partOfSpeech": "adj",
    "meaning": "多功能的；多才多藝的",
    "category": "general",
    "level": 750
  },
  {
    "word": "prestigious",
    "partOfSpeech": "adj",
    "meaning": "聲望高的；名門的",
    "category": "general",
    "level": 800
  },
  {
    "word": "prominent",
    "partOfSpeech": "adj",
    "meaning": "卓越的；顯著的",
    "category": "general",
    "level": 750
  },
  {
    "word": "unanimous",
    "partOfSpeech": "adj",
    "meaning": "全體一致的",
    "category": "general",
    "level": 800
  },
  {
    "word": "imperative",
    "partOfSpeech": "adj",
    "meaning": "極重要的；命令式的",
    "category": "general",
    "level": 800
  },
  {
    "word": "noteworthy",
    "partOfSpeech": "adj",
    "meaning": "值得注意的",
    "category": "general",
    "level": 750
  },
  {
    "word": "procurement",
    "partOfSpeech": "n",
    "meaning": "採購；取得",
    "category": "operations",
    "level": 800
  },
  {
    "word": "consignment",
    "partOfSpeech": "n",
    "meaning": "寄售；委託貨物",
    "category": "operations",
    "level": 850
  },
  {
    "word": "surplus",
    "partOfSpeech": "n",
    "meaning": "剩餘；盈餘；過剩",
    "category": "operations",
    "level": 750
  },
  {
    "word": "deficiency",
    "partOfSpeech": "n",
    "meaning": "不足；缺陷",
    "category": "operations",
    "level": 800
  },
  {
    "word": "batch",
    "partOfSpeech": "n",
    "meaning": "一批；一組",
    "category": "operations",
    "level": 700
  },
  {
    "word": "fragile",
    "partOfSpeech": "adj",
    "meaning": "易碎的；脆弱的",
    "category": "operations",
    "level": 700
  },
  {
    "word": "premises",
    "partOfSpeech": "n",
    "meaning": "營業場所；辦公地點",
    "category": "operations",
    "level": 800
  },
  {
    "word": "lease",
    "partOfSpeech": "v",
    "meaning": "租賃；租約",
    "category": "operations",
    "level": 750
  },
  {
    "word": "renovation",
    "partOfSpeech": "n",
    "meaning": "整修；翻新",
    "category": "operations",
    "level": 800
  },
  {
    "word": "amenity",
    "partOfSpeech": "n",
    "meaning": "便利設施（如飯店泳池）",
    "category": "operations",
    "level": 800
  },
  {
    "word": "zoning",
    "partOfSpeech": "n",
    "meaning": "都市分區規劃",
    "category": "operations",
    "level": 850
  },
  {
    "word": "landlord",
    "partOfSpeech": "n",
    "meaning": "房東",
    "category": "operations",
    "level": 750
  },
  {
    "word": "demolish",
    "partOfSpeech": "v",
    "meaning": "拆除；破壞",
    "category": "operations",
    "level": 800
  },
  {
    "word": "depreciation",
    "partOfSpeech": "n",
    "meaning": "折舊；貶值",
    "category": "finance",
    "level": 800
  },
  {
    "word": "portfolio",
    "partOfSpeech": "n",
    "meaning": "投資組合；作品集",
    "category": "finance",
    "level": 800
  },
  {
    "word": "liability",
    "partOfSpeech": "n",
    "meaning": "責任；債務",
    "category": "finance",
    "level": 750
  },
  {
    "word": "reimbursement",
    "partOfSpeech": "n",
    "meaning": "費用報銷",
    "category": "finance",
    "level": 800
  },
  {
    "word": "actuary",
    "partOfSpeech": "n",
    "meaning": "保險精算師",
    "category": "finance",
    "level": 850
  },
  {
    "word": "exemption",
    "partOfSpeech": "n",
    "meaning": "免除；扣除額",
    "category": "finance",
    "level": 800
  },
  {
    "word": "arbitration",
    "partOfSpeech": "n",
    "meaning": "仲裁",
    "category": "legal",
    "level": 850
  },
  {
    "word": "compliance",
    "partOfSpeech": "n",
    "meaning": "合規；順從",
    "category": "legal",
    "level": 800
  },
  {
    "word": "nullify",
    "partOfSpeech": "v",
    "meaning": "使無效；廢止",
    "category": "legal",
    "level": 850
  },
  {
    "word": "attrition",
    "partOfSpeech": "n",
    "meaning": "人員流失（自然裁員）",
    "category": "hr",
    "level": 850
  },
  {
    "word": "vacancy",
    "partOfSpeech": "n",
    "meaning": "空缺",
    "category": "hr",
    "level": 750
  },
  {
    "word": "pension",
    "partOfSpeech": "n",
    "meaning": "退休金",
    "category": "hr",
    "level": 750
  },
  {
    "word": "remuneration",
    "partOfSpeech": "n",
    "meaning": "報酬；酬勞",
    "category": "hr",
    "level": 800
  },
  {
    "word": "tentative",
    "partOfSpeech": "adj",
    "meaning": "暫定的；猶豫的",
    "category": "general",
    "level": 750
  },
  {
    "word": "subsequently",
    "partOfSpeech": "adv",
    "meaning": "隨後地",
    "category": "general",
    "level": 800
  },
  {
    "word": "incidentally",
    "partOfSpeech": "adv",
    "meaning": "順帶一提地",
    "category": "general",
    "level": 800
  },
  {
    "word": "itinerary",
    "partOfSpeech": "n",
    "meaning": "行程表",
    "category": "travel",
    "level": 750
  },
  {
    "word": "concierge",
    "partOfSpeech": "n",
    "meaning": "服務台人員；門房",
    "category": "travel",
    "level": 800
  },
  {
    "word": "beverage",
    "partOfSpeech": "n",
    "meaning": "飲料",
    "category": "travel",
    "level": 700
  },
  {
    "word": "venue",
    "partOfSpeech": "n",
    "meaning": "場地；地點",
    "category": "travel",
    "level": 750
  },
  {
    "word": "complimentary",
    "partOfSpeech": "adj",
    "meaning": "贈送的；免費的",
    "category": "travel",
    "level": 750
  },
  {
    "word": "confirmation",
    "partOfSpeech": "n",
    "meaning": "確認函",
    "category": "travel",
    "level": 750
  },
  {
    "word": "acquisition",
    "partOfSpeech": "n",
    "meaning": "收購；併購",
    "category": "business",
    "level": 850
  },
  {
    "word": "benchmark",
    "partOfSpeech": "n",
    "meaning": "基準；標準",
    "category": "business",
    "level": 800
  },
  {
    "word": "consolidate",
    "partOfSpeech": "v",
    "meaning": "整合；鞏固",
    "category": "business",
    "level": 800
  },
  {
    "word": "disruptive",
    "partOfSpeech": "adj",
    "meaning": "顛覆性的",
    "category": "business",
    "level": 850
  },
  {
    "word": "entrepreneurial",
    "partOfSpeech": "adj",
    "meaning": "企業家的",
    "category": "business",
    "level": 800
  },
  {
    "word": "franchise",
    "partOfSpeech": "n",
    "meaning": "特許經營權",
    "category": "business",
    "level": 750
  },
  {
    "word": "infrastructure",
    "partOfSpeech": "n",
    "meaning": "基礎設施",
    "category": "business",
    "level": 750
  },
  {
    "word": "leverage",
    "partOfSpeech": "v",
    "meaning": "利用；槓桿",
    "category": "business",
    "level": 800
  },
  {
    "word": "merger",
    "partOfSpeech": "n",
    "meaning": "合併",
    "category": "business",
    "level": 800
  },
  {
    "word": "optimize",
    "partOfSpeech": "v",
    "meaning": "優化",
    "category": "business",
    "level": 750
  },
  {
    "word": "partnership",
    "partOfSpeech": "n",
    "meaning": "夥伴關係",
    "category": "business",
    "level": 750
  },
  {
    "word": "recession",
    "partOfSpeech": "n",
    "meaning": "經濟衰退",
    "category": "business",
    "level": 800
  },
  {
    "word": "stakeholder",
    "partOfSpeech": "n",
    "meaning": "利益相關者",
    "category": "business",
    "level": 800
  },
  {
    "word": "turnover",
    "partOfSpeech": "n",
    "meaning": "營業額；人員流動率",
    "category": "business",
    "level": 750
  },
  {
    "word": "venture",
    "partOfSpeech": "n",
    "meaning": "風險投資",
    "category": "business",
    "level": 750
  },
  {
    "word": "workforce",
    "partOfSpeech": "n",
    "meaning": "勞動力",
    "category": "business",
    "level": 750
  },
  {
    "word": "yield",
    "partOfSpeech": "n",
    "meaning": "收益率",
    "category": "business",
    "level": 800
  },
  {
    "word": "zonal",
    "partOfSpeech": "adj",
    "meaning": "區域的",
    "category": "business",
    "level": 750
  },
  {
    "word": "amortization",
    "partOfSpeech": "n",
    "meaning": "攤銷",
    "category": "finance",
    "level": 850
  },
  {
    "word": "arbitrage",
    "partOfSpeech": "n",
    "meaning": "套利",
    "category": "finance",
    "level": 850
  },
  {
    "word": "bond",
    "partOfSpeech": "n",
    "meaning": "債券",
    "category": "finance",
    "level": 800
  },
  {
    "word": "capitalization",
    "partOfSpeech": "n",
    "meaning": "資本化",
    "category": "finance",
    "level": 850
  },
  {
    "word": "collateral",
    "partOfSpeech": "n",
    "meaning": "抵押品",
    "category": "finance",
    "level": 800
  },
  {
    "word": "commodity",
    "partOfSpeech": "n",
    "meaning": "商品",
    "category": "finance",
    "level": 750
  },
  {
    "word": "derivative",
    "partOfSpeech": "n",
    "meaning": "衍生性金融商品",
    "category": "finance",
    "level": 850
  },
  {
    "word": "equity",
    "partOfSpeech": "n",
    "meaning": "股權",
    "category": "finance",
    "level": 800
  },
  {
    "word": "hedge",
    "partOfSpeech": "v",
    "meaning": "避險",
    "category": "finance",
    "level": 850
  },
  {
    "word": "inflation",
    "partOfSpeech": "n",
    "meaning": "通貨膨脹",
    "category": "finance",
    "level": 800
  },
  {
    "word": "liquidity",
    "partOfSpeech": "n",
    "meaning": "流動性",
    "category": "finance",
    "level": 800
  },
  {
    "word": "maturity",
    "partOfSpeech": "n",
    "meaning": "到期",
    "category": "finance",
    "level": 800
  },
  {
    "word": "nominal",
    "partOfSpeech": "adj",
    "meaning": "名義上的",
    "category": "finance",
    "level": 800
  },
  {
    "word": "securities",
    "partOfSpeech": "n",
    "meaning": "證券",
    "category": "finance",
    "level": 800
  },
  {
    "word": "speculation",
    "partOfSpeech": "n",
    "meaning": "投機",
    "category": "finance",
    "level": 800
  },
  {
    "word": "valuation",
    "partOfSpeech": "n",
    "meaning": "估值",
    "category": "finance",
    "level": 850
  },
  {
    "word": "warrant",
    "partOfSpeech": "n",
    "meaning": "認股權證",
    "category": "finance",
    "level": 850
  },
  {
    "word": "benchmarking",
    "partOfSpeech": "n",
    "meaning": "基準測試",
    "category": "hr",
    "level": 800
  },
  {
    "word": "compensation",
    "partOfSpeech": "n",
    "meaning": "補償；薪酬",
    "category": "hr",
    "level": 750
  },
  {
    "word": "disciplinary",
    "partOfSpeech": "adj",
    "meaning": "紀律的",
    "category": "hr",
    "level": 800
  },
  {
    "word": "eligibility",
    "partOfSpeech": "n",
    "meaning": "資格",
    "category": "hr",
    "level": 750
  },
  {
    "word": "grievance",
    "partOfSpeech": "n",
    "meaning": "不滿；申訴",
    "category": "hr",
    "level": 800
  },
  {
    "word": "hierarchy",
    "partOfSpeech": "n",
    "meaning": "階層制度",
    "category": "hr",
    "level": 750
  },
  {
    "word": "job",
    "partOfSpeech": "n",
    "meaning": "工作描述",
    "category": "hr",
    "level": 700
  },
  {
    "word": "mentorship",
    "partOfSpeech": "n",
    "meaning": "指導關係",
    "category": "hr",
    "level": 800
  },
  {
    "word": "negotiation",
    "partOfSpeech": "n",
    "meaning": "談判",
    "category": "hr",
    "level": 750
  },
  {
    "word": "orientation",
    "partOfSpeech": "n",
    "meaning": "入職訓練",
    "category": "hr",
    "level": 750
  },
  {
    "word": "performance",
    "partOfSpeech": "n",
    "meaning": "績效",
    "category": "hr",
    "level": 750
  },
  {
    "word": "recruitment",
    "partOfSpeech": "n",
    "meaning": "招聘",
    "category": "hr",
    "level": 750
  },
  {
    "word": "retention",
    "partOfSpeech": "n",
    "meaning": "留任",
    "category": "hr",
    "level": 800
  },
  {
    "word": "talent",
    "partOfSpeech": "n",
    "meaning": "人才",
    "category": "hr",
    "level": 750
  },
  {
    "word": "workplace",
    "partOfSpeech": "n",
    "meaning": "工作場所",
    "category": "hr",
    "level": 700
  },
  {
    "word": "cargo",
    "partOfSpeech": "n",
    "meaning": "貨物",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "customs",
    "partOfSpeech": "n",
    "meaning": "海關",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "delivery",
    "partOfSpeech": "n",
    "meaning": "交付",
    "category": "logistics",
    "level": 700
  },
  {
    "word": "dispatch",
    "partOfSpeech": "v",
    "meaning": "派遣；發送",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "freight",
    "partOfSpeech": "n",
    "meaning": "貨運",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "haulage",
    "partOfSpeech": "n",
    "meaning": "運輸",
    "category": "logistics",
    "level": 800
  },
  {
    "word": "logistics",
    "partOfSpeech": "n",
    "meaning": "物流",
    "category": "logistics",
    "level": 800
  },
  {
    "word": "manifest",
    "partOfSpeech": "n",
    "meaning": "貨單",
    "category": "logistics",
    "level": 800
  },
  {
    "word": "overseas",
    "partOfSpeech": "adj",
    "meaning": "海外的",
    "category": "logistics",
    "level": 700
  },
  {
    "word": "packaging",
    "partOfSpeech": "n",
    "meaning": "包裝",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "port",
    "partOfSpeech": "n",
    "meaning": "港口",
    "category": "logistics",
    "level": 700
  },
  {
    "word": "routing",
    "partOfSpeech": "n",
    "meaning": "路線規劃",
    "category": "logistics",
    "level": 800
  },
  {
    "word": "shipment",
    "partOfSpeech": "n",
    "meaning": "貨運",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "supplier",
    "partOfSpeech": "n",
    "meaning": "供應商",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "tracking",
    "partOfSpeech": "n",
    "meaning": "追蹤",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "warehouse",
    "partOfSpeech": "n",
    "meaning": "倉庫",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "advertising",
    "partOfSpeech": "n",
    "meaning": "廣告",
    "category": "marketing",
    "level": 700
  },
  {
    "word": "branding",
    "partOfSpeech": "n",
    "meaning": "品牌建立",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "campaign",
    "partOfSpeech": "n",
    "meaning": "行銷活動",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "consumer",
    "partOfSpeech": "n",
    "meaning": "消費者",
    "category": "marketing",
    "level": 700
  },
  {
    "word": "demographics",
    "partOfSpeech": "n",
    "meaning": "人口統計",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "endorsement",
    "partOfSpeech": "n",
    "meaning": "代言",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "exposure",
    "partOfSpeech": "n",
    "meaning": "曝光",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "launch",
    "partOfSpeech": "v",
    "meaning": "推出",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "market",
    "partOfSpeech": "n",
    "meaning": "市場",
    "category": "marketing",
    "level": 700
  },
  {
    "word": "penetration",
    "partOfSpeech": "n",
    "meaning": "市場滲透",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "promotion",
    "partOfSpeech": "n",
    "meaning": "促銷",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "publicity",
    "partOfSpeech": "n",
    "meaning": "公關",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "segmentation",
    "partOfSpeech": "n",
    "meaning": "市場區隔",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "sponsorship",
    "partOfSpeech": "n",
    "meaning": "贊助",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "target",
    "partOfSpeech": "v",
    "meaning": "針對",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "trademark",
    "partOfSpeech": "n",
    "meaning": "商標",
    "category": "marketing",
    "level": 750
  },
  {
    "word": "viral",
    "partOfSpeech": "adj",
    "meaning": "病毒式的",
    "category": "marketing",
    "level": 800
  },
  {
    "word": "agenda",
    "partOfSpeech": "n",
    "meaning": "議程",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "attendance",
    "partOfSpeech": "n",
    "meaning": "出席",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "briefing",
    "partOfSpeech": "n",
    "meaning": "簡報",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "chairperson",
    "partOfSpeech": "n",
    "meaning": "主席",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "consensus",
    "partOfSpeech": "n",
    "meaning": "共識",
    "category": "meetings",
    "level": 800
  },
  {
    "word": "facilitate",
    "partOfSpeech": "v",
    "meaning": "促進；主持",
    "category": "meetings",
    "level": 800
  },
  {
    "word": "facilitator",
    "partOfSpeech": "n",
    "meaning": "主持人",
    "category": "meetings",
    "level": 800
  },
  {
    "word": "minutes",
    "partOfSpeech": "n",
    "meaning": "會議記錄",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "moderator",
    "partOfSpeech": "n",
    "meaning": "主持人",
    "category": "meetings",
    "level": 800
  },
  {
    "word": "presentation",
    "partOfSpeech": "n",
    "meaning": "簡報",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "protocol",
    "partOfSpeech": "n",
    "meaning": "議定書；規範",
    "category": "meetings",
    "level": 800
  },
  {
    "word": "quarterly",
    "partOfSpeech": "adj",
    "meaning": "每季的",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "resolution",
    "partOfSpeech": "n",
    "meaning": "決議",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "summarize",
    "partOfSpeech": "v",
    "meaning": "總結",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "webinar",
    "partOfSpeech": "n",
    "meaning": "網路研討會",
    "category": "meetings",
    "level": 800
  },
  {
    "word": "scalability",
    "partOfSpeech": "n",
    "meaning": "可擴展性",
    "category": "business",
    "level": 800
  },
  {
    "word": "profitability",
    "partOfSpeech": "n",
    "meaning": "獲利能力",
    "category": "business",
    "level": 750
  },
  {
    "word": "marketplace",
    "partOfSpeech": "n",
    "meaning": "市場平台",
    "category": "business",
    "level": 750
  },
  {
    "word": "competitive",
    "partOfSpeech": "adj",
    "meaning": "具競爭力的",
    "category": "business",
    "level": 700
  },
  {
    "word": "sustainability",
    "partOfSpeech": "n",
    "meaning": "永續性",
    "category": "business",
    "level": 800
  },
  {
    "word": "expansion",
    "partOfSpeech": "n",
    "meaning": "擴張；擴展",
    "category": "business",
    "level": 700
  },
  {
    "word": "viability",
    "partOfSpeech": "n",
    "meaning": "可行性；存活能力",
    "category": "business",
    "level": 800
  },
  {
    "word": "governance",
    "partOfSpeech": "n",
    "meaning": "公司治理",
    "category": "business",
    "level": 850
  },
  {
    "word": "alignment",
    "partOfSpeech": "n",
    "meaning": "一致性；對齊",
    "category": "business",
    "level": 750
  },
  {
    "word": "execution",
    "partOfSpeech": "n",
    "meaning": "執行；實施",
    "category": "business",
    "level": 750
  },
  {
    "word": "cashflow",
    "partOfSpeech": "n",
    "meaning": "現金流",
    "category": "finance",
    "level": 750
  },
  {
    "word": "interest",
    "partOfSpeech": "n",
    "meaning": "利息",
    "category": "finance",
    "level": 700
  },
  {
    "word": "liquidate",
    "partOfSpeech": "v",
    "meaning": "清算",
    "category": "finance",
    "level": 800
  },
  {
    "word": "capital",
    "partOfSpeech": "n",
    "meaning": "資本",
    "category": "finance",
    "level": 700
  },
  {
    "word": "insolvency",
    "partOfSpeech": "n",
    "meaning": "無償付能力",
    "category": "finance",
    "level": 850
  },
  {
    "word": "allocation",
    "partOfSpeech": "n",
    "meaning": "資源分配",
    "category": "finance",
    "level": 750
  },
  {
    "word": "diversification",
    "partOfSpeech": "n",
    "meaning": "分散投資",
    "category": "finance",
    "level": 800
  },
  {
    "word": "overhead",
    "partOfSpeech": "n",
    "meaning": "營運成本；管理費用",
    "category": "finance",
    "level": 800
  },
  {
    "word": "onboarding",
    "partOfSpeech": "n",
    "meaning": "新人入職流程",
    "category": "hr",
    "level": 750
  },
  {
    "word": "workload",
    "partOfSpeech": "n",
    "meaning": "工作量",
    "category": "hr",
    "level": 700
  },
  {
    "word": "competency",
    "partOfSpeech": "n",
    "meaning": "能力；勝任度",
    "category": "hr",
    "level": 800
  },
  {
    "word": "contractual",
    "partOfSpeech": "adj",
    "meaning": "合約上的",
    "category": "hr",
    "level": 800
  },
  {
    "word": "discipline",
    "partOfSpeech": "n",
    "meaning": "紀律；規範",
    "category": "hr",
    "level": 750
  },
  {
    "word": "resignation",
    "partOfSpeech": "n",
    "meaning": "辭職",
    "category": "hr",
    "level": 700
  },
  {
    "word": "succession",
    "partOfSpeech": "n",
    "meaning": "接班；繼任",
    "category": "hr",
    "level": 850
  },
  {
    "word": "agenda-setting",
    "partOfSpeech": "n",
    "meaning": "議程設定",
    "category": "meetings",
    "level": 800
  },
  {
    "word": "deliberation",
    "partOfSpeech": "n",
    "meaning": "審議；討論",
    "category": "meetings",
    "level": 800
  },
  {
    "word": "follow-up",
    "partOfSpeech": "n",
    "meaning": "後續行動",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "coordination",
    "partOfSpeech": "n",
    "meaning": "協調",
    "category": "operations",
    "level": 750
  },
  {
    "word": "optimization",
    "partOfSpeech": "n",
    "meaning": "最佳化",
    "category": "operations",
    "level": 800
  },
  {
    "word": "downtime",
    "partOfSpeech": "n",
    "meaning": "停機時間",
    "category": "operations",
    "level": 750
  },
  {
    "word": "workflow",
    "partOfSpeech": "n",
    "meaning": "工作流程",
    "category": "operations",
    "level": 700
  },
  {
    "word": "throughput",
    "partOfSpeech": "n",
    "meaning": "處理量；產出率",
    "category": "operations",
    "level": 850
  },
  {
    "word": "compliance-check",
    "partOfSpeech": "n",
    "meaning": "合規檢查",
    "category": "operations",
    "level": 800
  },
  {
    "word": "risk-mitigation",
    "partOfSpeech": "n",
    "meaning": "風險緩解",
    "category": "operations",
    "level": 850
  },
  {
    "word": "consequently",
    "partOfSpeech": "adv",
    "meaning": "因此；結果是",
    "category": "general",
    "level": 750
  },
  {
    "word": "notwithstanding",
    "partOfSpeech": "prep",
    "meaning": "儘管；不論",
    "category": "general",
    "level": 850
  },
  {
    "word": "thereafter",
    "partOfSpeech": "adv",
    "meaning": "其後",
    "category": "general",
    "level": 800
  },
  {
    "word": "whereas",
    "partOfSpeech": "conj",
    "meaning": "然而；鑑於",
    "category": "general",
    "level": 800
  },
  {
    "word": "predominantly",
    "partOfSpeech": "adv",
    "meaning": "主要地",
    "category": "general",
    "level": 800
  },
  {
    "word": "roadmap",
    "partOfSpeech": "n",
    "meaning": "發展藍圖；路線圖",
    "category": "business",
    "level": 750
  },
  {
    "word": "milestone",
    "partOfSpeech": "n",
    "meaning": "里程碑",
    "category": "business",
    "level": 750
  },
  {
    "word": "scalable",
    "partOfSpeech": "adj",
    "meaning": "可擴展的",
    "category": "business",
    "level": 800
  },
  {
    "word": "competitor",
    "partOfSpeech": "n",
    "meaning": "競爭對手",
    "category": "business",
    "level": 700
  },
  {
    "word": "differentiation",
    "partOfSpeech": "n",
    "meaning": "差異化",
    "category": "business",
    "level": 800
  },
  {
    "word": "stake",
    "partOfSpeech": "n",
    "meaning": "股份；利害關係",
    "category": "business",
    "level": 750
  },
  {
    "word": "initiative",
    "partOfSpeech": "n",
    "meaning": "倡議；主動措施",
    "category": "business",
    "level": 750
  },
  {
    "word": "long-term",
    "partOfSpeech": "adj",
    "meaning": "長期的",
    "category": "business",
    "level": 700
  },
  {
    "word": "turnkey",
    "partOfSpeech": "adj",
    "meaning": "交鑰匙的；即用型的",
    "category": "business",
    "level": 850
  },
  {
    "word": "asset",
    "partOfSpeech": "n",
    "meaning": "資產",
    "category": "finance",
    "level": 700
  },
  {
    "word": "fiscal-year",
    "partOfSpeech": "n",
    "meaning": "會計年度",
    "category": "finance",
    "level": 750
  },
  {
    "word": "write-off",
    "partOfSpeech": "n",
    "meaning": "沖銷；呆帳",
    "category": "finance",
    "level": 800
  },
  {
    "word": "solvent",
    "partOfSpeech": "adj",
    "meaning": "有償付能力的",
    "category": "finance",
    "level": 800
  },
  {
    "word": "expenditure",
    "partOfSpeech": "n",
    "meaning": "支出",
    "category": "finance",
    "level": 750
  },
  {
    "word": "revenue",
    "partOfSpeech": "n",
    "meaning": "營收",
    "category": "finance",
    "level": 700
  },
  {
    "word": "liquid",
    "partOfSpeech": "adj",
    "meaning": "具流動性的",
    "category": "finance",
    "level": 800
  },
  {
    "word": "forecast",
    "partOfSpeech": "v",
    "meaning": "預測",
    "category": "finance",
    "level": 750
  },
  {
    "word": "headhunt",
    "partOfSpeech": "v",
    "meaning": "挖角",
    "category": "hr",
    "level": 750
  },
  {
    "word": "seniority",
    "partOfSpeech": "n",
    "meaning": "年資；資歷",
    "category": "hr",
    "level": 750
  },
  {
    "word": "contractor",
    "partOfSpeech": "n",
    "meaning": "承包商；約聘人員",
    "category": "hr",
    "level": 750
  },
  {
    "word": "full-time",
    "partOfSpeech": "adj",
    "meaning": "全職的",
    "category": "hr",
    "level": 700
  },
  {
    "word": "part-time",
    "partOfSpeech": "adj",
    "meaning": "兼職的",
    "category": "hr",
    "level": 700
  },
  {
    "word": "incentivize",
    "partOfSpeech": "v",
    "meaning": "激勵",
    "category": "hr",
    "level": 800
  },
  {
    "word": "morale",
    "partOfSpeech": "n",
    "meaning": "士氣",
    "category": "hr",
    "level": 750
  },
  {
    "word": "tenure-track",
    "partOfSpeech": "n",
    "meaning": "終身職軌道",
    "category": "hr",
    "level": 850
  },
  {
    "word": "relocation",
    "partOfSpeech": "n",
    "meaning": "調派；搬遷",
    "category": "hr",
    "level": 750
  },
  {
    "word": "work-life",
    "partOfSpeech": "adj",
    "meaning": "工作與生活的",
    "category": "hr",
    "level": 750
  },
  {
    "word": "capacity",
    "partOfSpeech": "n",
    "meaning": "產能；容量",
    "category": "operations",
    "level": 750
  },
  {
    "word": "bottleneck",
    "partOfSpeech": "n",
    "meaning": "瓶頸",
    "category": "operations",
    "level": 800
  },
  {
    "word": "deployment",
    "partOfSpeech": "n",
    "meaning": "部署",
    "category": "operations",
    "level": 800
  },
  {
    "word": "maintenance",
    "partOfSpeech": "n",
    "meaning": "維護",
    "category": "operations",
    "level": 700
  },
  {
    "word": "inventory-control",
    "partOfSpeech": "n",
    "meaning": "庫存管理",
    "category": "operations",
    "level": 800
  },
  {
    "word": "distribution",
    "partOfSpeech": "n",
    "meaning": "配送；分配",
    "category": "operations",
    "level": 750
  },
  {
    "word": "outsourcing",
    "partOfSpeech": "n",
    "meaning": "外包",
    "category": "operations",
    "level": 750
  },
  {
    "word": "scanning",
    "partOfSpeech": "n",
    "meaning": "掃描；盤點",
    "category": "operations",
    "level": 750
  },
  {
    "word": "turnaround",
    "partOfSpeech": "n",
    "meaning": "轉虧為盈；改善",
    "category": "operations",
    "level": 850
  },
  {
    "word": "compliance-driven",
    "partOfSpeech": "adj",
    "meaning": "以合規為導向的",
    "category": "operations",
    "level": 850
  },
  {
    "word": "accordingly",
    "partOfSpeech": "adv",
    "meaning": "因此；相應地",
    "category": "general",
    "level": 750
  },
  {
    "word": "thereby",
    "partOfSpeech": "adv",
    "meaning": "從而；因此",
    "category": "general",
    "level": 800
  },
  {
    "word": "likewise",
    "partOfSpeech": "adv",
    "meaning": "同樣地",
    "category": "general",
    "level": 750
  },
  {
    "word": "predominant",
    "partOfSpeech": "adj",
    "meaning": "主要的；佔優勢的",
    "category": "general",
    "level": 800
  },
  {
    "word": "respective",
    "partOfSpeech": "adj",
    "meaning": "各自的",
    "category": "general",
    "level": 750
  },
  {
    "word": "hereafter",
    "partOfSpeech": "adv",
    "meaning": "今後",
    "category": "general",
    "level": 800
  },
  {
    "word": "aforementioned",
    "partOfSpeech": "adj",
    "meaning": "前述的",
    "category": "general",
    "level": 850
  },
  {
    "word": "whereby",
    "partOfSpeech": "adv",
    "meaning": "藉此；憑此",
    "category": "general",
    "level": 850
  },
  {
    "word": "therein",
    "partOfSpeech": "adv",
    "meaning": "其中",
    "category": "general",
    "level": 850
  },
  {
    "word": "nonetheless",
    "partOfSpeech": "adv",
    "meaning": "儘管如此",
    "category": "general",
    "level": 800
  },
  {
    "word": "prioritization",
    "partOfSpeech": "n",
    "meaning": "優先順序安排",
    "category": "business",
    "level": 800
  },
  {
    "word": "positioning",
    "partOfSpeech": "n",
    "meaning": "市場定位",
    "category": "business",
    "level": 800
  },
  {
    "word": "transformation",
    "partOfSpeech": "n",
    "meaning": "轉型",
    "category": "business",
    "level": 800
  },
  {
    "word": "cash-flow",
    "partOfSpeech": "n",
    "meaning": "現金流",
    "category": "finance",
    "level": 700
  },
  {
    "word": "solidity",
    "partOfSpeech": "n",
    "meaning": "穩定性；穩固",
    "category": "finance",
    "level": 800
  },
  {
    "word": "profit-margin",
    "partOfSpeech": "n",
    "meaning": "利潤率",
    "category": "finance",
    "level": 750
  },
  {
    "word": "break-even",
    "partOfSpeech": "adj",
    "meaning": "損益兩平的",
    "category": "finance",
    "level": 750
  },
  {
    "word": "forecasting",
    "partOfSpeech": "n",
    "meaning": "預測",
    "category": "finance",
    "level": 750
  },
  {
    "word": "engagement",
    "partOfSpeech": "n",
    "meaning": "員工投入度",
    "category": "hr",
    "level": 800
  },
  {
    "word": "empowerment",
    "partOfSpeech": "n",
    "meaning": "賦權",
    "category": "hr",
    "level": 800
  },
  {
    "word": "productivity",
    "partOfSpeech": "n",
    "meaning": "生產力",
    "category": "hr",
    "level": 700
  },
  {
    "word": "workforce-planning",
    "partOfSpeech": "n",
    "meaning": "人力規劃",
    "category": "hr",
    "level": 800
  },
  {
    "word": "absenteeism",
    "partOfSpeech": "n",
    "meaning": "缺勤率",
    "category": "hr",
    "level": 850
  },
  {
    "word": "evaluation",
    "partOfSpeech": "n",
    "meaning": "評估",
    "category": "hr",
    "level": 700
  },
  {
    "word": "promotion-track",
    "partOfSpeech": "n",
    "meaning": "升遷制度",
    "category": "hr",
    "level": 800
  },
  {
    "word": "fulfillment",
    "partOfSpeech": "n",
    "meaning": "履行；訂單完成",
    "category": "operations",
    "level": 750
  },
  {
    "word": "procurement-cycle",
    "partOfSpeech": "n",
    "meaning": "採購流程",
    "category": "operations",
    "level": 800
  },
  {
    "word": "dispatching",
    "partOfSpeech": "n",
    "meaning": "派送；調度",
    "category": "operations",
    "level": 750
  },
  {
    "word": "contingency-plan",
    "partOfSpeech": "n",
    "meaning": "應變計畫",
    "category": "operations",
    "level": 800
  },
  {
    "word": "henceforth",
    "partOfSpeech": "adv",
    "meaning": "今後",
    "category": "general",
    "level": 850
  },
  {
    "word": "regardless",
    "partOfSpeech": "adv",
    "meaning": "不論如何",
    "category": "general",
    "level": 750
  },
  {
    "word": "thereupon",
    "partOfSpeech": "adv",
    "meaning": "隨即；因此",
    "category": "general",
    "level": 850
  },
  {
    "word": "accordance",
    "partOfSpeech": "n",
    "meaning": "一致；依照",
    "category": "general",
    "level": 800
  },
  {
    "word": "subsequent",
    "partOfSpeech": "adj",
    "meaning": "隨後的",
    "category": "general",
    "level": 750
  },
  {
    "word": "confirm",
    "partOfSpeech": "v",
    "meaning": "確認",
    "category": "general",
    "level": 700
  },
  {
    "word": "notify",
    "partOfSpeech": "v",
    "meaning": "通知",
    "category": "general",
    "level": 700
  },
  {
    "word": "notification",
    "partOfSpeech": "n",
    "meaning": "通知",
    "category": "general",
    "level": 700
  },
  {
    "word": "request",
    "partOfSpeech": "n",
    "meaning": "請求",
    "category": "general",
    "level": 700
  },
  {
    "word": "inquiry",
    "partOfSpeech": "n",
    "meaning": "詢問",
    "category": "general",
    "level": 700
  },
  {
    "word": "approve",
    "partOfSpeech": "v",
    "meaning": "批准",
    "category": "business",
    "level": 700
  },
  {
    "word": "approval",
    "partOfSpeech": "n",
    "meaning": "批准",
    "category": "business",
    "level": 700
  },
  {
    "word": "schedule",
    "partOfSpeech": "v",
    "meaning": "安排",
    "category": "general",
    "level": 700
  },
  {
    "word": "reschedule",
    "partOfSpeech": "v",
    "meaning": "重新安排",
    "category": "general",
    "level": 750
  },
  {
    "word": "postpone",
    "partOfSpeech": "v",
    "meaning": "延後",
    "category": "general",
    "level": 700
  },
  {
    "word": "delay",
    "partOfSpeech": "n",
    "meaning": "延誤",
    "category": "general",
    "level": 700
  },
  {
    "word": "issue",
    "partOfSpeech": "n",
    "meaning": "問題；議題",
    "category": "general",
    "level": 700
  },
  {
    "word": "resolve",
    "partOfSpeech": "v",
    "meaning": "解決",
    "category": "general",
    "level": 700
  },
  {
    "word": "attach",
    "partOfSpeech": "v",
    "meaning": "附加；附上",
    "category": "general",
    "level": 700
  },
  {
    "word": "attachment",
    "partOfSpeech": "n",
    "meaning": "附件",
    "category": "general",
    "level": 700
  },
  {
    "word": "available",
    "partOfSpeech": "adj",
    "meaning": "可用的；有空的",
    "category": "general",
    "level": 700
  },
  {
    "word": "unavailable",
    "partOfSpeech": "adj",
    "meaning": "無法使用的",
    "category": "general",
    "level": 700
  },
  {
    "word": "regarding",
    "partOfSpeech": "prep",
    "meaning": "關於",
    "category": "general",
    "level": 700
  },
  {
    "word": "concerning",
    "partOfSpeech": "prep",
    "meaning": "關於",
    "category": "general",
    "level": 700
  },
  {
    "word": "prior",
    "partOfSpeech": "adj",
    "meaning": "先前的",
    "category": "general",
    "level": 700
  },
  {
    "word": "temporary",
    "partOfSpeech": "adj",
    "meaning": "暫時的",
    "category": "general",
    "level": 700
  },
  {
    "word": "permanent",
    "partOfSpeech": "adj",
    "meaning": "永久的",
    "category": "general",
    "level": 700
  },
  {
    "word": "currently",
    "partOfSpeech": "adv",
    "meaning": "目前",
    "category": "general",
    "level": 700
  },
  {
    "word": "previously",
    "partOfSpeech": "adv",
    "meaning": "先前",
    "category": "general",
    "level": 700
  },
  {
    "word": "pending",
    "partOfSpeech": "adj",
    "meaning": "待處理的",
    "category": "general",
    "level": 750
  },
  {
    "word": "finalize",
    "partOfSpeech": "v",
    "meaning": "定案；完成",
    "category": "general",
    "level": 750
  },
  {
    "word": "submit",
    "partOfSpeech": "v",
    "meaning": "提交",
    "category": "general",
    "level": 700
  },
  {
    "word": "assign",
    "partOfSpeech": "v",
    "meaning": "指派",
    "category": "general",
    "level": 700
  },
  {
    "word": "replace",
    "partOfSpeech": "v",
    "meaning": "替換",
    "category": "general",
    "level": 700
  },
  {
    "word": "extend",
    "partOfSpeech": "v",
    "meaning": "延長",
    "category": "general",
    "level": 700
  },
  {
    "word": "refund",
    "partOfSpeech": "n",
    "meaning": "退款",
    "category": "finance",
    "level": 700
  },
  {
    "word": "install",
    "partOfSpeech": "v",
    "meaning": "安裝",
    "category": "operations",
    "level": 700
  },
  {
    "word": "update",
    "partOfSpeech": "v",
    "meaning": "更新",
    "category": "general",
    "level": 700
  },
  {
    "word": "although",
    "partOfSpeech": "conj",
    "meaning": "雖然",
    "category": "general",
    "level": 700
  },
  {
    "word": "however",
    "partOfSpeech": "adv",
    "meaning": "然而",
    "category": "general",
    "level": 700
  },
  {
    "word": "therefore",
    "partOfSpeech": "adv",
    "meaning": "因此",
    "category": "general",
    "level": 700
  },
  {
    "word": "otherwise",
    "partOfSpeech": "adv",
    "meaning": "否則",
    "category": "general",
    "level": 750
  },
  {
    "word": "unless",
    "partOfSpeech": "conj",
    "meaning": "除非",
    "category": "general",
    "level": 700
  },
  {
    "word": "provided",
    "partOfSpeech": "conj",
    "meaning": "只要",
    "category": "general",
    "level": 750
  },
  {
    "word": "due-to",
    "partOfSpeech": "prep",
    "meaning": "由於",
    "category": "general",
    "level": 700
  },
  {
    "word": "as-a-result",
    "partOfSpeech": "phrase",
    "meaning": "因此",
    "category": "general",
    "level": 700
  },
  {
    "word": "department",
    "partOfSpeech": "n",
    "meaning": "部門",
    "category": "general",
    "level": 700
  },
  {
    "word": "division",
    "partOfSpeech": "n",
    "meaning": "部門；單位",
    "category": "general",
    "level": 700
  },
  {
    "word": "branch",
    "partOfSpeech": "n",
    "meaning": "分公司；分部",
    "category": "general",
    "level": 700
  },
  {
    "word": "headquarters",
    "partOfSpeech": "n",
    "meaning": "總部",
    "category": "general",
    "level": 700
  },
  {
    "word": "facility",
    "partOfSpeech": "n",
    "meaning": "設施；場所",
    "category": "general",
    "level": 700
  },
  {
    "word": "location",
    "partOfSpeech": "n",
    "meaning": "地點",
    "category": "general",
    "level": 700
  },
  {
    "word": "relocate",
    "partOfSpeech": "v",
    "meaning": "遷移；搬遷",
    "category": "general",
    "level": 750
  },
  {
    "word": "access",
    "partOfSpeech": "n",
    "meaning": "進入權限",
    "category": "general",
    "level": 700
  },
  {
    "word": "accessible",
    "partOfSpeech": "adj",
    "meaning": "可進入的；可使用的",
    "category": "general",
    "level": 700
  },
  {
    "word": "restricted",
    "partOfSpeech": "adj",
    "meaning": "受限制的",
    "category": "general",
    "level": 700
  },
  {
    "word": "deadline",
    "partOfSpeech": "n",
    "meaning": "截止期限",
    "category": "general",
    "level": 700
  },
  {
    "word": "extension",
    "partOfSpeech": "n",
    "meaning": "延期；延長",
    "category": "general",
    "level": 700
  },
  {
    "word": "in-advance",
    "partOfSpeech": "adv",
    "meaning": "事先",
    "category": "general",
    "level": 700
  },
  {
    "word": "immediately",
    "partOfSpeech": "adv",
    "meaning": "立即",
    "category": "general",
    "level": 700
  },
  {
    "word": "eventually",
    "partOfSpeech": "adv",
    "meaning": "最終",
    "category": "general",
    "level": 700
  },
  {
    "word": "temporarily",
    "partOfSpeech": "adv",
    "meaning": "暫時地",
    "category": "general",
    "level": 700
  },
  {
    "word": "frequently",
    "partOfSpeech": "adv",
    "meaning": "頻繁地",
    "category": "general",
    "level": 700
  },
  {
    "word": "occasionally",
    "partOfSpeech": "adv",
    "meaning": "偶爾",
    "category": "general",
    "level": 700
  },
  {
    "word": "announcement",
    "partOfSpeech": "n",
    "meaning": "公告；宣布",
    "category": "general",
    "level": 700
  },
  {
    "word": "notice",
    "partOfSpeech": "n",
    "meaning": "通知；公告",
    "category": "general",
    "level": 700
  },
  {
    "word": "policy",
    "partOfSpeech": "n",
    "meaning": "政策；規定",
    "category": "general",
    "level": 700
  },
  {
    "word": "procedure",
    "partOfSpeech": "n",
    "meaning": "程序",
    "category": "general",
    "level": 700
  },
  {
    "word": "guideline",
    "partOfSpeech": "n",
    "meaning": "指引",
    "category": "general",
    "level": 700
  },
  {
    "word": "regulation",
    "partOfSpeech": "n",
    "meaning": "規定；法規",
    "category": "general",
    "level": 700
  },
  {
    "word": "requirement",
    "partOfSpeech": "n",
    "meaning": "要求；條件",
    "category": "general",
    "level": 700
  },
  {
    "word": "participant",
    "partOfSpeech": "n",
    "meaning": "參與者",
    "category": "general",
    "level": 700
  },
  {
    "word": "registration",
    "partOfSpeech": "n",
    "meaning": "登記；註冊",
    "category": "general",
    "level": 700
  },
  {
    "word": "register",
    "partOfSpeech": "v",
    "meaning": "註冊",
    "category": "general",
    "level": 700
  },
  {
    "word": "contact",
    "partOfSpeech": "n",
    "meaning": "聯絡人；聯絡方式",
    "category": "general",
    "level": 700
  },
  {
    "word": "in-charge",
    "partOfSpeech": "adj",
    "meaning": "負責的",
    "category": "general",
    "level": 700
  },
  {
    "word": "responsible-for",
    "partOfSpeech": "adj",
    "meaning": "負責",
    "category": "general",
    "level": 700
  },
  {
    "word": "assist",
    "partOfSpeech": "v",
    "meaning": "協助",
    "category": "general",
    "level": 700
  },
  {
    "word": "assistance",
    "partOfSpeech": "n",
    "meaning": "協助",
    "category": "general",
    "level": 700
  },
  {
    "word": "purchase",
    "partOfSpeech": "v",
    "meaning": "購買",
    "category": "general",
    "level": 700
  },
  {
    "word": "order",
    "partOfSpeech": "n",
    "meaning": "訂單",
    "category": "general",
    "level": 700
  },
  {
    "word": "payment",
    "partOfSpeech": "n",
    "meaning": "付款",
    "category": "general",
    "level": 700
  },
  {
    "word": "receipt",
    "partOfSpeech": "n",
    "meaning": "收據",
    "category": "general",
    "level": 700
  },
  {
    "word": "exchange",
    "partOfSpeech": "v",
    "meaning": "更換；交換",
    "category": "general",
    "level": 700
  },
  {
    "word": "completed",
    "partOfSpeech": "adj",
    "meaning": "已完成的",
    "category": "general",
    "level": 700
  },
  {
    "word": "ongoing",
    "partOfSpeech": "adj",
    "meaning": "進行中的",
    "category": "general",
    "level": 700
  },
  {
    "word": "scheduled",
    "partOfSpeech": "adj",
    "meaning": "已排程的",
    "category": "general",
    "level": 700
  },
  {
    "word": "postponed",
    "partOfSpeech": "adj",
    "meaning": "延期的",
    "category": "general",
    "level": 700
  },
  {
    "word": "delayed",
    "partOfSpeech": "adj",
    "meaning": "延誤的",
    "category": "general",
    "level": 700
  },
  {
    "word": "cancelled",
    "partOfSpeech": "adj",
    "meaning": "取消的",
    "category": "general",
    "level": 700
  },
  {
    "word": "confirmed",
    "partOfSpeech": "adj",
    "meaning": "已確認的",
    "category": "general",
    "level": 700
  },
  {
    "word": "recently",
    "partOfSpeech": "adv",
    "meaning": "最近",
    "category": "general",
    "level": 700
  },
  {
    "word": "initially",
    "partOfSpeech": "adv",
    "meaning": "最初",
    "category": "general",
    "level": 700
  },
  {
    "word": "simultaneously",
    "partOfSpeech": "adv",
    "meaning": "同時地",
    "category": "general",
    "level": 750
  },
  {
    "word": "promptly",
    "partOfSpeech": "adv",
    "meaning": "迅速地",
    "category": "general",
    "level": 700
  },
  {
    "word": "annually",
    "partOfSpeech": "adv",
    "meaning": "每年",
    "category": "general",
    "level": 700
  },
  {
    "word": "prior-to",
    "partOfSpeech": "prep",
    "meaning": "在…之前",
    "category": "general",
    "level": 750
  },
  {
    "word": "subsequent-to",
    "partOfSpeech": "prep",
    "meaning": "在…之後",
    "category": "general",
    "level": 750
  },
  {
    "word": "in-the-event-of",
    "partOfSpeech": "prep",
    "meaning": "若發生…",
    "category": "general",
    "level": 800
  },
  {
    "word": "in-accordance-with",
    "partOfSpeech": "prep",
    "meaning": "依照",
    "category": "general",
    "level": 750
  },
  {
    "word": "significant",
    "partOfSpeech": "adj",
    "meaning": "顯著的；重要的",
    "category": "general",
    "level": 700
  },
  {
    "word": "substantial",
    "partOfSpeech": "adj",
    "meaning": "大量的；實質的",
    "category": "general",
    "level": 750
  },
  {
    "word": "considerable",
    "partOfSpeech": "adj",
    "meaning": "相當大的",
    "category": "general",
    "level": 750
  },
  {
    "word": "minor",
    "partOfSpeech": "adj",
    "meaning": "次要的；輕微的",
    "category": "general",
    "level": 700
  },
  {
    "word": "critical",
    "partOfSpeech": "adj",
    "meaning": "關鍵的",
    "category": "general",
    "level": 750
  },
  {
    "word": "essential",
    "partOfSpeech": "adj",
    "meaning": "必要的",
    "category": "general",
    "level": 700
  },
  {
    "word": "optional",
    "partOfSpeech": "adj",
    "meaning": "非必須的",
    "category": "general",
    "level": 700
  },
  {
    "word": "eligible",
    "partOfSpeech": "adj",
    "meaning": "符合資格的",
    "category": "general",
    "level": 700
  },
  {
    "word": "ineligible",
    "partOfSpeech": "adj",
    "meaning": "不符合資格的",
    "category": "general",
    "level": 700
  },
  {
    "word": "despite",
    "partOfSpeech": "prep",
    "meaning": "儘管",
    "category": "general",
    "level": 700
  },
  {
    "word": "respond",
    "partOfSpeech": "v",
    "meaning": "回覆",
    "category": "general",
    "level": 700
  },
  {
    "word": "response",
    "partOfSpeech": "n",
    "meaning": "回應",
    "category": "general",
    "level": 700
  },
  {
    "word": "prompt",
    "partOfSpeech": "adj",
    "meaning": "即時的；迅速的",
    "category": "general",
    "level": 700
  },
  {
    "word": "acknowledge",
    "partOfSpeech": "v",
    "meaning": "確認收到；致謝",
    "category": "general",
    "level": 750
  },
  {
    "word": "clarify",
    "partOfSpeech": "v",
    "meaning": "澄清",
    "category": "general",
    "level": 700
  },
  {
    "word": "provide",
    "partOfSpeech": "v",
    "meaning": "提供",
    "category": "general",
    "level": 700
  },
  {
    "word": "forward",
    "partOfSpeech": "v",
    "meaning": "轉寄",
    "category": "general",
    "level": 700
  },
  {
    "word": "apologize",
    "partOfSpeech": "v",
    "meaning": "道歉",
    "category": "general",
    "level": 700
  },
  {
    "word": "apology",
    "partOfSpeech": "n",
    "meaning": "道歉聲明",
    "category": "general",
    "level": 700
  },
  {
    "word": "cancel",
    "partOfSpeech": "v",
    "meaning": "取消",
    "category": "general",
    "level": 700
  },
  {
    "word": "alternative",
    "partOfSpeech": "n",
    "meaning": "替代方案",
    "category": "general",
    "level": 700
  },
  {
    "word": "option",
    "partOfSpeech": "n",
    "meaning": "選項",
    "category": "general",
    "level": 700
  },
  {
    "word": "solution",
    "partOfSpeech": "n",
    "meaning": "解決方案",
    "category": "general",
    "level": 700
  },
  {
    "word": "investigate",
    "partOfSpeech": "v",
    "meaning": "調查",
    "category": "general",
    "level": 750
  },
  {
    "word": "comply",
    "partOfSpeech": "v",
    "meaning": "遵守",
    "category": "business",
    "level": 700
  },
  {
    "word": "appreciate",
    "partOfSpeech": "v",
    "meaning": "感謝",
    "category": "general",
    "level": 700
  },
  {
    "word": "gratitude",
    "partOfSpeech": "n",
    "meaning": "感激",
    "category": "general",
    "level": 750
  },
  {
    "word": "courtesy",
    "partOfSpeech": "n",
    "meaning": "禮貌；禮節",
    "category": "general",
    "level": 750
  },
  {
    "word": "sincerely",
    "partOfSpeech": "adv",
    "meaning": "誠摯地",
    "category": "general",
    "level": 700
  },
  {
    "word": "best-regards",
    "partOfSpeech": "n",
    "meaning": "此致敬禮",
    "category": "general",
    "level": 700
  },
  {
    "word": "temporarily-closed",
    "partOfSpeech": "adj",
    "meaning": "暫時關閉的",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "operate",
    "partOfSpeech": "v",
    "meaning": "運作；營運",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "operation",
    "partOfSpeech": "n",
    "meaning": "營運；運作",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "operational",
    "partOfSpeech": "adj",
    "meaning": "可運作的；營運中的",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "authorized",
    "partOfSpeech": "adj",
    "meaning": "經授權的",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "permit",
    "partOfSpeech": "n",
    "meaning": "許可證",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "comply-with",
    "partOfSpeech": "v",
    "meaning": "遵守",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "violation",
    "partOfSpeech": "n",
    "meaning": "違反",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "according-to",
    "partOfSpeech": "prep",
    "meaning": "依照",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "effective",
    "partOfSpeech": "adj",
    "meaning": "生效的；有效的",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "effective-date",
    "partOfSpeech": "n",
    "meaning": "生效日期",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "valid-until",
    "partOfSpeech": "adj",
    "meaning": "有效至",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "expire",
    "partOfSpeech": "v",
    "meaning": "到期；失效",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "expiration",
    "partOfSpeech": "n",
    "meaning": "到期",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "upgrade",
    "partOfSpeech": "n",
    "meaning": "升級",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "improvement",
    "partOfSpeech": "n",
    "meaning": "改善",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "safety",
    "partOfSpeech": "n",
    "meaning": "安全",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "precaution",
    "partOfSpeech": "n",
    "meaning": "預防措施",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "emergency",
    "partOfSpeech": "n",
    "meaning": "緊急狀況",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "evacuation",
    "partOfSpeech": "n",
    "meaning": "疏散",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "designated",
    "partOfSpeech": "adj",
    "meaning": "指定的",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "parking",
    "partOfSpeech": "n",
    "meaning": "停車場",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "entrance",
    "partOfSpeech": "n",
    "meaning": "入口",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "exit",
    "partOfSpeech": "n",
    "meaning": "出口",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "lobby",
    "partOfSpeech": "n",
    "meaning": "大廳",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "counter",
    "partOfSpeech": "n",
    "meaning": "櫃檯",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "be-advised",
    "partOfSpeech": "v",
    "meaning": "請注意（公告用語）",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "please-note",
    "partOfSpeech": "v",
    "meaning": "請留意",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "for-your-convenience",
    "partOfSpeech": "phrase",
    "meaning": "為了您的方便",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "we-apologize-for",
    "partOfSpeech": "phrase",
    "meaning": "我們對…致歉",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "transportation",
    "partOfSpeech": "n",
    "meaning": "交通運輸",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "commute",
    "partOfSpeech": "v",
    "meaning": "通勤",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "route",
    "partOfSpeech": "n",
    "meaning": "路線",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "detour",
    "partOfSpeech": "n",
    "meaning": "改道路線",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "disruption",
    "partOfSpeech": "n",
    "meaning": "中斷；混亂",
    "category": "transportation",
    "level": 750
  },
  {
    "word": "congestion",
    "partOfSpeech": "n",
    "meaning": "交通壅塞",
    "category": "transportation",
    "level": 750
  },
  {
    "word": "departure",
    "partOfSpeech": "n",
    "meaning": "出發",
    "category": "travel",
    "level": 700
  },
  {
    "word": "arrival",
    "partOfSpeech": "n",
    "meaning": "抵達",
    "category": "travel",
    "level": 700
  },
  {
    "word": "boarding",
    "partOfSpeech": "n",
    "meaning": "登機；上車",
    "category": "travel",
    "level": 700
  },
  {
    "word": "platform",
    "partOfSpeech": "n",
    "meaning": "月台",
    "category": "travel",
    "level": 700
  },
  {
    "word": "terminal",
    "partOfSpeech": "n",
    "meaning": "航廈；總站",
    "category": "travel",
    "level": 700
  },
  {
    "word": "gate",
    "partOfSpeech": "n",
    "meaning": "登機門",
    "category": "travel",
    "level": 700
  },
  {
    "word": "stopover",
    "partOfSpeech": "n",
    "meaning": "中途停留",
    "category": "travel",
    "level": 750
  },
  {
    "word": "layover",
    "partOfSpeech": "n",
    "meaning": "轉機停留",
    "category": "travel",
    "level": 750
  },
  {
    "word": "destination",
    "partOfSpeech": "n",
    "meaning": "目的地",
    "category": "travel",
    "level": 700
  },
  {
    "word": "flight",
    "partOfSpeech": "n",
    "meaning": "航班",
    "category": "travel",
    "level": 700
  },
  {
    "word": "airline",
    "partOfSpeech": "n",
    "meaning": "航空公司",
    "category": "travel",
    "level": 700
  },
  {
    "word": "boarding-pass",
    "partOfSpeech": "n",
    "meaning": "登機證",
    "category": "travel",
    "level": 700
  },
  {
    "word": "check-in",
    "partOfSpeech": "v",
    "meaning": "辦理報到",
    "category": "travel",
    "level": 700
  },
  {
    "word": "baggage",
    "partOfSpeech": "n",
    "meaning": "行李",
    "category": "travel",
    "level": 700
  },
  {
    "word": "luggage",
    "partOfSpeech": "n",
    "meaning": "行李",
    "category": "travel",
    "level": 700
  },
  {
    "word": "carry-on",
    "partOfSpeech": "adj",
    "meaning": "隨身攜帶的",
    "category": "travel",
    "level": 700
  },
  {
    "word": "overhead-bin",
    "partOfSpeech": "n",
    "meaning": "機艙上方置物櫃",
    "category": "travel",
    "level": 750
  },
  {
    "word": "immigration",
    "partOfSpeech": "n",
    "meaning": "入境審查",
    "category": "travel",
    "level": 750
  },
  {
    "word": "distribution-center",
    "partOfSpeech": "n",
    "meaning": "物流中心",
    "category": "logistics",
    "level": 750
  },
  {
    "word": "estimated",
    "partOfSpeech": "adj",
    "meaning": "預估的",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "estimated-time-of-arrival",
    "partOfSpeech": "n",
    "meaning": "預計抵達時間",
    "category": "transportation",
    "level": 750
  },
  {
    "word": "on-schedule",
    "partOfSpeech": "adj",
    "meaning": "準時的",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "behind-schedule",
    "partOfSpeech": "adj",
    "meaning": "延誤的",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "weather-condition",
    "partOfSpeech": "n",
    "meaning": "天氣狀況",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "technical-issue",
    "partOfSpeech": "n",
    "meaning": "技術問題",
    "category": "transportation",
    "level": 750
  },
  {
    "word": "mechanical-problem",
    "partOfSpeech": "n",
    "meaning": "機械故障",
    "category": "transportation",
    "level": 750
  },
  {
    "word": "arrangement",
    "partOfSpeech": "n",
    "meaning": "安排",
    "category": "transportation",
    "level": 700
  },
  {
    "word": "accommodation",
    "partOfSpeech": "n",
    "meaning": "住宿",
    "category": "hospitality",
    "level": 700
  },
  {
    "word": "reservation",
    "partOfSpeech": "n",
    "meaning": "預訂",
    "category": "hospitality",
    "level": 700
  },
  {
    "word": "availability",
    "partOfSpeech": "n",
    "meaning": "可用性；空房狀況",
    "category": "hospitality",
    "level": 750
  },
  {
    "word": "occupancy",
    "partOfSpeech": "n",
    "meaning": "入住率",
    "category": "hospitality",
    "level": 750
  },
  {
    "word": "amenities",
    "partOfSpeech": "n",
    "meaning": "設施；便利設備",
    "category": "hospitality",
    "level": 700
  },
  {
    "word": "housekeeping",
    "partOfSpeech": "n",
    "meaning": "房務服務",
    "category": "hospitality",
    "level": 700
  },
  {
    "word": "front-desk",
    "partOfSpeech": "n",
    "meaning": "櫃檯",
    "category": "hospitality",
    "level": 700
  },
  {
    "word": "check-out",
    "partOfSpeech": "n",
    "meaning": "退房",
    "category": "hospitality",
    "level": 700
  },
  {
    "word": "complaint",
    "partOfSpeech": "n",
    "meaning": "投訴；抱怨",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "dissatisfaction",
    "partOfSpeech": "n",
    "meaning": "不滿",
    "category": "customer-service",
    "level": 750
  },
  {
    "word": "inconvenience",
    "partOfSpeech": "n",
    "meaning": "不便",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "escalate",
    "partOfSpeech": "v",
    "meaning": "升級處理；上報",
    "category": "customer-service",
    "level": 800
  },
  {
    "word": "satisfaction",
    "partOfSpeech": "n",
    "meaning": "滿意度",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "conference",
    "partOfSpeech": "n",
    "meaning": "會議；研討會",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "seminar",
    "partOfSpeech": "n",
    "meaning": "研討會",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "workshop",
    "partOfSpeech": "n",
    "meaning": "工作坊",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "attendee",
    "partOfSpeech": "n",
    "meaning": "與會者",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "cancellation",
    "partOfSpeech": "n",
    "meaning": "取消",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "venue-change",
    "partOfSpeech": "n",
    "meaning": "場地變更",
    "category": "meetings",
    "level": 750
  },
  {
    "word": "with-regard-to",
    "partOfSpeech": "prep",
    "meaning": "關於",
    "category": "email",
    "level": 700
  },
  {
    "word": "as-per",
    "partOfSpeech": "prep",
    "meaning": "依照",
    "category": "email",
    "level": 700
  },
  {
    "word": "please-be-advised",
    "partOfSpeech": "phrase",
    "meaning": "請注意",
    "category": "email",
    "level": 750
  },
  {
    "word": "we-regret-to-inform-you",
    "partOfSpeech": "phrase",
    "meaning": "很遺憾通知您",
    "category": "email",
    "level": 750
  },
  {
    "word": "effective-immediately",
    "partOfSpeech": "phrase",
    "meaning": "即日起生效",
    "category": "email",
    "level": 750
  },
  {
    "word": "subject-to-availability",
    "partOfSpeech": "phrase",
    "meaning": "視供應狀況而定",
    "category": "email",
    "level": 750
  },
  {
    "word": "further-notice",
    "partOfSpeech": "n",
    "meaning": "進一步通知",
    "category": "email",
    "level": 750
  },
  {
    "word": "clarification",
    "partOfSpeech": "n",
    "meaning": "說明；澄清",
    "category": "email",
    "level": 750
  },
  {
    "word": "account",
    "partOfSpeech": "n",
    "meaning": "帳戶",
    "category": "banking",
    "level": 700
  },
  {
    "word": "account-holder",
    "partOfSpeech": "n",
    "meaning": "帳戶持有人",
    "category": "banking",
    "level": 700
  },
  {
    "word": "balance",
    "partOfSpeech": "n",
    "meaning": "餘額",
    "category": "banking",
    "level": 700
  },
  {
    "word": "transaction",
    "partOfSpeech": "n",
    "meaning": "交易",
    "category": "banking",
    "level": 700
  },
  {
    "word": "deposit",
    "partOfSpeech": "n",
    "meaning": "存款",
    "category": "banking",
    "level": 700
  },
  {
    "word": "withdrawal",
    "partOfSpeech": "n",
    "meaning": "提款",
    "category": "banking",
    "level": 700
  },
  {
    "word": "transfer",
    "partOfSpeech": "n",
    "meaning": "轉帳",
    "category": "banking",
    "level": 700
  },
  {
    "word": "overdraft",
    "partOfSpeech": "n",
    "meaning": "透支",
    "category": "banking",
    "level": 800
  },
  {
    "word": "interest-rate",
    "partOfSpeech": "n",
    "meaning": "利率",
    "category": "banking",
    "level": 700
  },
  {
    "word": "statement",
    "partOfSpeech": "n",
    "meaning": "帳戶對帳單",
    "category": "banking",
    "level": 700
  },
  {
    "word": "billing",
    "partOfSpeech": "n",
    "meaning": "帳單作業",
    "category": "billing",
    "level": 700
  },
  {
    "word": "invoice",
    "partOfSpeech": "n",
    "meaning": "發票",
    "category": "billing",
    "level": 700
  },
  {
    "word": "due-date",
    "partOfSpeech": "n",
    "meaning": "到期日",
    "category": "billing",
    "level": 700
  },
  {
    "word": "outstanding",
    "partOfSpeech": "adj",
    "meaning": "未付清的",
    "category": "billing",
    "level": 700
  },
  {
    "word": "late-fee",
    "partOfSpeech": "n",
    "meaning": "逾期費",
    "category": "billing",
    "level": 700
  },
  {
    "word": "installment",
    "partOfSpeech": "n",
    "meaning": "分期付款",
    "category": "billing",
    "level": 750
  },
  {
    "word": "auto-debit",
    "partOfSpeech": "n",
    "meaning": "自動扣款",
    "category": "billing",
    "level": 750
  },
  {
    "word": "payment-method",
    "partOfSpeech": "n",
    "meaning": "付款方式",
    "category": "billing",
    "level": 700
  },
  {
    "word": "billing-cycle",
    "partOfSpeech": "n",
    "meaning": "帳單週期",
    "category": "billing",
    "level": 750
  },
  {
    "word": "settlement",
    "partOfSpeech": "n",
    "meaning": "結清；清算",
    "category": "billing",
    "level": 800
  },
  {
    "word": "online-banking",
    "partOfSpeech": "n",
    "meaning": "線上銀行服務",
    "category": "online-service",
    "level": 700
  },
  {
    "word": "user-credentials",
    "partOfSpeech": "n",
    "meaning": "登入憑證",
    "category": "online-service",
    "level": 750
  },
  {
    "word": "authentication",
    "partOfSpeech": "n",
    "meaning": "身分驗證",
    "category": "online-service",
    "level": 800
  },
  {
    "word": "system-maintenance",
    "partOfSpeech": "n",
    "meaning": "系統維護",
    "category": "online-service",
    "level": 700
  },
  {
    "word": "temporary-outage",
    "partOfSpeech": "n",
    "meaning": "暫時中斷",
    "category": "online-service",
    "level": 750
  },
  {
    "word": "scheduled-downtime",
    "partOfSpeech": "n",
    "meaning": "排程停機",
    "category": "online-service",
    "level": 750
  },
  {
    "word": "data-breach",
    "partOfSpeech": "n",
    "meaning": "資料外洩",
    "category": "online-service",
    "level": 850
  },
  {
    "word": "security-update",
    "partOfSpeech": "n",
    "meaning": "安全更新",
    "category": "online-service",
    "level": 750
  },
  {
    "word": "access-restriction",
    "partOfSpeech": "n",
    "meaning": "存取限制",
    "category": "online-service",
    "level": 800
  },
  {
    "word": "account-suspension",
    "partOfSpeech": "n",
    "meaning": "帳戶停用",
    "category": "online-service",
    "level": 800
  },
  {
    "word": "authorization",
    "partOfSpeech": "n",
    "meaning": "授權",
    "category": "compliance",
    "level": 750
  },
  {
    "word": "verification",
    "partOfSpeech": "n",
    "meaning": "驗證",
    "category": "compliance",
    "level": 700
  },
  {
    "word": "identity-confirmation",
    "partOfSpeech": "n",
    "meaning": "身分確認",
    "category": "compliance",
    "level": 750
  },
  {
    "word": "fraudulent",
    "partOfSpeech": "adj",
    "meaning": "詐欺的",
    "category": "compliance",
    "level": 800
  },
  {
    "word": "unauthorized",
    "partOfSpeech": "adj",
    "meaning": "未經授權的",
    "category": "compliance",
    "level": 750
  },
  {
    "word": "suspicious-activity",
    "partOfSpeech": "n",
    "meaning": "可疑活動",
    "category": "compliance",
    "level": 800
  },
  {
    "word": "terms-and-conditions",
    "partOfSpeech": "n",
    "meaning": "條款與細則",
    "category": "compliance",
    "level": 700
  },
  {
    "word": "policy-update",
    "partOfSpeech": "n",
    "meaning": "政策更新",
    "category": "compliance",
    "level": 700
  },
  {
    "word": "regulatory-requirement",
    "partOfSpeech": "n",
    "meaning": "法規要求",
    "category": "compliance",
    "level": 850
  },
  {
    "word": "account-verification",
    "partOfSpeech": "n",
    "meaning": "帳戶驗證",
    "category": "compliance",
    "level": 750
  },
  {
    "word": "software",
    "partOfSpeech": "n",
    "meaning": "軟體",
    "category": "it",
    "level": 700
  },
  {
    "word": "application",
    "partOfSpeech": "n",
    "meaning": "應用程式",
    "category": "it",
    "level": 700
  },
  {
    "word": "interface",
    "partOfSpeech": "n",
    "meaning": "介面",
    "category": "it",
    "level": 750
  },
  {
    "word": "functionality",
    "partOfSpeech": "n",
    "meaning": "功能性",
    "category": "it",
    "level": 750
  },
  {
    "word": "compatibility",
    "partOfSpeech": "n",
    "meaning": "相容性",
    "category": "it",
    "level": 800
  },
  {
    "word": "integration",
    "partOfSpeech": "n",
    "meaning": "整合",
    "category": "it",
    "level": 750
  },
  {
    "word": "configuration",
    "partOfSpeech": "n",
    "meaning": "設定",
    "category": "it",
    "level": 750
  },
  {
    "word": "installation",
    "partOfSpeech": "n",
    "meaning": "安裝",
    "category": "it",
    "level": 700
  },
  {
    "word": "patch",
    "partOfSpeech": "n",
    "meaning": "修補程式",
    "category": "software",
    "level": 750
  },
  {
    "word": "bug-fix",
    "partOfSpeech": "n",
    "meaning": "錯誤修正",
    "category": "software",
    "level": 700
  },
  {
    "word": "release-notes",
    "partOfSpeech": "n",
    "meaning": "版本更新說明",
    "category": "software",
    "level": 750
  },
  {
    "word": "performance-improvement",
    "partOfSpeech": "n",
    "meaning": "效能改善",
    "category": "software",
    "level": 750
  },
  {
    "word": "feature-enhancement",
    "partOfSpeech": "n",
    "meaning": "功能強化",
    "category": "software",
    "level": 800
  },
  {
    "word": "system-restart",
    "partOfSpeech": "n",
    "meaning": "系統重新啟動",
    "category": "software",
    "level": 700
  },
  {
    "word": "known-issue",
    "partOfSpeech": "n",
    "meaning": "已知問題",
    "category": "software",
    "level": 750
  },
  {
    "word": "version-release",
    "partOfSpeech": "n",
    "meaning": "版本釋出",
    "category": "software",
    "level": 700
  },
  {
    "word": "subscription",
    "partOfSpeech": "n",
    "meaning": "訂閱方案",
    "category": "subscription",
    "level": 700
  },
  {
    "word": "plan",
    "partOfSpeech": "n",
    "meaning": "方案",
    "category": "subscription",
    "level": 700
  },
  {
    "word": "pricing",
    "partOfSpeech": "n",
    "meaning": "定價",
    "category": "subscription",
    "level": 700
  },
  {
    "word": "auto-renewal",
    "partOfSpeech": "n",
    "meaning": "自動續訂",
    "category": "subscription",
    "level": 750
  },
  {
    "word": "trial-period",
    "partOfSpeech": "n",
    "meaning": "試用期",
    "category": "subscription",
    "level": 700
  },
  {
    "word": "refund-policy",
    "partOfSpeech": "n",
    "meaning": "退款政策",
    "category": "subscription",
    "level": 750
  },
  {
    "word": "plan-downgrade",
    "partOfSpeech": "n",
    "meaning": "方案降級",
    "category": "subscription",
    "level": 750
  },
  {
    "word": "plan-upgrade",
    "partOfSpeech": "n",
    "meaning": "方案升級",
    "category": "subscription",
    "level": 750
  },
  {
    "word": "technical-support",
    "partOfSpeech": "n",
    "meaning": "技術支援",
    "category": "support",
    "level": 700
  },
  {
    "word": "support-ticket",
    "partOfSpeech": "n",
    "meaning": "客服案件",
    "category": "support",
    "level": 750
  },
  {
    "word": "troubleshooting",
    "partOfSpeech": "n",
    "meaning": "問題排除",
    "category": "support",
    "level": 800
  },
  {
    "word": "response-time",
    "partOfSpeech": "n",
    "meaning": "回應時間",
    "category": "support",
    "level": 750
  },
  {
    "word": "service-request",
    "partOfSpeech": "n",
    "meaning": "服務請求",
    "category": "support",
    "level": 700
  },
  {
    "word": "escalation",
    "partOfSpeech": "n",
    "meaning": "升級處理（轉高階）",
    "category": "support",
    "level": 800
  },
  {
    "word": "service-interruption",
    "partOfSpeech": "n",
    "meaning": "服務中斷",
    "category": "support",
    "level": 750
  },
  {
    "word": "issue-report",
    "partOfSpeech": "n",
    "meaning": "問題回報",
    "category": "support",
    "level": 700
  },
  {
    "word": "reminder",
    "partOfSpeech": "n",
    "meaning": "提醒",
    "category": "email",
    "level": 700
  },
  {
    "word": "correction",
    "partOfSpeech": "n",
    "meaning": "更正",
    "category": "email",
    "level": 750
  },
  {
    "word": "amendment",
    "partOfSpeech": "n",
    "meaning": "修正；修訂",
    "category": "email",
    "level": 800
  },
  {
    "word": "revision",
    "partOfSpeech": "n",
    "meaning": "修訂版本",
    "category": "email",
    "level": 750
  },
  {
    "word": "indefinitely",
    "partOfSpeech": "adv",
    "meaning": "無限期地",
    "category": "schedule",
    "level": 800
  },
  {
    "word": "as-scheduled",
    "partOfSpeech": "adv",
    "meaning": "如期進行",
    "category": "schedule",
    "level": 750
  },
  {
    "word": "prior-notice",
    "partOfSpeech": "n",
    "meaning": "事前通知",
    "category": "schedule",
    "level": 800
  },
  {
    "word": "deadline-extension",
    "partOfSpeech": "n",
    "meaning": "截止期限延長",
    "category": "schedule",
    "level": 800
  },
  {
    "word": "as-a-result-of",
    "partOfSpeech": "prep",
    "meaning": "因為",
    "category": "reason",
    "level": 750
  },
  {
    "word": "in-response-to",
    "partOfSpeech": "prep",
    "meaning": "回應",
    "category": "reason",
    "level": 750
  },
  {
    "word": "at-the-request-of",
    "partOfSpeech": "prep",
    "meaning": "應……要求",
    "category": "reason",
    "level": 750
  },
  {
    "word": "in-light-of",
    "partOfSpeech": "prep",
    "meaning": "鑑於",
    "category": "reason",
    "level": 800
  },
  {
    "word": "unforeseen",
    "partOfSpeech": "adj",
    "meaning": "無法預期的",
    "category": "reason",
    "level": 800
  },
  {
    "word": "circumstances",
    "partOfSpeech": "n",
    "meaning": "情況；狀況",
    "category": "reason",
    "level": 700
  },
  {
    "word": "constraint",
    "partOfSpeech": "n",
    "meaning": "限制",
    "category": "reason",
    "level": 800
  },
  {
    "word": "shortage",
    "partOfSpeech": "n",
    "meaning": "短缺",
    "category": "reason",
    "level": 700
  },
  {
    "word": "thank-you-for-your-patience",
    "partOfSpeech": "phr",
    "meaning": "感謝您的耐心",
    "category": "email",
    "level": 700
  },
  {
    "word": "should-you-have-any-questions",
    "partOfSpeech": "phr",
    "meaning": "若您有任何疑問",
    "category": "email",
    "level": 750
  },
  {
    "word": "do-not-hesitate-to-contact",
    "partOfSpeech": "phr",
    "meaning": "請隨時聯絡",
    "category": "email",
    "level": 750
  },
  {
    "word": "agreement",
    "partOfSpeech": "n",
    "meaning": "協議；合約",
    "category": "legal",
    "level": 700
  },
  {
    "word": "contract",
    "partOfSpeech": "n",
    "meaning": "合約",
    "category": "legal",
    "level": 700
  },
  {
    "word": "provision",
    "partOfSpeech": "n",
    "meaning": "條款；規定",
    "category": "legal",
    "level": 750
  },
  {
    "word": "stipulation",
    "partOfSpeech": "n",
    "meaning": "約定條款",
    "category": "legal",
    "level": 800
  },
  {
    "word": "obligation",
    "partOfSpeech": "n",
    "meaning": "義務",
    "category": "legal",
    "level": 750
  },
  {
    "word": "responsibility",
    "partOfSpeech": "n",
    "meaning": "責任",
    "category": "legal",
    "level": 700
  },
  {
    "word": "noncompliance",
    "partOfSpeech": "n",
    "meaning": "未遵循；違規",
    "category": "legal",
    "level": 800
  },
  {
    "word": "binding",
    "partOfSpeech": "adj",
    "meaning": "具法律約束力的",
    "category": "legal",
    "level": 800
  },
  {
    "word": "enforceable",
    "partOfSpeech": "adj",
    "meaning": "可執行的（法律）",
    "category": "legal",
    "level": 850
  },
  {
    "word": "terminate",
    "partOfSpeech": "v",
    "meaning": "終止（合約）",
    "category": "legal",
    "level": 700
  },
  {
    "word": "termination",
    "partOfSpeech": "n",
    "meaning": "終止",
    "category": "legal",
    "level": 700
  },
  {
    "word": "renewal",
    "partOfSpeech": "n",
    "meaning": "續約",
    "category": "legal",
    "level": 700
  },
  {
    "word": "breach-of-contract",
    "partOfSpeech": "n",
    "meaning": "違約",
    "category": "legal",
    "level": 750
  },
  {
    "word": "penalty",
    "partOfSpeech": "n",
    "meaning": "罰則；違約金",
    "category": "legal",
    "level": 750
  },
  {
    "word": "damages",
    "partOfSpeech": "n",
    "meaning": "損害賠償",
    "category": "legal",
    "level": 800
  },
  {
    "word": "confidential",
    "partOfSpeech": "adj",
    "meaning": "機密的",
    "category": "legal",
    "level": 700
  },
  {
    "word": "disclosure",
    "partOfSpeech": "n",
    "meaning": "揭露；披露",
    "category": "legal",
    "level": 800
  },
  {
    "word": "consent",
    "partOfSpeech": "n",
    "meaning": "同意",
    "category": "legal",
    "level": 700
  },
  {
    "word": "hereby",
    "partOfSpeech": "adv",
    "meaning": "特此；在此",
    "category": "legal",
    "level": 800
  },
  {
    "word": "thereof",
    "partOfSpeech": "adv",
    "meaning": "其相關的",
    "category": "legal",
    "level": 850
  },
  {
    "word": "wherein",
    "partOfSpeech": "adv",
    "meaning": "在其中",
    "category": "legal",
    "level": 850
  },
  {
    "word": "pursuant-to",
    "partOfSpeech": "prep",
    "meaning": "依據",
    "category": "legal",
    "level": 850
  },
  {
    "word": "subject-to",
    "partOfSpeech": "prep",
    "meaning": "以……為條件",
    "category": "legal",
    "level": 800
  },
  {
    "word": "without-prior-notice",
    "partOfSpeech": "phr",
    "meaning": "未經事先通知",
    "category": "legal",
    "level": 800
  },
  {
    "word": "discount",
    "partOfSpeech": "n",
    "meaning": "折扣",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "special-offer",
    "partOfSpeech": "n",
    "meaning": "特別優惠",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "limited-time",
    "partOfSpeech": "adj",
    "meaning": "限時的",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "price-reduction",
    "partOfSpeech": "n",
    "meaning": "降價",
    "category": "promotion",
    "level": 750
  },
  {
    "word": "markdown",
    "partOfSpeech": "n",
    "meaning": "降價（零售）",
    "category": "promotion",
    "level": 750
  },
  {
    "word": "rebate",
    "partOfSpeech": "n",
    "meaning": "回饋金；折讓",
    "category": "promotion",
    "level": 800
  },
  {
    "word": "voucher",
    "partOfSpeech": "n",
    "meaning": "抵用券",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "coupon",
    "partOfSpeech": "n",
    "meaning": "折價券",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "redeem",
    "partOfSpeech": "v",
    "meaning": "兌換（優惠）",
    "category": "promotion",
    "level": 750
  },
  {
    "word": "exclusion",
    "partOfSpeech": "n",
    "meaning": "排除項目",
    "category": "promotion",
    "level": 800
  },
  {
    "word": "non-refundable",
    "partOfSpeech": "adj",
    "meaning": "不可退款的",
    "category": "promotion",
    "level": 750
  },
  {
    "word": "terms-apply",
    "partOfSpeech": "phr",
    "meaning": "適用條款",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "while-supplies-last",
    "partOfSpeech": "phr",
    "meaning": "售完為止",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "retail-price",
    "partOfSpeech": "n",
    "meaning": "零售價",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "original-price",
    "partOfSpeech": "n",
    "meaning": "原價",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "sale-price",
    "partOfSpeech": "n",
    "meaning": "特價",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "bundle",
    "partOfSpeech": "n",
    "meaning": "組合銷售",
    "category": "promotion",
    "level": 750
  },
  {
    "word": "free-of-charge",
    "partOfSpeech": "adj",
    "meaning": "免費的",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "loyalty-program",
    "partOfSpeech": "n",
    "meaning": "會員／忠誠計畫",
    "category": "promotion",
    "level": 750
  },
  {
    "word": "membership",
    "partOfSpeech": "n",
    "meaning": "會員資格",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "reward-points",
    "partOfSpeech": "n",
    "meaning": "回饋點數",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "exclusive",
    "partOfSpeech": "adj",
    "meaning": "專屬的",
    "category": "promotion",
    "level": 750
  },
  {
    "word": "early-bird",
    "partOfSpeech": "adj",
    "meaning": "早鳥優惠",
    "category": "promotion",
    "level": 750
  },
  {
    "word": "seasonal-sale",
    "partOfSpeech": "n",
    "meaning": "季節性促銷",
    "category": "promotion",
    "level": 700
  },
  {
    "word": "customer-service",
    "partOfSpeech": "n",
    "meaning": "客服部門",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "file-a-complaint",
    "partOfSpeech": "phr",
    "meaning": "提出投訴",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "dissatisfied",
    "partOfSpeech": "adj",
    "meaning": "不滿意的",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "regret",
    "partOfSpeech": "v",
    "meaning": "對…感到抱歉",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "issue-a-refund",
    "partOfSpeech": "phr",
    "meaning": "辦理退款",
    "category": "refund",
    "level": 700
  },
  {
    "word": "partial-refund",
    "partOfSpeech": "n",
    "meaning": "部分退款",
    "category": "refund",
    "level": 750
  },
  {
    "word": "full-refund",
    "partOfSpeech": "n",
    "meaning": "全額退款",
    "category": "refund",
    "level": 700
  },
  {
    "word": "processing-fee",
    "partOfSpeech": "n",
    "meaning": "手續費",
    "category": "refund",
    "level": 750
  },
  {
    "word": "eligible-for-a-refund",
    "partOfSpeech": "phr",
    "meaning": "符合退款資格",
    "category": "refund",
    "level": 750
  },
  {
    "word": "refund-request",
    "partOfSpeech": "n",
    "meaning": "退款申請",
    "category": "refund",
    "level": 700
  },
  {
    "word": "refund-period",
    "partOfSpeech": "n",
    "meaning": "退款期限",
    "category": "refund",
    "level": 750
  },
  {
    "word": "case-number",
    "partOfSpeech": "n",
    "meaning": "案件編號",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "reference-number",
    "partOfSpeech": "n",
    "meaning": "參考編號",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "respond-promptly",
    "partOfSpeech": "phr",
    "meaning": "迅速回覆",
    "category": "customer-service",
    "level": 750
  },
  {
    "word": "contact-us",
    "partOfSpeech": "phr",
    "meaning": "聯絡我們",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "support-team",
    "partOfSpeech": "n",
    "meaning": "客服團隊",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "customer-satisfaction",
    "partOfSpeech": "n",
    "meaning": "顧客滿意度",
    "category": "customer-service",
    "level": 700
  },
  {
    "word": "meeting",
    "partOfSpeech": "n",
    "meaning": "會議",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "attend",
    "partOfSpeech": "v",
    "meaning": "出席",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "confirm-attendance",
    "partOfSpeech": "phr",
    "meaning": "確認出席",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "postponement",
    "partOfSpeech": "n",
    "meaning": "延期",
    "category": "schedule",
    "level": 700
  },
  {
    "word": "rescheduled",
    "partOfSpeech": "adj",
    "meaning": "已改期的",
    "category": "schedule",
    "level": 700
  },
  {
    "word": "be-delayed",
    "partOfSpeech": "phr",
    "meaning": "被延遲",
    "category": "schedule",
    "level": 700
  },
  {
    "word": "call-off",
    "partOfSpeech": "v",
    "meaning": "取消（非正式）",
    "category": "schedule",
    "level": 750
  },
  {
    "word": "on-site",
    "partOfSpeech": "adj",
    "meaning": "現場的",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "virtual",
    "partOfSpeech": "adj",
    "meaning": "線上的",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "conference-room",
    "partOfSpeech": "n",
    "meaning": "會議室",
    "category": "meetings",
    "level": 700
  },
  {
    "word": "time-slot",
    "partOfSpeech": "n",
    "meaning": "時段",
    "category": "schedule",
    "level": 750
  },
  {
    "word": "duration",
    "partOfSpeech": "n",
    "meaning": "持續時間",
    "category": "schedule",
    "level": 750
  },
  {
    "word": "starting-time",
    "partOfSpeech": "n",
    "meaning": "開始時間",
    "category": "schedule",
    "level": 700
  },
  {
    "word": "ending-time",
    "partOfSpeech": "n",
    "meaning": "結束時間",
    "category": "schedule",
    "level": 700
  },
  {
    "word": "time-change",
    "partOfSpeech": "n",
    "meaning": "時間異動",
    "category": "schedule",
    "level": 750
  },
  {
    "word": "short-notice",
    "partOfSpeech": "n",
    "meaning": "臨時通知",
    "category": "communication",
    "level": 750
  },
  {
    "word": "internal-announcement",
    "partOfSpeech": "n",
    "meaning": "內部公告",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "memorandum",
    "partOfSpeech": "n",
    "meaning": "備忘錄（memo）",
    "category": "announcement",
    "level": 700
  },
  {
    "word": "bulletin",
    "partOfSpeech": "n",
    "meaning": "公告欄通知",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "circular",
    "partOfSpeech": "n",
    "meaning": "傳閱通知",
    "category": "announcement",
    "level": 750
  },
  {
    "word": "policy-change",
    "partOfSpeech": "n",
    "meaning": "政策變更",
    "category": "policy",
    "level": 700
  },
  {
    "word": "implementation",
    "partOfSpeech": "n",
    "meaning": "實施",
    "category": "policy",
    "level": 750
  },
  {
    "word": "effective-as-of",
    "partOfSpeech": "phr",
    "meaning": "自某日起生效",
    "category": "policy",
    "level": 700
  },
  {
    "word": "with-immediate-effect",
    "partOfSpeech": "phr",
    "meaning": "即刻生效",
    "category": "policy",
    "level": 750
  },
  {
    "word": "employee",
    "partOfSpeech": "n",
    "meaning": "員工",
    "category": "hr",
    "level": 700
  },
  {
    "word": "staff-member",
    "partOfSpeech": "n",
    "meaning": "職員",
    "category": "hr",
    "level": 700
  },
  {
    "word": "personnel",
    "partOfSpeech": "n",
    "meaning": "人事；人員",
    "category": "hr",
    "level": 700
  },
  {
    "word": "human-resources",
    "partOfSpeech": "n",
    "meaning": "人力資源部",
    "category": "hr",
    "level": 700
  },
  {
    "word": "management",
    "partOfSpeech": "n",
    "meaning": "管理階層",
    "category": "hr",
    "level": 700
  },
  {
    "word": "executive",
    "partOfSpeech": "n",
    "meaning": "高階主管",
    "category": "hr",
    "level": 750
  },
  {
    "word": "supervisor",
    "partOfSpeech": "n",
    "meaning": "主管",
    "category": "hr",
    "level": 700
  },
  {
    "word": "appointment",
    "partOfSpeech": "n",
    "meaning": "任命",
    "category": "hr",
    "level": 700
  },
  {
    "word": "retirement",
    "partOfSpeech": "n",
    "meaning": "退休",
    "category": "hr",
    "level": 700
  },
  {
    "word": "applicable",
    "partOfSpeech": "adj",
    "meaning": "適用的",
    "category": "general",
    "level": 700
  },
  {
    "word": "mandatory",
    "partOfSpeech": "adj",
    "meaning": "強制的",
    "category": "general",
    "level": 700
  },
  {
    "word": "until-further-notice",
    "partOfSpeech": "phr",
    "meaning": "另行通知前",
    "category": "general",
    "level": 750
  },
  {
    "word": "for-your-reference",
    "partOfSpeech": "phr",
    "meaning": "供您參考",
    "category": "general",
    "level": 700
  },
  {
    "word": "please-be-advised-that",
    "partOfSpeech": "phr",
    "meaning": "請注意",
    "category": "general",
    "level": 700
  },
  {
    "word": "repair",
    "partOfSpeech": "n",
    "meaning": "修理",
    "category": "operations",
    "level": 700
  },
  {
    "word": "malfunction",
    "partOfSpeech": "n",
    "meaning": "故障",
    "category": "operations",
    "level": 750
  },
  {
    "word": "outage",
    "partOfSpeech": "n",
    "meaning": "停電；系統中斷",
    "category": "operations",
    "level": 800
  },
  {
    "word": "shutdown",
    "partOfSpeech": "n",
    "meaning": "關機；停工",
    "category": "operations",
    "level": 750
  },
  {
    "word": "resume",
    "partOfSpeech": "v",
    "meaning": "恢復；重新開始",
    "category": "operations",
    "level": 700
  },
  {
    "word": "unscheduled",
    "partOfSpeech": "adj",
    "meaning": "未預期的",
    "category": "operations",
    "level": 800
  },
  {
    "word": "technician",
    "partOfSpeech": "n",
    "meaning": "技術人員",
    "category": "operations",
    "level": 700
  },
  {
    "word": "inspection",
    "partOfSpeech": "n",
    "meaning": "檢查；檢驗",
    "category": "operations",
    "level": 750
  },
  {
    "word": "replacement",
    "partOfSpeech": "n",
    "meaning": "替換；替代品",
    "category": "operations",
    "level": 750
  },
  {
    "word": "component",
    "partOfSpeech": "n",
    "meaning": "零件；組件",
    "category": "operations",
    "level": 750
  },
  {
    "word": "equipment",
    "partOfSpeech": "n",
    "meaning": "設備（不可數）",
    "category": "operations",
    "level": 700
  },
  {
    "word": "inoperable",
    "partOfSpeech": "adj",
    "meaning": "無法運作的",
    "category": "operations",
    "level": 800
  },
  {
    "word": "restore",
    "partOfSpeech": "v",
    "meaning": "恢復",
    "category": "operations",
    "level": 750
  },
  {
    "word": "faulty",
    "partOfSpeech": "adj",
    "meaning": "有缺陷的；故障的",
    "category": "operations",
    "level": 750
  },
  {
    "word": "undergo",
    "partOfSpeech": "v",
    "meaning": "經歷；接受（維修）",
    "category": "operations",
    "level": 800
  },
  {
    "word": "preventive",
    "partOfSpeech": "adj",
    "meaning": "預防性的",
    "category": "operations",
    "level": 800
  },
  {
    "word": "preventive maintenance",
    "partOfSpeech": "n",
    "meaning": "預防性維修",
    "category": "operations",
    "level": 850
  },
  {
    "word": "reopen",
    "partOfSpeech": "v",
    "meaning": "重新開放",
    "category": "operations",
    "level": 700
  },
  {
    "word": "term",
    "partOfSpeech": "n",
    "meaning": "條件；期限",
    "category": "legal",
    "level": 700
  },
  {
    "word": "condition",
    "partOfSpeech": "n",
    "meaning": "條件",
    "category": "legal",
    "level": 700
  },
  {
    "word": "renew",
    "partOfSpeech": "v",
    "meaning": "續約",
    "category": "legal",
    "level": 700
  },
  {
    "word": "amend",
    "partOfSpeech": "v",
    "meaning": "修訂；修改",
    "category": "legal",
    "level": 750
  },
  {
    "word": "execute",
    "partOfSpeech": "v",
    "meaning": "正式簽署；執行（合約）",
    "category": "legal",
    "level": 800
  },
  {
    "word": "signatory",
    "partOfSpeech": "n",
    "meaning": "簽署人",
    "category": "legal",
    "level": 800
  },
  {
    "word": "counterpart",
    "partOfSpeech": "n",
    "meaning": "對方；副本",
    "category": "legal",
    "level": 800
  },
  {
    "word": "effective date",
    "partOfSpeech": "n",
    "meaning": "生效日期",
    "category": "legal",
    "level": 750
  },
  {
    "word": "valid",
    "partOfSpeech": "adj",
    "meaning": "有效的",
    "category": "legal",
    "level": 700
  },
  {
    "word": "void",
    "partOfSpeech": "adj",
    "meaning": "無效的",
    "category": "legal",
    "level": 750
  },
  {
    "word": "enforce",
    "partOfSpeech": "v",
    "meaning": "執行；強制實施",
    "category": "legal",
    "level": 800
  },
  {
    "word": "governing law",
    "partOfSpeech": "n",
    "meaning": "準據法",
    "category": "legal",
    "level": 850
  },
  {
    "word": "jurisdiction",
    "partOfSpeech": "n",
    "meaning": "司法管轄權",
    "category": "legal",
    "level": 850
  },
  {
    "word": "counterparty",
    "partOfSpeech": "n",
    "meaning": "交易對手",
    "category": "legal",
    "level": 850
  },
  {
    "word": "increase",
    "partOfSpeech": "v",
    "meaning": "增加",
    "category": "data",
    "level": 700
  },
  {
    "word": "decrease",
    "partOfSpeech": "v",
    "meaning": "減少",
    "category": "data",
    "level": 700
  },
  {
    "word": "rise",
    "partOfSpeech": "v",
    "meaning": "上升",
    "category": "data",
    "level": 700
  },
  {
    "word": "decline",
    "partOfSpeech": "v",
    "meaning": "下降",
    "category": "data",
    "level": 750
  },
  {
    "word": "fluctuate",
    "partOfSpeech": "v",
    "meaning": "波動",
    "category": "data",
    "level": 750
  },
  {
    "word": "stabilize",
    "partOfSpeech": "v",
    "meaning": "趨於穩定",
    "category": "data",
    "level": 800
  },
  {
    "word": "peak",
    "partOfSpeech": "v",
    "meaning": "達到高峰",
    "category": "data",
    "level": 750
  },
  {
    "word": "dip",
    "partOfSpeech": "v",
    "meaning": "小幅下降",
    "category": "data",
    "level": 750
  },
  {
    "word": "surge",
    "partOfSpeech": "v",
    "meaning": "激增",
    "category": "data",
    "level": 800
  },
  {
    "word": "drop",
    "partOfSpeech": "v",
    "meaning": "下降",
    "category": "data",
    "level": 700
  },
  {
    "word": "growth",
    "partOfSpeech": "n",
    "meaning": "成長；成長率",
    "category": "data",
    "level": 700
  },
  {
    "word": "trend",
    "partOfSpeech": "n",
    "meaning": "趨勢",
    "category": "data",
    "level": 700
  },
  {
    "word": "pattern",
    "partOfSpeech": "n",
    "meaning": "模式；走向",
    "category": "data",
    "level": 750
  },
  {
    "word": "variation",
    "partOfSpeech": "n",
    "meaning": "變化",
    "category": "data",
    "level": 800
  },
  {
    "word": "percentage",
    "partOfSpeech": "n",
    "meaning": "百分比",
    "category": "data",
    "level": 700
  },
  {
    "word": "proportion",
    "partOfSpeech": "n",
    "meaning": "比例",
    "category": "data",
    "level": 750
  },
  {
    "word": "figure",
    "partOfSpeech": "n",
    "meaning": "數據；數字",
    "category": "data",
    "level": 700
  },
  {
    "word": "average",
    "partOfSpeech": "n",
    "meaning": "平均值",
    "category": "data",
    "level": 700
  },
  {
    "word": "slight",
    "partOfSpeech": "adj",
    "meaning": "輕微的",
    "category": "data",
    "level": 700
  },
  {
    "word": "steady",
    "partOfSpeech": "adj",
    "meaning": "穩定的",
    "category": "data",
    "level": 700
  },
  {
    "word": "gradual",
    "partOfSpeech": "adj",
    "meaning": "逐漸的",
    "category": "data",
    "level": 750
  },
  {
    "word": "sharp",
    "partOfSpeech": "adj",
    "meaning": "急劇的",
    "category": "data",
    "level": 750
  },
  {
    "word": "overall",
    "partOfSpeech": "adj",
    "meaning": "整體的",
    "category": "data",
    "level": 700
  },
  {
    "word": "comparative",
    "partOfSpeech": "adj",
    "meaning": "比較的",
    "category": "data",
    "level": 800
  },
  {
    "word": "approximately",
    "partOfSpeech": "adv",
    "meaning": "大約",
    "category": "data",
    "level": 700
  },
  {
    "word": "nearly",
    "partOfSpeech": "adv",
    "meaning": "幾乎",
    "category": "data",
    "level": 700
  },
  {
    "word": "roughly",
    "partOfSpeech": "adv",
    "meaning": "大致上",
    "category": "data",
    "level": 700
  },
  {
    "word": "steadily",
    "partOfSpeech": "adv",
    "meaning": "穩定地",
    "category": "data",
    "level": 750
  },
  {
    "word": "sharply",
    "partOfSpeech": "adv",
    "meaning": "急劇地",
    "category": "data",
    "level": 750
  },
  {
    "word": "consistently",
    "partOfSpeech": "adv",
    "meaning": "持續地；一致地",
    "category": "data",
    "level": 800
  },
  {
    "word": "noticeably",
    "partOfSpeech": "adv",
    "meaning": "明顯地",
    "category": "data",
    "level": 800
  }
];

export default toeicVocabData;
