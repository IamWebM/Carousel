let slideNum = 0;
const slides = document.querySelectorAll(".carousel_item");
const totalSlides = slides.length;

document
  .getElementById("carousel_button_next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document.onkeydown = function (keyCode) {
  if(keyCode.key === "ArrowRight"){
    moveToNextSlide();
  } else if(keyCode.key === "ArrowLeft"){
    moveToPrevSlide();
  }
};

document
  .getElementById("carousel_button_prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel_item_visible");
    slide.classList.add("carousel_item_hidden");
  }

  slides[slideNum].classList.add("carousel_item_visible");
}

function moveToNextSlide() {
  if (slideNum === totalSlides - 1) {
    slideNum = 0;
  } else {
    slideNum++; 
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slideNum === 0) {
    slideNum = totalSlides - 1;
  } else {
    slideNum--;
  }

  updateSlidePosition();
}
