// ============================================
// CONTROLES DE ACESSIBILIDADE
// ============================================

const body = document.body;

// Botão Alto Contraste
const btnContraste = document.getElementById("btn-contraste");
btnContraste.addEventListener("click", () => {
  const ativo = body.classList.toggle("alto-contraste");
  btnContraste.setAttribute("aria-pressed", ativo);
  
  // Salva preferência
  localStorage.setItem("alto-contraste", ativo);
});

// Botão Fonte Maior
const btnFonte = document.getElementById("btn-fonte");
btnFonte.addEventListener("click", () => {
  const ativo = body.classList.toggle("fonte-maior");
  btnFonte.setAttribute("aria-pressed", ativo);
  localStorage.setItem("fonte-maior", ativo);
});

// Botão Reduzir Movimento
const btnMovimento = document.getElementById("btn-reducao-movimento");
btnMovimento.addEventListener("click", () => {
  const ativo = body.classList.toggle("reducao-movimento");
  btnMovimento.setAttribute("aria-pressed", ativo);
  localStorage.setItem("reducao-movimento", ativo);
});

// Restaura preferências salvas
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("alto-contraste") === "true") {
    body.classList.add("alto-contraste");
    btnContraste.setAttribute("aria-pressed", "true");
  }
  if (localStorage.getItem("fonte-maior") === "true") {
    body.classList.add("fonte-maior");
    btnFonte.setAttribute("aria-pressed", "true");
  }
  if (localStorage.getItem("reducao-movimento") === "true") {
    body.classList.add("reducao-movimento");
    btnMovimento.setAttribute("aria-pressed", "true");
  }
});

// ============================================
// MENU MOBILE
// ============================================
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu-principal");

btnMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  btnMenu.setAttribute("aria-expanded", aberto);
  btnMenu.textContent = aberto ? "Fechar" : "Menu";
});

// Fecha o menu ao clicar em um link (mobile)
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      menu.classList.remove("aberto");
      btnMenu.setAttribute("aria-expanded", "false");
      btnMenu.textContent = "Menu";
    }
  });
});

// ============================================
// FORMULÁRIO (validação básica acessível)
// ============================================
const form = document.querySelector(".formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Validação simples
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  
  let valido = true;
  
  if (!nome.value.trim()) {
    nome.focus();
    alert("Por favor, preencha o campo Nome.");
    valido = false;
  } else if (!email.value.trim()) {
    email.focus();
    alert("Por favor, preencha o campo E-mail.");
    valido = false;
  } else if (!mensagem.value.trim()) {
    mensagem.focus();
    alert("Por favor, preencha o campo Mensagem.");
    valido = false;
  }
  
  if (valido) {
    // Aqui você pode enviar os dados para um backend
    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
    form.reset();
  }
});