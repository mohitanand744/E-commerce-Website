import products from "./fashion.json";

export let viewFullDetails = (id) => {
  let productCart = document.querySelector(`#cart${id}`);

  console.log(productCart);

  let productMatch = products.find((product) => {
    return product.id === id;
  });

  console.log(productMatch);

};
