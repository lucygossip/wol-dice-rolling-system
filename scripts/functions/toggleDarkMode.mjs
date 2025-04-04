const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.getElementsByTagName("body")[0];

const toggleClass = (element, className) => element.classList.toggle(className);

window.addEventListener("load", () => {
  let darkModeStatus = sessionStorage.getItem("darkMode");
  if(darkModeStatus === "false") {
    darkModeToggle.checked = false;
    body.classList.remove("dark");
  }
  if (darkModeStatus == "true") {
   darkModeToggle.checked = true;
   body.classList.add("dark");
  }
});

darkModeToggle.addEventListener("change", () => {
  toggleClass(body, "dark");
  if (body.classList.contains("dark")) {
    sessionStorage.setItem("darkMode", true);
  } else {
    sessionStorage.setItem("darkMode", false);
  }
});