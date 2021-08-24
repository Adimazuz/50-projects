const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

var activeImageIndex = 0;

function setBackgroundImg(imageIndex) {
  body.style.backgroundImage = slides[imageIndex].style.backgroundImage;
}

function setActiveSlide(wantedSlideIndex) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === wantedSlideIndex) {
      console.log(`adding to ${i}`);
      slide.classList.add("active");
    }
  });
}

setBackgroundImg(activeImageIndex);
setActiveSlide(activeImageIndex);

rightBtn.addEventListener("click", () => {
  activeImageIndex = (activeImageIndex + 1 + slides.length) % slides.length;
  console.log(activeImageIndex);
  setBackgroundImg(activeImageIndex);
  setActiveSlide(activeImageIndex);
});

leftBtn.addEventListener("click", () => {
  activeImageIndex = (activeImageIndex - 1 + slides.length) % slides.length;
  console.log(activeImageIndex);
  setBackgroundImg(activeImageIndex);
  setActiveSlide(activeImageIndex);
});
