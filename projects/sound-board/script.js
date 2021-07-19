const sounds = ["luffy", "crocodile", "arlong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;
  btn.classList.add(sound);
  console.log(sound);

  btn.addEventListener("click", () => {
    audio = document.getElementById(sound);
    console.log(audio.paused);

    if (!audio.paused) {
      stopSongs();
    } else {
      stopSongs();
      audio.play();
      console.log(audio.paused);
    }
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
