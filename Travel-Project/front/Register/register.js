document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const regUsername = document.getElementById("regUsername").value.trim();
    const regPassword = document.getElementById("regPassword").value.trim();
    const regMsg = document.getElementById("regMsg");
  
    if (regUsername.length < 3 || regPassword.length < 5) {
      regMsg.textContent = "Username must be 3+ chars & password must be 5+ chars.";
      return;
    }
  
    // Store in localStorage
    localStorage.setItem("travelUsername", regUsername);
    localStorage.setItem("travelPassword", regPassword);
  
    alert("Registration successful! Please login.");
  
    // ✅ Redirect to login page in the same folder
    window.location.href = "login.html";
  });
  