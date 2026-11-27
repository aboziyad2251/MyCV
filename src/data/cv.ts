// Single source of truth for the site. All text comes from Mohammad_Abotargah_CV.pdf.
// Edit here, run `npm run build`, and both the English (/) and Arabic (/ar/) pages update.

export type Lang = "en" | "ar";
export type T = { en: string; ar: string };

export const contact = {
  phone: "+966 53 065 6998",
  phoneHref: "tel:+966530656998",
  whatsapp: "https://wa.me/966530656998",
  email: "tarj123@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammad-abotargah",
  linkedinLabel: "linkedin.com/in/mohammad-abotargah",
  github: "https://github.com/aboziyad2251",
  pdf: "/Mohammad_Abotargah_CV.pdf",
  site: "https://moh-cv.kohlestate-ksa.online",
};

export const person = {
  name: { en: "Mohammad Abotargah", ar: "محمد ابوطرجه" } as T,
  headline: {
    en: "Operations & Digital Transformation Leader",
    ar: "قائد العمليات والتحول الرقمي",
  } as T,
  focus: {
    en: "Real Estate ERP · CRM · AI Automation",
    ar: "أنظمة ERP العقارية · إدارة علاقات العملاء · الأتمتة بالذكاء الاصطناعي",
  } as T,
  now: {
    en: "Head of Operations & Digital Transformation at Kohl Real Estate",
    ar: "رئيس العمليات والتحول الرقمي في كحل العقارية",
  } as T,
  location: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" } as T,
  summary: {
    en: "Operations and digital transformation leader who built a full in-house ERP for a FAL-licensed real estate firm with no technical team: 34 tables covering properties, contracts, CRM, finance and HR, with an AI-automated daily income report running on live ERP data. As project manager and lead developer, delivered 6 live digital products on self-managed cloud servers. Brings 15+ years of SABIC operations discipline: $200,000 production cost cut, 15% power reduction, 15% productivity gain and a $2M+ turnaround finished 5 days early. Google-certified project manager; Bachelor of Project Management expected Apr 2027.",
    ar: "قائد عمليات وتحول رقمي بنى نظام ERP داخلياً متكاملاً لمنشأة عقارية مرخّصة من فال دون فريق تقني: 34 جدولاً تغطي العقارات والعقود وإدارة علاقات العملاء والمالية والموارد البشرية، مع تقرير دخل يومي مؤتمت بالذكاء الاصطناعي يعمل على بيانات ERP الحية. بصفتي مدير مشاريع ومطوراً رئيسياً، سلّمت 6 منتجات رقمية حية على خوادم سحابية أديرها بنفسي. أحمل انضباط أكثر من 15 عاماً في عمليات سابك: خفض تكاليف الإنتاج 200,000 دولار، وخفض استهلاك الطاقة 15%، ورفع الإنتاجية 15%، وصيانة شاملة تتجاوز مليوني دولار أُنجزت قبل موعدها بخمسة أيام. مدير مشاريع معتمد من Google، وبكالوريوس إدارة المشاريع متوقع في أبريل 2027.",
  } as T,
};

export const highlights: { value: string; label: T }[] = [
  { value: "34", label: { en: "table ERP built with no tech team", ar: "جدولاً في نظام ERP بُني دون فريق تقني" } },
  { value: "190+", label: { en: "leads and 700+ activities in own CRM", ar: "عميلاً محتملاً و700+ نشاط في نظام CRM خاص" } },
  { value: "6", label: { en: "live digital products delivered", ar: "منتجات رقمية حية تم تسليمها" } },
  { value: "$200K", label: { en: "cost cut and 15% power cut at SABIC", ar: "خفض في التكاليف و15% خفض في الطاقة بسابك" } },
];

