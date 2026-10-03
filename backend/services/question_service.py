import json
import os

DATA_FILE = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "questions.json")

def get_questions(interview_type):
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        data = json.load(file)

    return data.get(interview_type, data.get("Technical", []))
