gsap.registerPlugin(ScrollTrigger);

export function work() {
  document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        960: {
          slidesPerView: 9.5, 
          spaceBetween: 30,
        },
      },
    });

    const swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });

    swiper2.on("slideChange", function () {
      let activeIndex = swiper2.realIndex; // swiper2의 실제 인덱스를 가져옵니다.

      let texts = document.querySelectorAll("#work .text-box .text");
      texts.forEach(function (text) {
        text.classList.remove("on");
      });

      texts[activeIndex].classList.add("on");
    });
  });
}

work();
