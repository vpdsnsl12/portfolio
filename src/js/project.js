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
        const linkElement = document.querySelector(".project-wrap2 h3 a");

        console.log("Active Index: ", activeIndex); // 디버깅 로그
        console.log("Link Element Before Update: ", linkElement.href); // 디버깅 로그

        textBoxes.forEach((textBox, index) => {
          if (index - 1 === activeIndex) {
            textBox.classList.add("on");
          } else {
            textBox.classList.remove("on");
          }
        });

        // 현재 슬라이드 인덱스에 따라 링크 업데이트
        switch (activeIndex) {
          case 0:
            linkElement.href = 'https://vpdsnsl12.github.io/portfolio/';
            linkElement.textContent = '현재 페이지 입니다';
            break;
          case 1:
            linkElement.href = 'https://www.figma.com/proto/WG62Soxgb7TChhNgz58BIU/%EA%B0%9C%EA%B3%A8%EA%B0%9C%EA%B3%A8(Get-Goal)?node-id=1318-929&t=wj2A95JVg8QHHC22-0&scaling=scale-down&page-id=1%3A5';
            linkElement.textContent = '피그마 프로토타입';
            break;
          case 2:
            linkElement.href = 'https://vpdsnsl12.github.io/trip/';
            linkElement.textContent = '여기어때 바로가기';
            break;
          default:
            linkElement.href = 'https://vpdsnsl12.github.io/portfolio/';
            linkElement.textContent = '현재 페이지 입니다';
        }

        console.log("Link Element After Update: ", linkElement.href); // 디버깅 로그
      },
    },
  });
}

// DOM이 로드된 후 project 함수 호출
document.addEventListener("DOMContentLoaded", () => {
  project();
});
