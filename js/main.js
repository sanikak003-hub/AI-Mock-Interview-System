async function beginInterview() {
  const interviewType = document.getElementById("interviewType").value;
  const jobRole = document.getElementById("jobRole").value || "General";
  const difficulty = document.getElementById("difficulty").value;

  localStorage.setItem("interviewType", interviewType);
  localStorage.setItem("jobRole", jobRole);
  localStorage.setItem("difficulty", difficulty);

  try {
    const response = await fetch("http://127.0.0.1:5000/api/interview/start", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ interviewType, jobRole, difficulty })
    });

    const data = await response.json();
    localStorage.setItem("questions", JSON.stringify(data.questions));
  } catch (error) {
    console.warn("Backend unavailable. Using local questions.");
  }

  window.location.href = "interview.html";
}
