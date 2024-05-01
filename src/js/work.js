export function work() {
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 15,
        slidesPerView: 10,
        freeMode: true,
        watchSlidesProgress: true,
        centeredSlides: true,
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
        let activeIndex = swiper2.activeIndex;

        let texts = document.querySelectorAll('#work .text-box .text');
        texts.forEach(function (text) {
            text.classList.remove('on');
        });

        texts[activeIndex].classList.add('on');
    });
}

work();
