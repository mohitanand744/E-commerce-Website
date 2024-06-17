export let getLocalStorageData = () => {
  let localStorageData = localStorage.getItem("cartData");

  if (!localStorageData) {
    return [];
  }

  // ! Converting String Data Of LocalStorage.

  localStorageData = JSON.parse(localStorageData);

  return localStorageData;
};
