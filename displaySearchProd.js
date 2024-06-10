import { viewFullDetails } from "./viewFullDetails";

export const displaySearchProd = (prod, inputValue) => {
  console.log(prod);
  let prodContainer = document.querySelector(".searchProductContainer");
  let templateCart = document.getElementById("searchProdCart");

  prodContainer.innerHTML = "";
  document.querySelector(".searchData").style.display = "block";

  prod.forEach((prod) => {
    let { description, image, price, id, category } = prod;

    let templCart = document.importNode(templateCart.content, true);

    templCart.querySelector("img").src = image;
    templCart.querySelector("#cart").setAttribute("id", `cart${id}`);
    document.querySelector(".searchData .title").innerHTML = `
     <h2>Searching For : ${inputValue}</h2>
    `;

    templCart = templCart.querySelector(`#cart${id}`);

    templCart.addEventListener("click", () => {
      viewFullDetails(id);
    });

    prodContainer.append(templCart);
  });
};
