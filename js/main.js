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
let plusButton = document.getElementsByClassName("plus");
let minusButton = document.getElementsByClassName("minus");
let cartContainer = document.querySelector("tbody");
let itemContainer = cartContainer.getElementsByClassName("item");
let totalPrice = 0;

for (let i = 0; i < plusButton.length; i++) {
  let itemRow = itemContainer[i];
  let btnPlus = plusButton[i];
  btnPlus.addEventListener("click", function (event) {
    let itemQtn = itemRow.getElementsByClassName("quantity")[0];
    if (parseInt(itemQtn.innerText) < 1) {
      itemQtn.innerText = 1;
    } else {
      itemQtn.innerText++;
    }

    updateCartTotal();
    updateSubTotal();
  });
}

for (let i = 0; i < minusButton.length; i++) {
  let itemRow = itemContainer[i];
  let btnMinus = minusButton[i];
  btnMinus.addEventListener("click", function (event) {
    let itemQtn = itemRow.getElementsByClassName("quantity")[0];
    if (parseInt(itemQtn.innerText) <= 1) {
      itemQtn.innerText = 1;
    } else {
      itemQtn.innerText--;
    }
    updateCartTotal();
    updateSubTotal();
  });
}

//Old solution with Input numbers

// let quantityInputs = document.getElementsByClassName("quantity");
// for (let i = 0; i < quantityInputs.length; i++) {
//   let input = quantityInputs[i];
//   input.addEventListener("change", quantityChanged);

//   function quantityChanged() {
//     updateCartTotal();
//     updateSubTotal();
//   }
// }

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
    let quantity = parseInt(itemQtn.innerText);

    //Old solution with Input numbers
    // let quantity = parseInt(itemQtn.value);
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
    let quantity = parseInt(itemQtn.innerText);

    //Old solution with Input numbers
    // let quantity = parseInt(itemQtn.value);
    subPrice.push(price * quantity);
    document.getElementsByClassName("sub-total")[i].innerText =
      subPrice[i] + " DZD";
  }
}
updateSubTotal();

// Liking Items
function like() {
  let likeButton = document.getElementsByClassName("fa-heart-o");

  for (let i = 0; i < likeButton.length; i++) {
    let btnLike = likeButton[i];
    btnLike.addEventListener("click", function (event) {
      let btnLiked = event.target;
      if (btnLiked.classList.contains("fa-heart-o")) {
        btnLiked.classList.remove("fa-heart-o");
        btnLiked.classList.add("liked", "fa-heart");
      } else {
        btnLiked.classList.remove("liked", "fa-heart");
        btnLiked.classList.add("fa-heart-o");
      }
    });
  }
}

like();
