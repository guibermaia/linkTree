const btnSwitch = document.querySelector("#switch button");
const body = document.querySelector("body");
btnSwitch.addEventListener("click", () => {
  body.classList.toggle("light");
});
