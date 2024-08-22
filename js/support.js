
  const choseCartModal = document.querySelector('#chose-cart__modal');
  const choseMessengerModal = document.querySelector('#chose-messenger__modal');
  const detailsModal = document.querySelector('#details__modal');
  const backdropDark = document.querySelector('.backdrop--dark');

  const foreignCartButton = document.querySelector('#foreign-cart__button');
  const rfCartButton = document.querySelector('#rf-cart__button');

  const choseCartButtons = document.querySelectorAll('.chose-cart__button');
  const choseMessengerButton = document.querySelector('.chose-messenger__button');

  const detailsModalCloseButton = document.querySelector('.modal-close');
    
  const openCartModal = () => {
    choseCartModal.classList.add('modal-active');
    backdropDark.classList.add('is-active');
  }

  const openMessModal = () => {
    choseMessengerModal.classList.add('modal-active');
    backdropDark.classList.add('is-active');
  }

  const openDetailsModal = () => {
    detailsModal.classList.add('modal-active');
    backdropDark.classList.add('is-active');
    choseCartModal.classList.remove('modal-active');
  }

  const closeCartModal = () => {
    choseCartModal.classList.remove('modal-active');
    backdropDark.classList.remove('is-active');
    choseMessengerModal.classList.remove('modal-active');
    detailsModal.classList.remove('modal-active');
  }

  choseCartButtons.forEach((button) => {
    button.addEventListener('click', openCartModal )
  })


  choseMessengerButton.addEventListener('click', openMessModal);
  backdropDark.addEventListener('click', closeCartModal);
  foreignCartButton.addEventListener('click', openDetailsModal);

  detailsModalCloseButton.addEventListener('click', () => {
    backdropDark.classList.remove('is-active');
    detailsModal.classList.remove('modal-active');
  })