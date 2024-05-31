export let clearSearchInputFunction = () => {
  const clearSearchInput = document.querySelector(".clearSearchInput");
  const userInput = document.getElementById("userInput");

  if (clearSearchInput && userInput) { 
    const toggleClearButton = () => {
      clearSearchInput.style.display = userInput.value ? "block" : "none";
    };

    userInput.addEventListener("input", () => {
      toggleClearButton();
    });

    clearSearchInput.addEventListener("click", () => {
      userInput.value = "";
      toggleClearButton();
    });

  } else {
    console.error("Required elements not found in the DOM.");
  }
};