export const competencies: { group: T; items: T[] }[] = [
  {
    group: { en: "Digital Transformation", ar: "التحول الرقمي" },
    items: [
      { en: "ERP design and build", ar: "تصميم وبناء أنظمة ERP" },
      { en: "CRM pipeline and integration", ar: "مسار CRM وتكامله" },
      { en: "Workflow automation (n8n, Supabase)", ar: "أتمتة سير العمل (n8n وSupabase)" },
      { en: "AI-driven reporting", ar: "تقارير مدعومة بالذكاء الاصطناعي" },
      { en: "Self-managed cloud deployment", ar: "نشر سحابي بإدارة ذاتية" },
    ],
  },
  {
    group: { en: "Real Estate Operations", ar: "العمليات العقارية" },
    items: [
      { en: "Property management", ar: "إدارة الأملاك" },
      { en: "Sales, leasing and collections", ar: "المبيعات والتأجير والتحصيل" },
      { en: "Contracts and templates", ar: "العقود والقوالب" },
      { en: "SOPs and unified forms", ar: "إجراءات التشغيل والنماذج الموحدة" },
      { en: "KPI reporting", ar: "تقارير مؤشرات الأداء" },
    ],
  },
  {
    group: { en: "Leadership & PM", ar: "القيادة وإدارة المشاريع" },
    items: [
      { en: "PMBOK lifecycle", ar: "دورة حياة PMBOK" },
      { en: "Budget control", ar: "ضبط الميزانية" },
      { en: "Change control", ar: "ضبط التغيير" },
      { en: "Team building and training (TOT, Subject Matter Expert)", ar: "بناء الفرق والتدريب (TOT، خبير متخصص)" },
      { en: "Stakeholder management", ar: "إدارة أصحاب المصلحة" },
    ],
  },
  {
    group: { en: "Operational Excellence", ar: "التميز التشغيلي" },
    items: [
      { en: "Production cost and energy optimization", ar: "تحسين تكاليف الإنتاج والطاقة" },
      { en: "SAP (MM/PP)", ar: "SAP (MM/PP)" },
      { en: "DCS", ar: "DCS" },
      { en: "HAZOP · ISO audits", ar: "HAZOP · تدقيقات ISO" },
      { en: "NEBOSH safety", ar: "سلامة NEBOSH" },
    ],
  },
];

export type Role = { title: T; period: T; points: T[] };
export type Org = { org: T; place: T; period: T; context?: T; roles: Role[] };

export const digitalExperience: Org[] = [
  {
    org: { en: "Kohl Real Estate", ar: "كحل العقارية" },
    place: { en: "Jeddah, Saudi Arabia", ar: "جدة، السعودية" },
    period: { en: "Aug 2026 – Present", ar: "أغسطس 2026 – الآن" },
    context: {
      en: "FAL-licensed real estate firm (brokerage, property management, auctions) expanding into Jeddah.",
      ar: "منشأة عقارية مرخّصة من فال (وساطة وإدارة أملاك ومزادات) تتوسع في جدة.",
    },
    roles: [
      {
        title: { en: "Head of Operations & Digital Transformation", ar: "رئيس العمليات والتحول الرقمي" },
        period: { en: "", ar: "" },
        points: [
          { en: "Built the company's in-house ERP with no technical team: properties, contracts, CRM, finance and HR on a 34-table database.", ar: "بنيت نظام ERP داخلياً للشركة دون فريق تقني: العقارات والعقود وإدارة علاقات العملاء والمالية والموارد البشرية على قاعدة بيانات من 34 جدولاً." },
          { en: "Automated the daily income report to management with AI connected to live ERP data.", ar: "أتمتة تقرير الدخل اليومي للإدارة بالذكاء الاصطناعي المتصل ببيانات ERP الحية." },
          { en: "Set up a CRM pipeline tracking 190+ leads and 700+ client activities across a 20-property portfolio.", ar: "أسست مسار CRM يتابع أكثر من 190 عميلاً محتملاً و700 نشاط مع العملاء عبر محفظة من 20 عقاراً." },
          { en: "Digitized the 46-page operating constitution into SOPs, unified forms and contract templates.", ar: "حوّلت دستور التشغيل المكوّن من 46 صفحة إلى إجراءات تشغيل قياسية ونماذج موحدة وقوالب عقود رقمية." },
          { en: "Automated call routing, launched a post-call satisfaction survey and hired a leasing specialist.", ar: "أتمتة توجيه المكالمات، وإطلاق استبيان رضا بعد المكالمة، وتوظيف أخصائي تأجير." },
        ],
      },
    ],
  },
  {
    org: { en: "Technical Entrepreneurship (Private Business)", ar: "الريادة التقنية (عمل خاص)" },
    place: { en: "Jeddah, Saudi Arabia", ar: "جدة، السعودية" },
    period: { en: "2024 – Present", ar: "2024 – الآن" },
    roles: [
      {
        title: { en: "Project Manager & Lead Developer", ar: "مدير مشاريع ومطور رئيسي" },
        period: { en: "", ar: "" },
        points: [
          { en: "Delivered 6 live digital products (learning platform, mobile app, AI CV and exam tools, HR payroll) on self-managed cloud servers.", ar: "سلّمت 6 منتجات رقمية حية (منصة تعليمية، تطبيق جوال، أدوات سيرة ذاتية واختبارات بالذكاء الاصطناعي، نظام رواتب للموارد البشرية) على خوادم سحابية أديرها بنفسي." },
        ],
      },
    ],
  },
  {
    org: { en: "B-MAI Bottled Water Plant", ar: "مصنع B-MAI للمياه المعبأة" },
    place: { en: "Jeddah 3rd Industrial City", ar: "المدينة الصناعية الثالثة بجدة" },
    period: { en: "2026 – Present", ar: "2026 – الآن" },
    roles: [
      {
        title: { en: "Project Manager", ar: "مدير المشروع" },
        period: { en: "", ar: "" },
        points: [
          { en: "Leading the feasibility study (ROI, break-even) for a new factory in Jeddah 3rd Industrial City.", ar: "أقود دراسة الجدوى (العائد على الاستثمار ونقطة التعادل) لمصنع جديد في المدينة الصناعية الثالثة بجدة." },
        ],
      },
    ],
  },
];

