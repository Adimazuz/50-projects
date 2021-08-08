const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = 0;
  setTimeout(updateCounter, 1, counter);
});

function updateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const delta = target / 200;
  const currentCounterValue = +counter.textContent;

  if (currentCounterValue < target) {
    counter.textContent = `${Math.ceil(currentCounterValue + delta)}`;
    setTimeout(updateCounter, 1, counter);
  } else {
    counter.textContent = target;
  }

  console.log(target);
}
