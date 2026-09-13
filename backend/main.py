# YuvaSetu AI — FastAPI Backend Service
# Lenovo LEAP AI Hackathon 2026

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any

app = FastAPI(
    title="YuvaSetu AI Backend Engine",
    description="API for AI-assisted learning gap analysis, study plan generation, and pathway recommendations",
    version="1.0.0"
)

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class SkillAssessmentRequest(BaseModel):
    educationLevel: Optional[str] = "Undergraduate"
    course: Optional[str] = "B.Tech CSE"
    skills: List[str] = []
    targetCareer: Optional[str] = "ai_ml_engineer"
    state: Optional[str] = "Uttar Pradesh"
    preferredLanguage: Optional[str] = "Hindi"
    dailyStudyHours: Optional[float] = 2.0
    skillProficiencies: Optional[Dict[str, str]] = {}

class StudyPlanRequest(BaseModel):
    learningGaps: List[str] = []
    targetCareer: Optional[str] = "AI / ML Engineer"
    dailyStudyHours: Optional[float] = 2.0
    pace: Optional[str] = "Moderate"

class CareerGuideRequest(BaseModel):
    targetCareer: Optional[str] = "ai_ml_engineer"
    language: Optional[str] = "Hindi"
    currentSkills: List[str] = []

class PathwayAnalysisRequest(BaseModel):
    skills: List[str] = []
    state: Optional[str] = "Uttar Pradesh"
    readinessScore: Optional[int] = 50

# Mock DB structures for future MySQL expansion
STATES_DATA = [
    {
        "id": "UP",
        "name": "Uttar Pradesh",
        "code": "UP",
        "literacyRate": "73.0%",
        "grossEnrollment": "25.8%",
        "keySkillHubs": ["Noida AI Tech Hub", "Lucknow IT Corridor"],
        "topDomains": ["AI & Data Entry", "Web Development"],
        "suggestedPathway": "Skill India Digital & IndiaAI Youth Fellowship"
    },
    {
        "id": "MH",
        "name": "Maharashtra",
        "code": "MH",
        "literacyRate": "82.3%",
        "grossEnrollment": "35.1%",
        "keySkillHubs": ["Pune Tech Ecosystem", "Mumbai Fintech Hub"],
        "topDomains": ["Full-Stack Engineering", "Cloud Computing"],
        "suggestedPathway": "FutureSkills Prime & National Career Service"
    },
    {
        "id": "KA",
        "name": "Karnataka",
        "code": "KA",
        "literacyRate": "75.4%",
        "grossEnrollment": "36.2%",
        "keySkillHubs": ["Bengaluru Tech Valley", "Mysuru Innovation Centre"],
        "topDomains": ["GenAI Development", "VLSI & Hardware"],
        "suggestedPathway": "IndiaAI Mission & NSQF Level 6 Certification"
    }
]

@app.get("/")
def read_root():
    return {"message": "YuvaSetu AI API Engine Active", "status": "healthy"}

@app.get("/api/states")
def get_states():
    return {"states": STATES_DATA}

@app.post("/api/skill-assessment")
@app.post("/api/skill-gap")
def analyze_skill_gap(req: SkillAssessmentRequest):
    # Weighted calculation
    skills = req.skills
    proficiencies = req.skillProficiencies or {}
    
    # Required skills mapping
    req_skills = ["Python", "Statistics & Probability", "Machine Learning Fundamentals", "Deep Learning & PyTorch", "SQL & Databases"]
    
    score_map = {"Advanced": 3, "Intermediate": 2, "Beginner": 1, "None": 0}
    total = 0
    analysis = []
    
    for s in req_skills:
        prof = proficiencies.get(s, "Intermediate" if s in skills else "None")
        score = score_map.get(prof, 0)
        total += score
        status = "Strong" if score == 3 else ("Moderate" if score == 2 else ("Weak" if score == 1 else "Major Gap"))
        analysis.append({
            "name": s,
            "proficiency": prof,
            "status": status,
            "score": score
        })
        
    readiness = min(100, int((total / (len(req_skills) * 3)) * 100))
    
    return {
        "targetCareer": req.targetCareer,
        "readinessScore": readiness,
        "strongSkills": [a["name"] for a in analysis if a["status"] == "Strong"],
        "weakSkills": [a["name"] for a in analysis if a["status"] == "Weak"],
        "learningGaps": [a["name"] for a in analysis if a["status"] == "Major Gap"],
        "prioritySkills": [a["name"] for a in analysis if a["status"] in ["Weak", "Major Gap"]],
        "skillAnalysis": analysis,
        "recommendedNextSteps": [
            f"Dedicate {req.dailyStudyHours} hours daily to primary gap.",
            "Complete foundation exercises in Statistics & Machine Learning.",
            "Register for NSQF aligned certification."
        ]
    }

@app.post("/api/study-plan")
def generate_study_plan(req: StudyPlanRequest):
    daily_mins = int((req.dailyStudyHours or 2.0) * 60)
    gaps = req.learningGaps if req.learningGaps else ["Python Fundamentals", "Statistics"]
    
    schedule = [
        {"day": 1, "title": f"{gaps[0]} — Foundations", "mins": min(daily_mins, 90)},
        {"day": 2, "title": f"{gaps[0]} — Practice", "mins": daily_mins},
        {"day": 3, "title": f"{gaps[-1]} — Analytics & Math", "mins": daily_mins},
        {"day": 4, "title": "Database & SQL Integration", "mins": daily_mins},
        {"day": 5, "title": "Mini Project Implementation", "mins": daily_mins + 30},
        {"day": 6, "title": "Code Review & Refactoring", "mins": daily_mins},
        {"day": 7, "title": "Weekly Assessment & Progress Check", "mins": min(daily_mins, 90)}
    ]
    
    return {
        "dailyHours": req.dailyStudyHours,
        "dailyMinutes": daily_mins,
        "days": schedule,
        "milestoneSummary": f"30-Day Path for {req.targetCareer}"
    }

@app.post("/api/career-guide")
def get_career_guide(req: CareerGuideRequest):
    lang = req.language or "Hindi"
    return {
        "language": lang,
        "target": req.targetCareer,
        "guidance": f"Custom roadmap generated in {lang} for target career {req.targetCareer}."
    }

@app.post("/api/analyze-pathway")
def analyze_pathway(req: PathwayAnalysisRequest):
    return {
        "matchedPathways": [
            {
                "name": "Skill India Digital",
                "relevance": "May be suitable based on identified technical gaps.",
                "url": "https://www.skillindiadigital.gov.in"
            },
            {
                "name": "IndiaAI Mission",
                "relevance": "Explore this pathway for emerging tech certification.",
                "url": "https://indiaai.gov.in"
            }
        ]
    }

@app.get("/api/sources")
def get_sources():
    return {
        "sources": [
            "UDISE+ (Ministry of Education)",
            "AISHE (Higher Education Survey)",
            "PLFS (MoSPI)",
            "Skill India Digital",
            "National Career Service (NCS)"
        ]
    }
