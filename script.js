let box1 = document.querySelector("#box1");
let container = document.querySelector("#container");
if (box1.animate) {
  setTimeout(() => {
    container.style.display = "flex";
    container.style.justifyContent = "center";
  }, 1010);
}
