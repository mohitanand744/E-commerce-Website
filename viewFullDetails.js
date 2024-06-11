import products from "./fashion.json";
import "./style.css";
import "./mediaquery.css";

export let viewFullDetails = (id) => {
  //let productCart = document.querySelector(`#cart${id}`);

  document.querySelector(".main").style.height = "100vh";

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

  document.querySelectorAll(".back").forEach((back) => {
    back.addEventListener("click", () => {
      document.querySelector(".main").style.height = "0vh";
    });
  });

  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      let className = e.target.className;

      switch (className) {
        case "image1":
          document.querySelector(".zoomedImage img").src = image;
          break;
        case "image2":
          document.querySelector(".zoomedImage img").src = image2;
          break;
        case "image3":
          document.querySelector(".zoomedImage img").src = image3;
          break;
        case "image4":
          document.querySelector(".zoomedImage img").src = image4;
          break;
        default:
          document.querySelector(".zoomedImage img").src = image;
      }
    });
  });
};
