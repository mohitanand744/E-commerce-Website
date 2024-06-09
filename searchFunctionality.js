export let searchFunctionality = (items) => {
  // Ensure products are unique
  const products = [...new Set(items)];

  // Select all input elements with the class "userInput"
  let userInputs = document.querySelectorAll(".userInput");

  // Check if there are any input elements
  if (userInputs.length > 0) {
    // Attach the keyup event listener to each input element
    userInputs.forEach((inputText) => {
      inputText.addEventListener("keyup", () => {
        // Get the search value and convert to lowercase
        let searchValue = inputText.value.toLowerCase();

        // Filter products based on the search value
        const searchFilterData = products.filter((item) => {
          // Ensure item has a description property and convert to lowercase for comparison
          return item.description && item.description.toLowerCase().includes(searchValue);
        });

        // Output the filtered data
        console.log(searchFilterData);
      });
    });
  } else {
    console.error("No input elements found with the class 'userInput'.");
  }
};
