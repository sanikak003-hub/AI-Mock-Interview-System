function registerUser() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPass").value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  if (password.length < 4) {
    alert("Password must contain at least 4 characters.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("mockUsers") || "[]");

  if (users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
    alert("This email is already registered.");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("mockUsers", JSON.stringify(users));

  alert("Account created successfully! Now login.");
  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPass").value;

  const users = JSON.parse(localStorage.getItem("mockUsers") || "[]");
  const user = users.find(u =>
    u.email.toLowerCase() === email.toLowerCase() &&
    u.password === password
  );

  if (!user) {
    alert("Invalid email or password. Create an account first.");
    return;
  }

  localStorage.setItem("mockUser", user.name);
  window.location.href = "dashboard.html";
}
