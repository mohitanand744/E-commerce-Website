import { addToCart } from "./addToCart";
import { quantityToggle } from "./quantityToggle";
import { viewFullDetails } from "./viewFullDetails";

export let showMenFootwear = (menFootwear) => {
  if (!menFootwear) {
    console.error("Sorry Products Not Found");
    return;
  }

  const menFootwearProducts = menFootwear.filter((product) => {
    return product.name === "men" && product.category === "Men shoes";
  });

  const productContainer = document.querySelector(
    ".menfootwearproductContainer"
  );

  const productTemplate = document.getElementById("menFootwear");

  menFootwearProducts.forEach((product) => {
    let { price, id, image, description } = product;

    let cartTemplate = document.importNode(productTemplate.content, true);

    let words = description.split(" ");

    description = words.slice(0, 7).join(" ");

    cartTemplate.querySelector("img").src = image;
    cartTemplate.querySelector(".desc").innerText = description;
    cartTemplate.querySelector(".price").innerText = `₹${price}`;
    cartTemplate.querySelector(".org-price").innerText = `₹${price * 2}`;
    cartTemplate.querySelector("#cart").setAttribute("id", `cart${id}`);

    let productCart = cartTemplate.querySelector(`#cart${id}`);

    productCart.addEventListener("click", () => {
      viewFullDetails(id);
    });

    cartTemplate
      .querySelector(".quentity_Container")
      .addEventListener("click", (e) => {
        e.stopPropagation();
        quantityToggle(e, id);
      });

    cartTemplate.querySelector(".addtocard").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(id);
    });

    productContainer.append(cartTemplate);
  });
};
