const user = localStorage.getItem("mockUser");

if (!user) {
  window.location.href = "login.html";
} else {
  document.getElementById("name").textContent = user;
}

function logout() {
  localStorage.removeItem("mockUser");
  window.location.href = "login.html";
}

function startInterview(type) {
  localStorage.setItem("interviewType", type);
  localStorage.setItem("jobRole", "General");
  localStorage.setItem("difficulty", "Medium");
  window.location.href = "interview.html";
}
