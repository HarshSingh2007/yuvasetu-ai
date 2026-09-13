# YuvaSetu AI — Python Recommendation & AI Engine
# "Turning Education into Action for Viksit Bharat @2047"

from typing import Dict, List, Any

class YuvaSetAIEngine:
    """
    AI-Assisted Multi-Factor Recommendation & Analysis Engine for YuvaSetu AI.
    Calculates weighted matching scores, identifies skill gaps, analyzes student ideas,
    and projects 2047 national impact simulations.
    """

    @staticmethod
    def calculate_match(student_profile: Dict[str, Any], challenge: Dict[str, Any]) -> Dict[str, Any]:
        """
        Matching Logic:
        - Skill Match        = 40%
        - Interest Match     = 25%
        - Location Relevance = 20%
        - Difficulty Fit     = 15%
        """
        student_skills = [s.strip().lower() for s in student_profile.get("skills", [])]
        req_skills = [s.strip().lower() for s in challenge.get("required_skills", [])]
        sug_skills = [s.strip().lower() for s in challenge.get("suggested_skills", [])]

        all_challenge_skills = list(set(req_skills + sug_skills))

        # 1. Skill Match (40%)
        matched_required = [s for s in req_skills if s in student_skills]
        matched_suggested = [s for s in sug_skills if s in student_skills]
        
        if req_skills:
            req_ratio = len(matched_required) / len(req_skills)
        else:
            req_ratio = 1.0
            
        sug_ratio = (len(matched_suggested) / len(sug_skills)) if sug_skills else 0.5
        skill_score = (req_ratio * 0.75 + sug_ratio * 0.25) * 100.0

        # 2. Interest Match (25%)
        interests = [i.strip().lower() for i in student_profile.get("interests", [])]
        career = student_profile.get("career_interests", "").lower()
        domain = challenge.get("domain", "").lower()
        
        interest_match = False
        for item in interests + [career]:
            if domain in item or any(word in item for word in domain.split()):
                interest_match = True
                break
        
        interest_score = 95.0 if interest_match else 50.0

        # 3. Location Relevance (20%)
        student_state = student_profile.get("state", "").lower() or student_profile.get("location", "").lower()
        challenge_state = challenge.get("state", "").lower()
        
        if student_state and challenge_state and (student_state in challenge_state or challenge_state in student_state):
            location_score = 100.0
        elif not student_state:
            location_score = 75.0
        else:
            location_score = 65.0

        # 4. Difficulty Fit (15%)
        experience = student_profile.get("experience", "Beginner").lower()
        difficulty = challenge.get("difficulty", "Medium").lower()

        if "beginner" in experience:
            diff_score = 100.0 if difficulty == "easy" else (75.0 if difficulty == "medium" else 50.0)
        elif "intermediate" in experience:
            diff_score = 100.0 if difficulty in ["medium", "easy"] else 80.0
        else:  # Advanced
            diff_score = 100.0
            
        # Final Weighted Score Calculation
        total_score = round(
            (skill_score * 0.40) +
            (interest_score * 0.25) +
            (location_score * 0.20) +
            (diff_score * 0.15)
        )

        # Cap score between 35 and 98
        total_score = max(35, min(98, total_score))

        # Generate "Why You Match" reasons
        why_match = []
        if matched_required:
            why_match.append(f"Your skill in {', '.join([s.title() for s in matched_required[:2]])} directly meets the primary technical requirements.")
        else:
            why_match.append("Your foundational background fits the problem scope well.")

        if interest_match:
            why_match.append(f"Your declared interest in '{challenge.get('domain')}' strongly aligns with this project's core mission.")
        
        if location_score >= 90:
            why_match.append(f"Challenge location ({challenge.get('state')}) matches your primary state region.")

        # Identify missing skills (Skill Gap)
        missing_required = [s.title() for s in req_skills if s not in student_skills]
        missing_suggested = [s.title() for s in sug_skills if s not in student_skills]

        return {
            "match_score": total_score,
            "score_breakdown": {
                "skill_match_pct": round(skill_score),
                "interest_match_pct": round(interest_score),
                "location_relevance_pct": round(location_score),
                "difficulty_fit_pct": round(diff_score)
            },
            "why_you_match": why_match,
            "missing_required_skills": missing_required,
            "missing_suggested_skills": missing_suggested,
            "recommended_action": "Start Learning Path" if missing_required else "Develop an Idea"
        }

    @staticmethod
    def analyze_skill_gap(student_skills: List[str], challenge: Dict[str, Any]) -> Dict[str, Any]:
        """Generates a structured learning roadmap from identified skill gaps."""
        norm_student_skills = [s.strip().lower() for s in student_skills]
        req = challenge.get("required_skills", [])
        sug = challenge.get("suggested_skills", [])

        missing = []
        known = []

        for skill in req + sug:
            if skill.lower() in norm_student_skills:
                known.append(skill)
            else:
                if skill not in missing:
                    missing.append(skill)

        readiness_pct = round((len(known) / max(1, len(req + sug))) * 100)
        readiness_pct = max(25, min(95, readiness_pct))

        # Generate step-by-step recommended learning modules
        learning_steps = []
        for idx, m_skill in enumerate(missing, 1):
            learning_steps.append({
                "step": idx,
                "title": f"Master Foundations of {m_skill}",
                "description": f"Complete hands-on tutorials and practice datasets focused on {m_skill} applied to {challenge.get('domain', 'real-world')} scenarios.",
                "duration": "1 - 2 weeks",
                "skill_name": m_skill
            })

        if not learning_steps:
            learning_steps.append({
                "step": 1,
                "title": "Advanced Problem Prototyping",
                "description": "You meet all technical prerequisites! Focus on solution architecture and prototype integration.",
                "duration": "3 days",
                "skill_name": "Prototyping"
            })

        return {
            "known_skills": known,
            "missing_skills": missing,
            "readiness_pct": readiness_pct,
            "learning_steps": learning_steps
        }

    @staticmethod
    def analyze_idea(title: str, description: str, skills_used: List[str], challenge: Dict[str, Any]) -> Dict[str, Any]:
        """AI Assistant evaluation of student submitted ideas."""
        text_length = len(description.split())
        
        strengths = []
        if text_length > 30:
            strengths.append("Detailed problem formulation with clear contextual background.")
        else:
            strengths.append("Concise overview highlighting core objective.")

        if len(skills_used) >= 2:
            strengths.append(f"Multi-disciplinary approach leveraging {', '.join(skills_used[:3])}.")

        strengths.append(f"Direct alignment with {challenge.get('domain', 'national')} development goals.")

        # Missing considerations & recommendations
        missing_considerations = [
            "Consider low-connectivity or offline accessibility for rural block-level users.",
            "Define a clear feedback loop for local community beneficiaries to validate adoption.",
            "Detail data privacy and security measures if handling personal or health information."
        ]

        risks = [
            "Hardware latency or sensor calibration issues in field deployment.",
            "Initial user resistance or low digital literacy among traditional stakeholders."
        ]

        improvement_suggestions = [
            "Integrate vernacular language voice UI for seamless non-tech user onboarding.",
            "Establish open API interfaces to connect with existing government or local district portals.",
            "Create a lightweight pilot deployment schedule before scaling nationwide."
        ]

        measurable_outcomes = [
            "Estimated 35% reduction in local operational processing time.",
            "Target reach of 5,000+ local community beneficiaries within 6 months of rollout.",
            "Measurable 25% improvement in resource utilization efficiency."
        ]

        return {
            "strengths": strengths,
            "missing_considerations": missing_considerations,
            "possible_risks": risks,
            "improvement_suggestions": improvement_suggestions,
            "suggested_measurable_outcomes": measurable_outcomes,
            "feasibility_score": min(95, max(65, 70 + (text_length // 10) + (len(skills_used) * 5)))
        }

    @staticmethod
    def run_simulation(students: int, challenges: int, ideas: int, adoption_rate: float) -> Dict[str, Any]:
        """Projects 2047 Vision metrics based on adjustable assumptions."""
        # Scale multipliers
        reach_per_idea = int(850 * (adoption_rate / 100.0) * 1.5)
        total_community_reach = max(500, (ideas * reach_per_idea) + (students * 12))
        implemented_solutions = max(1, int(ideas * (adoption_rate / 100.0) * 0.45))

        years = [2026, 2030, 2040, 2047]
        
        reach_timeline = [
            int(total_community_reach * 0.05),
            int(total_community_reach * 0.25),
            int(total_community_reach * 0.70),
            int(total_community_reach)
        ]

        ideas_timeline = [
            ideas,
            int(ideas * 4.2),
            int(ideas * 15.5),
            int(ideas * 45.0)
        ]

        students_timeline = [
            students,
            int(students * 5.0),
            int(students * 22.0),
            int(students * 60.0)
        ]

        return {
            "summary": {
                "participating_students": students,
                "active_challenges": challenges,
                "submitted_ideas": ideas,
                "adoption_rate_pct": adoption_rate,
                "projected_implemented_solutions": implemented_solutions,
                "total_community_reach": total_community_reach,
                "sustainability_index": min(99, round(65 + (adoption_rate * 0.3)))
            },
            "chart_data": {
                "years": years,
                "reach_timeline": reach_timeline,
                "ideas_timeline": ideas_timeline,
                "students_timeline": students_timeline,
                "domain_distribution": [
                    {"domain": "Agriculture", "share_pct": 28},
                    {"domain": "Healthcare", "share_pct": 22},
                    {"domain": "Education", "share_pct": 20},
                    {"domain": "Smart Cities", "share_pct": 15},
                    {"domain": "Environment", "share_pct": 15}
                ]
            }
        }
