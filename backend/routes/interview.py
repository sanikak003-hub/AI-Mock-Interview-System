from flask import Blueprint, request, jsonify
from services.question_service import get_questions

interview_bp = Blueprint("interview", __name__)

@interview_bp.route("/start", methods=["POST"])
def start_interview():
    data = request.get_json() or {}

    interview_type = data.get("interviewType", "Technical")
    job_role = data.get("jobRole", "General")
    difficulty = data.get("difficulty", "Medium")

    questions = get_questions(interview_type)

    return jsonify({
        "message": "Interview started successfully!",
        "interviewType": interview_type,
        "jobRole": job_role,
        "difficulty": difficulty,
        "questions": questions
    })
