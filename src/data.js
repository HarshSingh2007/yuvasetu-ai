// YuvaSetu AI — Master Data & Recommendation Engine Module
// "Empowering Every Learner Today. Building a Skilled Viksit Bharat 2047 Tomorrow."

export const PLATFORM_INFO = {
  name: "YuvaSetu AI",
  mainHeadline: "Empowering Every Learner Today. Building a Skilled Viksit Bharat 2047 Tomorrow.",
  dynamicTagline: "Find Your Gap. Build Your Skills. Shape India's Future.",
  primaryTagline: "Know Your Gap. Learn Your Way. Build Your Future.",
  supportingText: "YuvaSetu AI helps learners understand their skills, identify learning gaps, learn at their own pace, discover career opportunities and connect with relevant education and skilling pathways.",
  visionTagline: "Turning Education into Action for Viksit Bharat @2047"
};

// Verified Government Ecosystem Sources (Strict 3-Step Verification)
export const VERIFIED_GOV_SOURCES = [
  {
    id: "udise",
    name: "UDISE+",
    category: "School Education Data",
    description: "Official school education database, infrastructure indicators, and district education profiles.",
    label: "Official Government Reference",
    url: "https://udiseplus.gov.in/"
  },
  {
    id: "aishe",
    name: "AISHE",
    category: "Higher Education Data",
    description: "All India Survey on Higher Education reports, institution directories, and enrolment data.",
    label: "Official Government Reference",
    url: "https://aishe.gov.in/"
  },
  {
    id: "diksha",
    name: "DIKSHA",
    category: "Digital Learning Resources",
    description: "National digital infrastructure for knowledge sharing and curriculum-aligned resources.",
    label: "Official Government Reference",
    url: "https://diksha.gov.in/"
  },
  {
    id: "ncs",
    name: "National Career Service",
    category: "Career & Employment Services",
    description: "National portal providing career counseling, job matching, and local employment services.",
    label: "Official Government Reference",
    url: "https://www.ncs.gov.in/"
  },
  {
    id: "skill_india",
    name: "Skill India Digital",
    category: "Skilling & Upskilling",
    description: "Unified digital hub for verified skill courses, micro-credentials, and apprenticeships.",
    label: "Official Government Reference",
    url: "https://www.skillindiadigital.gov.in/"
  },
  {
    id: "open_data",
    name: "data.gov.in",
    category: "Government Open Data",
    description: "Open government data portal providing official public education and skill datasets.",
    label: "Official Government Reference",
    url: "https://data.gov.in/"
  }
];

export const OFFICIAL_SOURCES = VERIFIED_GOV_SOURCES;

// Government Scholarship & Financial Assistance Database
export const SCHOLARSHIPS_DATA = [
  {
    id: "nsp_pm_usp",
    title: "PM-USP Central Sector Scheme for College & University Students",
    ministry: "Ministry of Education (MoE)",
    eligibility: "Students pursuing regular UG/PG degrees with >80th percentile in Class 12",
    benefit: "Financial assistance of ₹12,000 - ₹20,000 per annum",
    category: "College & University",
    officialLink: "https://scholarships.gov.in/",
    label: "Official Government Reference"
  },
  {
    id: "aicte_pragati",
    title: "AICTE Pragati Scholarship Scheme for Girl Students",
    ministry: "Ministry of Education & AICTE",
    eligibility: "Girl students admitted to AICTE approved technical diploma or degree courses",
    benefit: "₹50,000 per annum for tuition, books and learning equipment",
    category: "Technical & Engineering",
    officialLink: "https://www.aicte-india.org/",
    label: "Official Government Reference"
  },
  {
    id: "pm_yasasvi",
    title: "PM-YASASVI Skilling & Education Scholarship",
    ministry: "Ministry of Social Justice and Empowerment",
    eligibility: "Class 9th, 11th, ITI & College learners from eligible income brackets",
    benefit: "₹75,000 to ₹1,25,000 per annum for education & skilling support",
    category: "School & ITI Vocational",
    officialLink: "https://yet.nta.ac.in/",
    label: "Official Government Reference"
  },
  {
    id: "post_matric_scheme",
    title: "National Post-Matric Scholarship Scheme",
    ministry: "Ministry of Social Justice & Empowerment",
    eligibility: "Students in Class 11th, 12th, ITI, Polytechnic, UG, and PG courses",
    benefit: "100% tuition coverage and monthly maintenance allowance",
    category: "School, ITI & Higher Education",
    officialLink: "https://scholarships.gov.in/",
    label: "Official Government Reference"
  },
  {
    id: "pmsss_jk_ladakh",
    title: "Prime Minister's Special Scholarship Scheme (PMSSS)",
    ministry: "AICTE & Ministry of Education",
    eligibility: "Students of J&K and Ladakh pursuing general, engineering, or medical degrees",
    benefit: "Up to ₹3,00,000 per annum covering tuition, books, and hostel fees",
    category: "Regional & Technical Degree",
    officialLink: "https://www.aicte-india.org/pmsss",
    label: "Official Government Reference"
  }
];

// Interactive AI Skill Assessment Diagnostic Quiz
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: "Problem Solving & Logic",
    question: "If an AI algorithm takes O(n log n) time to sort 1,000 student records, which data structure optimize search queries?",
    options: ["Linked List", "Binary Search Tree / Hash Table", "Array Stack", "Queue"],
    correctIndex: 1,
    explanation: "Hash Tables and BSTs allow O(1) or O(log n) lookup speeds for quick retrieval."
  },
  {
    id: 2,
    category: "Python & Data Science",
    question: "In Python, which library is primarily used for handling multi-dimensional numerical arrays and matrix math?",
    options: ["Pandas", "NumPy", "Matplotlib", "Requests"],
    correctIndex: 1,
    explanation: "NumPy provides high-performance N-dimensional array objects and array computations."
  },
  {
    id: 3,
    category: "Digital Literacy & Web Tools",
    question: "What is the primary role of an API (Application Programming Interface) in digital applications?",
    options: ["Designing UI graphics", "Enabling software applications to communicate and share data", "Formatting database tables", "Running CPU hardware tests"],
    correctIndex: 1,
    explanation: "APIs act as bridges enabling separate software systems to exchange data securely."
  },
  {
    id: 4,
    category: "Mathematics & Reasoning",
    question: "A student improves their quiz score from 60 to 90. What is the percentage increase in their performance score?",
    options: ["30%", "45%", "50%", "60%"],
    correctIndex: 2,
    explanation: "Percentage Increase = ((90 - 60) / 60) * 100 = (30 / 60) * 100 = 50%."
  },
  {
    id: 5,
    category: "AI & Future Skills Awareness",
    question: "Under India's National Education Policy (NEP 2020), what is the key focus of NSQF (National Skills Qualifications Framework)?",
    options: ["Standardizing academic and vocational skill levels across India", "Conducting annual written exams", "Allocating school uniforms", "Building physical sports arenas"],
    correctIndex: 0,
    explanation: "NSQF organizes qualifications according to a series of levels of knowledge, skills and aptitude."
  }
];

