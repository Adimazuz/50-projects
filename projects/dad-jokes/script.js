const jokeBtn = document.getElementById("jokebtn");
const jokeElm = document.getElementById("joke");

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeElm.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", generateJoke);

generateJoke();
