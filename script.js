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
      duration: 999,
      delay: 0,
      iterations: 1,
    }
  );
}, 1100);

setTimeout(() => {
  element.style.borderRadius = "50%";
}, 1200);