// YuvaSwaraj AI — Atmanirbhar Skilling & Sovereignty Hub Data Model
export const SWARAJ_PILLARS = [
  {
    id: "tech_sovereignty",
    title: "Technical & AI Autonomy",
    titleHi: "तकनीकी एवं एआई स्वावलंबन",
    desc: "Master core programming, logical algorithms, and generative AI models to build independent software products.",
    scoreWeight: 25,
    icon: "Cpu"
  },
  {
    id: "digital_financial",
    title: "Digital Financial Independence",
    titleHi: "डिजिटल वित्तीय स्वतंत्रता",
    desc: "Understand digital banking, UPI payments, e-commerce operations, and bookkeeping for self-employed ventures.",
    scoreWeight: 20,
    icon: "DollarSign"
  },
  {
    id: "vernacular_fluency",
    title: "Vernacular Communication Fluency",
    titleHi: "मातृभाषा एवं क्षेत्रीय भाषा दक्षता",
    desc: "Communicate technical concepts effectively in Hindi and regional Indian languages to bridge local community gaps.",
    scoreWeight: 20,
    icon: "Globe"
  },
  {
    id: "gov_pathway_sync",
    title: "National Pathway Linkage",
    titleHi: "राष्ट्रीय कौशल योजना लिंकेज",
    desc: "Direct integration with Skill India Digital, National Career Service, and NSQF Level 4-7 credentials.",
    scoreWeight: 20,
    icon: "ShieldCheck"
  },
  {
    id: "entrepreneurship",
    title: "Self-Employment & Startup Readiness",
    titleHi: "स्वरोजगार एवं स्टार्टअप तत्परता",
    desc: "Ability to take freelance projects, launch micro-enterprises, or apply for PM Mudra & Startup India support.",
    scoreWeight: 15,
    icon: "Zap"
  }
];

export const SWARAJ_BADGES = [
  {
    id: "badge_1",
    code: "NSQF-L3",
    title: "Swaraj Foundation Skill Badge",
    titleHi: "स्वराज फाउंडेशन कौशल बैज",
    nsqfLevel: "Level 3",
    desc: "Basic computer literacy, logical reasoning, and STEM digital awareness.",
    badgeColor: "#00F0FF",
    unlockedAt: 40
  },
  {
    id: "badge_2",
    code: "NSQF-L4",
    title: "Swaraj Digital Associate Badge",
    titleHi: "स्वराज डिजिटल एसोसिएट बैज",
    nsqfLevel: "Level 4",
    desc: "Python coding syntax, SQL query fundamentals, and digital workflow tools.",
    badgeColor: "#10B981",
    unlockedAt: 60
  },
  {
    id: "badge_3",
    code: "NSQF-L5",
    title: "Swaraj Analytics & Developer Badge",
    titleHi: "स्वराज एनालिटिक्स एवं डेवलपर बैज",
    nsqfLevel: "Level 5",
    desc: "Data analytics, web framework building, and API integration mastery.",
    badgeColor: "#A855F7",
    unlockedAt: 75
  },
  {
    id: "badge_4",
    code: "NSQF-L6",
    title: "Swaraj AI Specialist Badge",
    titleHi: "स्वराज एआई विशेषज्ञ बैज",
    nsqfLevel: "Level 6",
    desc: "Machine learning model training, deep learning algorithms, and production deployment.",
    badgeColor: "#FF7722",
    unlockedAt: 88
  },
  {
    id: "badge_5",
    code: "NSQF-L7",
    title: "Swaraj Atmanirbhar Innovator Badge",
    titleHi: "स्वराज आत्मनिर्भर इनोवेटर बैज",
    nsqfLevel: "Level 7",
    desc: "End-to-end product architecture, startup creation, and national youth contribution.",
    badgeColor: "#F59E0B",
    unlockedAt: 95
  }
];

export const REGIONAL_LANGUAGES_22 = [
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "ur", name: "Urdu", native: "اُردُو" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "as", name: "Assamese", native: "অসমীয়া" },
  { code: "mai", name: "Maithili", native: "मैथिली" },
  { code: "sat", name: "Santali", native: "ᱥᱟᱱᱛᱟᱲᱤ" },
  { code: "ks", name: "Kashmiri", native: "कॉशुर" },
  { code: "ne", name: "Nepali", native: "नेपाली" },
  { code: "kok", name: "Konkani", native: "कोंकणी" },
  { code: "doi", name: "Dogri", native: "डोगरी" },
  { code: "mni", name: "Manipuri", native: "মেতেইলোন্" },
  { code: "brx", name: "Bodo", native: "बर'" },
  { code: "sa", name: "Sanskrit", native: "संस्कृतम्" },
  { code: "sd", name: "Sindhi", native: "سنڌي" }
];

export const EDUCATION_CATEGORIES = [
  "School Student (Class 8th - 12th)",
  "College / University Student",
  "ITI / Vocational Learner",
  "Polytechnic / Technical Diploma",
  "Job Seeker & Competitive Aspirant",
  "Career Switcher / Professional",
  "Lifelong Learner"
];

export const EDUCATION_LEVELS = [
  "Class 8th - 10th Secondary School",
  "Class 11th - 12th Senior Secondary",
  "ITI Certificate / Vocational Trade",
  "Polytechnic Diploma",
  "Undergraduate Degree (BA / BSc / BCom / BTech / BCA / BBA / Law / Agri / MBBS)",
  "Postgraduate Degree (MA / MSc / MCom / MTech / MCA / MBA / LLM)",
  "Self-Taught / NIOS Open Schooling",
  "Other"
];

export const COURSES = [
  "High School General & Computer Literacy",
  "Higher Secondary STEM (Physics, Chemistry, Maths / Bio)",
  "Higher Secondary Commerce & Economics",
  "Higher Secondary Arts, Humanities & Languages",
  "ITI Electrician / Fitter / Computer Operator",
  "Polytechnic Mechanical / Electrical / Civil / IT",
  "B.Tech CSE / IT / AI / Electrical / Mechanical / Civil",
  "BCA / Computer Applications",
  "B.Sc Data Science / Maths / Physics / Biotechnology",
  "B.Com Financial Accounting & Business Analytics",
  "BBA Business Management & Digital Marketing",
  "BA History / Political Science / Economics / Literature",
  "B.Sc Agriculture & Agribusiness",
  "LLB / Law & Cyber Regulations",
  "Design / Animation & Visual Arts",
  "Healthcare & Nursing / Allied Medical",
  "Other"
];

export const SKILL_OPTIONS = [
  "Basic Computer Literacy & Office Tools",
  "Mathematics & Logical Reasoning",
  "Foundation Python Coding",
  "English & Vernacular Communication",
  "Financial Literacy & Bookkeeping",
  "Problem Solving & Analytical Thinking",
  "Python",
  "JavaScript",
  "AI Basics",
  "Data Structures & Algorithms",
  "Statistics & Probability",
  "SQL & Databases",
  "React / Frontend Engineering",
  "Machine Learning Fundamentals",
  "Deep Learning & PyTorch",
  "Cloud Computing & DevOps",
  "Digital Marketing & Social Media",
  "Graphic Design & UI Basics",
  "Agriculture Technology & Soil Basics",
  "Electrical Circuit Fundamentals",
  "Legal Reasoning & Documentation",
  "Other"
];

