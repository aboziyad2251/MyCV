// Single source of truth for the CV website. Edit text here; components only render it.
// NOTE: name spelling follows the current CV ("Mohammad Abotargah"). Change it here once you
// settle on one spelling (Cycle 1 task) and every section updates.

export type Lang = "en" | "ar";
type L = { en: string; ar: string };

export const contact = {
  phoneDisplay: "+966 53 065 6998",
  phoneTel: "+966530656998",
  whatsapp: "https://wa.me/966530656998",
  email: "tarj123@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammad-abotargah",
  github: "https://github.com/aboziyad2251",
  cvPdf: "/Mohammad_Abotargah_CV.pdf",
  site: "https://moh-cv.kohlestate-ksa.online",
};

export const person = {
  name: { en: "Mohammad Abotargah", ar: "محمد ابوطرجه" } as L,
  title: {
    en: "Head of Operations & Digital Transformation",
    ar: "رئيس العمليات والتحول الرقمي",
  } as L,
  tagline: {
    en: "15+ years running SABIC production lines. Now building ERP, automation and AI into real estate operations.",
    ar: "أكثر من 15 عاماً في تشغيل خطوط إنتاج سابك، واليوم أبني أنظمة ERP والأتمتة والذكاء الاصطناعي في عمليات القطاع العقاري.",
  } as L,
  location: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" } as L,
  summary: {
    en: "Operations leader with 15+ years at SABIC and hands-on digital transformation in real estate. I cut production costs by $200,000 and power use by 15% at SABIC, and built a full in-house ERP with AI-automated reporting at Kohl Real Estate with no technical team. Google-certified project manager, completing a Bachelor of Project Management.",
    ar: "قائد عمليات بخبرة تتجاوز 15 عاماً في سابك وخبرة عملية في التحول الرقمي بالقطاع العقاري. خفّضت تكاليف الإنتاج 200 ألف دولار واستهلاك الطاقة 15% في سابك، وبنيت نظام ERP داخلياً متكاملاً مع تقارير مؤتمتة بالذكاء الاصطناعي في كحل العقارية دون فريق تقني. مدير مشاريع معتمد من Google، وأستكمل بكالوريوس إدارة المشاريع.",
  } as L,
};

export const metrics: { value: string; label: L }[] = [
  { value: "$20M", label: { en: "projected costs saved, SABIC GRIP project", ar: "وفورات متوقعة في مشروع GRIP بسابك" } },
  { value: "$200K", label: { en: "production costs cut, HDPE plant", ar: "خفض تكاليف الإنتاج في مصنع HDPE" } },
  { value: "15%", label: { en: "power consumption reduced", ar: "خفض استهلاك الطاقة" } },
  { value: "34", label: { en: "tables in a self-built real estate ERP", ar: "جدولاً في نظام ERP عقاري بنيته بنفسي" } },
];

export type Role = {
  org: L; title: L; period: L; place: L; context?: L; points: L[];
};

