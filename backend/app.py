from flask import Flask, jsonify
from flask_cors import CORS
from routes.interview import interview_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(interview_bp, url_prefix="/api/interview")

@app.route("/")
def home():
    return "AI Mock Interview Backend is Running!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
