# YuvaSetu AI — SQLAlchemy Database Connector & Models
# Automatic fallback to SQLite if MySQL is unreachable.

import os
from sqlalchemy import create_engine, Column, Integer, String, Text, Float, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
from datetime import datetime

MYSQL_URL = os.getenv("DATABASE_URL", "mysql+pymysql://root:password@localhost:3306/yuvasetu_db")
SQLITE_URL = "sqlite:///./yuvasetu.db"

# Try connecting to MySQL, fallback to SQLite on connection error
try:
    engine = create_engine(MYSQL_URL, connect_args={"connect_timeout": 2})
    # Test connection
    with engine.connect() as conn:
        pass
    print("Successfully connected to MySQL Database!")
except Exception as e:
    print(f"MySQL unavailable ({e}). Using SQLite fallback: {SQLITE_URL}")
    engine = create_engine(SQLITE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class UserModel(Base):
    __tablename__ = "users"
    id = Column(Integer, autoincrement=True, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=False)
    role = Column(String(50), default="student")
    created_at = Column(DateTime, default=datetime.utcnow)

class StudentProfileModel(Base):
    __tablename__ = "student_profiles"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    education = Column(String(100), default="B.Tech Computer Science")
    college = Column(String(255), default="Indian Institute of Technology / NIT")
    branch = Column(String(100), default="Computer Science & Engineering")
    location = Column(String(100), default="Delhi")
    state = Column(String(100), default="Delhi")
    experience = Column(String(100), default="Intermediate")
    career_interests = Column(Text, default="AI in Agriculture, Sustainable Urban Infrastructure")
    bio = Column(Text, default="Passionate about leveraging technology to solve grassroot national challenges.")

class ChallengeModel(Base):
    __tablename__ = "challenges"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    state = Column(String(100), nullable=False)
    district = Column(String(100), nullable=False)
    domain = Column(String(100), nullable=False)
    problem_statement = Column(Text, nullable=False)
    why_it_matters = Column(Text, nullable=False)
    required_skills = Column(Text, nullable=False) # stored as JSON string
    suggested_skills = Column(Text, nullable=True) # stored as JSON string
    difficulty = Column(String(50), default="Medium")
    beneficiaries = Column(String(255))
    explorers_count = Column(Integer, default=0)
    latitude = Column(Float)
    longitude = Column(Float)

class IdeaModel(Base):
    __tablename__ = "ideas"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=False)
    challenge_id = Column(Integer, nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    skills_used = Column(Text) # JSON string
    beneficiaries = Column(String(255))
    sustainability_notes = Column(Text)
    status = Column(String(50), default="Submitted")
    ai_feedback = Column(Text) # JSON string
    created_at = Column(DateTime, default=datetime.utcnow)

def init_db():
    Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
