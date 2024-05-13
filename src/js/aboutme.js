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
    
    const clickSkill = document.querySelector('.click-skill');
    const skillList = document.querySelector('.skill-list');
    const skillClose = document.querySelector('.skill-close');
    const legoGroup = document.querySelector('.lego-group');
    
    clickSkill.addEventListener('click', function() {
        skillList.classList.add('on');
        legoGroup.classList.add('on');

    });
    
    skillClose.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 동작 차단
        skillList.classList.remove('on');
        legoGroup.classList.remove('on');

    });
}

