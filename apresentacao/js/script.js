// Menu mobile: abre/fecha ao clicar no hambúrguer
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});

// Fecha o menu ao clicar em qualquer link (navegação mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("ativo"));
});

// Ano atualizado automaticamente no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