export const experience: Role[] = [
  {
    org: { en: "Kohl Real Estate", ar: "كحل العقارية" },
    title: { en: "Head of Operations & Digital Transformation", ar: "رئيس العمليات والتحول الرقمي" },
    period: { en: "Aug 2026 – Present", ar: "أغسطس 2026 – الآن" },
    place: { en: "Jeddah", ar: "جدة" },
    context: { en: "FAL-licensed firm: brokerage, property management, auctions.", ar: "منشأة مرخّصة من فال: وساطة وإدارة أملاك ومزادات." },
    points: [
      { en: "Built the company's in-house ERP with no technical team: properties, contracts, CRM, finance and HR on a 34-table database.", ar: "بنيت نظام ERP داخلياً دون فريق تقني: العقارات والعقود وإدارة العملاء والمالية والموارد البشرية على قاعدة بيانات من 34 جدولاً." },
      { en: "Set up a CRM pipeline tracking 190+ leads and 700+ client activities across a 20-property portfolio.", ar: "أسست مسار CRM يتابع أكثر من 190 عميلاً محتملاً و700 نشاط عبر محفظة من 20 عقاراً." },
      { en: "Automated the daily income report to management with AI connected to live ERP data.", ar: "أتمتة التقرير اليومي للدخل للإدارة بالذكاء الاصطناعي المتصل ببيانات ERP الحية." },
      { en: "Digitized the 46-page operating constitution into SOPs, unified forms and contract templates.", ar: "حوّلت دستور التشغيل (46 صفحة) إلى إجراءات تشغيل قياسية ونماذج موحدة وقوالب عقود." },
    ],
  },
  {
    org: { en: "Technical Entrepreneurship", ar: "الريادة التقنية" },
    title: { en: "Project Manager & Lead Developer", ar: "مدير مشاريع ومطور رئيسي" },
    period: { en: "2024 – Present", ar: "2024 – الآن" },
    place: { en: "Jeddah", ar: "جدة" },
    points: [
      { en: "Delivered 6 live digital products (learning platform, mobile app, AI CV and exam tools, HR payroll) on self-managed cloud servers.", ar: "سلّمت 6 منتجات رقمية حية (منصة تعليمية، تطبيق جوال، أدوات سيرة واختبارات بالذكاء الاصطناعي، نظام رواتب) على خوادم سحابية أديرها بنفسي." },
    ],
  },
  {
    org: { en: "SABIC", ar: "سابك" },
    title: { en: "Operations Specialist, HDPE (Acting) · DCS Senior Operator / Team Lead · Operator", ar: "أخصائي عمليات HDPE (بالإنابة) · مشغل أول DCS / قائد فريق · مشغل" },
    period: { en: "Oct 2008 – Jul 2024", ar: "أكتوبر 2008 – يوليو 2024" },
    place: { en: "Yanbu", ar: "ينبع" },
    points: [
      { en: "Cut production costs by $200,000, reduced power use by 15% and raised team productivity by 15%.", ar: "خفّضت تكاليف الإنتاج 200 ألف دولار واستهلاك الطاقة 15% ورفعت إنتاجية الفريق 15%." },
      { en: "Monitored all HDPE assets against safety, quality and production targets; led SOP reviews to ISO standards; HAZOP and ISO audits.", ar: "راقبت جميع أصول HDPE وفق أهداف السلامة والجودة والإنتاج، وقدت مراجعات الإجراءات وفق ISO، وشاركت في دراسات HAZOP وتدقيقات ISO." },
      { en: "Raised critical equipment uptime by 15% through disciplined preventive maintenance.", ar: "رفعت جاهزية المعدات الحرجة 15% عبر صيانة وقائية منضبطة." },
      { en: "Certified first responder and Public Safety & Emergency Response Officer (2012–2024).", ar: "مستجيب أول معتمد وضابط سلامة عامة وطوارئ (2012–2024)." },
    ],
  },
  {
    org: { en: "Reef Glass Pot Caps Company", ar: "شركة ريف لأغطية العبوات الزجاجية" },
    title: { en: "Production Engineer", ar: "مهندس إنتاج" },
    period: { en: "Feb 2008 – Oct 2008", ar: "فبراير 2008 – أكتوبر 2008" },
    place: { en: "Jeddah", ar: "جدة" },
    points: [],
  },
];

export const projects: { name: L; role: L; year: string; text: L }[] = [
  { name: { en: "B-MAI Bottled Water Plant", ar: "مصنع B-MAI للمياه المعبأة" }, role: { en: "Project Manager", ar: "مدير المشروع" }, year: "2026 –", text: { en: "Leading the feasibility study (ROI, break-even) for a new factory in Jeddah 3rd Industrial City.", ar: "أقود دراسة الجدوى (العائد ونقطة التعادل) لمصنع جديد في المدينة الصناعية الثالثة بجدة." } },
  { name: { en: "Kohl ERP & AI reporting", ar: "نظام كحل ERP وتقارير الذكاء الاصطناعي" }, role: { en: "Architect & builder", ar: "مصمم ومنفّذ" }, year: "2026", text: { en: "34-table ERP covering properties, contracts, CRM, finance and HR, with AI daily income reporting.", ar: "نظام من 34 جدولاً يغطي العقارات والعقود والعملاء والمالية والموارد البشرية مع تقرير دخل يومي بالذكاء الاصطناعي." } },
  { name: { en: "6 live digital products", ar: "6 منتجات رقمية حية" }, role: { en: "PM & lead developer", ar: "مدير ومطور رئيسي" }, year: "2024 –", text: { en: "Learning platform, Islamic mobile app, AI CV optimizer, exam tools and HR payroll, self-hosted.", ar: "منصة تعليمية، تطبيق إسلامي، محسّن سيرة ذاتية بالذكاء الاصطناعي، أدوات اختبارات، ونظام رواتب، باستضافة ذاتية." } },
  { name: { en: "Polymer Turnaround, SABIC", ar: "صيانة البوليمرات الشاملة، سابك" }, role: { en: "Project Coordinator", ar: "منسق المشروع" }, year: "2014", text: { en: "Coordinated maintenance on a $2M+ turnaround with zero downtime, finishing 5 days early.", ar: "نسّقت صيانة شاملة بقيمة تتجاوز مليوني دولار دون توقف، وأُنجزت قبل موعدها بـ5 أيام." } },
  { name: { en: "Ethylene Glycol GRIP Project, SABIC", ar: "مشروع GRIP لجلايكول الإيثيلين، سابك" }, role: { en: "Safety Officer", ar: "ضابط السلامة" }, year: "2014", text: { en: "Cut projected costs by 15% ($20M saved) with zero safety incidents.", ar: "خفض التكاليف المتوقعة 15% (وفر 20 مليون دولار) دون أي حوادث سلامة." } },
];

