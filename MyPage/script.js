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

  const page = document.getElementById("page");
  const lightdark = document.getElementById("modebox");
  const titles = document.querySelectorAll("h2,h3");
  const head = document.getElementById("hd");
  const main = document.getElementById("landing");

  lightdark.addEventListener("change", () => {
    page.classList.toggle("lightmode");
    titles.forEach((title) => {
      title.classList.toggle("lightmodetext");
    });
    head.classList.toggle("lightmode");
    main.classList.toggle("mainlightmode");
    document.body.classList.toggle("dark-mode");
  });

  //Alerta com endereço de email
  const mail = document.getElementById("mailadress");

  mail.addEventListener("click", () => {
    alert("rguerra1998@gmail.com");
  });

  //Animações apenas para telas maiores de 992px

  const mediaQuery = window.matchMedia("(min-width: 992px)");

  if (mediaQuery.matches) {
    //Animação da foto

    const photo = document.getElementById("foto");
    photo.addEventListener("mouseover", () => {
      photo.classList.toggle("animefoto");
    });

    function move() {
      photo.classList.toggle("animefoto");
    }
    setTimeout(move, 2500);

    //gsap Animação com Scroll

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    gsap.from(".appear1", {
      xPercent: -50,
      opacity: 0,
      duration: 1,
      ease: "back.out",
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
      xPercent: 1000,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".split",
        toggleActions: "play pause restart pause",
      },
    });
  }
});
