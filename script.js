const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Use light theme";
  } else {
    themeButton.textContent = "Change theme";
  }
});
