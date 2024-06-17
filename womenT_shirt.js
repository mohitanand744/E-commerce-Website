import { viewFullDetails } from "./viewFullDetails";

export let womenT_shirt = (womentshirt) => {
  const womenTshirt = womentshirt.filter((womenTshirt) => {
    return (
      womenTshirt.name === "Women" && womenTshirt.category === "Women Tshirts"
    );
  });

  let productContainer = document.querySelector(".womenTshirtproductContainer");
  let productTemplate = document.querySelector("#womenTshirt");

  womenTshirt.forEach((product) => {
    let { price, description, image, id } = product;

    let cloneProductCart = document.importNode(productTemplate.content, true);

    cloneProductCart.querySelector("img").src = image;
    cloneProductCart.querySelector(".price").innerText = `₹${price}`;
    cloneProductCart.querySelector(".org-price").innerText = `₹${price * 2}`;
    cloneProductCart.querySelector("#cart").setAttribute("id", `cart${id}`);

    let shortDesc = description.split(" ");
    shortDesc = shortDesc.slice(0, 3).join(" ");

    cloneProductCart.querySelector(".desc").innerText = `${shortDesc}...`;

    let productCart = cloneProductCart.querySelector(`#cart${id}`);

    productCart.addEventListener("click", () => {
      viewFullDetails(id);
    });

    productContainer.append(cloneProductCart);
  });
};
