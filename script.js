document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    document.getElementById("contactForm").reset();
  });
  