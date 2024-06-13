import { displaySearchProd } from "./displaySearchProd";


// ! In this function if user will enter men Then it's returning men's product as well as womens product because it's targeting the last three litres of women.

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
}; */


// ! In this function user have to enter Exact word to get related products but also this is only matching the first word of user input. ex: If User will inter men Shoes than this function will target only first word "men".

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
}; */

// ! In This Code The User Have To Inter Exact word to get related products.

/* export let searchFunctionality = (items) => {
  let userInputs = document.querySelectorAll(".userInput");

  userInputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      let inputValue = input.value.toUpperCase().trim();

      let regex = new RegExp(`\\b${inputValue}\\b`, "i");

      console.log(regex);

      let filterProd = items.filter((prods) => {
        if (regex.test(prods.category)) {
          return true;
        } else {
          return false;
        }
      });

      displaySearchProd(filterProd, inputValue);
    });

  });
};
 */




// * Solution Using Regular Expression.

export let searchFunctionality = (items) => {
  let userInputs = document.querySelectorAll(".userInput");

  userInputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      let inputValue = input.value.toLowerCase().trim();

     let regex = new RegExp(`\\b${inputValue}`, 'i');

      let filterProd = items.filter((prods) => {
        return regex.test(prods.category.toLowerCase());
      });

      displaySearchProd(filterProd, inputValue);
    });
  });
};