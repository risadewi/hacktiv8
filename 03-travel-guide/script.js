var totalPrice = 0;

document.getElementById("card-1-add-wishlist").addEventListener("click", addCard1)
document.getElementById("card-1-modal-add-wishlist").addEventListener("click", addCard1)
document.getElementById("card-2-add-wishlist").addEventListener("click", addCard2)
document.getElementById("card-2-modal-add-wishlist").addEventListener("click", addCard2)
document.getElementById("card-3-add-wishlist").addEventListener("click", addCard3)
document.getElementById("card-3-modal-add-wishlist").addEventListener("click", addCard3)

function addCard1() {
    totalPrice += 4000;
    changeTotalPrice();
}

function addCard2() {
    totalPrice += 2000;
    changeTotalPrice();
}

function addCard3() {
    totalPrice += 1000;
    changeTotalPrice();
}

function changeTotalPrice() {
    document.getElementById("total-price").value = "Total Price: " + totalPrice;
}