export const TARGET_CAREERS = [
  {
    id: "stem_higher_education",
    category: "School & Foundation",
    title: "STEM Higher Education & AI Foundation",
    titleHi: "एसटीईएम उच्च शिक्षा एवं एआई फाउंडेशन",
    desc: "Build strong math, science, and foundational programming for engineering and tech degrees.",
    descHi: "इंजीनियरिंग और तकनीकी डिग्री के लिए गणित, विज्ञान और प्रोग्रामिंग की मजबूत नींव बनाएं।",
    requiredSkills: ["Mathematics & Logical Reasoning", "Basic Computer Literacy & Office Tools", "Foundation Python Coding"],
    nsqfLevel: "Level 3-4 (Foundation Competency)",
    avgDemand: "High (NEP 2020 Aligned)"
  },
  {
    id: "junior_web_dev",
    category: "Vocational & Early Tech",
    title: "Junior Web Developer & Tech Assistant",
    titleHi: "जूनियर वेब डेवलपर एवं टेक असिस्टेंट",
    desc: "Start an early technical career in web building, data entry, and digital software support.",
    descHi: "वेब निर्माण, डेटा प्रविष्टि और डिजिटल सहायता में प्रारंभिक तकनीकी करियर शुरू करें।",
    requiredSkills: ["Basic Computer Literacy & Office Tools", "JavaScript", "English & Vernacular Communication"],
    nsqfLevel: "Level 4 (Web & Data Associate)",
    avgDemand: "Very High Demand"
  },
  {
    id: "ai_ml_engineer",
    category: "Technology",
    title: "AI / ML Engineer",
    titleHi: "एआई / एमएल इंजीनियर",
    desc: "Design, build, and deploy machine learning models and intelligent software systems.",
    descHi: "मशीन लर्निंग मॉडल और इंटेलिजेंट सॉफ्टवेयर सिस्टम डिजाइन और डिप्लॉय करें।",
    requiredSkills: ["Python", "Statistics & Probability", "Machine Learning Fundamentals", "SQL & Databases"],
    nsqfLevel: "Level 6-7 (AI Application Specialist)",
    avgDemand: "High Demand (IndiaAI Mission)"
  },
  {
    id: "data_analyst",
    category: "Analytics & Commerce",
    title: "Data Analyst & Business Assistant",
    titleHi: "डेटा एनालिस्ट एवं बिजनेस असिस्टेंट",
    desc: "Extract actionable insights, create visual dashboards, and solve business problems with data.",
    descHi: "डेटा से निष्कर्ष निकालें, विजुअल डैशबोर्ड बनाएं और व्यावसायिक समस्याओं को हल करें।",
    requiredSkills: ["SQL & Databases", "Financial Literacy & Bookkeeping", "Statistics & Probability", "Problem Solving & Analytical Thinking"],
    nsqfLevel: "Level 5-6 (Data Science Associate)",
    avgDemand: "Very High Demand"
  },
  {
    id: "fullstack_developer",
    category: "Technology",
    title: "Full-Stack Web Developer",
    titleHi: "फुल-स्टैक वेब डेवलपर",
    desc: "Build modern web applications, APIs, and scalable frontends and backends.",
    descHi: "आधुनिक वेब एप्लीकेशन, एपीआई और स्केलेबल फ्रंटएंड व बैकएंड बनाएं।",
    requiredSkills: ["JavaScript", "React / Frontend Engineering", "Python", "SQL & Databases"],
    nsqfLevel: "Level 5 (Web Application Developer)",
    avgDemand: "High Demand"
  },
  {
    id: "digital_marketer",
    category: "Business & Arts",
    title: "Digital Marketing & Content Associate",
    titleHi: "डिजिटल मार्केटिंग एवं कंटेंट एसोसिएट",
    desc: "Drive digital brand growth, search engine optimization, content creation, and analytics.",
    descHi: "डिजिटल ब्रांड ग्रोथ, सर्च इंजन ऑप्टिमाइजेशन और सोशल मीडिया अभियानों का प्रबंधन करें।",
    requiredSkills: ["Digital Marketing & Social Media", "English & Vernacular Communication", "Graphic Design & UI Basics"],
    nsqfLevel: "Level 4-5 (Digital Marketing Specialist)",
    avgDemand: "High Growth"
  },
  {
    id: "vocational_electrician",
    category: "Vocational & Skilled Trades",
    title: "Industrial Electrical & Solar Technician",
    titleHi: "इंडस्ट्रियल इलेक्ट्रिकल एवं सोलर तकनीशियन",
    desc: "Install, troubleshoot, and maintain industrial electrical grids, microgrids, and solar tech.",
    descHi: "औद्योगिक विद्युत ग्रिड, माइक्रोग्रिड और सौर ऊर्जा प्रणालियों का रखरखाव करें।",
    requiredSkills: ["Electrical Circuit Fundamentals", "Problem Solving & Analytical Thinking", "Basic Computer Literacy & Office Tools"],
    nsqfLevel: "Level 4 (Solar & Grid Technician)",
    avgDemand: "Very High (PM Surya Ghar Drive)"
  }
];

