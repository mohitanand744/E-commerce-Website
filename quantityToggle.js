export let quantityToggle = (e, id) => {
  let currCart = document.querySelector(`#cart${id}`);

  let quantity = Number(currCart.querySelector(".quentity").innerText);

  if (e.target.classList.contains("plus")) {
    quantity++;
  } else if (e.target.classList.contains("minus") && quantity > 1) {
    quantity--;
  }

  currCart.querySelector(".quentity").innerText = quantity;
};
