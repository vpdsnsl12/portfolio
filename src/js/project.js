export function project() {
  const swiper3 = new Swiper(".mySwiper3", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        const activeIndex = this.activeIndex;
        const textBoxes = document.querySelectorAll(".text-box");
        textBoxes.forEach((textBox, index) => {
          if (index -1 === activeIndex) {
            textBox.classList.add("on");
          } else {
            textBox.classList.remove("on");
          }
        });
      },
    },
  });
}
