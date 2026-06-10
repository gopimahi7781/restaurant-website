// script.js

// Dark Mode

function showToast(message){

  const toast = document.getElementById("toast");

  toast.innerText = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  },2000);

}


// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};


// Reviews Slider

const reviews = [
  {
    text:"Amazing taste and fast delivery!",
    name:"- Rahul"
  },
  {
    text:"Best restaurant website experience ever!",
    name:"- Priya"
  },
  {
    text:"Food quality is excellent and fresh.",
    name:"- Arjun"
  }
];

let index = 0;

const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");

setInterval(() => {

  index++;

  if(index >= reviews.length){
    index = 0;
  }

  reviewText.innerText = reviews[index].text;
  reviewName.innerText = reviews[index].name;

},3000);


// Add To Cart Alert

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

  button.addEventListener("click", () => {
    showToast("Item Added To Cart ✅");
  });

});
const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const foodName = card.querySelector("h3").textContent.toLowerCase();

        if(foodName.includes(searchValue)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

let count = 0;

document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", () => {
    count++;
    document.querySelector(".cart-count").textContent = count;
  });
});
const cartIcon = document.querySelector(".cart-container");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
}); 
let total = 0;

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const emptyCart = document.getElementById("emptyCart");

document.querySelectorAll(".card button").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const itemName = card.querySelector("h3").textContent;
        const itemPrice = parseInt(
            card.querySelector("p").textContent.replace("₹","")
        );

        const item = document.createElement("div");
    item.innerHTML = `
${itemName} - ₹<span class="item-price">${itemPrice}</span>

<button class="minus-btn">➖</button>

<span class="qty">1</span>

<button class="plus-btn">➕</button>

<button class="remove-btn">❌</button>
`;

cartItems.appendChild(item);
emptyCart.style.display = "none";

total += itemPrice;
totalPrice.textContent = total;
let qty = 1;

const qtySpan = item.querySelector(".qty");

item.querySelector(".plus-btn")
.addEventListener("click", () => {

  qty++;

  qtySpan.textContent = qty;

  total += itemPrice;

  totalPrice.textContent = total;

});

item.querySelector(".minus-btn")
.addEventListener("click", () => {

  if(qty > 1){

    qty--;

    qtySpan.textContent = qty;

    total -= itemPrice;

    totalPrice.textContent = total;

  }

});

item.querySelector(".remove-btn").addEventListener("click", () => {

    item.remove();

    total -= itemPrice;

    totalPrice.textContent = total;

    count--;

    document.querySelector(".cart-count").textContent = count;
    if(count <= 0){

   total = 0;
   totalPrice.textContent = 0;

   couponApplied = false;

   document.getElementById("couponInput").value = "";

   emptyCart.style.display = "block";
}
});
    });
});
document.getElementById("checkoutBtn").addEventListener("click", () => {

    if(total === 0){
        alert("Cart is Empty!");
    } else {
        let summary = "Order Summary\n\n";

document.querySelectorAll("#cartItems div").forEach(item => {
    summary += item.innerText.replace("❌","") + "\n";
});

summary += "\nTotal: ₹" + total;
summary += "\n\nOrder Placed Successfully ✅";

alert(summary);
    }

});
const wishlistItems =
document.getElementById("wishlistItems");
const emptyWishlist =
document.getElementById("emptyWishlist");

document.querySelectorAll(".wishlist").forEach(icon => {

  icon.addEventListener("click", () => {

    const card = icon.parentElement;

    const itemName =
    card.querySelector("h3").innerText;

    icon.classList.toggle("active");

    if(icon.classList.contains("active")){
      emptyWishlist.style.display = "none";

      const item =
      document.createElement("p");

      item.id = itemName;

      item.innerText = "❤️ " + itemName;

      wishlistItems.appendChild(item);

      showToast("Added To Wishlist ❤️");

    }else{

      const item =
      document.getElementById(itemName);

      if(item){
        item.remove();
      }
      if(wishlistItems.children.length === 1){
   emptyWishlist.style.display = "block";
}

      showToast("Removed From Wishlist 💔");
    }

  });

});
let couponApplied = false;

document.getElementById("applyCoupon")
.addEventListener("click", () => {

  const coupon =
  document.getElementById("couponInput")
  .value.trim();

  if(couponApplied){
    showToast("Coupon Already Applied ❌");
    return;
  }

  if(coupon === "SAVE20"){

    const discount =
    Math.floor(total * 0.20);

    total -= discount;

    totalPrice.textContent = total;

    couponApplied = true;

    showToast("20% Discount Applied 🎉");

  }else{

    showToast("Invalid Coupon ❌");

  }

});
const reservationForm =
document.getElementById("reservationForm");

reservationForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  showToast(
    "Table Reserved Successfully 🍽️"
  );

  reservationForm.reset();

});
let time = 7200; // 2 Hours

const countdown =
document.getElementById("countdown");

const timer = setInterval(() => {

  let hours =
  Math.floor(time / 3600);

  let minutes =
  Math.floor((time % 3600) / 60);

  let seconds =
  time % 60;

  countdown.innerText =
  `${String(hours).padStart(2,"0")}:` +
  `${String(minutes).padStart(2,"0")}:` +
  `${String(seconds).padStart(2,"0")}`;

  time--;

  if(time < 0){

    clearInterval(timer);

    countdown.innerText =
    "Offer Expired ❌";

  }

},1000);
const wishlistBtn =
document.getElementById("wishlistBtn");

const wishlistSidebar =
document.getElementById("wishlistSidebar");

const closeWishlist =
document.getElementById("closeWishlist");

wishlistBtn.addEventListener("click", () => {
  wishlistSidebar.classList.add("active");
});

closeWishlist.addEventListener("click", () => {
  wishlistSidebar.classList.remove("active");
});
