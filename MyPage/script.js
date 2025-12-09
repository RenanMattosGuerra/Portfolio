//Mostrar apenas o preloader até a página carregar

window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("page").style.display = "block";

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

  //Modo claro e escuro da página
  const body = document.getElementById("body");
  const page = document.getElementById("page");
  const lightdark = document.getElementById("modebox");
  const titles = document.querySelectorAll("h2,h3,p");
  const head = document.getElementById("hd");
  const main = document.getElementById("landing");

  lightdark.addEventListener("change", () => {
    page.classList.toggle("lightmode");
    body.classList.toggle("lightmode");
    titles.forEach((title) => {
      title.classList.toggle("lightmodetext");
    });
    head.classList.toggle("lightmode");
    main.classList.toggle("mainlightmode");
    document.body.classList.toggle("dark-mode");
  });

  //Animações apenas para telas de 992px ou mais

  const mediaQuery = window.matchMedia("(min-width: 992px)");

  if (mediaQuery.matches) {
    //Animação da foto

    const photo = document.getElementById("foto");

    function move() {
      photo.classList.toggle("animefoto");
    }
    setTimeout(move, 2700);

    //gsap Animação com Scroll

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    gsap.from(".appear1", {
      yPercent: 50,
      opacity: -1000,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".appear2",
        toggleActions: "play pause none none",
      },
    });

    gsap.from(".appear2", {
      xPercent: 50,
      opacity: 0,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".appear3",
        toggleActions: "play pause none none",
      },
    });

    gsap.from(".appear3", {
      xPercent: -50,
      opacity: 0,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".appear3",
        toggleActions: "play pause none none",
      },
    });

    gsap.from(".appear4", {
      xPercent: -50,
      opacity: 0,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".appear4",
        toggleActions: "play pause none none",
      },
    });

    //Animação de texto

    let = mySplitText = new SplitText(".split", { type: "chars" });
    let chars = mySplitText.chars;

    gsap.from(chars, {
      yPercent: -200,
      xPercent: 0,
      stagger: 0.1,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".split",
        toggleActions: "play pause restart pause",
      },
    });
  }
});
