const localQuestions = {
  Technical: [
    "What is Python?",
    "What is Artificial Intelligence?",
    "What is Machine Learning?",
    "What is the difference between a list and a tuple?",
    "Explain one project you have developed."
  ],
  HR: [
    "Tell me about yourself.",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why should we hire you?",
    "Where do you see yourself in five years?"
  ],
  Aptitude: [
    "What is 20 percent of 500?",
    "What is the average of 10, 20 and 30?",
    "What is the next number: 2, 4, 8, 16?",
    "A train travels 60 km in 2 hours. What is its speed?",
    "What is 25 percent of 800?"
  ]
};

const interviewType = localStorage.getItem("interviewType") || "Technical";
const questions = JSON.parse(localStorage.getItem("questions") || "null") || localQuestions[interviewType];

let questionIndex = 0;
let totalScore = 0;
let interviewActive = true;

function showQuestion() {
  document.getElementById("counter").textContent =
    `Question ${questionIndex + 1} / ${questions.length}`;

  document.getElementById("question").textContent = questions[questionIndex];
  document.getElementById("answerBox").textContent =
    "Your spoken answer will appear here automatically...";

  document.getElementById("feedback").textContent = "";
  speakQuestion();
}

function speakQuestion() {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(questions[questionIndex]);
    speech.lang = "en-IN";
    speech.rate = 0.88;
    speech.onend = () => setTimeout(startListening, 400);
    speechSynthesis.speak(speech);
  }
}

function repeatQuestion() {
  speakQuestion();
}

function submitAnswer(answer) {
  if (!answer.trim()) return;

  const words = answer.trim().split(/\s+/).filter(Boolean).length;
  const marks = words >= 30 ? 20 : words >= 20 ? 17 : words >= 10 ? 14 : words >= 5 ? 10 : 5;

  totalScore += marks;
  document.getElementById("feedback").innerHTML =
    `<b>Answer Score: ${marks}/20</b>`;

  questionIndex++;

  if (questionIndex < questions.length) {
    setTimeout(showQuestion, 1200);
  } else {
    finishInterview();
  }
}

function finishInterview() {
  interviewActive = false;
  if ("speechSynthesis" in window) speechSynthesis.cancel();

  const score = Math.round((totalScore / (questions.length * 20)) * 100);

  localStorage.setItem("overallScore", score);
  localStorage.setItem("answerScore", Math.round(totalScore / questions.length));

  stopCamera();
  window.location.href = "result.html";
}

showQuestion();
