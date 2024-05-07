export function header() {
  let activeLink = null;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      if (activeLink) {
        activeLink.classList.remove('on');
      }
      this.classList.add('on');
      activeLink = this;

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
      isScrollingUp = false;
    } else {
      isScrollingUp = true;
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  window.addEventListener("wheel", function(event) {
    if (event.deltaY > 0 && !isScrollingUp) {
      document.getElementById("header").classList.add("hidden");
    }  else {
      document.getElementById("header").classList.remove("hidden");
    }
  });
}
