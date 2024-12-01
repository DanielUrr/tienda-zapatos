document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    document.getElementById("contactForm").reset();
  });
  const API_URL = "https://678bbbaf-562e-4a71-8fe7-f21a652d3d91-00-yi0lkmdntppj.spock.replit.dev/";
