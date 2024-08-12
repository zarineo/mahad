
  const formModal = document.querySelector('.form__modal');
  const backdropDark = document.querySelector('.backdrop--dark');
  const startButtons = document.querySelectorAll('.start-button');

  const success = document.querySelector('.success');
  const sendData = document.querySelector('#sendData');
  const successButton = document.querySelector('.success__button');

  const openModal = () => {
    formModal.classList.add('modal-active');
    backdropDark.classList.add('is-active');
  }

  const closeModal = () => {
    formModal.classList.remove('modal-active');
    backdropDark.classList.remove('is-active');
  }

  const openSuccess = () => {
    success.classList.add('modal-active');
    backdropDark.classList.add('is-active');
    formModal.classList.remove('modal-active');
  }

  const closeSuccess = () => {
    success.classList.remove('modal-active');
    backdropDark.classList.remove('is-active');
  }

  sendData.addEventListener('click', openSuccess);
  successButton.addEventListener('click', closeSuccess);
  
  startButtons.forEach((startButton) => {
    startButton.addEventListener('click', openModal);
    backdropDark.addEventListener('click', closeModal);
  })

  