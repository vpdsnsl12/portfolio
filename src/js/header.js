export function header() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  let isScrollingUp = false;
  let lastScrollTop = 0;

  window.addEventListener("scroll", function(){
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop){
      // Scroll down
      isScrollingUp = false;
    } else {
      // Scroll up
      isScrollingUp = true;
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  window.addEventListener("wheel", function(event) {
    if (event.deltaY > 0 && !isScrollingUp) {
      // Scroll down
      document.getElementById("header").classList.add("hidden");
    }  else {
      // Scroll up
      document.getElementById("header").classList.remove("hidden");
    }
  });
}
