// export function work() {
//   const swiper = new Swiper(".mySwiper", {
//     spaceBetween: 10,
//     freeMode: true,
//     watchSlidesProgress: true,
//   });

//   const swiper2 = new Swiper(".mySwiper2", {
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//       swiper: swiper,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//   });
// }
export function work() {
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
    });
  
    const swiper2 = new Swiper(".mySwiper2", {
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
    swiper2.on('slideChange', function () {
      // 현재 활성화된 swiper-slide의 인덱스 가져오기
      let activeIndex = swiper2.activeIndex; // 변수명 수정
    
      // 모든 .text 요소의 클래스 제거
      let texts = document.querySelectorAll('#work .text-box .text');
      texts.forEach(function (text) {
        text.classList.remove('on');
      });
    
      texts[activeIndex].classList.add('on');
    });
  }
  
  // 함수 호출
  work();
  