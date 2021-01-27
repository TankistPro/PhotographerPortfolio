const imgi = document.getElementsByTagName("img");
const listImg = [imgi[5], imgi[6], imgi[7], imgi[8], imgi[9]];

for (let i = 0; i<listImg.length; i++) {
    listImg[i].addEventListener("click", () => openImg(listImg[i]));
}

function openImg(el) {
    console.log(el);
    el.classList.add("openList");
}