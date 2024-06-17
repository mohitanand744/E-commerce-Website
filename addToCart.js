import { getLocalStorageData } from "./getLocalStorageData";

export const addToCart = (id) => {
  let currCart = document.querySelector(`#cart${id}`);

  let localStorageData = getLocalStorageData();
  console.log(currCart);
  let quantity = Number(currCart.querySelector(".quentity").textContent);
  let price = currCart.querySelector(".price").textContent;
  price = price.replace("₹", "");
  price = Number(price.replace("From", ""));

  console.log(price);

  let existingProduct = localStorageData.find((prod) => prod.id === id);

  if (existingProduct) {
    return false;
  }

  let CartData = { quantity, price, id };

  localStorageData.push(CartData);

  localStorage.setItem("cartData", JSON.stringify(localStorageData));
};
