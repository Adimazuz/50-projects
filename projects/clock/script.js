const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function setTime() {
  const currentTime = new Date();
  const minutes = currentTime.getMinutes();
  const hourDeg = scale(currentTime.getHours() % 12, 0, 12, 0, 360);
  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;

  const minuteDeg = scale(currentTime.getMinutes(), 0, 59, 0, 360);
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;

  const secondDeg = scale(currentTime.getSeconds(), 0, 59, 0, 360);
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

  timeEl.innerHTML = `${currentTime.getHours()}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  const dayString = currentTime.toLocaleString("en-us", { weekday: "long" });
  const monthString = currentTime.toLocaleString("en-us", { month: "short" });

  dateEl.innerHTML = `${dayString}, ${monthString} <span class="circle">${currentTime.getDate()}</span>`;
  console.log(monthString);
}

setTime();

setInterval(setTime, 1000);
