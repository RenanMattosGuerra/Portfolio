// Abrir e fechar menu de navegação

const openMenu = document.getElementById("bars");
const closeMenu = document.getElementById("xicon");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#a1, #a2, #a3, #a4");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  });
});

//Animação do Título
const h1 = document.getElementById("head1");
function wobble() {
  h1.classList.toggle("h1wobble");
}
setInterval(wobble, 5000);

//Animação da foto

const photo = document.getElementById("foto");
photo.addEventListener("mouseover", () => {
  photo.classList.toggle("animefoto");
});

function move() {
  photo.classList.toggle("animefoto");
}
setInterval(move, 3000);

//Modo claro e escuro da página

const page = document.getElementById("page");
const lightdark = document.getElementById("modebox");
const titles = document.querySelectorAll("h2,h3");
const head = document.getElementById("hd");

lightdark.addEventListener("change", () => {
  page.classList.toggle("lightmode");
  titles.forEach((title) => {
    title.classList.toggle("lightmode");
  });
  head.classList.toggle("lightmode");
});

//Alerta com endereço de email
const mail = document.getElementById("mailadress");

mail.addEventListener("click", () => {
  alert("rguerra1998@gmail.com");
});
