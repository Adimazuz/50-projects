const circles = document.querySelectorAll(".circle");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progressBar = document.querySelector(".progress");
let activeCircles = 1;

function updateProgress() {
  for (let i = 0; i < 4; i++) {
    if (i < activeCircles) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }
  }
  progressBar.style.width =
    ((activeCircles - 1) / (circles.length - 1)) * 100 + "%";
}

nextBtn.addEventListener("click", () => {
  if (activeCircles < 3) {
    activeCircles += 1;
    prevBtn.disabled = false;
  } else {
    activeCircles = 4;
    nextBtn.disabled = true;
  }
  console.log(activeCircles);
  updateProgress();
});

prevBtn.addEventListener("click", () => {
  if (activeCircles > 2) {
    activeCircles -= 1;
    nextBtn.disabled = false;
  } else {
    activeCircles = 1;
    prevBtn.disabled = true;
  }
  updateProgress();
  console.log(activeCircles);
});

console.log(circles);
