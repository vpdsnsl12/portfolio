export function keyword() {
    gsap.registerPlugin(ScrollTrigger);

    const content = "같은 조각으로도 수천가지의 모양으로 변화하는 끝없는 사용성";
    const text = document.querySelector(".keyword .text_box .text");
    let i = 0;

    function typing() {
        if (i < content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt;
            i++;
        }
    }
    setInterval(typing, 100);

    gsap.utils.toArray('.title_keyword h2').forEach(function (imgBox) {
        gsap.timeline({
            scrollTrigger: {
                trigger: imgBox,
                start: '50% 100%',
                toggleClass: { 'targets': imgBox, className: 'active' },
                scrub: 1
            }
        })
            .timeline({
                scrollTrigger: {
                    trigger: text,
                    start: '90% 100%',
                    onEnter: typing,
                    scrub: 1
                }
            });
    });
}