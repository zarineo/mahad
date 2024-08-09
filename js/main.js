  document.querySelectorAll('.menu-itemm').forEach(item => {
    item.addEventListener('click', function (e) {
      const subMenu = this.querySelector('.items');
      if (subMenu) {
        // e.preventDefault(); // Предотвращает переход по ссылке
        subMenu.classList.toggle('active');
      }
    });
  });

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
  console.log('hello');