import { getLocalStorageData } from "./getLocalStorageData";
import { showTost } from "./showToast";
import { updatedCartValue } from "./updatedCartValue";

export const addToCart = (id) => {
  let currCart = document.querySelector(`#cart${id}`);

  let localStorageData = getLocalStorageData();
  console.log(currCart);
  let quantity = Number(currCart.querySelector(".quentity").textContent);
  let price = currCart.querySelector(".price").textContent;
  price = price.replace("₹", "");
  price = Number(price.replace("From", ""));

  let existingProduct = localStorageData.find((prod) => prod.id === id);

  if (existingProduct && quantity > 1) {
    quantity = existingProduct.quantity + quantity;
    console.log(quantity);
    price = price * quantity;
    console.log(price);

    let updatedData = { quantity, price, id };

    updatedData = localStorageData.map((prod) =>
      prod.id === id ? updatedData : prod
    );

    localStorage.setItem("cartData", JSON.stringify(updatedData));
  }

  if (existingProduct) {
    return false;
  }

  let CartData = { quantity, price, id };

  localStorageData.push(CartData);

  localStorage.setItem("cartData", JSON.stringify(localStorageData));

  updatedCartValue()
  showTost("add")
};
