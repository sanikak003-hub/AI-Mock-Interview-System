let recognition = null;

function startListening() {
  if (!interviewActive) return;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    document.getElementById("listening").textContent =
      "Voice recognition is not supported. Please use Google Chrome.";
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = true;

  let finalText = "";

  document.getElementById("listening").textContent =
    "🎙️ Listening... Speak your answer now.";

  recognition.onresult = event => {
    let text = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      text += event.results[i][0].transcript;
    }

    document.getElementById("answerBox").textContent = text;

    if (event.results[event.results.length - 1].isFinal) {
      finalText = text;
    }
  };

  recognition.onerror = event => {
    document.getElementById("listening").textContent =
      "Microphone error: " + event.error;
  };

  recognition.onend = () => {
    if (finalText.trim()) {
      document.getElementById("listening").textContent = "Answer received.";
      submitAnswer(finalText);
    } else {
      document.getElementById("listening").textContent =
        "No speech detected. Click Speak Answer again.";
    }
  };

  try {
    recognition.start();
  } catch (error) {
    console.log(error);
  }
}
