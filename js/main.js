  const backdrop = document.querySelector('.backdrop');
  const subMenus = document.querySelectorAll('.items');
  const menus = document.querySelectorAll('.menus');

  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  const openMobileMenu = () => {
    mobileMenu.classList.add('is-active');
  }

  hamburger.addEventListener('click', openMobileMenu);

  mobileMenu.querySelector('.menu__close').addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
  })

  

  for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', () => {
      if (subMenus[i].classList.contains('active')){
        subMenus[i].classList.remove('active');
      } else {
        subMenus.forEach((item) => {
          item.classList.remove('active');
        })
        subMenus[i].classList.add('active');
        backdrop.classList.add('is-active');
      }
     
    })
  }

  backdrop.addEventListener('click', () => {
    backdrop.classList.remove('is-active');
    for (let item of subMenus){
      item.classList.remove('active');
    }
  })

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    slidesPerView: 1,
    mousewheel: {
      forceToAxis: true,
    },
  });