// ALL 28 STATES + 8 UNION TERRITORIES (36 REGIONS TOTAL - QUALITATIVE CONTEXT ONLY, NO FAKE STATS)
export const STATES_DATA = [
  // 28 STATES
  { id: "UP", name: "Uttar Pradesh", code: "UP", type: "State", region: "North India", primaryLanguage: "Hindi", eduContext: "School Education, Higher Education, Vocational Skill Centers", keySkillAreas: ["Digital Skills", "Manufacturing", "Agriculture", "Healthcare", "Entrepreneurship"], learningOpps: ["Skill India Digital Hub", "UP Skill Mission", "AI City Initiatives"], careerDomains: ["Technology", "Healthcare", "Public Services", "Agriculture"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "MH", name: "Maharashtra", code: "MH", type: "State", region: "West India", primaryLanguage: "Marathi / Hindi", eduContext: "University Centers, Engineering Parks, Polytechnic Institutes", keySkillAreas: ["Full-Stack Engineering", "Fintech", "Cloud Computing", "AI Research"], learningOpps: ["MSSDCL Programs", "Maharashtra AI CoE", "FutureSkills Prime"], careerDomains: ["Software", "Banking & Finance", "Industrial Engineering"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "KA", name: "Karnataka", code: "KA", type: "State", region: "South India", primaryLanguage: "Kannada / English", eduContext: "Tech Hubs, R&D Centers, Advanced Polytechnic Institutes", keySkillAreas: ["GenAI", "VLSI & Hardware", "Deep Learning", "Software Architecture"], learningOpps: ["KSDC Skilling", "Beyond Bengaluru Tech Mission"], careerDomains: ["AI & Machine Learning", "Semiconductors", "SaaS Engineering"], officialResources: ["UDISE+", "AISHE", "NCS", "IndiaAI Mission"] },
  { id: "TN", name: "Tamil Nadu", code: "TN", type: "State", region: "South India", primaryLanguage: "Tamil / English", eduContext: "Industrial Training, Engineering Colleges, Science Institutes", keySkillAreas: ["SaaS Architecture", "Automobile Robotics", "Data Analytics"], learningOpps: ["Naan Mudhalvan Skilling Scheme", "TNeGA AI Initiative"], careerDomains: ["Software Development", "Manufacturing", "Electronics"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "BR", name: "Bihar", code: "BR", type: "State", region: "East India", primaryLanguage: "Hindi", eduContext: "Secondary Schools, Vocational Centers, Skill Development Centers", keySkillAreas: ["Basic Computer Literacy", "STEM Foundations", "Vocational Electronics"], learningOpps: ["Kushal Yuva Program (KYP)", "Bihar Startup Policy"], careerDomains: ["Technology Support", "Public Administration", "Agriculture Tech"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "GJ", name: "Gujarat", code: "GJ", type: "State", region: "West India", primaryLanguage: "Gujarati / Hindi", eduContext: "Industrial Universities, GIFT City Tech Zone, IT Institutes", keySkillAreas: ["Fintech Engineering", "Industrial IoT", "Data Analytics"], learningOpps: ["Gujarat Skill Mission (GSDM)", "iHub Incubation"], careerDomains: ["Fintech", "Manufacturing Technology", "Logistics Tech"], officialResources: ["UDISE+", "AISHE", "NCS", "FutureSkills Prime"] },
  { id: "RJ", name: "Rajasthan", code: "RJ", type: "State", region: "North India", primaryLanguage: "Hindi", eduContext: "Coaching Centers, Technical Universities, Solar Skill Parks", keySkillAreas: ["Foundation Coding", "Solar Tech Analytics", "E-Governance Apps"], learningOpps: ["RajSkill Mission", "iStart Youth Skilling"], careerDomains: ["Software", "Renewable Energy", "Public Services"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "WB", name: "West Bengal", code: "WB", type: "State", region: "East India", primaryLanguage: "Bengali / English", eduContext: "Higher Education Institutions, IT Parks, Polytechnic Centers", keySkillAreas: ["Software Engineering", "Data Analytics", "Digital Creative Arts"], learningOpps: ["Utkarsh Bangla Mission", "Webel IT Programs"], careerDomains: ["Software Development", "Digital Marketing", "Research"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "TG", name: "Telangana", code: "TG", type: "State", region: "South India", primaryLanguage: "Telugu / English", eduContext: "Cyber Towers, Incubation Centers, Engineering Colleges", keySkillAreas: ["GenAI Development", "Cybersecurity", "Pharma Analytics"], learningOpps: ["TASK (Telangana Academy)", "T-Hub Programs"], careerDomains: ["AI Engineering", "Cyber Defense", "Biotech IT"], officialResources: ["UDISE+", "AISHE", "NCS", "IndiaAI Mission"] },
  { id: "KL", name: "Kerala", code: "KL", type: "State", region: "South India", primaryLanguage: "Malayalam / English", eduContext: "State-wide Literacy Hubs, Technoparks, Higher Education", keySkillAreas: ["Web Technologies", "AI & Robotics", "Digital Health"], learningOpps: ["ASAP Kerala Skilling", "Kerala Startup Mission"], careerDomains: ["Software Engineering", "Healthcare IT", "Digital Media"], officialResources: ["UDISE+", "AISHE", "NCS", "FutureSkills Prime"] },
  { id: "MP", name: "Madhya Pradesh", code: "MP", type: "State", region: "Central India", primaryLanguage: "Hindi", eduContext: "Central Universities, IT Parks, Vocational Trade Institutes", keySkillAreas: ["Software Engineering", "Smart Agriculture Tech", "Vocational Trades"], learningOpps: ["MP Skill Mission", "Mukhyamantri Yuva Internship"], careerDomains: ["Technology", "Agri-Tech", "Industrial Trades"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "AP", name: "Andhra Pradesh", code: "AP", type: "State", region: "South India", primaryLanguage: "Telugu / English", eduContext: "Engineering Institutions, Skill Development Centers, IT Zones", keySkillAreas: ["Cloud Computing", "IoT & Electronics", "Data Analytics"], learningOpps: ["APSSDC Skilling Programs", "AP Innovation Society"], careerDomains: ["Software", "Electronics", "Data Services"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "PB", name: "Punjab", code: "PB", type: "State", region: "North India", primaryLanguage: "Punjabi / Hindi", eduContext: "Technical Universities, Agricultural Colleges, Industrial Parks", keySkillAreas: ["Agri-Tech Analytics", "Web Engineering", "Automotive IT"], learningOpps: ["Punjab Skill Development Mission", "Ghar Ghar Rozgar"], careerDomains: ["Agriculture Technology", "Software", "Automotive"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "HR", name: "Haryana", code: "HR", type: "State", region: "North India", primaryLanguage: "Hindi / English", eduContext: "Cyber City Corporate Hubs, Universities, Skill Missions", keySkillAreas: ["AI Product Engineering", "Cybersecurity", "Fintech"], learningOpps: ["Haryana Skill Mission (HSDM)", "Saksham Yuva"], careerDomains: ["Corporate Tech", "Fintech", "Cybersecurity"], officialResources: ["UDISE+", "AISHE", "NCS", "FutureSkills Prime"] },
  { id: "OD", name: "Odisha", code: "OD", type: "State", region: "East India", primaryLanguage: "Odia / English", eduContext: "State Universities, Polytechnic Centers, Mining Skill Labs", keySkillAreas: ["Mining Analytics", "Software Engineering", "Vocational Trades"], learningOpps: ["Skilled in Odisha Mission", "OSDA Programs"], careerDomains: ["Software", "Industrial Engineering", "Skilled Trades"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "JH", name: "Jharkhand", code: "JH", type: "State", region: "East India", primaryLanguage: "Hindi", eduContext: "Vocational Centers, Polytechnic Colleges, Science Institutes", keySkillAreas: ["Basic Computer Literacy", "Industrial Electronics", "Mining IT"], learningOpps: ["Jharkhand Skill Mission (JSDMS)", "Hunar Mission"], careerDomains: ["Technology Support", "Industrial Operations", "Public Sector"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "AS", name: "Assam", code: "AS", type: "State", region: "Northeast India", primaryLanguage: "Assamese / English", eduContext: "Central & State Universities, Tech Parks, Vocational Labs", keySkillAreas: ["GIS & Agri-Tech", "Web Development", "Digital Marketing"], learningOpps: ["Assam Skill Mission (ASDM)", "Advantage Assam"], careerDomains: ["Digital Services", "Agri-Tech", "Web Engineering"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "CT", name: "Chhattisgarh", code: "CT", type: "State", region: "Central India", primaryLanguage: "Hindi", eduContext: "Technical Institutes, E-Governance Centers, Trades Labs", keySkillAreas: ["Basic Software", "E-Governance Apps", "Vocational Electronics"], learningOpps: ["Chhattisgarh State Skill Mission (CSSDA)"], careerDomains: ["Public Services IT", "Electronics", "Software Support"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "UT", name: "Uttarakhand", code: "UT", type: "State", region: "North India", primaryLanguage: "Hindi", eduContext: "State Universities, Pharma Analytics Parks, Tourism Tech", keySkillAreas: ["E-Commerce IT", "Pharma Analytics", "Digital Tourism Tech"], learningOpps: ["Uttarakhand Skill Mission (UKSDM)", "Startup Policy"], careerDomains: ["Technology", "Pharmaceutical Tech", "Digital Services"], officialResources: ["UDISE+", "AISHE", "NCS", "FutureSkills Prime"] },
  { id: "HP", name: "Himachal Pradesh", code: "HP", type: "State", region: "North India", primaryLanguage: "Hindi", eduContext: "Horticulture Universities, State Colleges, Skill Centers", keySkillAreas: ["Clean-Tech Analytics", "Web Technologies", "Horticulture IT"], learningOpps: ["HP Kaushal Vikas Nigam (HPKVN)", "Him Kaushal"], careerDomains: ["Web Development", "Clean Technology", "Agriculture IT"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "GA", name: "Goa", code: "GA", type: "State", region: "West India", primaryLanguage: "Konkani / English", eduContext: "Electronic Hubs, State Universities, Design Institutes", keySkillAreas: ["Web Engineering", "Digital Hospitality Tech", "UI/UX Design"], learningOpps: ["Goa Skill Development Mission", "Startup Policy"], careerDomains: ["Software", "Design & Media", "Hospitality IT"], officialResources: ["UDISE+", "AISHE", "NCS", "FutureSkills Prime"] },
  { id: "TR", name: "Tripura", code: "TR", type: "State", region: "Northeast India", primaryLanguage: "Bengali / Kokborok", eduContext: "Software Technology Parks, Degree Colleges, Vocational Trade", keySkillAreas: ["Basic Computer Literacy", "Web Basics", "Digital Services"], learningOpps: ["Tripura Skill Mission (TSDM)"], careerDomains: ["Digital Services", "Web Support", "Public Sector"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "ML", name: "Meghalaya", code: "ML", type: "State", region: "Northeast India", primaryLanguage: "English / Khasi", eduContext: "Technology Parks, Higher Education Colleges, Skill Labs", keySkillAreas: ["Digital Marketing", "Web Design", "BPO & Communication"], learningOpps: ["Meghalaya Skill Mission (MSSDM)"], careerDomains: ["Digital Marketing", "Communications", "Web Services"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "MN", name: "Manipur", code: "MN", type: "State", region: "Northeast India", primaryLanguage: "Manipuri / English", eduContext: "IT Parks, Science Colleges, Creative Skill Centers", keySkillAreas: ["Web Development", "Digital Creative Arts", "Basic Coding"], learningOpps: ["Manipur Society for Skill Development (MSSD)"], careerDomains: ["Software", "Creative Media", "Digital Services"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "NL", name: "Nagaland", code: "NL", type: "State", region: "Northeast India", primaryLanguage: "English", eduContext: "Science Centers, Technical Institutes, Vocational Hubs", keySkillAreas: ["Digital Content Creation", "Basic Computer Tech", "Web Design"], learningOpps: ["Nagaland Skill Mission (NSDM)"], careerDomains: ["Digital Media", "Technology Support", "Communications"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "AR", name: "Arunachal Pradesh", code: "AR", type: "State", region: "Northeast India", primaryLanguage: "English", eduContext: "Software Parks, Vocational Centers, State Institutes", keySkillAreas: ["Basic Computer Literacy", "Digital Governance", "GIS Tech"], learningOpps: ["Arunachal Pradesh Skill Mission (APSDM)"], careerDomains: ["Public IT Services", "GIS Analytics", "Technology Support"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "MZ", name: "Mizoram", code: "MZ", type: "State", region: "Northeast India", primaryLanguage: "Mizo / English", eduContext: "State Universities, IT Hubs, Vernacular Skill Labs", keySkillAreas: ["Web Basics", "Digital Media", "Vernacular Communication"], learningOpps: ["Mizoram Skill Development Society (MSDS)"], careerDomains: ["Digital Services", "Communications", "Web Support"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "SK", name: "Sikkim", code: "SK", type: "State", region: "Northeast India", primaryLanguage: "Nepali / English", eduContext: "Eco-Technology Parks, State Colleges, Skill Missions", keySkillAreas: ["Eco-Tech Analytics", "Web Development", "Digital Marketing"], learningOpps: ["Sikkim Skill Mission (SSDM)"], careerDomains: ["Clean Technology", "Digital Marketing", "Web Engineering"], officialResources: ["UDISE+", "AISHE", "NCS", "FutureSkills Prime"] },

  // 8 UNION TERRITORIES
  { id: "DL", name: "Delhi NCR", code: "DL", type: "Union Territory", region: "North India", primaryLanguage: "Hindi / English", eduContext: "Central Universities, Skill Universities (DSEU), Tech Parks", keySkillAreas: ["Product Management", "AI Operations", "Cybersecurity"], learningOpps: ["DSEU Programs", "Delhi Skill Mission"], careerDomains: ["Software", "Product Management", "Public Policy"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "JK", name: "Jammu and Kashmir", code: "JK", type: "Union Territory", region: "North India", primaryLanguage: "Urdu / Hindi / Dogri", eduContext: "IT Towers, Skill Development Missions, Degree Colleges", keySkillAreas: ["Agri-Tech & GIS", "Web Development", "Digital Marketing"], learningOpps: ["JKSDM Programs", "Himayat Scheme"], careerDomains: ["Web Services", "Agri-Tech", "Public Administration"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "LA", name: "Ladakh", code: "LA", type: "Union Territory", region: "North India", primaryLanguage: "Ladakhi / Hindi", eduContext: "Digital Centers, Skill Labs, Vocational Institutes", keySkillAreas: ["Solar Tech Analytics", "Digital Services", "Basic Coding"], learningOpps: ["Ladakh Skill Development Mission"], careerDomains: ["Renewable Energy IT", "Digital Services", "Public Sector"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "CH", name: "Chandigarh", code: "CH", type: "Union Territory", region: "North India", primaryLanguage: "Hindi / English / Punjabi", eduContext: "IT Parks, Universities, Design Centers", keySkillAreas: ["Software Engineering", "UI/UX Design", "Digital Marketing"], learningOpps: ["Chandigarh Skill Mission"], careerDomains: ["Software Development", "Design", "Digital Marketing"], officialResources: ["UDISE+", "AISHE", "NCS", "FutureSkills Prime"] },
  { id: "PY", name: "Puducherry", code: "PY", type: "Union Territory", region: "South India", primaryLanguage: "Tamil / French / English", eduContext: "IT Parks, Engineering Colleges, Trade Centers", keySkillAreas: ["Web Technologies", "Digital Hospitality", "Electronics"], learningOpps: ["Puducherry Skill Society"], careerDomains: ["Software", "Hospitality IT", "Electronics"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "AN", name: "Andaman & Nicobar", code: "AN", type: "Union Territory", region: "South India", primaryLanguage: "Hindi / English", eduContext: "Skill Centers, Marine Science Hubs, Vocational Training", keySkillAreas: ["Basic Computer Literacy", "GIS & Marine Tech", "Digital Services"], learningOpps: ["A&N Islands Skill Mission"], careerDomains: ["Marine Technology", "Digital Services", "Public Sector"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "DN", name: "Dadra & Nagar Haveli and Daman & Diu", code: "DN", type: "Union Territory", region: "West India", primaryLanguage: "Gujarati / Hindi", eduContext: "Industrial Training Hubs, Vocational Skill Labs", keySkillAreas: ["Industrial Automation", "Basic Computer Tech", "Vocational Trades"], learningOpps: ["DNH & DDD Skill Mission"], careerDomains: ["Industrial Automation", "Technician Trades", "Digital Support"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] },
  { id: "LD", name: "Lakshadweep", code: "LD", type: "Union Territory", region: "South India", primaryLanguage: "Malayalam / English", eduContext: "Digital Labs, Vocational Training Centers", keySkillAreas: ["Digital Literacy", "Basic Coding", "Marine Eco Tech"], learningOpps: ["Lakshadweep Skill Society"], careerDomains: ["Digital Services", "Marine Technology", "Public Sector"], officialResources: ["UDISE+", "AISHE", "NCS", "Skill India Digital"] }
];

export const GOV_PATHWAYS = [
  {
    id: "skill_india_digital",
    title: "Skill India Digital Portal",
    ministry: "Ministry of Skill Development & Entrepreneurship (MSDE)",
    targetDomain: "General / School, Vocational & College Technical Upskilling",
    description: "National digital hub providing verified courses, digital badges, and direct links to apprenticeships and employment.",
    relevanceReason: "Provides micro-credentials aligned with NSQF standards for your identified skill gaps.",
    nsqfAligned: true,
    actionUrl: "https://www.skillindiadigital.gov.in/"
  },
  {
    id: "indiaai_futureskills",
    title: "IndiaAI Mission — FutureSkills Prime",
    ministry: "MeitY & NASSCOM",
    targetDomain: "AI / ML & Emerging Tech",
    description: "Government-supported initiative empowering youth with artificial intelligence, deep learning, and data analytics competencies.",
    relevanceReason: "Directly suitable for AI/ML and technology pathways, offering subsidized certification.",
    nsqfAligned: true,
    actionUrl: "https://futureskillsprime.in/"
  },
  {
    id: "national_career_service",
    title: "National Career Service (NCS)",
    ministry: "Ministry of Labour and Employment",
    targetDomain: "Career Guidance & Job Matching",
    description: "One-stop platform offering local counseling, career aptitude tests, job fairs, and regional language support.",
    relevanceReason: "Matches your location and current skill readiness score with local internship and job opportunities.",
    nsqfAligned: false,
    actionUrl: "https://www.ncs.gov.in/"
  },
  {
    id: "yuva_ai_for_all",
    title: "YUVA AI for ALL & Ministry Education Initiatives",
    ministry: "Ministry of Education & CBSE",
    targetDomain: "School AI Awareness & STEM Foundation",
    description: "Nationwide program fostering AI literacy and practical skill building among school students across India.",
    relevanceReason: "Helps bridge basic conceptual gaps in mathematics, Python, and computational logic.",
    nsqfAligned: true,
    actionUrl: "https://ai-for-all.in/"
  }
];

// Gradual Impact Metrics (Illustrative Demo Values)
export const PLATFORM_IMPACT_METRICS = {
  baselineVsPostApp: {
    labels: ['Baseline (Day 0)', 'Month 1 (30 Days)', 'Month 2 (60 Days)', 'Month 3 (90 Days)'],
    skillReadinessAvg: [38, 64, 82, 94],
    careerClarityIndex: [25, 58, 85, 96],
    govPathwayEnrollmentRate: [12, 45, 78, 91]
  },
  domainGrowthShare: {
    labels: ['AI & Technology', 'School STEM & Basic Coding', 'Full-Stack Web Dev', 'Cloud & Data Analytics', 'Vocational & Electrical Trades'],
    postAppStudents: [35, 25, 20, 12, 8]
  },
  keyImpactStats: [
    { label: "Skill Readiness Score Shift", value: "+147%", desc: "Average improvement from Day 0 to Day 90 (Demo)" },
    { label: "Regional Language Comprehension", value: "94.2%", desc: "Learners understanding career steps in Hindi & vernacular (Demo)" },
    { label: "Government Pathway Alignment", value: "3.8x", desc: "Increase in verified Skill India & FutureSkills registrations (Demo)" },
    { label: "School & Youth Career Direction", value: "88%", desc: "Class 8th-12th learners identifying early career path (Demo)" }
  ]
};

// Easy Hindi Language Guidance
export const HINDI_CAREER_GUIDANCE = {
  stem_higher_education: {
    title: "एसटीईएम उच्च शिक्षा एवं एआई फाउंडेशन रोडमैप",
    summary: "गणित, विज्ञान और कंप्यूटर साक्षरता मजबूत करने का चरण-दर-चरण हिंदी मार्गदर्शन:",
    steps: [
      { phase: "चरण 1: गणित और तार्किक सोच", detail: "गणित की बुनियादी अवधारणाओं, बीजगणित और तर्क प्रश्नों का अभ्यास करें।" },
      { phase: "चरण 2: बेसिक कंप्यूटर और डिजिटल साक्षरता", detail: "फाइल प्रबंधन, वर्ड प्रोसेसिंग और बुनियादी सॉफ्टवेयर टूल्स में दक्षता हासिल करें।" },
      { phase: "चरण 3: पायथन प्रोग्रामिंग की शुरुआत", detail: "सिंथैक्स, वेरिएबल्स और बुनियादी लूप्स कोड करना सीखें।" },
      { phase: "चरण 4: YUVA AI for ALL सर्टिफिकेट", detail: "शिक्षा मंत्रालय की पहल के तहत प्रमाण पत्र प्राप्त करें।" }
    ],
    advice: "सलाह: स्कूल स्तर से ही गणित और कोडिंग की नींव बनाने से उच्च शिक्षा में सफलता पाना आसान होता है।"
  },
  junior_web_dev: {
    title: "जूनियर वेब डेवलपर एवं टेक असिस्टेंट रोडमैप",
    summary: "डिजिटल तकनीकों में प्रारंभिक करियर शुरू करने का हिंदी मार्गदर्शन:",
    steps: [
      { phase: "चरण 1: HTML, CSS और बेसिक जावास्क्रिप्ट", detail: "वेबपेज की संरचना और डिजाइन तैयार करना सीखें।" },
      { phase: "चरण 2: डेटा प्रविष्टि और सॉफ्टवेयर टूल्स", detail: "एक्सेल, गूगल शीट्स और डेटाबेस टूल्स का अभ्यास करें।" },
      { phase: "चरण 3: कौशल भारत पोर्टल पंजीकरण", detail: "कौशल भारत (Skill India Digital) पोर्टल पर पदों के लिए आवेदन करें।" }
    ],
    advice: "सलाह: व्यावहारिक प्रोजेक्ट्स बनाकर अपना पोर्टफोलियो तैयार करें।"
  },
  ai_ml_engineer: {
    title: "एआई / एमएल इंजीनियर रोडमैप",
    summary: "एआई और मशीन लर्निंग के क्षेत्र में करियर बनाने का चरण-दर-चरण हिंदी मार्गदर्शन:",
    steps: [
      { phase: "चरण 1: पायथन और आधारभूत तर्क", detail: "पायथन डेटा स्ट्रक्चर्स, फंक्शन्स, NumPy और Pandas का अभ्यास करें।" },
      { phase: "चरण 2: सांख्यिकी का अभ्यास", detail: "लीनियर अलजेब्रा और प्रायिकता (Probability) सीखें।" },
      { phase: "चरण 3: मशीन लर्निंग फंडामेंटल्स", detail: "Scikit-Learn का उपयोग करके प्रेडिक्टिव मॉडल बनाएं।" },
      { phase: "चरण 4: 2 प्रैक्टिकल एआई प्रोजेक्ट्स", detail: "वास्तविक डेटासेट पर मॉडल बनाएं और मूल्यांकन करें।" },
      { phase: "चरण 5: सरकार-समर्थित सर्टीफिकेशन", detail: "फ्यूचरस्किल प्राइम या इंडियाएआई मिशन पर पंजीकरण करें।" }
    ],
    advice: "सलाह: प्रतिदिन 2 घंटे की नियमित पढ़ाई 30 दिनों में आपकी स्किल रेडिनेस को 80%+ तक बढ़ा सकती है।"
  },
  data_analyst: {
    title: "डेटा एनालिस्ट एवं बिजनेस असिस्टेंट रोडमैप",
    summary: "डेटा विश्लेषण के क्षेत्र में करियर निर्माण का हिंदी मार्गदर्शन:",
    steps: [
      { phase: "चरण 1: SQL और डेटाबेस महारत", detail: "डेटा क्वेरी, जोइन्स और डेटाबेस का अभ्यास करें।" },
      { phase: "चरण 2: पायथन से डेटा सफाई", detail: "Pandas का उपयोग करके डेटा को उपयोगी बनाएं।" },
      { phase: "चरण 3: विजुअलाइज़ेशन और डैशबोर्ड", detail: "डेटा रुझानों को प्रस्तुत करने के लिए चार्ट्स बनाएं।" },
      { phase: "चरण 4: नेशनल करियर सर्विस इंटर्नशिप", detail: "एनसीएस पोर्टल पर डेटा एनालिस्ट इंटर्नशिप के लिए आवेदन करें।" }
    ],
    advice: "सलाह: अपने विश्लेषण को स्पष्ट भाषा में प्रस्तुत करने का कौशल विकसित करें।"
  },
  fullstack_developer: {
    title: "फुल-स्टैक वेब डेवलपर रोडमैप",
    summary: "वेब डेवलपमेंट क्षेत्र के लिए हिंदी में तैयारी योजना:",
    steps: [
      { phase: "चरण 1: जावास्क्रिप्ट लॉजिक और DOM", detail: "ES6+ फीचर्स और एसिंक्रोनस जावास्क्रिप्ट सीखें।" },
      { phase: "चरण 2: रिएक्ट (React) और मॉडर्न यूआई", detail: "कंपोनेंट आधारित वेब यूआई तैयार करें।" },
      { phase: "चरण 3: बैकएंड एपीआई और डेटाबेस", detail: "पायथन (FastAPI) या Node.js और SQL डेटाबेस कनेक्ट करें।" },
      { phase: "चरण 4: पोर्टफोलियो डिप्लॉयमेंट", detail: "3 पूर्ण-स्टैक प्रोजेक्ट्स डिप्लॉय करें।" }
    ],
    advice: "सलाह: डिजिटल इंडिया पहल के तहत वेब विकास विशेषज्ञों की अत्यधिक मांग है।"
  },
  digital_marketer: {
    title: "डिजिटल मार्केटिंग एवं कंटेंट एसोसिएट रोडमैप",
    summary: "डिजिटल ब्रांडिंग और सोशल मीडिया प्रबंधन का हिंदी मार्गदर्शन:",
    steps: [
      { phase: "चरण 1: सोशल मीडिया एवं एसईओ बेसिक", detail: "सर्च इंजन ऑप्टिमाइजेशन और अभियानों को समझें।" },
      { phase: "चरण 2: कंटेंट निर्माण और यूआई डिजाइन", detail: "कैनवा और डिजाइन टूल्स से आकर्षक विजुअल्स बनाएं।" },
      { phase: "चरण 3: एनालिटिक्स और रिपोर्टिंग", detail: "गूगल एनालिटिक्स से ट्रैफिक का विश्लेषण करें।" }
    ],
    advice: "सलाह: रचनात्मकता और डेटा विश्लेषण का संतुलन सफलता दिलाता है।"
  },
  vocational_electrician: {
    title: "इंडस्ट्रियल इलेक्ट्रिकल एवं सोलर तकनीशियन रोडमैप",
    summary: "सोलर ऊर्जा और इलेक्ट्रिकल तकनीशियन का हिंदी मार्गदर्शन:",
    steps: [
      { phase: "चरण 1: सर्किट बेसिक एवं सुरक्षा नियम", detail: "विद्युत सिद्धांतों और सुरक्षा उपकरणों को समझें।" },
      { phase: "चरण 2: सोलर पैनल एवं ग्रिड स्थापना", detail: "पीएम सूर्य घर योजना के तहत तकनीशियन कौशल सीखें।" },
      { phase: "चरण 3: आईटीआई एवं एनएसक्यूएफ सर्टीफिकेशन", detail: "स्किल इंडिया पोर्टल से लेवल 4 प्रमाण पत्र प्राप्त करें।" }
    ],
    advice: "सलाह: स्वच्छ ऊर्जा क्षेत्र में कुशल तकनीशियनों की भारी मांग है।"
  }
};

// Deterministic Weighted Recommendation Engine
export function calculateSkillGapAssessment(inputs) {
  const { skills = [], targetCareer = "ai_ml_engineer", studyHours = 2, skillProficiencies = {} } = inputs;
  
  const careerObj = TARGET_CAREERS.find(c => c.id === targetCareer) || TARGET_CAREERS[0];
  const required = careerObj.requiredSkills;

  let totalScore = 0;
  let maxPossibleScore = required.length * 3;

  const skillAnalysis = required.map(skillName => {
    const isSelected = skills.includes(skillName);
    const profLevel = skillProficiencies[skillName] || (isSelected ? "Intermediate" : "None");
    
    let score = 0;
    let status = "Major Gap";
    
    if (profLevel === "Advanced") {
      score = 3;
      status = "Strong";
    } else if (profLevel === "Intermediate") {
      score = 2;
      status = "Moderate";
    } else if (profLevel === "Beginner") {
      score = 1;
      status = "Weak";
    } else {
      score = 0;
      status = "Major Gap";
    }

    totalScore += score;

    return {
      name: skillName,
      proficiency: profLevel,
      status,
      score,
      isCoreGap: status === "Weak" || status === "Major Gap"
    };
  });

  const readinessScore = Math.min(100, Math.round((totalScore / maxPossibleScore) * 100));

  const strongSkills = skillAnalysis.filter(s => s.status === "Strong").map(s => s.name);
  const weakSkills = skillAnalysis.filter(s => s.status === "Weak").map(s => s.name);
  const learningGaps = skillAnalysis.filter(s => s.status === "Major Gap").map(s => s.name);
  const prioritySkills = skillAnalysis.filter(s => s.isCoreGap).map(s => s.name);

  // Dynamic values for Chart 7: Learning Gap by Skill (Illustrative Demo Values)
  const learningGapBySkillData = {
    categories: ['Programming & Syntax', 'Communication & English', 'Problem Solving & Logic', 'Data & Analytics', 'Domain Knowledge'],
    gapPercentages: [
      readinessScore > 75 ? 15 : (readinessScore > 50 ? 35 : 65),
      skills.includes("English & Vernacular Communication") ? 20 : 50,
      skills.includes("Mathematics & Logical Reasoning") ? 25 : 55,
      skills.includes("SQL & Databases") ? 30 : 60,
      skills.length > 3 ? 20 : 45
    ]
  };

  // Dynamic values for Chart 8: Career Readiness by Skill Area (Illustrative Demo Values)
  const careerReadinessBySkillAreaData = {
    categories: ['Technical Skills', 'Communication', 'Problem Solving', 'Domain Knowledge', 'Practical Experience'],
    readinessPercentages: [
      readinessScore,
      skills.includes("English & Vernacular Communication") ? 85 : 50,
      skills.includes("Mathematics & Logical Reasoning") ? 80 : 45,
      Math.min(100, readinessScore + 10),
      Math.max(20, readinessScore - 15)
    ]
  };

  const recommendedNextSteps = [
    `Dedicate ${studyHours} hours daily to primary gap: ${prioritySkills[0] || "Mathematics & Logical Reasoning"}.`,
    `Complete foundation modules for ${prioritySkills[1] || "Target Competency"}.`,
    `Attempt hands-on project to elevate ${weakSkills[0] || "Foundational Skill"} to Advanced.`,
    `Explore relevant NSQF certified pathways via Skill India Digital.`
  ];

  return {
    targetCareer: careerObj.title,
    readinessScore,
    strongSkills,
    weakSkills,
    learningGaps,
    prioritySkills,
    skillAnalysis,
    learningGapBySkillData,
    careerReadinessBySkillAreaData,
    recommendedNextSteps,
    calculatedAt: new Date().toLocaleTimeString()
  };
}

// Generate Personalized Study Plan
export function generateStudyPlan(inputs) {
  const { learningGaps = [], studyHours = 2, targetCareer = "AI / ML Engineer", pace = "Moderate" } = inputs;
  
  const dailyMinutes = studyHours * 60;
  const sampleTopics = learningGaps.length > 0 ? learningGaps : ["Foundation Math & Logic", "Basic Coding", "SQL Queries", "AI Literacy"];

  const days = [
    { day: 1, title: `Week 1: ${sampleTopics[0] || "Core Fundamentals"} — Concepts & Syntax`, mins: Math.min(dailyMinutes, 90), category: "Fundamentals" },
    { day: 2, title: `Week 1: ${sampleTopics[0] || "Core Fundamentals"} — Applied Exercises`, mins: dailyMinutes, category: "Practical Coding" },
    { day: 3, title: `Week 2: ${sampleTopics[1] || "Weak Area"} — Focused Improvement`, mins: Math.min(dailyMinutes, 120), category: "Weak Area Improvement" },
    { day: 4, title: `Week 2: ${sampleTopics[1] || "Weak Area"} — Practical Implementation`, mins: dailyMinutes, category: "Practical Coding" },
    { day: 5, title: `Week 3: ${sampleTopics[2] || "Data & Tools"} — Practice & Integration`, mins: Math.min(dailyMinutes, 100), category: "Practice" },
    { day: 6, title: "Week 4: Mini Project & Practical Capstone Refactoring", mins: Math.min(dailyMinutes + 30, 180), category: "Project / Assessment" },
    { day: 7, title: "Week 4: Milestone Assessment & Pathway Self-Review", mins: Math.min(dailyMinutes, 90), category: "Project / Assessment" }
  ];

  const totalWeeklyHours = (days.reduce((acc, d) => acc + d.mins, 0) / 60).toFixed(1);
  const thirtyDayMilestones = [
    { week: "Week 1", goal: `Fundamentals: ${sampleTopics[0] || "Core Syntax"}`, status: "In Progress" },
    { week: "Week 2", goal: `Weak Area Improvement: ${sampleTopics[1] || "Data Math"}`, status: "Upcoming" },
    { week: "Week 3", goal: "Practice: 2 Hands-on Problem Sets", status: "Upcoming" },
    { week: "Week 4", goal: "Project / Assessment: NSQF Readiness Review", status: "Upcoming" }
  ];

  return {
    dailyHours: studyHours,
    dailyMinutes,
    pace,
    totalWeeklyHours,
    days,
    thirtyDayMilestones,
    beforeAfterComparison: {
      initialGapScore: 35,
      projected30DayScore: 82
    }
  };
}

// Viksit Bharat 2047 Impact Page Data Model
export const VIKSIT_BHARAT_IMPACT = {
  title: "From Learning Today to Viksit Bharat 2047",
  subtitle: "How stronger learning, skills and career readiness can contribute to India's long-term development.",
  disclaimer: "Illustrative project framework — not an official Government of India index.",

  // Impact Transition Visual (Horizontal Rectangular Connected Stages)
  transitionStages: [
    { step: "01", title: "TODAY", desc: "Learner Starting Point", color: "#94A3B8" },
    { step: "02", title: "LEARNING GAP IDENTIFICATION", desc: "AI Diagnostic Analysis", color: "#FF7722" },
    { step: "03", title: "PERSONALIZED LEARNING", desc: "Paced Study & Vernacular Guidance", color: "#00F0FF" },
    { step: "04", title: "SKILL DEVELOPMENT", desc: "Multi-Domain Competencies", color: "#10B981" },
    { step: "05", title: "CAREER READINESS", desc: "Portfolio & NSQF Alignment", color: "#A855F7" },
    { step: "06", title: "OPPORTUNITY", desc: "Government Pathway Connectivity", color: "#F59E0B" },
    { step: "07", title: "YOUTH CONTRIBUTION", desc: "Active Workforce Participation", color: "#00F0FF" },
    { step: "08", title: "VIKSIT BHARAT 2047", desc: "Developed & Skilled India", color: "#FF7722" }
  ],

  // Strategic Timeline (NOW -> 2047 - No fake numerical percentages)
  timelineStages: [
    { year: "2026", title: "Current Starting Point", desc: "AI Skill Gap Diagnostics & baseline mapping for every learner." },
    { year: "2030", title: "Stronger Personalized Learning", desc: "Curriculum-aligned pace & regional language guidance across 36 States & UTs." },
    { year: "2035", title: "Improved Skill Readiness", desc: "Multi-domain competency & hands-on practical skill development." },
    { year: "2040", title: "Stronger Career Connectivity", desc: "Direct linkage to government skilling pathways and apprenticeships." },
    { year: "2047", title: "Viksit Bharat Vision", desc: "Empowered, career-ready youth driving India's skilled economy forward." }
  ],

  // Proposed Goal
  proposedGoal: {
    text: "Make personalized learning, skill development and career guidance more accessible so that every learner can identify what to learn, how to improve and where their skills can contribute.",
    steps: ["LEARN", "UPSKILL", "BECOME CAREER-READY", "CONTRIBUTE"]
  },

  // Impact Chart Model (Conceptual Radar / Bar Visualization)
  impactPathwayChart: {
    labels: ['Learning Awareness', 'Skill Readiness', 'Career Clarity', 'Learning Accessibility', 'Opportunity Connectivity', 'Youth Contribution'],
    datasets: [
      {
        label: 'Baseline (Unassisted)',
        data: [35, 40, 30, 45, 25, 38],
        backgroundColor: 'rgba(148, 163, 184, 0.2)',
        borderColor: '#94A3B8',
        borderWidth: 2
      },
      {
        label: 'YuvaSetu Impact Model',
        data: [90, 88, 92, 95, 86, 94],
        backgroundColor: 'rgba(0, 240, 255, 0.25)',
        borderColor: '#00F0FF',
        borderWidth: 2
      }
    ],
    disclaimer: "Illustrative project impact model"
  },

  // BEFORE vs AFTER Visual Comparison
  beforeVsAfter: {
    before: [
      { step: "Learner", detail: "Starting point with varied backgrounds" },
      { step: "Unclear learning gaps", detail: "Difficulty identifying what skills need improvement" },
      { step: "Generic learning", detail: "One-size-fits-all study plans regardless of pace" },
      { step: "Limited career clarity", detail: "Unsure of career domains & required competencies" },
      { step: "Disconnected opportunities", detail: "Unaware of relevant government skilling schemes" }
    ],
    after: [
      { step: "Learner", detail: "Universal starting point" },
      { step: "AI Skill Assessment", detail: "Instant multi-domain diagnostic evaluation" },
      { step: "Learning Gap Identification", detail: "Precise breakdown of strong vs weak skill areas" },
      { step: "Personalized Study Plan", detail: "Custom weekly schedule matched to learner's pace" },
      { step: "Career Guidance", detail: "Regional language guidance in Hindi & English" },
      { step: "Government Pathways", detail: "Direct linkage to Skill India Digital & NCS" },
      { step: "Career Readiness", detail: "High readiness score & NSQF alignment" },
      { step: "Youth Contribution", detail: "Active role in building Viksit Bharat 2047" }
    ]
  },

  // Final Closing Message
  finalMessage: {
    quote: "Every learner has a starting point. YuvaSetu AI helps turn that starting point into a pathway.",
    tagline: "LEARN. BUILD. CONTRIBUTE.",
    vision: "Towards a Skilled and Developed India — Viksit Bharat 2047"
  }
};

