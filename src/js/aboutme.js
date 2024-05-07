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

        if (activeIndex === 0 || activeIndex === 1) {
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
    document.querySelectorAll('.click-modal').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.modal').forEach(function(modal) {
                modal.classList.add('on');
            });
        });
    });
    
    document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.classList.remove('on');
        });
    });
}

