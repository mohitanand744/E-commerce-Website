import { getLocalStorageData } from "./getLocalStorageData";

export let quantityToggleLs = (e, id, price) => {
  let localStorageData = getLocalStorageData();

  let currCart = document.querySelector(`#cart${id}`);
  console.log(price);
  let currCartQuantity = Number(currCart.querySelector(".quentity").innerText);

  if (e.target.classList.contains("plus")) {
    currCartQuantity++;
  } else if (e.target.classList.contains("minus") & (currCartQuantity > 1)) {
    currCartQuantity--;
  }

  currCart.querySelector(".quentity").innerText = currCartQuantity;

  let currCartPrice = price * currCartQuantity;

  currCart.querySelector(".price").innerText = `₹${currCartPrice}`;

  let updatedData = { id, quantity: currCartQuantity, price: currCartPrice };

  updatedData = localStorageData.map((prod) =>
    prod.id === id ? updatedData : prod
  );

  localStorage.setItem("cartData", JSON.stringify(updatedData));
};
