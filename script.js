const API_URL = "https://678bbbaf-562e-4a71-8fe7-f21a652d3d91-00-yi0lkmdntppj.spock.replit.dev/";

// Registro
document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto (recargar página)
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), // Datos enviados al backend
    });

    if (response.ok) {
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      document.getElementById("registerForm").reset(); // Limpiar el formulario
    } else {
      const error = await response.json();
      alert(error.error); // Mostrar el mensaje de error del backend
    }
  } catch (err) {
    console.error("Error en el registro:", err);
    alert("Hubo un problema al registrar al usuario.");
  }
});

// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto (recargar página)
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), // Datos enviados al backend
    });

    if (response.ok) {
      alert("Inicio de sesión exitoso. Bienvenido/a!");
      window.location.href = "index.html"; // Redirigir al catálogo
    } else {
      const error = await response.json();
      alert(error.error); // Mostrar el mensaje de error del backend
    }
  } catch (err) {
    console.error("Error en el inicio de sesión:", err);
    alert("Hubo un problema al iniciar sesión.");
  }
});
