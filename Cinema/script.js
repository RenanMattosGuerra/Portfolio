// Abrir e fechar Menu

const openbtn = document.getElementById("openMenu");
const closebtn = document.getElementById("closeMenu");
const navmenu = document.getElementById("menu");

openbtn.addEventListener("click", () => {
  navmenu.style.display = "inline-block";
});

closebtn.addEventListener("click", () => {
  navmenu.style.display = "none";
});

//Clicar e arrastar cards dos filmes
/*
const slider = document.getElementById("movies");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
}); 
*/
