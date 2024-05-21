document.addEventListener('DOMContentLoaded', function () {
    // intro 링크 클릭 시 페이지 새로고침
    const mainLink = document.querySelector('a[href="#intro"]');
    mainLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.reload();
    });

    window.addEventListener('hashchange', function () {
        // 해시 값이 #intro인 경우 intro 함수 호출
        if (window.location.hash === '#intro') {
            intro();
        }
    });
});

export function intro() {
    const duration = 1.5;
    const titles = document.querySelectorAll('.intro_title_bg_box div img');
    const isMobile = window.matchMedia('(max-width: 960px)').matches;

    const initialPositions = [
        { top: '49%', left: '57%' },
        { top: '50%', left: '44%' },
        { top: '64.4%', left: '43.6%' },
        { top: '49%', left: '51%' },
        { top: '63.5%', left: '53.1%' },
        { top: '60%', left: '46.2%' },
        { top: '62%', left: '51.8%' },
        { top: '27%', left: '25%' },
        { top: '26%', left: '31%' },
        { top: '38%', left: '18.5%' },
        { top: '38%', left: '27%' },
        { top: '27%', left: '16%' },
        { top: '26%', left: '22%' },
        { top: '53.2%', left: '51%' },
        { top: '49%', left: '54.9%' },
        { top: '50%', left: '44%' },
        { top: '64.4%', left: '46.2%' },
        { top: '53.2%', left: '52.3%' },
        { top: '57.5%', left: '51%' },
        { top: '57.5%', left: '52.3%' },
        { top: '54%', left: '57%' },
        { top: '62%', left: '57%' },
        { top: '66.1%', left: '53.1%' },
        { top: '49%', left: '57%' },
        { top: '50%', left: '44%' },
        { top: '64.4%', left: '43.6%' },
        { top: '49%', left: '51%' },
        { top: '63.5%', left: '53.1%' },
        { top: '60%', left: '46.2%' },
        { top: '62%', left: '51.8%' },
        { top: '27%', left: '25%' },
        { top: '26%', left: '31%' },
        { top: '38%', left: '18.5%' },
    ];

    if (isMobile) {
        const container = document.querySelector('#intro .intro_inner');
        const containerRect = container.getBoundingClientRect();

        document.querySelectorAll('.lego_font img').forEach((img, i) => {
            const imgRect = img.getBoundingClientRect();

            let randomTop, randomLeft;
            if (Math.random() < 0.5) {
                randomTop = Math.random() < 0.5 ? 0 : containerRect.height - imgRect.height;
                randomLeft = Math.random() * 0.8 * (containerRect.width - imgRect.width) + 0.1 * containerRect.width;
            } else {
                randomTop = Math.random() * 0.8 * (containerRect.height - imgRect.height) + 0.1 * containerRect.height;
                randomLeft = Math.random() < 0.5 ? 0 : containerRect.width - imgRect.width;
            }

            randomLeft -= containerRect.width * 0.05;

            img.style.top = randomTop + 'px';
            img.style.left = randomLeft + 'px';

            gsap.fromTo(img,
                { top: randomTop + 'px', left: randomLeft + 'px', autoAlpha: 1 },
                { top: initialPositions[i].top, left: initialPositions[i].left, autoAlpha: 1, duration: duration, delay: 1 }
            );
        });

        gsap.timeline({ delay: duration })
            .fromTo(titles[0], { x: "0%" }, { x: "100%", duration: 0.5, delay: 1.2 })
            .fromTo(titles[1], { x: "0%" }, { x: "100%", duration: 0.5 })
            .fromTo(titles[2], { x: "0%" }, { x: "100%", duration: 0.5 });
    } else {
        document.querySelectorAll('.lego_font img').forEach((img, i) => {
            const imgRect = img.getBoundingClientRect();
            let randomTop, randomLeft;

            const randomEdge = Math.random() < 0.5 ? 'topBottom' : 'leftRight';
            if (randomEdge === 'topBottom') {
                randomTop = Math.random() < 0.5 ? 0 : window.innerHeight - imgRect.height;
                randomLeft = (Math.random() * 0.8 + 0.1) * (window.innerWidth - imgRect.width);
            } else {
                randomTop = (Math.random() * 0.8 + 0.1) * (window.innerHeight - imgRect.height);
                randomLeft = Math.random() < 0.5 ? 0 : window.innerWidth - imgRect.width;
            }

            randomLeft -= 10 * window.innerWidth / 100;

            img.style.top = randomTop + 'px';
            img.style.left = randomLeft + 'px';

            gsap.fromTo(img,
                { top: randomTop + 'px', left: randomLeft + 'px', autoAlpha: 1 },
                { top: initialPositions[i].top, left: initialPositions[i].left, autoAlpha: 1, duration: duration, delay: 1 }
            );
        });

        gsap.timeline({ delay: duration })
            .fromTo(titles[0], { x: "0%" }, { x: "100%", duration: 0.5, delay: 1.2 })
            .fromTo(titles[1], { x: "0%" }, { x: "100%", duration: 0.5 })
            .fromTo(titles[2], { x: "0%" }, { x: "100%", duration: 0.5 });
    }
}
