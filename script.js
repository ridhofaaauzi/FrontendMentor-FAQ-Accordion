const imgPlus = document.querySelectorAll(".img-icon-plus");
const imgMinus = document.querySelectorAll(".img-icon-minus");
const accorditionText = document.querySelectorAll(".accordition-text");

for (let i = 0; i < imgPlus.length; i++) {
  imgPlus[i].addEventListener("click", function () {
    imgPlus[i].classList.toggle("hidden");
    imgMinus[i].classList.toggle("hidden");
    accorditionText[i].classList.toggle("hidden");
  });
}

for (let i = 0; i < imgMinus.length; i++) {
  imgMinus[i].addEventListener("click", function () {
    imgPlus[i].classList.toggle("hidden");
    imgMinus[i].classList.toggle("hidden");
    accorditionText[i].classList.toggle("hidden");
  });
}
