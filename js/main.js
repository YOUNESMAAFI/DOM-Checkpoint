// My Dom CHeckPoint

// Removing Items from the cart

let removeButton = document.getElementsByClassName("fa-trash");

for (let i = 0; i < removeButton.length; i++) {
  let btnTrash = removeButton[i];
  btnTrash.addEventListener("click", function (event) {
    let btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

// Updating quantity

let quantityInputs = document.getElementsByClassName("quantity");
for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);

  function quantityChanged() {
    updateCartTotal();
    updateSubTotal();
  }
}

// Updateing Cart Total

function updateCartTotal() {
  let cartContainer = document.querySelector("tbody");
  let itemContainer = cartContainer.getElementsByClassName("item");
  let totalPrice = 0;
  for (let i = 0; i < itemContainer.length; i++) {
    let itemRow = itemContainer[i];
    let itemPrice = itemRow.getElementsByClassName("price")[0];
    let itemQtn = itemRow.getElementsByClassName("quantity")[0];

    let price = parseInt(itemPrice.innerText);
    let quantity = parseInt(itemQtn.value);
    totalPrice += price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerText =
    totalPrice + " DZD";
}
updateCartTotal();

// Get Sub total for each Item

function updateSubTotal() {
  let cartContainer = document.querySelector("tbody");
  let itemContainer = cartContainer.getElementsByClassName("item");
  let subPrice = [];
  for (let i = 0; i < itemContainer.length; i++) {
    let itemRow = itemContainer[i];
    let itemPrice = itemRow.getElementsByClassName("price")[0];
    let itemQtn = itemRow.getElementsByClassName("quantity")[0];

    let price = parseInt(itemPrice.innerText);
    let quantity = parseInt(itemQtn.value);
    subPrice.push(price * quantity);
    document.getElementsByClassName("sub-total")[i].innerText =
      subPrice[i] + " DZD";
  }
}
updateSubTotal();

// Liking Items

let likeButton = document.getElementsByClassName("fa-heart-o");

for (let i = 0; i < likeButton.length; i++) {
  let btnLike = likeButton[i];
  btnLike.addEventListener("click", function (event) {
    let btnLiked = event.target;
    btnLiked.classList.remove("fa-heart-o");
    btnLiked.classList.add("liked", "fa-heart");
  });
}
