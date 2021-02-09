async function checkResponseOrder(response) {
  const error = document.querySelector('.warning-block__text');
  if(response.type === "success") {
    error.innerText = '';
    document.forms["orderPopup"].reset();
    modalWrapper.style.display = 'none';
    body.style.overflow = 'auto';
    modalWrapper.style.opacity = '0';
  } else if(response.type === 'error') {
    error.style.color = 'red';
    error.innerText = response.message;
  }
}

async function sendOrder(event) {
  event.preventDefault();

  const data = {
    userName: document.forms['orderPopup'].elements['userName'].value,
    phone: document.forms['orderPopup'].elements['userPhone'].value,
  }

  await fetch('/order', {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(data => data.json())
      .then(res => checkResponseOrder(res));
}

const modalWrapper = document.querySelector(".modal-wrapper"),
    orderBtn = document.querySelectorAll('.order-btn'),
    closeOrder = document.querySelector('.modal-block__close'),
    body = document.querySelector('body');

orderBtn.forEach(button => {
  button.addEventListener('click', () => {
    modalWrapper.style.display = 'flex';
    body.style.overflow = 'hidden';
    modalWrapper.style.transition = '.4s all';
    setTimeout(() => {
      modalWrapper.style.opacity = '1';
    }, 100)
  })
})

closeOrder.addEventListener('click', () => {
  modalWrapper.style.display = 'none';
  body.style.overflow = 'auto';
  modalWrapper.style.opacity = '0';
})

const sendOrderBtn = document.querySelector('.modal-block__item-btn');
sendOrderBtn.addEventListener('click', sendOrder);
