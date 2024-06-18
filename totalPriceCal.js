import { getLocalStorageData } from "./getLocalStorageData";

export let totalPriceCal = () => {
  let localStorageData = getLocalStorageData();

  let totalPrice = localStorageData.reduce(
    (accu, prod) => accu + prod.price,
    0
  );

  document.querySelector(
    ".totalProducts"
  ).innerText = `${localStorageData.length} Items`;

  document.querySelector(".total-amount").innerText = `₹${totalPrice}`;
  document.querySelector(".totalAmount").innerText = `₹${totalPrice + 98}`;
};

totalPriceCal();
