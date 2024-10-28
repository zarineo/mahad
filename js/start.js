
  const formModal = document.querySelector('.form__modal');
  const backdropDark = document.querySelector('.backdrop--dark');
  const startButtons = document.querySelectorAll('.start-button');

  const success = document.querySelector('.success');
  const sendData = document.querySelector('#sendData');
  const successButtons = document.querySelectorAll('.success__button');

  const openModal = () => {
    formModal.classList.add('modal-active');
    backdropDark.classList.add('is-active');
    // document.querySelector('body').style.overflow = 'hidden';
    // formModal.style.overflow = 'auto';
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
    formModal.classList.remove('modal-active');
    backdropDark.classList.remove('is-active');
    console.log('close');

  }

  // sendData.addEventListener('click', openSuccess);

  successButtons.forEach((successButton) => {
    successButton.addEventListener('click', closeSuccess);
  })
  

  startButtons.forEach((startButton) => {
    startButton.addEventListener('click', openModal);
    backdropDark.addEventListener('click', closeModal);
  })


  document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Проверка валидности формы
    if (this.checkValidity()) {
        // Закрываем текущее модальное окно
        document.querySelector('.form__modal').classList.remove('modal-active');

        // Открываем окно успеха
        document.querySelector('.success').classList.add('modal-active');

        const formData = new FormData(this);
        const data = {
            chat_id: "317175779",  
            text: `Фамилия Имя: ${formData.get('userName')}\nВозраст: ${formData.get('userAge')}\nСтрана проживания: ${formData.get('userCountry')}\nТелеграм: ${formData.get('userTelegram')}\nEmail: ${formData.get('userMail')}\nТемп обучения: ${formData.get('userGrafic')}\nУровень чтения Корана: ${formData.get('userKoranLvl')}\nУровень владения арабским языком: ${formData.get('userArabLvl')}`
        };

        fetch(`https://api.telegram.org/bot6452584114:AAERbOG2WM1dQqVveN6BkS2hUDIyL1k0gAw/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                console.log('Сообщение успешно отправлено в Telegram');
            } else {
                console.error('Ошибка при отправке сообщения в Telegram:', response.statusText);
            }
        }).catch(error => {
            console.error('Ошибка отправки формы:', error);
        });

    } else {
        this.reportValidity();
    }
});
