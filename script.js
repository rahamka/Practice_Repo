let element = document.getElementById("box-1");
if (element) {
  element.addEventListener("animationend", function () {
    setTimeout(() => {
      // element.style.animation = "rotateAnimate 2s ease 0s normal";
      // element.style.@KeyframeEffect{}
      // How to apply @KeyframeEffect in JavaScript?
    }, 2000);
  });
}
setTimeout(() => {
  const newElement = document.createElement("div");
  newElement.innerText = "Created By Raham Kalhoro.";
  document.body.append(newElement);
}, 2000);

setTimeout(() => {
  const newElement2 = document.createElement("div");
  newElement2.innerText = "Thanks Regards Raham.";
  document.body.append(newElement2);
}, 2100);
