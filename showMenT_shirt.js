import { viewFullDetails } from "./viewFullDetails";

let showMenT_shirtProductContainer = document.querySelector(
  ".menT-shirtproductContainer"
);

let menTshirtproductCartTemplate = document.querySelector("#menT-shirt");

export let showMenT_shirt = (MenT_shirt) => {
  if (!MenT_shirt) {
    return false;
  }

  let MenT_shirts = MenT_shirt.filter((products) => {
    return products.name === "men" && products.category === "Tshirts";
  });

  MenT_shirts.forEach((products) => {
    let { image, description, price, id, category, name } = products;

    let cartTemplateClone = document.importNode(
      menTshirtproductCartTemplate.content,
      true
    );

    let words = description.split(" ");

    description = words.slice(0, 2).join(" ");

    cartTemplateClone.querySelector(".productImage img").src = image;
    cartTemplateClone.querySelector(".price").innerText = `From ₹${price}`;
    cartTemplateClone.querySelector(".Desc").innerText = `${description}...`;
    cartTemplateClone.querySelector("#cart").setAttribute("id", `cart${id}`);


    let productCart = cartTemplateClone.querySelector(`#cart${id}`);

    productCart.addEventListener("click", () => {
      viewFullDetails(id);
    });

    showMenT_shirtProductContainer.append(cartTemplateClone);
  });
};
