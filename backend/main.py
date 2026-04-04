from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import skills, cases, profile

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/api/profile")
def get_profile():
    return profile

@app.get("/api/skills")
def get_skills():
    return skills

@app.get("/api/cases")
def get_cases():
    return cases

@app.get("/api/cases/{case_id}")
def get_case(case_id: int):
    for case in cases:
        if case["id"] == case_id:
            return case
    return {"error": "Not found"}, 404