export const competencies: { group: L; items: L }[] = [
  { group: { en: "Operations", ar: "العمليات" }, items: { en: "SOPs · KPI reporting · process optimization · sales, leasing & collections · SAP (MM/PP) · DCS · HAZOP · NEBOSH safety", ar: "إجراءات التشغيل · تقارير المؤشرات · تحسين العمليات · المبيعات والتأجير والتحصيل · SAP (MM/PP) · DCS · HAZOP · سلامة NEBOSH" } },
  { group: { en: "Digital", ar: "الرقمي" }, items: { en: "ERP design & build · workflow automation (n8n, Supabase) · CRM integration · AI in operations · Next.js, TypeScript", ar: "تصميم وبناء ERP · أتمتة سير العمل (n8n وSupabase) · تكامل CRM · الذكاء الاصطناعي في العمليات · Next.js وTypeScript" } },
  { group: { en: "Leadership & PM", ar: "القيادة وإدارة المشاريع" }, items: { en: "PMBOK lifecycle · budget control · team building · training (TOT) · stakeholder management", ar: "دورة حياة PMBOK · ضبط الميزانية · بناء الفرق · التدريب (TOT) · إدارة أصحاب المصلحة" } },
];

export const education: { name: L; org: L; year: L }[] = [
  { name: { en: "Bachelor of Project Management", ar: "بكالوريوس إدارة المشاريع" }, org: { en: "MidOcean University, UAE", ar: "جامعة ميد أوشن، الإمارات" }, year: { en: "Expected Apr 2027", ar: "متوقع أبريل 2027" } },
  { name: { en: "Associate Degree, Manufacturing Engineering", ar: "دبلوم هندسة التصنيع" }, org: { en: "Yanbu Industrial College", ar: "كلية ينبع الصناعية" }, year: { en: "2008", ar: "2008" } },
];

export const certifications: L[] = [
  { en: "Google Project Management Professional Certificate", ar: "شهادة Google الاحترافية في إدارة المشاريع" },
  { en: "Critical Thinking (PMI) · Project Management Track (Doroob)", ar: "التفكير النقدي (PMI) · مسار إدارة المشاريع (دروب)" },
  { en: "Generative AI for Project Managers (IBM) · Fundamentals of AI (SDAIA)", ar: "الذكاء الاصطناعي التوليدي لمديري المشاريع (IBM) · أساسيات الذكاء الاصطناعي (سدايا)" },
  { en: "NEBOSH · SHEMS Diploma (SABIC) · Training of Trainers (TOT)", ar: "NEBOSH · دبلوم SHEMS (سابك) · إعداد المدربين (TOT)" },
  { en: "Supply Chain Management (Rutgers)", ar: "إدارة سلاسل الإمداد (روتجرز)" },
];

export const languages: L = { en: "Arabic (native) · English (proficient) · Spanish (beginner)", ar: "العربية (اللغة الأم) · الإنجليزية (متقدم) · الإسبانية (مبتدئ)" };

export const ui = {
  nav: { about: { en: "About", ar: "نبذة" }, experience: { en: "Experience", ar: "الخبرات" }, projects: { en: "Projects", ar: "المشاريع" }, skills: { en: "Skills", ar: "المهارات" }, contact: { en: "Contact", ar: "تواصل" } },
  download: { en: "Download CV", ar: "تحميل السيرة" },
  hire: { en: "Get in touch", ar: "تواصل معي" },
  experience: { en: "Experience", ar: "الخبرات العملية" },
  projects: { en: "Key projects", ar: "أبرز المشاريع" },
  skills: { en: "Core competencies", ar: "الكفاءات الأساسية" },
  education: { en: "Education", ar: "التعليم" },
  certs: { en: "Certifications & training", ar: "الشهادات والتدريب" },
  languages: { en: "Languages", ar: "اللغات" },
  contact: { en: "Let's talk about your next operations or transformation challenge", ar: "لنتحدث عن تحديك القادم في العمليات أو التحول الرقمي" },
  form: { name: { en: "Your name", ar: "الاسم" }, email: { en: "Your email", ar: "بريدك الإلكتروني" }, message: { en: "Message", ar: "الرسالة" }, send: { en: "Write email", ar: "كتابة البريد" }, note: { en: "This opens your email app with the message ready. Or use WhatsApp or the phone number.", ar: "سيفتح تطبيق البريد برسالتك جاهزة، أو تواصل عبر واتساب أو الهاتف." } },
  phone: { en: "Phone", ar: "الهاتف" },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
};
