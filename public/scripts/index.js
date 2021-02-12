import IMask from "imask";

const orderPhone = document.querySelector('.modal-block__item__input.phone');
const maskOptions = {
  mask: '(000)000-00-00',
  lazy: false,
  placeholderChar: '_'
};
let mask = IMask(orderPhone, maskOptions);
orderPhone.addEventListener("input", () => {
  orderPhone.style.color = "#000000";
})

require("./openMenuBurger.js");
require("./openImg.js");
require("./sendForm.js");
require("./orderPopup.js");
