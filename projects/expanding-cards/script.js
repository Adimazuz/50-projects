const panels = document.querySelectorAll(".panel");

console.log(panels);

function removeAllActivePanels(panels) {
  panels.forEach((panel) => panel.classList.remove("active"));
}

panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    if (!panel.classList.contains("active")) {
      removeAllActivePanels(panels);
      panel.classList.add("active");
    } else {
      removeAllActivePanels(panels);
    }
  })
);
