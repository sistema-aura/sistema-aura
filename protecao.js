// protecao.js
(function() {
  const tokenValido = document.cookie.includes("session_token=");
  if (!tokenValido) {
    window.location.href = "/sistema-aura/index.html";
  }
})();
