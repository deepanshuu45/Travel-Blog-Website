
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    const storedUsername = localStorage.getItem("travelUsername");
    const storedPassword = localStorage.getItem("travelPassword");
  
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful! Redirecting to your dashboard...");
      window.location.href = "../Home/home.html"; 
    } else {
      errorMsg.textContent = "Invalid username or password!";
    }
  });
 
  document.getElementById("showPassword").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
  });
  