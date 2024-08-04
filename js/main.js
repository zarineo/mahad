  document.querySelectorAll('.menu-itemm').forEach(item => {
    item.addEventListener('click', function (e) {
      const subMenu = this.querySelector('.items');
      if (subMenu) {
        // e.preventDefault(); // Предотвращает переход по ссылке

        subMenu.classList.toggle('active');
     
      }
    });
  });