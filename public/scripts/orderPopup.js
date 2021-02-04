const modalWrapper = document.querySelector(".modal-wrapper"),
    orderBtn = document.querySelectorAll('.order-btn'),
    closeOrder = document.querySelector('.modal-block__close'),
    body = document.querySelector('body');

orderBtn.forEach(button => {
  button.addEventListener('click', () => {
    modalWrapper.style.display = 'flex';
    body.style.overflow = 'hidden';
  })
})

closeOrder.addEventListener('click', () => {
  modalWrapper.style.display = 'none';
  body.style.overflow = 'auto';
})
