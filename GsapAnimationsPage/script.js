addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  let = mySplitText = new SplitText(".split", { type: "chars" });
  let chars = mySplitText.chars;

  gsap.from(chars, {
    yPercent: -200,
    xPercent: 1000,
    stagger: 0.08,
    ease: "back.out",
    scrollTrigger: {
      trigger: ".split",
      toggleActions: "play pause restart pause",
    },
  });

  gsap.to(".phone", {
    x: 930,
    rotation: 360,
    duration: 2.5,
    scrollTrigger: {
      toggleActions: "restart pause reverse pause",
      trigger: ".container",
    },
  });

  gsap.to(".notebook", {
    x: -925,
    rotation: 370,
    duration: 2.5,
    scrollTrigger: {
      toggleActions: "restart pause reverse pause",
      trigger: ".container",
    },
  });

  gsap.to(".bird", {
    scrollTrigger: {
      trigger: ".bird",
      start: 50,
      scrub: true,
      pin: true,
      end: 920,
    },
    ease: "circ.out",
    scale: 2.3,
    x: -750,
    rotation: -50,
  });

  let = mySplitText2 = new SplitText(".split2", { type: "chars" });
  let chars2 = mySplitText2.chars;

  gsap.from(chars2, {
    y: 500,
    x: -500,
    stagger: 0.03,
    scrollTrigger: {
      trigger: ".split2",
      toggleActions: "restart pause reverse pause",
    },
  });
});

gsap.to(".img", {
  scrollTrigger: {
    trigger: ".imgGrow",
    start: "top 50%",
    end: "bottom 90%",
    scrub: true,
  },
  scale: 35,
});

gsap.from(".img2", {
  scrollTrigger: {
    trigger: ".borderAnime",
    start: "top 70%",
    end: "bottom 100%",
    scrub: true,
  },
  scale: 0.1,
  borderRadius: "5000%",
});

gsap.from(".black", {
  scrollTrigger: {
    trigger: ".black",
    scrub: true,
    start: "bottom 190%",
    end: "bottom 100%",
  },
  backgroundColor: "#ddccf0",
});

let = mySplitText3 = new SplitText(".split3", { type: "chars" });
let chars3 = mySplitText3.chars;

gsap.from(chars3, {
  scrollTrigger: {
    trigger: ".split3",
    toggleActions: "restart pause reverse pause",
  },
  ease: "elastic.out(1,0.3)",
  y: -100,
  duration: 2.5,
  stagger: 0.03,
});
