export let showTost = (operation) => {
  let toast = document.createElement("p");

  toast.classList.add("toast");

  if (operation === "add") {
    toast.innerText = "Added To Cart ✅";
  } else if (operation === "del") {
    toast.innerText = "Cart Deleted ✅";
  }

  document.body.append(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};
