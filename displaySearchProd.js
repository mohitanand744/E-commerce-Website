import { addToCart } from "./addToCart";
import { quantityToggle } from "./quantityToggle";
import { viewFullDetails } from "./viewFullDetails";

export const displaySearchProd = (prod, inputValue) => {
  console.log(prod);
  let prodContainer = document.querySelector(".searchProductContainer");
  let templateCart = document.getElementById("searchProdCart");

  prodContainer.innerHTML = "";
  document.querySelector(".searchData").style.height = "100vh";
  document.querySelector(".searchData").style.paddingBottom = "25rem";

  document.querySelector(".back").addEventListener("click", () => {
    document.querySelector(".searchData").style.height = "0vh";
    document.querySelector(".searchData").style.paddingBottom = "0rem";
  });

  prod.forEach((prod) => {
    let { description, image, price, id } = prod;

    let templCart = document.importNode(templateCart.content, true);

    templCart.querySelector("img").src = image;
    templCart.querySelector("#cart").setAttribute("id", `cart${id}`);
    templCart.querySelector(".desc").textContent = description;
    templCart.querySelector(".price").textContent = `₹${price}`;
    templCart.querySelector(".org-price").textContent = `₹${price * 2}`;

    if (!inputValue) {
      document.querySelector(".searchData .title").innerHTML = `
      <h2>Searching For : Products</h2>
     `;
    } else {
      document.querySelector(".searchData .title").innerHTML = `
     <h2>Searching For : ${inputValue}</h2>
    `;
    }

    templCart = templCart.querySelector(`#cart${id}`);

    templCart.addEventListener("click", () => {
      viewFullDetails(id);
    });

    prodContainer.append(templCart);
  });
};
