import { viewFullDetails } from "./viewFullDetails";

let womenFootwearproductContainer = document.querySelector(
  ".womenFootwearproductContainer"
);

let templateWomenFootwear = document.getElementById("womenFootwear");

export let showWomenFootwear = (womenFootwear) => {
  if (!womenFootwear) {
    return false;
  }

  let womenFootwearProducts = womenFootwear.filter((products) => {
    return products.name === "women" && products.category === "shoes";
  });

  womenFootwearProducts.forEach((products) => {
    let { image, description, price, id, category, name } = products;

    let productCartTemplate = document.importNode(
      templateWomenFootwear.content,
      true
    );

    let words = description.split(" ");

    // Get the first four words
    description = words.slice(0, 2).join(" ");

    productCartTemplate.querySelector(".productImage img").src = image;
    productCartTemplate.querySelector(".price").innerText = `From ₹${price}`;
    productCartTemplate.querySelector(".Desc").innerText = `${description}...`;
    productCartTemplate.querySelector("#cart").setAttribute("id", `cart${id}`);

    let productCart = productCartTemplate.querySelector(`#cart${id}`);

    productCart.addEventListener("click", () => {
      viewFullDetails(id);
    });

    womenFootwearproductContainer.append(productCartTemplate);
  });
};
