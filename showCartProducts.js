import "./style.css";
import "./mediaquery.css";
import { updatedCartValue } from "./updatedCartValue";
import products from "./fashion.json";
import { getLocalStorageData } from "./getLocalStorageData";

updatedCartValue();

let localStorageData = getLocalStorageData();

let localStorageDataIds = localStorageData.map((product) => product.id);

let filterCartProducts = products.filter((prod) =>
  localStorageDataIds.includes(prod.id)
);

const cartProdContainer = document.querySelector(".product_Container");
const prodTemplate = document.querySelector("#cartProduct");

filterCartProducts.forEach((prod) => {
  let { price, description, image, id } = prod;

  const cartTemplate = document.importNode(prodTemplate.content, true);

  description = description.split(" ")

  description = description.slice(0, 9).join(" ")

  cartTemplate.querySelector("img").src = image;
  cartTemplate.querySelector(".price").innerText = `₹${price}`;
  cartTemplate.querySelector(".org-price").innerText = `₹${price * 2}`;
  cartTemplate.querySelector(".desc").innerText = `${description}...`;

  cartProdContainer.append(cartTemplate);
});
