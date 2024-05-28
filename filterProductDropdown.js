export let filterProductDropdown = () => {
  let activeFilterbtn = document.querySelector(".activeFilterbtn");

  window.addEventListener("scroll",()  =>  {
    
    if (window.scrollY >= 200) {
      activeFilterbtn.style.display = "flex";
    } else {
      activeFilterbtn.style.display = "none";
    }
  });
  
};
