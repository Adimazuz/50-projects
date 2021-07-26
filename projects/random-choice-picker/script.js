const textArea = document.getElementById("textarea");
const tagsDiv = document.getElementById("tags");
textArea.focus();

textArea.addEventListener("keyup", (event) => {
  console.log(event.key);

  createTags(event.target.value);

  if (event.key === "Enter") {
    const tags = document.querySelectorAll(".tag");
    selectChoice(tags);
  }
});

function createTags(input) {
  const choices = input
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item != "");

  tagsDiv.innerHTML = "";
  choices.forEach((choice) => {
    const tagEl = document.createElement("span");
    tagEl.innerHTML = choice;
    tagEl.classList.add("tag");
    tagsDiv.appendChild(tagEl);
  });

  //   const selected_index = Math.floor(Math.random() * array.length);
  //   console.log(choices);
}

function selectChoice(tags) {
  const times = 30;
  const timoeout = 100;
  shortHighlightRandomTag(tags, timoeout);
  const interval = setInterval(() => {
    shortHighlightRandomTag(tags, timoeout);
  }, timoeout);

  setTimeout(() => {
    clearInterval(interval);
    const randomTag = selectRandomTag(tags);
    randomTag.classList.add("active");
  }, timoeout * times);
}

function selectRandomTag(tags) {
  const selected_index = Math.floor(Math.random() * tags.length);
  console.log(`slected ${selected_index}`);
  return tags[selected_index];
}

function shortHighlightRandomTag(tags, timeout) {
  const randomTag = selectRandomTag(tags);
  randomTag.classList.add("active");
  console.log("highlight!");

  setTimeout(() => {
    randomTag.classList.remove("active"), timeout;
    console.log("unlight!");
  }, timeout);
}
