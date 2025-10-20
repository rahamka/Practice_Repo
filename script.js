let element = document.getElementById("box-1");
setTimeout(() => {
  element.animate(
    [
      {
        transform: "rotate(0deg)",
        borderRadius: "0%",
      },
      {
        transform: "rotate(360deg)",
        borderRadius: "50%",
      },
    ],
    {
      duration: 450,
      delay: 0,
      iterations: 2,
    }
  );
}, 1100);

setTimeout(() => {
  element.style.borderRadius = "50%";
}, 2000);

let result = null;
const displayElement = document.createElement("div");
displayElement.style.fontSize = "30px";
displayElement.style.fontFamily =
  "Segoe UI, Tahoma, Geneva, Verdana, sans-serif ";

setTimeout(() => {
  displayElement.innerText = 1;
  document.body.append(displayElement);
}, 50);

setTimeout(() => {
  displayElement.innerText = 2;
  document.body.append(displayElement);
}, 100);

setTimeout(() => {
  displayElement.innerText = 3;
  document.body.append(displayElement);
}, 150);

setTimeout(() => {
  displayElement.innerText = 5;
  document.body.append(displayElement);
}, 200);

setTimeout(() => {
  displayElement.innerText = 6;
  document.body.append(displayElement);
}, 250);

setTimeout(() => {
  displayElement.innerText = 7;
  document.body.append(displayElement);
}, 300);

setTimeout(() => {
  displayElement.innerText = 8;
  document.body.append(displayElement);
}, 350);

setTimeout(() => {
  displayElement.innerText = 9;
  document.body.append(displayElement);
}, 400);

setTimeout(() => {
  displayElement.innerText = 10;
  document.body.append(displayElement);
}, 450);

setTimeout(() => {
  displayElement.innerText = 11;
  document.body.append(displayElement);
}, 500);

setTimeout(() => {
  displayElement.innerText = 12;
  document.body.append(displayElement);
}, 550);

setTimeout(() => {
  displayElement.innerText = 13;
  document.body.append(displayElement);
}, 600);

setTimeout(() => {
  displayElement.innerText = 14;
  document.body.append(displayElement);
}, 650);

setTimeout(() => {
  displayElement.innerText = 15;
  document.body.append(displayElement);
}, 700);

setTimeout(() => {
  displayElement.innerText = 16;
  document.body.append(displayElement);
}, 750);

setTimeout(() => {
  displayElement.innerText = 17;
  document.body.append(displayElement);
}, 800);

setTimeout(() => {
  displayElement.innerText = 18;
  document.body.append(displayElement);
}, 850);

setTimeout(() => {
  displayElement.innerText = 19;
  document.body.append(displayElement);
}, 900);

setTimeout(() => {
  displayElement.innerText = 20;

  document.body.append(displayElement);
}, 1000);

// Convert this largest code into simple code
// Build Stop-Watch to upload the project on linkedIn?
