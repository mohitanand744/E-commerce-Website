import "./style.css";
import "./mediaquery.css";
import { imageSlider } from "./imageSlider";
import { filterProductDropdown } from "./filterProductDropdown";
import { showWomenFootwear } from "./womenFootwear";
import products from "./fashion.json";
import { showMenT_shirt } from "./showMenT_shirt";
import { clearSearchInputFunction } from "./clearSearchInput";
import { showMenFootwear } from "./showMenFootwear";
import { womenT_shirt } from "./womenT_shirt";
import { scrollProducts } from "./ScrollContainer";
import { searchFunctionality } from "./searchFunctionality";

document.addEventListener("DOMContentLoaded", () => {
  imageSlider();
  scrollProducts();
  filterProductDropdown();
  showWomenFootwear(products);
  showMenT_shirt(products);
  clearSearchInputFunction();
  showMenFootwear(products);
  womenT_shirt(products);
  searchFunctionality(products);
});
