gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animacaoDaPagina() {
  gsap.from(".hero", {
    opacity: 0,
    duration: 2,
  });

  gsap.from("picture:nth-child(2)", {
    y: 200,
    duration: 1.5,
  });
  // Monstro
  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1.5,
  });

  //  animacao cidade

  gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cards",
      start: "0% 80%",
      end: "100% 70%",
      scrub: true,
    },
  });
  gsap.from(".secaoObrigado li", {
    opacity: 0,
    x: 40,
    stagger: 0.3,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: ".secaoObrigado ul",

      start: "0% 80%",
      end: "100% 50%",
      scrub: 2,
    },
  });

  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: 2,
      invalidateOnRefresh: true,
      end: "100% 100%",
    },
  });

  const grupoTextoSplit = document.querySelectorAll(".textoSplit");
  //  efeito de letra subindo

  grupoTextoSplit.forEach((textoSplit) => {
    const split = SplitText.create(textoSplit, {
      type: "lines, word,chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textoSplit,
      },
    });
  });
}

// Preloader animação

const tl = gsap.timeline({
  onComplete() {
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
    animacaoDaPagina();
  },
});

tl.to("#preloader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preloader path", {
  duration: 0.8,
  fill: "rgb(255, 0, 0)",
  strokeDashoffset: 0,
});
