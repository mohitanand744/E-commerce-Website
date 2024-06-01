export let clearSearchInputFunction = () => {
  const userInputs = document.querySelectorAll(".userInput");

  userInputs.forEach((userInput) => {
    const clearSearchInput = document.querySelectorAll(".clearSearchInput");

    const toggleClearButton = () => {
      clearSearchInput.forEach((clearSearchInput) => {
        clearSearchInput.style.display = userInput.value ? "block" : "none";
      });
    };

    userInput.addEventListener("input", () => {
      toggleClearButton();
    });

    clearSearchInput.forEach((clearSearchInput) => {
      clearSearchInput.addEventListener("click", () => {
        userInput.value = "";
        toggleClearButton();
      });
    });

    toggleClearButton();
  });
};
