export let filterProductDropdown = () => {
  let activeFilterbtn = document.querySelector(".activeFilterbtn");
  let deactivateFilterbtn = document.querySelector(".deactivateFilterbtn");
  let categoryContainer = document.querySelector(".categoryContainer");
  let Category = document.querySelectorAll(".Category");

  activeFilterbtn.addEventListener("click", () => {
    categoryContainer.style.width = "10rem";
    Category.forEach((Category) => {
      Category.style.display = "flex";
    });
    activeFilterbtn.style.display = "none";
    deactivateFilterbtn.style.display = "flex";
  });

  let closeDropDown = () => {
    categoryContainer.style.width = "0rem";
    Category.forEach((category) => {
      category.style.display = "none";
    });
    activeFilterbtn.style.display = "flex";
    deactivateFilterbtn.style.display = "none";
  };

  deactivateFilterbtn.addEventListener("click", closeDropDown);

  Category.forEach((category) => {
    category.addEventListener("click", closeDropDown);
  });
};
