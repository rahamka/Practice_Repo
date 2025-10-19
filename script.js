let element = document.querySelector(".box");
if (element) {
  setTimeout(() => {
    element.classList.add("box-1");
  }, 1001);
}

// why here classList isn't adding?
