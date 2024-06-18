import { getLocalStorageData } from "./getLocalStorageData";

export let updatedCartValue = () => {
  let localStorageData = getLocalStorageData();

  let cartValue = document.querySelectorAll("#cartValue");

  cartValue.forEach((cartValue) => {
    cartValue.innerText = localStorageData.length || 0;
  });

};


