export function aboutme() {
    const swiper = new Swiper(".mySwiper5", {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    });

    // Swiper slide 변경될 때 실행되는 함수
    swiper.on('slideChange', function () {
        // 현재 active 되어 있는 slide의 인덱스 가져오기
        const activeIndex = swiper.activeIndex;

        // 모든 text-box-img>div의 클래스에서 on 클래스 제거
        const textBoxes = document.querySelectorAll('.text-box-img>div');
        textBoxes.forEach(function (textBox) {
            textBox.classList.remove('on');
        });

        // 현재 active slide의 인덱스에 해당하는 text-box-img>div에 on 클래스 추가
        textBoxes[activeIndex].classList.add('on');

        // 세 번째 slide에 도달했을 때 이미지 변경
        if (activeIndex === 0 || activeIndex === 1) {
            const japanImage = document.querySelector('.bg-img img.on');
            if (!japanImage) return; // 이미 on 클래스가 있는 경우 함수 종료
            japanImage.classList.remove('on');
            const koreaImage = document.querySelector('.bg-img img:nth-child(1)');
            koreaImage.classList.add('on');
        }
        // 그 외 slide에 있을 때 이미지 클래스 변경
        else {
            const japanImage = document.querySelector('.bg-img img.on');
            if (japanImage) {
                japanImage.classList.remove('on');
            }
            const koreaImage = document.querySelector('.bg-img img:nth-child(2)');
            koreaImage.classList.add('on');
        }
    });
    document.querySelector('.click-modal').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.modal').classList.add('on');
    });
    
    document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.modal').classList.remove('on');
    });
}

