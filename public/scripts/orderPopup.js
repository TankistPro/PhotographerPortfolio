const modalWrapper = document.querySelector(".modal-wrapper"),
    orderBtn = document.querySelectorAll('.order-btn'),
    closeOrder = document.querySelector('.modal-block__close');

orderBtn.forEach(button => {
  button.addEventListener('click', () => {
    modalWrapper.style.display = 'flex';
  })
})

closeOrder.addEventListener('click', () => {
  modalWrapper.style.display = 'none';
})