export const operationsExperience: Org[] = [
  {
    org: { en: "SABIC", ar: "سابك" },
    place: { en: "Yanbu, Saudi Arabia", ar: "ينبع، السعودية" },
    period: { en: "Oct 2008 – Jul 2024", ar: "أكتوبر 2008 – يوليو 2024" },
    roles: [
      {
        title: { en: "Operations Specialist – HDPE Operations (Acting)", ar: "أخصائي عمليات – عمليات HDPE (بالإنابة)" },
        period: { en: "Jan 2024 – Jul 2024", ar: "يناير 2024 – يوليو 2024" },
        points: [
          { en: "Monitored all HDPE assets against safety, quality and production targets; led SOP reviews to ISO standards.", ar: "راقبت جميع أصول HDPE وفق أهداف السلامة والجودة والإنتاج، وقدت مراجعات إجراءات التشغيل القياسية وفق معايير ISO." },
          { en: "Represented HDPE in cross-department reliability work; took part in HAZOP studies and ISO audits.", ar: "مثّلت وحدة HDPE في أعمال الموثوقية بين الإدارات، وشاركت في دراسات HAZOP وتدقيقات ISO." },
        ],
      },
      {
        title: { en: "DCS Senior Operator / Operations Team Lead – HDPE", ar: "مشغّل أول DCS / قائد فريق العمليات – HDPE" },
        period: { en: "Oct 2017 – Jan 2024", ar: "أكتوبر 2017 – يناير 2024" },
        points: [
          { en: "Cut production costs by $200,000, reduced power use by 15% and raised team productivity by 15%.", ar: "خفّضت تكاليف الإنتاج 200,000 دولار، وقلّلت استهلاك الطاقة 15%، ورفعت إنتاجية الفريق 15%." },
          { en: "Led daily shift oversight and corrective actions; championed change control to reduce downtime.", ar: "قدت الإشراف اليومي على الورديات والإجراءات التصحيحية، وتبنّيت ضبط التغيير لتقليل التوقفات." },
          { en: "Coached and trained junior operators as HDPE Subject Matter Expert.", ar: "درّبت المشغّلين الجدد وأرشدتهم بصفتي خبيراً متخصصاً في HDPE." },
        ],
      },
      {
        title: { en: "Operator", ar: "مشغّل" },
        period: { en: "Oct 2008 – Oct 2017", ar: "أكتوبر 2008 – أكتوبر 2017" },
        points: [
          { en: "Raised critical equipment uptime by 15% through disciplined preventive maintenance.", ar: "رفعت جاهزية المعدات الحرجة 15% عبر صيانة وقائية منضبطة." },
        ],
      },
      {
        title: { en: "Public Safety & Emergency Response Officer (concurrent)", ar: "ضابط السلامة العامة والاستجابة للطوارئ (بالتوازي)" },
        period: { en: "Oct 2012 – Jul 2024", ar: "أكتوبر 2012 – يوليو 2024" },
        points: [
          { en: "Certified first responder managing site emergencies.", ar: "مستجيب أول معتمد يدير حالات الطوارئ في الموقع." },
        ],
      },
    ],
  },
  {
    org: { en: "Reef Glass Pot Caps Company", ar: "شركة ريف لأغطية الأواني الزجاجية" },
    place: { en: "Jeddah, Saudi Arabia", ar: "جدة، السعودية" },
    period: { en: "Feb 2008 – Oct 2008", ar: "فبراير 2008 – أكتوبر 2008" },
    roles: [{ title: { en: "Production Engineer", ar: "مهندس إنتاج" }, period: { en: "", ar: "" }, points: [] }],
  },
];

