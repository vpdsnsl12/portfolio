// import { Fancybox } from "@fancyapps/fancybox";
export function aboutme() {
    const swiper = new Swiper(".mySwiper5", {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    });

    swiper.on('slideChange', function () {
        const activeIndex = swiper.activeIndex;

        const textBoxes = document.querySelectorAll('.text-box-img>div');
        textBoxes.forEach(function (textBox) {
            textBox.classList.remove('on');
        });
        textBoxes[activeIndex].classList.add('on');

        if (activeIndex === 4 || activeIndex === 5) {
            const japanImage = document.querySelector('.bg-img img.on');
            if (!japanImage) return;
            japanImage.classList.remove('on');
            const koreaImage = document.querySelector('.bg-img img:nth-child(1)');
            koreaImage.classList.add('on');
        }
        else {
            const japanImage = document.querySelector('.bg-img img.on');
            if (japanImage) {
                japanImage.classList.remove('on');
            }
            const koreaImage = document.querySelector('.bg-img img:nth-child(2)');
            koreaImage.classList.add('on');
        }
    });
    document.querySelectorAll('.click-modal').forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelectorAll('.modal').forEach(function (modal) {
                modal.classList.add('on');
            });
        });
    });

    document.querySelector('.close').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.modal').forEach(function (modal) {
            modal.classList.remove('on');
        });
    });

    Fancybox.defaults.Image = {
        width: '30vw' // 이미지 가로 크기를 30vw로 설정
    };

    Fancybox.bind("[data-fancybox]", {
        Click: "close" // 모달 바깥을 클릭하면 모달을 닫는 동작 추가
    });
    console.log("gdf")

    const images = document.querySelectorAll('.your-image-selector');
    images.forEach(function (image) {
        image.addEventListener('click', function (event) {
            event.preventDefault();
            Fancybox.show([{
                src: image.href,
                type: "image"
            }]);
        });
    });
}

