export function keyword3() {
  gsap.registerPlugin(ScrollTrigger);

  const content3 = "쉽게 조립되고 해체되는 레고처럼,  \n 지속적으로 변화하는 웹의 세계를 받아들일 수 있는 유연성";
  const text3 = document.querySelector(".keyword .text_box .text3");
  let i = 0;

  function typing3() {
    if (i < content3.length) { // 배열의 길이를 초과하지 않을 때
        let txt = content3[i++];
        text3.innerHTML += txt === "\n" ? "<br/>" : txt;
        setTimeout(typing3, 100); // 재귀 호출로 자기 자신을 호출하며 일정 시간 후에 호출
    }
}

  let item4 = document.querySelector(".text_box .text3");

  gsap.to(item4, {
    scrollTrigger: {
      trigger: item4,
      start: "top 90%",
      toggleClass: { targets: item4, className: "active" },
      scrub: 1,
      onToggle: (self) => {
        if(self.isActive) {
            setInterval(typing3, 500);
        }
      },
    },
  });
}