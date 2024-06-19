import { emptyCart } from "./emptyCart";
import { getLocalStorageData } from "./getLocalStorageData";
import { showTost } from "./showToast";
import { totalPriceCal } from "./totalPriceCal";
import { updatedCartValue } from "./updatedCartValue";

export let removeCart = (id) => {
  let localStorageData = getLocalStorageData();

  let filterData = localStorageData.filter((prod) => prod.id !== id);
  localStorage.setItem("cartData", JSON.stringify(filterData));

  let currCart = document.getElementById(`cart${id}`);

  if (currCart) {
    currCart.remove();
  }

  updatedCartValue();
  emptyCart();
  totalPriceCal();
  showTost("del")
};
