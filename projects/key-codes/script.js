const insertDiv = document.querySelector(".insert");

window.addEventListener("keydown", (event) => {
  insertDiv.innerHTML = `
    <div class="key">
    ${event.key}
    <small>Key</small>
  </div>

  <div class="key">
    ${event.keyCode}
    <small>KeyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>Code</small>
  </div>
`;
});
