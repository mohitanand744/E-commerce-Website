/* export let searchFunctionality = (items) => {
  let userInputs = document.querySelectorAll(".userInput");

  userInputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      let inputValue = input.value.toLowerCase().trim();

      let filterProd = items.filter((prods) => {
        return prods.category.toLowerCase().includes(inputValue);
      });

      console.log("Filtered Products:", filterProd);
    });
  });
};
 */

/* export let searchFunctionality = (items) => {
  let userInputs = document.querySelectorAll(".userInput");

  userInputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      let inputValue = input.value.toLowerCase().trim();

      let filterProd = items.filter((prods) => {
        let categoryWords = prods.category.toLowerCase().split(/\s+/);

        return categoryWords.includes(inputValue);
      });

      console.log("Filtered Products:", filterProd);
    });
  });
};
 */


export let searchFunctionality = (items) => {
  let userInputs = document.querySelectorAll(".userInput");

  userInputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      let inputValue = input.value.toUpperCase();

      let regex = new RegExp(`\\b${inputValue}\\b`, "i");

      console.log(regex);

      let filterProd = items.filter((prods) => {
        if (regex.test(prods.category)) {
          return true;
        } else {
          return false;
        }
      });

      console.log("Filtered Products:", filterProd);
    });
  });
};


