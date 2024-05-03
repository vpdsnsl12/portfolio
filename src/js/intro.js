export function intro() {
    const duration = 1.5; 
    const titles = document.querySelectorAll('.intro_title_bg_box div img');
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
        { top: '57.6%', left: '51%' },
        { top: '57.6%', left: '52.3%' },
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

    for (let i = 0; i < initialPositions.length; i++) {
        const img = document.querySelector('.lego_font img:nth-child(' + (i + 1) + ')');

        const randomTop = Math.random() * (window.innerHeight - img.offsetHeight);
        const randomLeft = Math.random() * (window.innerWidth - img.offsetWidth);

        img.style.top = randomTop + 'px';
        img.style.left = randomLeft + 'px';

        const finalPosition = {
            top: initialPositions[i].top,
            left: initialPositions[i].left,
            autoAlpha: 1,
        };

        gsap.fromTo(img,
            { top: randomTop + 'px', left: randomLeft + 'px', autoAlpha: 1 },
            { ...finalPosition, duration: duration }
        );
    }
    gsap.timeline({ delay: duration })
    .fromTo(titles[0], {  x: "0%" }, {  x: "100%", duration: 0.5 })
    .fromTo(titles[1], {  x: "0%" }, { x: "100%", duration: 0.5 })
    .fromTo(titles[2], {  x: "0%" }, {  x: "100%", duration: 0.5 });
}

// export function intro() {
//     const duration = 2;
//     const titles = document.querySelectorAll('.intro_title h1');
//     const imgs = document.querySelectorAll('.lego_font img');


//     imgs.forEach((img, index) => {
//         const finalPosition = {
//             top: initialPositions[index].top,
//             left: initialPositions[index].left,
//             autoAlpha: 1,
//         };

//         gsap.fromTo(img,
//             { autoAlpha: 0 }, 
//             { ...finalPosition, duration: duration, autoAlpha: 1 }
//         );
//     });

//     gsap.timeline({ delay: duration })
//         .fromTo(titles[0], { opacity: 0 }, { opacity: 1, duration: .5 })
//         .fromTo(titles[1], { opacity: 0 }, { opacity: 1, duration: .5 })
//         .fromTo(titles[2], { opacity: 0 }, { opacity: 1, duration: .5 });
// }