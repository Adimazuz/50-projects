const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const totalCups = smallCups.length;

smallCups.forEach((smallCup, i) => {
  smallCup.addEventListener("click", () => highlightCups(i));
});

function highlightCups(chosenIndex) {
  if (
    (chosenIndex == totalCups &&
      smallCups[chosenIndex].classList.contains("full")) ||
    (smallCups[chosenIndex].classList.contains("full") &&
      !smallCups[chosenIndex].nextElementSibling.classList.contains("full"))
  ) {
    chosenIndex--;
  }
  smallCups.forEach((cup, i) => {
    if (i <= chosenIndex) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
