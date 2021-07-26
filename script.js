const projectsList = document.getElementById("projects-list");

const projects = [
  "progress-steps",
  "expanding-cards",
  "rotating-navigation",
  "hidden-serach-widget",
  "blured-loading",
  "scroll-animation",
  "split-landing-page",
  "form-wave-animation",
  "sound-board",
  "dad-jokes",
  "key-codes",
  "faq-collapse",
  "random-choice-picker",
];

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

projects.forEach((folderName) => {
  const projectName = folderName.replaceAll("-", " ");
  const projectPath = `projects\\${folderName}`;
  const projectTitle = titleCase(projectName);
  const element = `<li> <span class="fa-li"><i class="fas fa-angle-double-right"></i></i></span> <a href="${projectPath}/">${projectTitle}</a> </li>`;

  projectsList.innerHTML += element;
});
