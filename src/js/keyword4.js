export function keyword4() {
  gsap.registerPlugin(ScrollTrigger);

  const content4 = "블럭과 코드 모두 혼자서는 큰 그림을 완성할 수 없기에  \n 어떤 순간에도 소통을 멈추지 않고 협력하는 동료가 되겠습니다.";
  const text4 = document.querySelector(".keyword .text_box .text4");
  let i = 0;

  function typing4() {
    if (i < content4.length) { // 배열의 길이를 초과하지 않을 때
        let txt = content4[i++];
        text4.innerHTML += txt === "\n" ? "<br/>" : txt;
        setTimeout(typing4, 100); // 재귀 호출로 자기 자신을 호출하며 일정 시간 후에 호출
    }
}

  let item5 = document.querySelector(".text_box .text4");

  gsap.to(item5, {
    scrollTrigger: {
      trigger: item5,
      start: "top 90%",
      toggleClass: { targets: item5, className: "active" },
      scrub: 1,
      onToggle: (self) => {
        if(self.isActive) {
            setInterval(typing4, 850);
        }
      },
    },
  });
}