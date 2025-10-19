let element = document.getElementById("box-1");
if (element) {
  element.addEventListener("animationend", function () {
    setTimeout(() => {
      element.classList.add("box1");
    }, 2000);
  });
}