export const projects: { name: T; role: T; year: string; result: T; figure: string }[] = [
  {
    name: { en: "Polymer Turnaround, SABIC", ar: "الصيانة الشاملة لوحدة البوليمر، سابك" },
    role: { en: "Project Coordinator", ar: "منسق المشروع" },
    year: "2014",
    figure: "$2M+",
    result: { en: "Coordinated maintenance on a $2M+ turnaround with zero downtime, finishing 5 days early.", ar: "نسّقت أعمال صيانة شاملة تتجاوز قيمتها مليوني دولار دون أي توقف، وأُنجزت قبل موعدها بخمسة أيام." },
  },
  {
    name: { en: "Ethylene Glycol GRIP Project, SABIC", ar: "مشروع GRIP لجلايكول الإيثيلين، سابك" },
    role: { en: "Safety Officer", ar: "ضابط السلامة" },
    year: "2014",
    figure: "$20M",
    result: { en: "Cut projected costs by 15% ($20M saved) with zero safety incidents.", ar: "خفّضت التكاليف المتوقعة 15% (وفر 20 مليون دولار) دون أي حادث سلامة." },
  },
  {
    name: { en: "Kohl in-house ERP", ar: "نظام ERP الداخلي في كحل" },
    role: { en: "Architect & builder", ar: "المصمم والمنفّذ" },
    year: "2026",
    figure: "34",
    result: { en: "34-table ERP for properties, contracts, CRM, finance and HR, with an AI daily income report on live data.", ar: "نظام ERP من 34 جدولاً للعقارات والعقود والعملاء والمالية والموارد البشرية، مع تقرير دخل يومي بالذكاء الاصطناعي على البيانات الحية." },
  },
  {
    name: { en: "B-MAI Bottled Water Plant", ar: "مصنع B-MAI للمياه المعبأة" },
    role: { en: "Project Manager", ar: "مدير المشروع" },
    year: "2026",
    figure: "ROI",
    result: { en: "Feasibility study (ROI, break-even) for a new factory in Jeddah 3rd Industrial City.", ar: "دراسة جدوى (العائد ونقطة التعادل) لمصنع جديد في المدينة الصناعية الثالثة بجدة." },
  },
];

export const education: { name: T; org: T; year: T }[] = [
  { name: { en: "Bachelor of Project Management", ar: "بكالوريوس إدارة المشاريع" }, org: { en: "MidOcean University, UAE", ar: "جامعة ميد أوشن، الإمارات" }, year: { en: "Expected Apr 2027", ar: "متوقع أبريل 2027" } },
  { name: { en: "Associate Degree in Manufacturing Engineering", ar: "دبلوم مشارك في هندسة التصنيع" }, org: { en: "Yanbu Industrial College", ar: "كلية ينبع الصناعية" }, year: { en: "2008", ar: "2008" } },
];

