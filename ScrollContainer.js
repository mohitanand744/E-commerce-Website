export let scrollProducts = () => {
  let scrollContainer = document.querySelector(".womenTshirtproductContainer");
  let btnContainer = document.querySelector(".ScrollContainer");

  btnContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("next")) {
      scrollContainer.scrollLeft += 250;
    } else if (e.target.classList.contains("prev")) {
      scrollContainer.scrollLeft -= 250;
    }
  });
};
