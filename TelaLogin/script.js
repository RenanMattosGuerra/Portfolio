//Tela de carregamento / Loading Screen

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const page = document.getElementById("page");

  preloader.style.display = "none";
  page.style.display = "flex";
});

// Mostrar/Ocultar Senha - Show/Hide Password
function ShowHide() {
  let senha = document.getElementById("pword");

  if (senha.type === "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
}
