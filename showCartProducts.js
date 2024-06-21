import "./style.css";
import "./mediaquery.css";
import { updatedCartValue } from "./updatedCartValue";
import products from "./fashion.json";
import { getLocalStorageData } from "./getLocalStorageData";
import { quantityToggleLs } from "./quantityToggleLs";
import { removeCart } from "./removeCart";
import { totalPriceCal } from "./totalPriceCal";
import { viewFullDetails } from "./viewFullDetails";
import { loader } from "./loader";

// ! Loader

loader();

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

  description = description.split(" ");

  description = description.slice(0, 9).join(" ");

  let existingProduct = localStorageData.find((prod) => prod.id === id);

  price = existingProduct.price;
  let quantity = existingProduct.quantity;

  cartTemplate.querySelector("img").src = image;
  cartTemplate.querySelector(".price").innerText = `₹${price}`;
  cartTemplate.querySelector(".org-price").innerText = `₹${price * 2}`;
  cartTemplate.querySelector(".desc").innerText = `${description}...`;
  cartTemplate.querySelector(".quentity").innerText = quantity;
  cartTemplate.querySelector("#cart").setAttribute("id", `cart${id}`);

  let productCart = cartTemplate.querySelector(`#cart${id}`);

  productCart.addEventListener("click", () => {
    viewFullDetails(id);
  });

  cartTemplate
    .querySelector(".quentity_Container")
    .addEventListener("click", (e) => {
      e.stopPropagation();
      quantityToggleLs(e, id, price);
    });

  cartTemplate.querySelector(".deleteBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    removeCart(id);
  });

  cartProdContainer.append(cartTemplate);
});

updatedCartValue();
totalPriceCal();
