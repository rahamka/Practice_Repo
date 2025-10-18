let box1 = document.querySelector("#box1");
let container = document.querySelector("#container");
if (box1.animate) {
  setTimeout(() => {
    box1.style.position = "relative";
    box1.style.left = "-0vh";
    container.style.display = "flex";
    container.style.justifyContent = "center";
  }, 1010);
}
