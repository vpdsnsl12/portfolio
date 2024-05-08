export function header() {
  let isScrollingUp = false; // 스크롤 방향을 추적하는 변수 추가

  // 현재 화면의 중앙 위치를 계산하는 함수
  function getCenterOfScreen() {
    return window.innerHeight / 2;
  }

  // 각 섹션의 중앙과 화면의 중앙 사이의 거리를 계산하는 함수
  function getDistanceFromCenter(section) {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    const centerOfScreen = getCenterOfScreen();
    const sectionCenter = sectionTop + (sectionHeight / 2);
    return Math.abs(sectionCenter - centerOfScreen);
  }

  // 현재 화면의 중앙에 가장 가까운 섹션의 인덱스를 반환하는 함수
  function getClosestSectionIndex() {
    const sections = document.querySelectorAll('section');
    let minDistance = Number.MAX_SAFE_INTEGER;
    let closestSectionIndex = -1;

    sections.forEach((section, index) => {
      const distance = getDistanceFromCenter(section);
      if (distance < minDistance) {
        minDistance = distance;
        closestSectionIndex = index;
      }
    });

    return closestSectionIndex;
  }

  // nav ul에서 같은 인덱스 번째에 위치한 li의 a에 클래스를 추가하는 함수
  function highlightNav() {
    const closestSectionIndex = getClosestSectionIndex();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach((link, index) => {
      if (index === closestSectionIndex) {
        link.classList.add('on');
      } else {
        link.classList.remove('on');
      }
    });
  }

  // 페이지 스크롤 이벤트에 highlightNav 함수를 바인딩하여 스크롤할 때마다 nav를 갱신
  document.addEventListener('scroll', function() {
    highlightNav();
  });

  // 페이지 로드 시 초기 실행
  highlightNav();

  // 각 nav 링크에 클릭 이벤트 추가하여 해당 섹션으로 스크롤하고 'on' 클래스 추가
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href').substring(1); // 링크의 href 속성값에서 '#'을 제외한 부분 추출
      const targetSection = document.getElementById(targetId); // 해당 id를 가진 섹션 요소 가져옴
      if (targetSection) { // 해당 id를 가진 섹션이 존재하는 경우에만 스크롤
        window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' }); // 해당 섹션으로 스크롤
        highlightNav(); // 스크롤 후에도 nav를 갱신하여 'on' 클래스 추가
      }
    });
  });
  
  // wheel 이벤트를 사용하여 스크롤 방향 추적
  window.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
      // 아래로 스크롤할 때 헤더 숨김
      document.getElementById("header").classList.add("hidden");
      isScrollingUp = false;
    }  else {
      // 위로 스크롤할 때 헤더 표시
      document.getElementById("header").classList.remove("hidden");
      isScrollingUp = true;
    }
  });

  // 화면 갱신 주기에 따라 네비게이션 항목을 업데이트하는 함수
  function updateNav() {
    highlightNav();
    requestAnimationFrame(updateNav);
  }

  // 초기 호출
  updateNav();
}
