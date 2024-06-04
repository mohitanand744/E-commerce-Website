import products from "./fashion.json";
import "./style.css";
import "./mediaquery.css";

export let viewFullDetails = (id) => {
  let productCart = document.querySelector(`#cart${id}`);

  document.querySelector(".main").style.width = "100%";

  console.log(productCart);

  let productMatch = products.find((product) => {
    return product.id === id;
  });

  let { price, description, image } = productMatch;

  document.querySelector(".zoomedImage img").src = image;
  document.querySelector(".fullDetails").innerText = description;
  document.querySelector(".price1").innerText = `₹${price}`;
  document.querySelector(".org-price1").innerText = `₹${price * 2}`;

  document.querySelector(".back").addEventListener("click", () => {
    document.querySelector(".main").style.width = "0%";
  });
};
