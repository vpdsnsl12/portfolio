// export function project() {
//   const swiper3 = new Swiper(".mySwiper3", {
//     effect: "cube",
//     grabCursor: true,
//     cubeEffect: {
//       shadow: true,
//       slideShadows: true,
//       shadowOffset: 20,
//       shadowScale: 0.94,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     on: {
//       slideChange: function () {
//         const activeIndex = this.activeIndex;
//         const textBoxes = document.querySelectorAll(".text-box");
//         const linkElement = document.querySelector(".project-wrap2 h3 a");

//         console.log("Active Index: ", activeIndex); // 디버깅 로그
//         console.log("Link Element Before Update: ", linkElement.href); // 디버깅 로그

//         textBoxes.forEach((textBox, index) => {
//           if (index - 1 === activeIndex) {
//             textBox.classList.add("on");
//           } else {
//             textBox.classList.remove("on");
//           }
//         });

//         switch (activeIndex) {
//           case 0:
//             linkElement.href = 'https://vpdsnsl12.github.io/portfolio/';
//             linkElement.textContent = '현재 페이지 입니다';
//             break;
//           case 1:
//             linkElement.href = 'https://vpdsnsl12.github.io/work/getgoal/intro/intro.html';
//             linkElement.textContent = '개골개골 바로가기';
//             break;
//           case 2:
//             linkElement.href = 'https://vpdsnsl12.github.io/trip/';
//             linkElement.textContent = '여기어때 바로가기';
//             break;
//           default:
//             linkElement.href = 'https://vpdsnsl12.github.io/portfolio/';
//             linkElement.textContent = '현재 페이지 입니다';
//         }

//         console.log("Link Element After Update: ", linkElement.href); 
//       },
//     },
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   project();
// });

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
        const contributions = document.querySelectorAll("#project-contribution");

        console.log("Active Index: ", activeIndex); // 디버깅 로그
        console.log("Link Element Before Update: ", linkElement.href); // 디버깅 로그

        // 모든 textBox와 contribution 요소를 비활성화
        textBoxes.forEach((textBox) => {
          textBox.classList.remove("on");
        });
        contributions.forEach(contribution => {
          contribution.classList.remove("on");
        });

        // 활성화할 textBox와 contribution 요소를 설정
        if (textBoxes[activeIndex + 1]) {
          textBoxes[activeIndex + 1].classList.add("on");
        }
        if (contributions[activeIndex]) {
          contributions[activeIndex].classList.add("on");
        }

        // 현재 슬라이드 인덱스에 따라 링크 업데이트
        switch (activeIndex) {
          case 0:
            linkElement.href = 'https://vpdsnsl12.github.io/portfolio/';
            linkElement.textContent = '현재 페이지 입니다';
            break;
          case 1:
            linkElement.href = 'https://vpdsnsl12.github.io/work/getgoal/intro/intro.html';
            linkElement.textContent = '개골개골 바로가기';
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
