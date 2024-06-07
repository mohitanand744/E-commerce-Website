import products from "./fashion.json";
import "./style.css";
import "./mediaquery.css";

export let viewFullDetails = (id) => {
  let productCart = document.querySelector(`#cart${id}`);

  document.querySelector(".main").style.height = "100vh";

  console.log(productCart);

  let productMatch = products.find((product) => {
    return product.id === id;
  });

  let {
    price,
    description,
    image,
    image2,
    image3,
    image4,
    about1,
    about2,
    about3,
    about4,
  } = productMatch;

  document.querySelector(".zoomedImage img").src = image;
  document.querySelector(".fullDetails").innerText = description;
  document.querySelector(".price1").innerText = `₹${price}`;
  document.querySelector(".org-price1").innerText = `₹${price * 2}`;
  document.querySelector(".image1").src = image;
  document.querySelector(".image2").src = image2;
  document.querySelector(".image3").src = image3;
  document.querySelector(".image4").src = image4;

  document.querySelector(".about1").innerText = about1;
  document.querySelector(".about2").innerText = about2;
  document.querySelector(".about3").innerText = about3;
  document.querySelector(".about4").innerText = about4;

  document.querySelector(".back").addEventListener("click", () => {
    document.querySelector(".main").style.height = "0vh";
  });
};