export const certifications: { group: T; items: T[] }[] = [
  {
    group: { en: "Project Management", ar: "إدارة المشاريع" },
    items: [
      { en: "Google Project Management Professional Certificate", ar: "شهادة Google الاحترافية في إدارة المشاريع" },
      { en: "Critical Thinking (PMI)", ar: "التفكير النقدي (PMI)" },
      { en: "Project Management Track (Doroob)", ar: "مسار إدارة المشاريع (دروب)" },
    ],
  },
  {
    group: { en: "AI", ar: "الذكاء الاصطناعي" },
    items: [
      { en: "Generative AI for Project Managers (IBM)", ar: "الذكاء الاصطناعي التوليدي لمديري المشاريع (IBM)" },
      { en: "Fundamentals of AI (SDAIA)", ar: "أساسيات الذكاء الاصطناعي (سدايا)" },
    ],
  },
  {
    group: { en: "Safety & Leadership", ar: "السلامة والقيادة" },
    items: [
      { en: "NEBOSH", ar: "NEBOSH" },
      { en: "SHEMS Diploma (SABIC)", ar: "دبلوم SHEMS (سابك)" },
      { en: "Training of Trainers (TOT)", ar: "إعداد المدربين (TOT)" },
      { en: "Supply Chain Management (Rutgers)", ar: "إدارة سلاسل الإمداد (روتجرز)" },
    ],
  },
];

export const languages: { name: T; level: T }[] = [
  { name: { en: "Arabic", ar: "العربية" }, level: { en: "Native", ar: "اللغة الأم" } },
  { name: { en: "English", ar: "الإنجليزية" }, level: { en: "Proficient", ar: "متقدم" } },
  { name: { en: "Spanish", ar: "الإسبانية" }, level: { en: "Beginner", ar: "مبتدئ" } },
];

export const ui = {
  nav: {
    profile: { en: "Profile", ar: "النبذة" },
    experience: { en: "Experience", ar: "الخبرات" },
    projects: { en: "Projects", ar: "المشاريع" },
    skills: { en: "Skills", ar: "المهارات" },
    contact: { en: "Contact", ar: "التواصل" },
  },
  switchTo: { en: "عربي", ar: "English" },
  download: { en: "Download CV (PDF)", ar: "تحميل السيرة (PDF)" },
  downloadShort: { en: "CV PDF", ar: "السيرة PDF" },
  talk: { en: "Get in touch", ar: "تواصل معي" },
  sections: {
    profile: { en: "Profile", ar: "النبذة المهنية" },
    experience: { en: "Experience", ar: "الخبرات العملية" },
    digital: { en: "Digital transformation & real estate operations", ar: "التحول الرقمي والعمليات العقارية" },
    operations: { en: "Operations leadership", ar: "قيادة العمليات" },
    projects: { en: "Key projects", ar: "أبرز المشاريع" },
    skills: { en: "Core competencies", ar: "الكفاءات الأساسية" },
    education: { en: "Education", ar: "التعليم" },
    certs: { en: "Certifications & training", ar: "الشهادات والتدريب" },
    languages: { en: "Languages", ar: "اللغات" },
    contact: { en: "Contact", ar: "التواصل" },
  },
  contactLead: {
    en: "Let's talk operations, digital transformation and project delivery.",
    ar: "لنتحدث عن العمليات والتحول الرقمي وتنفيذ المشاريع.",
  },
  phone: { en: "Phone", ar: "الهاتف" },
  email: { en: "Email", ar: "البريد" },
  whatsapp: { en: "WhatsApp", ar: "واتساب" },
  linkedin: { en: "LinkedIn", ar: "لينكدإن" },
  github: { en: "GitHub", ar: "غيت هب" },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  skip: { en: "Skip to content", ar: "انتقل إلى المحتوى" },
  theme: { en: "Switch light / dark theme", ar: "التبديل بين الوضع الفاتح والداكن" },
  tabs: {
    profile: { en: "Profile", ar: "نبذة" },
    experience: { en: "Career", ar: "الخبرات" },
    projects: { en: "Projects", ar: "مشاريع" },
    skills: { en: "Skills", ar: "مهارات" },
    contact: { en: "Contact", ar: "تواصل" },
  },
};

export const t = (v: T, lang: Lang) => v[lang];
