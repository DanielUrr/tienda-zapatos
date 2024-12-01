const API_URL = "https://678bbbaf-562e-4a71-8fe7-f21a652d3d91-00-yi0lkmdntppj.spock.replit.dev";

// Registro
document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      document.getElementById("registerForm").reset();
    } else {
      const error = await response.json();
      alert(error.error);
    }
  } catch (err) {
    console.error("Error en el registro:", err);
  }
});

// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Inicio de sesión exitoso. Bienvenido/a!");
      window.location.href = "index.html";
    } else {
      const error = await response.json();
      alert(error.error);
    }
  } catch (err) {
    console.error("Error en el inicio de sesión:", err);
  }
});

