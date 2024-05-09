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

  let item1 = document.querySelectorAll(".title_keyword h2");
  let item2 = document.querySelector(".text_box .text");

  item1.forEach((item, index) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleClass: { targets: item, className: "active" },
        scrub: 1,
      },
    });
  });
  gsap.to(item2, {
    scrollTrigger: {
      trigger: item2,
      start: "top 70%",
      toggleClass: { targets: item2, className: "active" },
      scrub: 1,
      onToggle: (self) => {
        if(self.isActive) {
            setInterval(typing, 50);
        }
      },
    },
  });
}