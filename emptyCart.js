import { getLocalStorageData } from "./getLocalStorageData";

export let emptyCart = () => {
  let localStorageData = getLocalStorageData();

  if (localStorageData.length === 0) {
    document.querySelector(".cartEmpty").style.display = "block";
  }
};

emptyCart();
