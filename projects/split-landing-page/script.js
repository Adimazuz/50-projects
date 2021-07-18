const conatiner = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => {
  console.log("enter left");
  conatiner.classList.remove("right-hover");
  conatiner.classList.add("left-hover");
});

right.addEventListener("mouseenter", () => {
  console.log("enter right");

  conatiner.classList.add("right-hover");
  conatiner.classList.remove("left-hover");
});
