export function keyword2() {
  gsap.registerPlugin(ScrollTrigger);

  const content2 = "블록을 쌓기 시작하면 멈출수 없듯이,  \n 끝을 보기 전까지 파고드는 집중력";
  const text2 = document.querySelector(".keyword .text_box .text2");
  let i = 0;

  function typing2() {
    if (i < content2.length) {
      let txt = content2.charAt(i);
      text2.innerHTML += txt;
      i++;
    }
  }

  let item3 = document.querySelector(".text_box .text2");

  gsap.to(item3, {
    scrollTrigger: {
      trigger: item3,
      start: "top 90%",
      toggleClass: { targets: item3, className: "active" },
      scrub: 1,
      onToggle: (self) => {
        if(self.isActive) {
            setInterval(typing2, 50);
        }
      },
    },
  });
}