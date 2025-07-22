addEventListener("DOMContentLoaded", () => {
  //Abrir e fechar carrinho

  const openCart = document.getElementById("openCart");
  const cartMenu = document.getElementById("cartMenu");

  openCart.addEventListener("click", () => {
    cartMenu.classList.toggle("open");
  });

  //Abrir e fechar menu de navegação

  const navOpen = document.getElementById("navOpen");
  const navMenu = document.getElementById("navMenu");
  const navBar = document.getElementById("nav");

  navBar.addEventListener("click", () => {
    navMenu.classList.toggle("displayMenu");
  });

  navBar.addEventListener("mouseover", () => {
    navOpen.classList.add("color");
  });

  navBar.addEventListener("mouseout", () => {
    navOpen.classList.remove("color");
  });
});
