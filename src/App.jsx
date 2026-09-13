import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import {
  PLATFORM_INFO,
  VERIFIED_GOV_SOURCES,
  OFFICIAL_SOURCES,
  EDUCATION_CATEGORIES,
  EDUCATION_LEVELS,
  COURSES,
  SKILL_OPTIONS,
  TARGET_CAREERS,
  STATES_DATA,
  GOV_PATHWAYS,
  HINDI_CAREER_GUIDANCE,
  PLATFORM_IMPACT_METRICS,
  VIKSIT_BHARAT_IMPACT,
  calculateSkillGapAssessment,
  generateStudyPlan
} from './data.js';
import {
  Compass,
  BookOpen,
  Award,
  Globe,
  MapPin,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Clock,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Zap,
  Sparkles,
  Layers,
  BarChart3,
  BookMarked,
  GraduationCap,
  Users,
  Target,
  ShieldCheck,
  Building2,
  Sliders,
  Database,
  Search,
  Activity,
  ExternalLink,
  Cpu
} from 'lucide-react';

// Register ChartJS modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// Minimal Professional SVG Logo Component
const YuvaSetuLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 75 Q50 35 80 75" stroke="#FF7722" strokeWidth="8" strokeLinecap="round" />
    <path d="M25 60 Q50 25 75 60" stroke="#00F0FF" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
    <circle cx="50" cy="22" r="12" fill="#00F0FF" />
    <path d="M50 10 L50 34 M38 22 L62 22" stroke="#050811" strokeWidth="3" />
    <circle cx="20" cy="75" r="7" fill="#FF7722" />
    <circle cx="80" cy="75" r="7" fill="#10B981" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [language, setLanguage] = useState('Hindi');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState('All');
  const [selectedStateSearch, setSelectedStateSearch] = useState('');

  // Assessment Inputs
  const [educationCategory, setEducationCategory] = useState('College / University Student');
  const [educationLevel, setEducationLevel] = useState('Undergraduate Degree (BA / BSc / BCom / BTech / BCA / BBA / Law / Agri / MBBS)');
  const [course, setCourse] = useState('B.Tech CSE / IT / AI / Electrical / Mechanical / Civil');
  const [selectedSkills, setSelectedSkills] = useState(['Python', 'JavaScript', 'AI Basics']);
  const [skillProficiencies, setSkillProficiencies] = useState({
    'Python': 'Advanced',
    'JavaScript': 'Intermediate',
    'AI Basics': 'Beginner'
  });
  const [targetCareer, setTargetCareer] = useState('ai_ml_engineer');
  const [userStateCode, setUserStateCode] = useState('UP');
  const [dailyStudyHours, setDailyStudyHours] = useState(2);
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [learningPace, setLearningPace] = useState('Moderate');

  // Interactive Task List State for Study Plan
  const [completedTasks, setCompletedTasks] = useState([1]);

  // Dynamic Calculation State
  const [assessmentResult, setAssessmentResult] = useState(null);
  const [studyPlanResult, setStudyPlanResult] = useState(null);

  useEffect(() => {
    const assessment = calculateSkillGapAssessment({
      skills: selectedSkills,
      targetCareer,
      studyHours: dailyStudyHours,
      skillProficiencies
    });
    setAssessmentResult(assessment);

    const plan = generateStudyPlan({
      learningGaps: assessment.learningGaps,
      studyHours: dailyStudyHours,
      targetCareer: assessment.targetCareer,
      pace: learningPace
    });
    setStudyPlanResult(plan);
  }, [selectedSkills, targetCareer, dailyStudyHours, skillProficiencies, learningPace, difficulty]);

  const selectedStateObj = STATES_DATA.find(s => s.code === userStateCode) || STATES_DATA[0];

  const filteredStates = STATES_DATA.filter(st => {
    const matchesRegion = selectedRegionFilter === 'All'
      || (selectedRegionFilter === 'States' && st.type === 'State')
      || (selectedRegionFilter === 'Union Territories' && st.type === 'Union Territory')
      || st.region === selectedRegionFilter;
    const matchesSearch = selectedStateSearch === '' || st.name.toLowerCase().includes(selectedStateSearch.toLowerCase()) || st.code.toLowerCase().includes(selectedStateSearch.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleSkillToggle = (skillName) => {
    if (selectedSkills.includes(skillName)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skillName));
    } else {
      setSelectedSkills([...selectedSkills, skillName]);
    }
  };

  const handleProficiencyChange = (skillName, level) => {
    setSkillProficiencies(prev => ({
      ...prev,
      [skillName]: level
    }));
  };

  const toggleTaskCompletion = (dayNum) => {
    if (completedTasks.includes(dayNum)) {
      setCompletedTasks(completedTasks.filter(id => id !== dayNum));
    } else {
      setCompletedTasks([...completedTasks, dayNum]);
    }
  };

  // Dark Theme Options for Chart.js
  const darkChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#F8FAFC', font: { family: 'Plus Jakarta Sans', weight: '600' } }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.08)' },
        ticks: { color: '#94A3B8', font: { family: 'Plus Jakarta Sans' } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.08)' },
        ticks: { color: '#94A3B8', font: { family: 'Plus Jakarta Sans' } }
      }
    }
  };

  // Visualizations Data (8 LOGICALLY GROUPED DYNAMIC CHARTS)
  const skillDistChartData = {
    labels: assessmentResult ? assessmentResult.skillAnalysis.map(s => s.name) : [],
    datasets: [
      {
        label: 'Skill Proficiency Rating (0-3)',
        data: assessmentResult ? assessmentResult.skillAnalysis.map(s => s.score) : [],
        backgroundColor: assessmentResult
          ? assessmentResult.skillAnalysis.map(s =>
              s.status === 'Strong' ? '#10B981' : s.status === 'Moderate' ? '#00F0FF' : s.status === 'Weak' ? '#FF7722' : '#F43F5E'
            )
          : [],
        borderRadius: 6
      }
    ]
  };

  const skillCompChartData = {
    labels: ['Strong Skills', 'Moderate Skills', 'Weak Skills', 'Major Gaps'],
    datasets: [
      {
        data: assessmentResult
          ? [
              assessmentResult.strongSkills.length,
              assessmentResult.skillAnalysis.filter(s => s.status === 'Moderate').length,
              assessmentResult.weakSkills.length,
              assessmentResult.learningGaps.length
            ]
          : [1, 1, 1, 2],
        backgroundColor: ['#10B981', '#00F0FF', '#FF7722', '#F43F5E']
      }
    ]
  };

  const progressChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Target Competency Accumulation (%)',
        data: [15, 25, 40, 52, 68, 75, 82],
        borderColor: '#00F0FF',
        backgroundColor: 'rgba(0, 240, 255, 0.12)',
        tension: 0.35,
        fill: true
      }
    ]
  };

  const beforeAfterChartData = {
    labels: ['Initial Gap Index', 'Projected 30-Day Index'],
    datasets: [
      {
        label: 'Skill Gap Index (Lower is Better)',
        data: [75, 22],
        backgroundColor: ['#F43F5E', '#10B981'],
        borderRadius: 8
      }
    ]
  };

  const careerReqChartData = {
    labels: ['Core Concepts', 'Tool Proficiency', 'Domain Math', 'Applied Projects'],
    datasets: [
      {
        label: 'Required Competency Depth',
        data: [90, 85, 80, 95],
        backgroundColor: '#A855F7',
        borderRadius: 6
      }
    ]
  };

  const careerReadinessBySkillAreaChartData = {
    labels: assessmentResult ? assessmentResult.careerReadinessBySkillAreaData.categories : [],
    datasets: [
      {
        label: 'Assessment Score (%)',
        data: assessmentResult ? assessmentResult.careerReadinessBySkillAreaData.readinessPercentages : [65, 75, 80, 70, 60],
        backgroundColor: ['#00F0FF', '#10B981', '#FF7722', '#A855F7', '#F59E0B'],
        borderRadius: 6
      }
    ]
  };

  const learningGapBySkillChartData = {
    labels: assessmentResult ? assessmentResult.learningGapBySkillData.categories : [],
    datasets: [
      {
        label: 'Identified Gap Index (%)',
        data: assessmentResult ? assessmentResult.learningGapBySkillData.gapPercentages : [45, 30, 50, 60, 25],
        backgroundColor: '#FF7722',
        borderRadius: 6
      }
    ]
  };

  const pathwayDistChartData = {
    labels: ['Skill India Digital', 'FutureSkills Prime', 'NCS Placement', 'YUVA AI Initiatives'],
    datasets: [
      {
        data: [35, 30, 20, 15],
        backgroundColor: ['#00F0FF', '#A855F7', '#FF7722', '#10B981']
      }
    ]
  };

  const impactPathwayChartData = {
    labels: VIKSIT_BHARAT_IMPACT.impactPathwayChart.labels,
    datasets: VIKSIT_BHARAT_IMPACT.impactPathwayChart.datasets
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="nav-content">
          <div className="brand-logo" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
            <YuvaSetuLogo size={32} />
            <span className="gradient-text-saffron-emerald">YuvaSetu AI</span>
          </div>

          <nav className="nav-tabs">
            <button className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
              <BookOpen size={16} /> Home
            </button>
            <button className={`nav-btn ${activeTab === 'matrix' ? 'active' : ''}`} onClick={() => setActiveTab('matrix')}>
              <Globe size={16} /> India Explorer
            </button>
            <button className={`nav-btn ${activeTab === 'gap' ? 'active' : ''}`} onClick={() => setActiveTab('gap')}>
              <TrendingUp size={16} /> AI Skill Gap
            </button>
            <button className={`nav-btn ${activeTab === 'plan' ? 'active' : ''}`} onClick={() => setActiveTab('plan')}>
              <Clock size={16} /> Study Plan
            </button>
            <button className={`nav-btn ${activeTab === 'guide' ? 'active' : ''}`} onClick={() => setActiveTab('guide')}>
              <Briefcase size={16} /> Career Guide
            </button>
            <button className={`nav-btn ${activeTab === 'gov' ? 'active' : ''}`} onClick={() => setActiveTab('gov')}>
              <Award size={16} /> YuvaGov Bridge
            </button>
            <button className={`nav-btn ${activeTab === 'impact' ? 'active' : ''}`} onClick={() => setActiveTab('impact')}>
              <Target size={16} /> Impact 2047
            </button>
          </nav>

          <div className="lang-selector">
            <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 800 }}>LANG:</span>
            <button className={`lang-btn ${language === 'Hindi' ? 'active' : ''}`} onClick={() => setLanguage('Hindi')}>
              हिन्दी
            </button>
            <button className={`lang-btn ${language === 'English' ? 'active' : ''}`} onClick={() => setLanguage('English')}>
              ENG
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        
        {/* ===================================================
            SECTION 1: HERO & HOMEPAGE (SECTION 12, 13, 14)
           =================================================== */}
        {activeTab === 'home' && (
          <div>
            <div className="hero-banner">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <YuvaSetuLogo size={36} />
                <GraduationCap size={24} style={{ color: '#00F0FF' }} />
              </div>
              <h1 className="hero-title" style={{ fontSize: '2.8rem', lineHeight: 1.1 }}>
                YuvaSetu AI
              </h1>

              {/* Main Headline */}
              <h2 className="gradient-text-saffron-emerald" style={{ fontSize: '1.65rem', fontWeight: 800, margin: '0.6rem 0 0.4rem 0' }}>
                “{PLATFORM_INFO.mainHeadline}”
              </h2>

              {/* Dynamic Tagline with Education Icon */}
              <p style={{ fontSize: '1.25rem', color: '#00F0FF', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Sparkles size={20} style={{ color: '#FF7722' }} />
                <span>“{PLATFORM_INFO.dynamicTagline}”</span>
              </p>

              <p className="hero-tagline" style={{ maxWidth: '840px', fontSize: '1.02rem', color: '#CBD5E1' }}>
                {PLATFORM_INFO.supportingText}
              </p>

              {/* Hero Visual Stepper */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(0, 240, 255, 0.15)', border: '1px solid var(--border-cyan)', color: '#00F0FF', padding: '0.35rem 0.75rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.8rem' }}>LEARN</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'rgba(255, 119, 34, 0.15)', border: '1px solid var(--border-saffron)', color: '#FF7722', padding: '0.35rem 0.75rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.8rem' }}>ASSESS</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--border-emerald)', color: '#10B981', padding: '0.35rem 0.75rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.8rem' }}>IDENTIFY</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168,85,247,0.3)', color: '#A855F7', padding: '0.35rem 0.75rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.8rem' }}>UPSKILL</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B', padding: '0.35rem 0.75rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.8rem' }}>BUILD CAREER</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'linear-gradient(135deg, #FF7722 0%, #00F0FF 100%)', color: '#ffffff', padding: '0.35rem 0.75rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.8rem', boxShadow: '0 0 10px rgba(0,240,255,0.4)' }}>VIKSIT BHARAT 2047</span>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="hero-cta-group">
                <button className="btn-primary" onClick={() => setActiveTab('gap')}>
                  Start AI Skill Assessment <ArrowRight size={18} />
                </button>
                <button className="btn-secondary" onClick={() => setActiveTab('matrix')}>
                  Explore India Education & Skills
                </button>
              </div>
            </div>

            {/* ONE PLATFORM. EVERY LEARNER. */}
            <div className="card saffron-accent" style={{ marginBottom: '2.5rem', padding: '2rem' }}>
              <div className="pill-tag"><Users size={14} /> Universal Inclusive Platform</div>
              <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.6rem', color: '#F8FAFC' }}>
                ONE PLATFORM. EVERY LEARNER.
              </h2>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', maxWidth: '880px', marginBottom: '1.25rem' }}>
                "Whether you are in school, college, vocational training, a professional degree, preparing for a job, changing careers, or learning a new skill — YuvaSetu AI helps you understand what to learn next."
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {[
                  "Class 8–12", "Undergraduate", "Postgraduate", "B.Tech", "BCA", "BA", "B.Sc", "B.Com", "BBA",
                  "Medical & Healthcare", "Law", "Agriculture", "Design", "ITI Trade", "Polytechnic", "Diploma",
                  "Vocational Learner", "Job Seeker", "Career Switcher", "Working Professional", "Lifelong Learner"
                ].map(item => (
                  <span key={item} style={{ background: 'rgba(5, 8, 17, 0.8)', border: '1px solid var(--border-cyan)', color: '#00F0FF', padding: '0.35rem 0.7rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* HOW YUVASETU AI HELPS */}
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <div className="pill-tag"><Zap size={14} /> End-to-End Guided Journey</div>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 800 }}>How YuvaSetu AI Helps</h2>
            </div>
            <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
              {[
                { num: '01', title: 'ASSESS', desc: 'Tell us about your education, skills and goals.', color: '#00F0FF' },
                { num: '02', title: 'FIND YOUR GAP', desc: 'AI identifies the skills you need to improve.', color: '#FF7722' },
                { num: '03', title: 'LEARN YOUR WAY', desc: 'Get a study plan made for your pace.', color: '#10B981' },
                { num: '04', title: 'EXPLORE CAREERS', desc: 'Explore careers that fit your skills and interests.', color: '#A855F7' },
                { num: '05', title: 'CONNECT OPPORTUNITIES', desc: 'Find relevant learning and government-supported pathways.', color: '#F59E0B' },
                { num: '06', title: 'TRACK PROGRESS', desc: 'See how your skills improve over time.', color: '#00F0FF' }
              ].map(st => (
                <div key={st.num} className="card" style={{ borderTop: `3px solid ${st.color}` }}>
                  <div className="mono-spec" style={{ fontSize: '1.4rem', color: st.color, marginBottom: '0.4rem' }}>{st.num}</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.4rem' }}>{st.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================================================
            SECTION 2: INDIA EDUCATION & SKILL EXPLORER (NO MAP DEPENDENCIES) (SECTION 1-6, 11, 15, 16, 17)
           =================================================== */}
        {activeTab === 'matrix' && (
          <div>
            <div className="section-header">
              <div className="pill-tag"><Globe size={14} /> 28 States + 8 Union Territories</div>
              <h1>India Education & Skill Explorer</h1>
              <p>Explore education, skills, learning opportunities and career pathways across India's 28 States and 8 Union Territories.</p>
            </div>

            {/* Compact Stat Row (Section 15) */}
            <div className="grid-3" style={{ gap: '1rem', marginBottom: '1.75rem' }}>
              <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
                <div className="mono-spec" style={{ fontSize: '1.8rem', color: '#00F0FF' }}>36</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F8FAFC' }}>States & Union Territories</div>
              </div>
              <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ color: '#FF7722', marginBottom: '0.2rem' }}><BookOpen size={24} /></div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F8FAFC' }}>Education Learning Ecosystem</div>
              </div>
              <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ color: '#10B981', marginBottom: '0.2rem' }}><Briefcase size={24} /></div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F8FAFC' }}>Skills & Career Pathways</div>
              </div>
            </div>

            {/* Search & Filter Controls (Section 16) */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['All', 'States', 'Union Territories'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setSelectedRegionFilter(filter)}
                    style={{
                      background: selectedRegionFilter === filter ? 'var(--neon-saffron)' : 'rgba(14, 22, 38, 0.8)',
                      color: selectedRegionFilter === filter ? '#ffffff' : '#94A3B8',
                      border: selectedRegionFilter === filter ? '1px solid var(--neon-saffron)' : '1px solid var(--border-cyan)',
                      padding: '0.45rem 1.1rem',
                      borderRadius: '20px',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      cursor: 'pointer'
                    }}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative', width: '280px' }}>
                <input
                  type="text"
                  placeholder="Search state or UT..."
                  value={selectedStateSearch}
                  onChange={(e) => setSelectedStateSearch(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '2.2rem', fontSize: '0.88rem' }}
                />
                <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
              </div>
            </div>

            {/* HIGH-DENSITY COMPACT TABLE + COLUMN LAYOUT */}
            <div className="explorer-table-container">
              <div className="explorer-table-header">
                <div>Region</div>
                <div>Education Focus</div>
                <div>Key Skills</div>
                <div>Language</div>
                <div>Career Domains</div>
                <div style={{ textAlign: 'right' }}>Action</div>
              </div>
              <div className="explorer-table-body">
                {filteredStates.length > 0 ? filteredStates.map(st => {
                  const isSelected = userStateCode === st.code;
                  return (
                    <div
                      key={st.code}
                      className={`explorer-row ${isSelected ? 'selected' : ''}`}
                      onClick={() => setUserStateCode(st.code)}
                    >
                      <div className="region-cell-name">
                        <span style={{ fontSize: '1.1rem' }}>🇮🇳</span>
                        <span style={{ fontWeight: 800 }}>{st.name}</span>
                        <span className={`badge-type ${st.type === 'State' ? 'badge-state' : 'badge-ut'}`}>
                          {st.type === 'State' ? 'STATE' : 'UT'}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#CBD5E1', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {st.eduContext}
                      </div>
                      <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                        {st.keySkillAreas.slice(0, 3).map(sk => (
                          <span key={sk} className="skill-pill-tag">{sk}</span>
                        ))}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
                        {st.primaryLanguage}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#CBD5E1', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {st.careerDomains.join(' • ')}
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <button className="btn-explore-row" onClick={(e) => { e.stopPropagation(); setUserStateCode(st.code); }}>
                          Explore <ChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  );
                }) : (
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#94A3B8' }}>
                    No matching state or union territory found. Try another search term.
                  </div>
                )}
              </div>
            </div>

            {/* SELECTED REGION DETAILED PANEL */}
            {selectedStateObj && (
              <div className="selected-region-panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>SELECTED REGION</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#F8FAFC' }}>🇮🇳 {selectedStateObj.name}</h3>
                      <span className={`badge-type ${selectedStateObj.type === 'State' ? 'badge-state' : 'badge-ut'}`} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                        {selectedStateObj.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <button className="btn-primary" onClick={() => setActiveTab('gap')}>
                    Build My Personalized Path <ArrowRight size={16} />
                  </button>
                </div>

                <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(5, 8, 17, 0.8)', padding: '1.1rem', borderRadius: '12px', border: '1px solid var(--border-cyan)' }}>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#00F0FF', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      🎓 Education Context
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#CBD5E1' }}>{selectedStateObj.eduContext}</p>
                  </div>

                  <div style={{ background: 'rgba(5, 8, 17, 0.8)', padding: '1.1rem', borderRadius: '12px', border: '1px solid var(--border-saffron)' }}>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FF7722', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      🧠 Key Skill Areas
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {selectedStateObj.keySkillAreas.map(sk => (
                        <span key={sk} style={{ background: 'rgba(255,119,34,0.15)', border: '1px solid rgba(255,119,34,0.3)', color: '#FF7722', padding: '0.25rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid-3" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(5, 8, 17, 0.7)', padding: '0.9rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                    <strong style={{ fontSize: '0.82rem', color: '#94A3B8' }}>📚 Learning Opportunities:</strong>
                    <div style={{ fontSize: '0.85rem', color: '#F8FAFC', marginTop: '0.25rem', fontWeight: 600 }}>{selectedStateObj.learningOpps.join(', ')}</div>
                  </div>

                  <div style={{ background: 'rgba(5, 8, 17, 0.7)', padding: '0.9rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                    <strong style={{ fontSize: '0.82rem', color: '#94A3B8' }}>🗣 Regional Language(s):</strong>
                    <div style={{ fontSize: '0.85rem', color: '#00F0FF', marginTop: '0.25rem', fontWeight: 700 }}>{selectedStateObj.primaryLanguage}</div>
                  </div>

                  <div style={{ background: 'rgba(5, 8, 17, 0.7)', padding: '0.9rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                    <strong style={{ fontSize: '0.82rem', color: '#94A3B8' }}>💼 Career Domains:</strong>
                    <div style={{ fontSize: '0.85rem', color: '#F8FAFC', marginTop: '0.25rem', fontWeight: 600 }}>{selectedStateObj.careerDomains.join(', ')}</div>
                  </div>
                </div>

                <div style={{ background: 'rgba(5, 8, 17, 0.6)', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid var(--border-cyan)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                    <strong style={{ color: '#00F0FF' }}>Official Government References:</strong> UDISE+, AISHE, National Career Service (NCS), Skill India Digital
                  </div>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '0.2rem 0.5rem', borderRadius: '10px', fontWeight: 700 }}>
                    Official Government Reference
                  </span>
                </div>
              </div>
            )}

            {/* TRUSTED GOVERNMENT SOURCES SECTION (Section 11) */}
            <div style={{ marginTop: '3rem' }}>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                <div className="pill-tag"><ShieldCheck size={14} /> Official References</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Trusted Government Sources</h2>
              </div>

              <div className="grid-3" style={{ gap: '1.25rem' }}>
                {VERIFIED_GOV_SOURCES.map(src => (
                  <div key={src.id} className="card" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F8FAFC' }}>{src.name}</h4>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#00F0FF', fontWeight: 700, marginBottom: '0.4rem' }}>{src.category}</div>
                    <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '0.75rem' }}>{src.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 700 }}>{src.label}</span>
                      <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: '#FF7722', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}>
                        Visit Official Source <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            SECTION 3: AI SKILL & LEARNING GAP (8 DYNAMIC CHARTS LOGICALLY GROUPED)
           =================================================== */}
        {activeTab === 'gap' && (
          <div>
            <div className="section-header">
              <div className="pill-tag"><Zap size={14} /> AI Recommendation Engine</div>
              <h1>AI Skill & Learning Gap Diagnostics</h1>
              <p>Supports School (Class 8-12), College, ITI, Vocational, Job Seekers & Professionals across India.</p>
            </div>

            <div className="grid-2" style={{ marginBottom: '2rem' }}>
              <div className="card">
                <div className="card-header">
                  <span className="card-title"><Layers size={20} style={{ color: '#00F0FF' }} /> Student Profile Inputs</span>
                </div>

                <div className="form-group">
                  <label className="form-label">Education Category</label>
                  <select className="form-select" value={educationCategory} onChange={(e) => setEducationCategory(e.target.value)}>
                    {EDUCATION_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Education Level</label>
                  <select className="form-select" value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}>
                    {EDUCATION_LEVELS.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Course / Stream / Programme</label>
                  <select className="form-select" value={course} onChange={(e) => setCourse(e.target.value)}>
                    {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Skill / Career Goal</label>
                  <select className="form-select" value={targetCareer} onChange={(e) => setTargetCareer(e.target.value)}>
                    {TARGET_CAREERS.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Current Skills & Self-Assessed Proficiency</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '220px', overflowY: 'auto', paddingRight: '0.4rem' }}>
                    {SKILL_OPTIONS.map(skill => {
                      const isSel = selectedSkills.includes(skill);
                      const currentProf = skillProficiencies[skill] || 'None';
                      return (
                        <div key={skill} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5, 8, 17, 0.7)', padding: '0.4rem 0.6rem', borderRadius: '8px', border: isSel ? '1px solid var(--border-cyan)' : '1px solid rgba(255, 255, 255, 0.08)' }}>
                          <label style={{ fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', color: isSel ? '#00F0FF' : '#F8FAFC' }}>
                            <input type="checkbox" checked={isSel} onChange={() => handleSkillToggle(skill)} />
                            {skill}
                          </label>
                          {isSel && (
                            <select style={{ fontSize: '0.75rem', padding: '0.2rem 0.4rem', borderRadius: '4px', background: '#0E1626', color: '#F8FAFC', border: '1px solid var(--border-cyan)' }} value={currentProf} onChange={(e) => handleProficiencyChange(skill, e.target.value)}>
                              <option value="Beginner">Beginner</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Advanced">Advanced</option>
                            </select>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '0.75rem' }}>
                  <div className="form-group">
                    <label className="form-label">Daily Available Time</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <input type="range" min="1" max="8" value={dailyStudyHours} onChange={(e) => setDailyStudyHours(parseFloat(e.target.value))} style={{ flex: 1 }} />
                      <span className="mono-spec" style={{ color: '#FF7722', minWidth: '55px' }}>{dailyStudyHours} hrs/d</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Location / State</label>
                    <select className="form-select" value={userStateCode} onChange={(e) => setUserStateCode(e.target.value)}>
                      {STATES_DATA.map(st => <option key={st.code} value={st.code}>{st.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Assessment Results */}
              <div className="card saffron-accent">
                <div className="card-header">
                  <span className="card-title"><Sparkles size={20} style={{ color: '#FF7722' }} /> AI Diagnostic Output</span>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(255, 119, 34, 0.15)', color: '#FF7722', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 800, border: '1px solid var(--neon-saffron)' }}>
                    AI Recommendation Engine
                  </span>
                </div>

                {assessmentResult && (
                  <div>
                    <div className="score-display">
                      <div className="score-circle-big">{assessmentResult.readinessScore}%</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>SKILL READINESS SCORE</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#F8FAFC' }}>{assessmentResult.targetCareer}</div>
                        <div className="progress-bar-bg">
                          <div className="progress-bar-fill fill-emerald" style={{ width: `${assessmentResult.readinessScore}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="grid-2" style={{ gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--border-emerald)', padding: '0.75rem', borderRadius: '10px' }}>
                        <div style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 800, marginBottom: '0.3rem' }}>STRONG SKILLS</div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F8FAFC' }}>
                          {assessmentResult.strongSkills.length > 0 ? assessmentResult.strongSkills.join(', ') : 'None identified'}
                        </div>
                      </div>

                      <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.35)', padding: '0.75rem', borderRadius: '10px' }}>
                        <div style={{ fontSize: '0.72rem', color: '#F43F5E', fontWeight: 800, marginBottom: '0.3rem' }}>MAJOR LEARNING GAPS</div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F8FAFC' }}>
                          {assessmentResult.learningGaps.length > 0 ? assessmentResult.learningGaps.join(', ') : 'None (Ready)'}
                        </div>
                      </div>
                    </div>

                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem', color: '#F8FAFC' }}>Recommended AI Learning Areas:</h4>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {assessmentResult.recommendedNextSteps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* LOGICAL GROUP 1: MY SKILL PROFILE */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#00F0FF', marginBottom: '1rem' }}>MY SKILL PROFILE</h3>
              <div className="grid-2">
                <div className="card">
                  <div className="card-header"><span className="card-title"><BarChart3 size={18} /> 1. Skill Distribution Bar Chart</span></div>
                  <div style={{ height: '230px' }}><Bar data={skillDistChartData} options={darkChartOptions} /></div>
                </div>
                <div className="card">
                  <div className="card-header"><span className="card-title"><TrendingUp size={18} /> 2. Skill Composition Doughnut Chart</span></div>
                  <div style={{ height: '230px', display: 'flex', justifyContent: 'center' }}><Doughnut data={skillCompChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#F8FAFC' } } } }} /></div>
                </div>
              </div>
            </div>

            {/* LOGICAL GROUP 2: MY LEARNING JOURNEY */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981', marginBottom: '1rem' }}>MY LEARNING JOURNEY</h3>
              <div className="grid-2">
                <div className="card">
                  <div className="card-header"><span className="card-title"><TrendingUp size={18} /> 3. Learning Progress Line Chart</span></div>
                  <div style={{ height: '230px' }}><Line data={progressChartData} options={darkChartOptions} /></div>
                </div>
                <div className="card">
                  <div className="card-header"><span className="card-title"><BarChart3 size={18} /> 4. Learning Gap Before vs After Chart</span></div>
                  <div style={{ height: '230px' }}><Bar data={beforeAfterChartData} options={darkChartOptions} /></div>
                </div>
              </div>
            </div>

            {/* LOGICAL GROUP 3: MY CAREER READINESS */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#A855F7', marginBottom: '1rem' }}>MY CAREER READINESS</h3>
              <div className="grid-2">
                <div className="card">
                  <div className="card-header"><span className="card-title"><BarChart3 size={18} /> 5. Career Skill Requirements</span></div>
                  <div style={{ height: '230px' }}><Bar data={careerReqChartData} options={{ indexAxis: 'y', ...darkChartOptions }} /></div>
                </div>
                <div className="card">
                  <div className="card-header"><span className="card-title"><Activity size={18} /> 6. Career Readiness by Skill Area</span></div>
                  <div style={{ height: '230px' }}><Bar data={careerReadinessBySkillAreaChartData} options={darkChartOptions} /></div>
                </div>
              </div>
            </div>

            {/* LOGICAL GROUP 4: MY NEXT STEPS & IMPACT */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FF7722', marginBottom: '1rem' }}>MY NEXT STEPS & IMPACT</h3>
              <div className="grid-2">
                <div className="card">
                  <div className="card-header"><span className="card-title"><BarChart3 size={18} /> 7. Learning Gap by Skill</span></div>
                  <div style={{ height: '230px' }}><Bar data={learningGapBySkillChartData} options={{ indexAxis: 'y', ...darkChartOptions }} /></div>
                </div>
                <div className="card">
                  <div className="card-header"><span className="card-title"><TrendingUp size={18} /> 8. Pathway Distribution</span></div>
                  <div style={{ height: '230px', display: 'flex', justifyContent: 'center' }}><Pie data={pathwayDistChartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#F8FAFC' } } } }} /></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            SECTION 4: PERSONALIZED AI STUDY PLAN
           =================================================== */}
        {activeTab === 'plan' && (
          <div>
            <div className="section-header">
              <div className="pill-tag"><Clock size={14} /> Dynamic Pace Schedule</div>
              <h1>Personalized AI Study Plan</h1>
              <p>Get a study plan made for your pace, weaknesses, and available time.</p>
            </div>

            <div className="grid-2" style={{ marginBottom: '2rem' }}>
              <div className="card">
                <div className="card-header">
                  <span className="card-title"><Sliders size={20} style={{ color: '#FF7722' }} /> Study Plan Controls</span>
                </div>

                <div className="form-group">
                  <label className="form-label">Daily Available Learning Time: <strong style={{ color: '#00F0FF' }}>{dailyStudyHours} Hours / day</strong></label>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
                    {[0.5, 1, 2, 3.5].map(hrs => (
                      <button
                        key={hrs}
                        onClick={() => setDailyStudyHours(hrs)}
                        style={{
                          flex: 1,
                          background: dailyStudyHours === hrs ? 'var(--neon-saffron)' : 'rgba(5, 8, 17, 0.8)',
                          color: dailyStudyHours === hrs ? '#ffffff' : '#94A3B8',
                          border: dailyStudyHours === hrs ? '1px solid var(--neon-saffron)' : '1px solid var(--border-cyan)',
                          padding: '0.4rem',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          cursor: 'pointer'
                        }}
                      >
                        {hrs === 0.5 ? '30 min' : hrs === 3.5 ? '3+ hours' : `${hrs} hr`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Difficulty Level</label>
                  <select className="form-select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="Beginner">Beginner (Foundational)</option>
                    <option value="Intermediate">Intermediate (Balanced)</option>
                    <option value="Advanced">Advanced (Accelerated)</option>
                  </select>
                </div>

                <div style={{ background: 'rgba(5, 8, 17, 0.8)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-cyan)', marginTop: '1rem' }}>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 800 }}>MONTHLY MILESTONE STRUCTURE</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.6rem' }}>
                    <div style={{ fontSize: '0.85rem', color: '#00F0FF' }}>• <strong>Week 1</strong> → Fundamentals</div>
                    <div style={{ fontSize: '0.85rem', color: '#FF7722' }}>• <strong>Week 2</strong> → Weak Area Improvement</div>
                    <div style={{ fontSize: '0.85rem', color: '#10B981' }}>• <strong>Week 3</strong> → Practice</div>
                    <div style={{ fontSize: '0.85rem', color: '#A855F7' }}>• <strong>Week 4</strong> → Project / Assessment</div>
                  </div>
                </div>
              </div>

              {/* Task Checklist */}
              <div className="card saffron-accent">
                <div className="card-header">
                  <span className="card-title"><CheckCircle2 size={20} style={{ color: '#10B981' }} /> Interactive Weekly Tasks</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10B981' }}>
                    {completedTasks.length} / 7 Completed
                  </span>
                </div>

                {studyPlanResult && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {studyPlanResult.days.map((d) => {
                      const isDone = completedTasks.includes(d.day);
                      return (
                        <div key={d.day} className={`task-item ${isDone ? 'completed' : ''}`}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <input type="checkbox" checked={isDone} onChange={() => toggleTaskCompletion(d.day)} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                            <div>
                              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F8FAFC' }}>
                                {d.title}
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{d.category}</div>
                            </div>
                          </div>
                          <span style={{ fontSize: '0.75rem', background: 'rgba(0, 240, 255, 0.15)', color: '#00F0FF', border: '1px solid rgba(0, 240, 255, 0.3)', padding: '0.2rem 0.55rem', borderRadius: '12px', fontWeight: 800 }}>
                            {d.mins} mins
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            SECTION 5: REGIONAL-LANGUAGE AI CAREER GUIDE
           =================================================== */}
        {activeTab === 'guide' && (
          <div>
            <div className="section-header">
              <div className="pill-tag"><Globe size={14} /> Regional Language Support</div>
              <h1>Regional-Language AI Career Guide</h1>
              <p>Explore careers that fit your skills and interests in your preferred language.</p>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
              <div className="card-header">
                <span className="card-title"><Briefcase size={20} style={{ color: '#00F0FF' }} /> Target Career: {TARGET_CAREERS.find(c => c.id === targetCareer)?.title}</span>
                <div className="lang-selector">
                  <button className={`lang-btn ${language === 'Hindi' ? 'active' : ''}`} onClick={() => setLanguage('Hindi')}>हिन्दी</button>
                  <button className={`lang-btn ${language === 'English' ? 'active' : ''}`} onClick={() => setLanguage('English')}>English</button>
                </div>
              </div>

              {language === 'Hindi' ? (
                <div>
                  <div style={{ background: 'rgba(255, 119, 34, 0.1)', border: '1px solid var(--border-saffron)', padding: '1rem', borderRadius: '12px', marginBottom: '1.25rem', color: '#F8FAFC' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem', color: '#FF7722' }}>
                      {HINDI_CAREER_GUIDANCE[targetCareer]?.title || "करियर रोडमैप"}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#CBD5E1' }}>
                      {HINDI_CAREER_GUIDANCE[targetCareer]?.summary}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {HINDI_CAREER_GUIDANCE[targetCareer]?.steps.map((st, idx) => (
                      <div key={idx} style={{ background: 'rgba(5, 8, 17, 0.7)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid #FF7722', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F8FAFC', marginBottom: '0.2rem' }}>{st.phase}</div>
                        <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{st.detail}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.25rem', padding: '0.75rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--border-emerald)', color: '#10B981', borderRadius: '8px', fontWeight: 800, fontSize: '0.88rem' }}>
                    {HINDI_CAREER_GUIDANCE[targetCareer]?.advice}
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ background: 'rgba(0, 240, 255, 0.1)', border: '1px solid var(--border-cyan)', padding: '1rem', borderRadius: '12px', marginBottom: '1.25rem', color: '#F8FAFC' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem', color: '#00F0FF' }}>
                      Career Guide: {TARGET_CAREERS.find(c => c.id === targetCareer)?.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#CBD5E1' }}>
                      {TARGET_CAREERS.find(c => c.id === targetCareer)?.desc}
                    </p>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ background: 'rgba(5, 8, 17, 0.7)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                      <h4 style={{ color: '#00F0FF', fontSize: '0.95rem', marginBottom: '0.4rem' }}>What skills are needed?</h4>
                      <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: '#CBD5E1' }}>
                        {TARGET_CAREERS.find(c => c.id === targetCareer)?.requiredSkills.map(sk => <li key={sk}>{sk}</li>)}
                      </ul>
                    </div>

                    <div style={{ background: 'rgba(5, 8, 17, 0.7)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                      <h4 style={{ color: '#10B981', fontSize: '0.95rem', marginBottom: '0.4rem' }}>What can I do after learning?</h4>
                      <p style={{ fontSize: '0.88rem', color: '#CBD5E1' }}>
                        Apply for entry-level positions, technical apprenticeships on Skill India Digital, or register for NSQF Level certifications.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===================================================
            SECTION 6: YUVAGOV BRIDGE
           =================================================== */}
        {activeTab === 'gov' && (
          <div>
            <div className="section-header">
              <div className="pill-tag"><Award size={14} /> Government Skilling Linkage</div>
              <h1>YuvaGov Bridge</h1>
              <p className="gradient-text-saffron-emerald" style={{ fontSize: '1.3rem', fontWeight: 800 }}>
                “From What I Learn to Where I Can Contribute.”
              </p>
            </div>

            {/* Stepper Flow */}
            <div className="card saffron-accent" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', color: '#FF7722' }}>
                Youth Contribution Transition Flow:
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', fontSize: '0.8rem', fontWeight: 800 }}>
                <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.4rem 0.7rem', borderRadius: '6px', color: '#CBD5E1' }}>EDUCATION</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.4rem 0.7rem', borderRadius: '6px', color: '#CBD5E1' }}>SKILL ASSESSMENT</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.4rem 0.7rem', borderRadius: '6px', color: '#CBD5E1' }}>LEARNING GAP</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.4rem 0.7rem', borderRadius: '6px', color: '#CBD5E1' }}>PERSONALIZED UPSKILLING</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.4rem 0.7rem', borderRadius: '6px', color: '#CBD5E1' }}>SKILL READINESS</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'var(--neon-saffron)', color: '#ffffff', padding: '0.4rem 0.7rem', borderRadius: '6px', boxShadow: '0 0 10px rgba(255,119,34,0.4)' }}>RELEVANT GOVERNMENT PATHWAY</span>
                <span style={{ color: '#94A3B8' }}>↓</span>
                <span style={{ background: 'var(--neon-emerald)', color: '#ffffff', padding: '0.4rem 0.7rem', borderRadius: '6px', boxShadow: '0 0 10px rgba(16,185,129,0.4)' }}>YOUTH CONTRIBUTION</span>
              </div>
            </div>

            {/* Matched Pathways */}
            <div className="grid-2" style={{ marginBottom: '2rem' }}>
              {GOV_PATHWAYS.map(pw => (
                <div key={pw.id} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC' }}>{pw.title}</h3>
                    {pw.nsqfAligned && (
                      <span style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', border: '1px solid var(--border-emerald)', padding: '0.2rem 0.5rem', borderRadius: '12px', fontWeight: 800 }}>
                        NSQF Aligned
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {pw.ministry}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '0.75rem' }}>
                    {pw.description}
                  </p>
                  <div style={{ background: 'rgba(5, 8, 17, 0.8)', padding: '0.6rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-cyan)', fontSize: '0.82rem', marginBottom: '1rem' }}>
                    <strong style={{ color: '#00F0FF' }}>Relevance to your profile:</strong> {pw.relevanceReason}
                  </div>
                  <a href={pw.actionUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', fontSize: '0.85rem' }}>
                    Explore Pathway <ChevronRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================================================
            SECTION 7: VIKSIT BHARAT 2047 IMPACT PAGE (SECTION 12-19)
           =================================================== */}
        {activeTab === 'impact' && (
          <div>
            {/* Header & Subtitle (Section 12 & 13) */}
            <div className="section-header">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,119,34,0.15)', border: '1px solid var(--border-saffron)', color: '#FF7722', padding: '0.35rem 0.8rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <Target size={14} /> YuvaSetu Impact Framework
              </div>
              <h1 style={{ fontSize: '2.4rem', lineHeight: 1.15 }}>{VIKSIT_BHARAT_IMPACT.title}</h1>
              <p style={{ maxWidth: '820px', margin: '0.5rem auto 0 auto', fontSize: '1.05rem', color: '#CBD5E1' }}>
                {VIKSIT_BHARAT_IMPACT.subtitle}
              </p>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.5rem', fontStyle: 'italic' }}>
                {VIKSIT_BHARAT_IMPACT.disclaimer}
              </div>
            </div>

            {/* 1. IMPACT TRANSITION VISUAL (Section 14) */}
            <div className="card saffron-accent" style={{ marginBottom: '2.5rem', padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#F8FAFC' }}>
                  Youth Skill & National Contribution Pathway
                </h3>
                <span className="mono-spec" style={{ fontSize: '0.75rem', color: '#00F0FF' }}>STAGES 01 → 08</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '1.25rem' }}>
                A progressive journey bridging baseline education to active youth contribution for national growth.
              </p>

              <div className="transition-stages-container">
                {VIKSIT_BHARAT_IMPACT.transitionStages.map((st, idx) => (
                  <React.Fragment key={st.step}>
                    <div className="transition-stage-card" style={{ borderTop: `3px solid ${st.color}` }}>
                      <div className="transition-stage-number" style={{ color: st.color }}>{st.step}</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.2rem' }}>{st.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{st.desc}</div>
                    </div>
                    {idx < VIKSIT_BHARAT_IMPACT.transitionStages.length - 1 && (
                      <div className="transition-arrow">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 2. STRATEGIC TIMELINE "NOW → 2047" (Section 15 - NO fake numerical percentages) */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                <div className="pill-tag"><Clock size={14} /> Long-Term Vision</div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Strategic Roadmap: NOW → 2047</h2>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Mapping individual learner progress to India's long-term developed economy goals.</p>
              </div>

              <div className="timeline-track">
                {VIKSIT_BHARAT_IMPACT.timelineStages.map(st => (
                  <div key={st.year} className="timeline-card">
                    <div className="timeline-year">{st.year}</div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '0.35rem' }}>{st.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: '#CBD5E1' }}>{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. OUR PROPOSED GOAL (Section 16) */}
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(14, 22, 38, 0.95) 0%, rgba(255, 119, 34, 0.1) 100%)', border: '1px solid var(--border-saffron)', padding: '2rem', marginBottom: '2.5rem' }}>
              <div className="pill-tag" style={{ background: 'var(--neon-saffron)', color: '#ffffff' }}>OUR PROPOSED GOAL</div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F8FAFC', margin: '0.75rem 0 0.5rem 0' }}>
                Democratizing Accessible Education & Career Pathways
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', maxWidth: '920px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                “{VIKSIT_BHARAT_IMPACT.proposedGoal.text}”
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                {VIKSIT_BHARAT_IMPACT.proposedGoal.steps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div style={{ background: 'rgba(5, 8, 17, 0.9)', border: '1px solid var(--border-cyan)', color: '#00F0FF', padding: '0.5rem 1.1rem', borderRadius: '12px', fontWeight: 800, fontSize: '0.9rem' }}>
                      {step}
                    </div>
                    {idx < VIKSIT_BHARAT_IMPACT.proposedGoal.steps.length - 1 && (
                      <span style={{ color: '#FF7722', fontWeight: 800, fontSize: '1.1rem' }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 4. IMPACT MODEL CHART & BEFORE vs AFTER (Section 17 & 18) */}
            <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
              {/* Impact Pathway Chart */}
              <div className="card">
                <div className="card-header">
                  <span className="card-title"><BarChart3 size={18} style={{ color: '#00F0FF' }} /> YuvaSetu Impact Pathway</span>
                  <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontStyle: 'italic' }}>{VIKSIT_BHARAT_IMPACT.impactPathwayChart.disclaimer}</span>
                </div>
                <div style={{ height: '270px' }}>
                  <Bar data={impactPathwayChartData} options={darkChartOptions} />
                </div>
              </div>

              {/* Before vs After Visual Comparison */}
              <div className="card saffron-accent">
                <div className="card-header">
                  <span className="card-title"><Layers size={18} style={{ color: '#FF7722' }} /> Learner Experience Transformation</span>
                </div>

                <div className="before-after-container" style={{ gap: '0.75rem', margin: 0 }}>
                  <div className="before-column" style={{ padding: '0.85rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#F43F5E', marginBottom: '0.5rem' }}>BEFORE YUVASETU</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {VIKSIT_BHARAT_IMPACT.beforeVsAfter.before.map((b, i) => (
                        <div key={i} style={{ fontSize: '0.78rem', color: '#94A3B8', background: 'rgba(5,8,17,0.5)', padding: '0.35rem 0.5rem', borderRadius: '6px' }}>
                          • <strong>{b.step}</strong>: {b.detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="after-column" style={{ padding: '0.85rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>AFTER YUVASETU</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {VIKSIT_BHARAT_IMPACT.beforeVsAfter.after.map((a, i) => (
                        <div key={i} style={{ fontSize: '0.78rem', color: '#CBD5E1', background: 'rgba(5,8,17,0.7)', padding: '0.35rem 0.5rem', borderRadius: '6px', borderLeft: '2px solid #10B981' }}>
                          ✓ <strong>{a.step}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. FINAL CLOSING MESSAGE (Section 19) */}
            <div className="card saffron-accent" style={{ textAlign: 'center', padding: '3rem 2rem', background: 'radial-gradient(circle at 50% 50%, rgba(255, 119, 34, 0.15) 0%, rgba(5, 8, 17, 0.95) 70%)', border: '1px solid var(--border-saffron)' }}>
              <YuvaSetuLogo size={48} />
              <h2 className="gradient-text-saffron-emerald" style={{ fontSize: '2.1rem', fontWeight: 800, margin: '1rem 0 0.5rem 0' }}>
                “{VIKSIT_BHARAT_IMPACT.finalMessage.quote}”
              </h2>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00F0FF', letterSpacing: '0.1em', margin: '1rem 0' }}>
                {VIKSIT_BHARAT_IMPACT.finalMessage.tagline}
              </div>
              <p style={{ fontSize: '1.1rem', color: '#CBD5E1', fontWeight: 700 }}>
                {VIKSIT_BHARAT_IMPACT.finalMessage.vision}
              </p>
              <div style={{ marginTop: '1.75rem' }}>
                <button className="btn-primary" onClick={() => setActiveTab('gap')}>
                  Start AI Skill Assessment Now <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer & Verified Source Citations */}
      <footer style={{ background: 'rgba(5, 8, 17, 0.95)', borderTop: '1px solid var(--border-cyan)', color: '#94A3B8', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F8FAFC', fontWeight: 800, fontSize: '1.25rem' }}>
              <YuvaSetuLogo size={28} /> YuvaSetu AI
            </div>
            <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
              Empowering Every Learner Today. Building a Skilled Viksit Bharat 2047 Tomorrow.
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', fontSize: '0.78rem', color: '#64748B' }}>
            <strong style={{ color: '#94A3B8' }}>Verified Official Government Resources:</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.4rem' }}>
              {VERIFIED_GOV_SOURCES.map(src => (
                <a key={src.id} href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', textDecoration: 'underline' }}>
                  {src.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
