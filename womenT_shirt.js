export let womenT_shirt = (womentshirt) => {
  const womenTshirt = womentshirt.filter((womenTshirt) => {
    return womenTshirt.name === "women" && womenTshirt.category === "T-shirts";
  });

  let productContainer = document.querySelector(".womenTshirtproductContainer");
  let productTemplate = document.querySelector("#womenTshirt");

  womenTshirt.forEach((product) => {
    let { price, description, image, id } = product;

    let cloneProductCart = document.importNode(productTemplate.content, true);

    cloneProductCart.querySelector("img").src = image;
    cloneProductCart.querySelector(".price").innerText = `₹${price}`;
    cloneProductCart.querySelector(".org-price").innerText = `₹${price * 2}`;
    let shortDesc = description.split(" ");
    shortDesc = shortDesc.slice(0, 3).join(" ");

    cloneProductCart.querySelector(".desc").innerText = `${shortDesc}...`

    productContainer.append(cloneProductCart);
  });
};
