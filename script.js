// script.js

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    themeBtn.classList.replace("fa-moon","fa-sun");
  }else{
    themeBtn.classList.replace("fa-sun","fa-moon");
  }
};


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
    alert("Item Added To Cart ✅");
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
${itemName} - ₹${itemPrice}
<button class="remove-btn">❌</button>
`;

cartItems.appendChild(item);
emptyCart.style.display = "none";

total += itemPrice;
totalPrice.textContent = total;

item.querySelector(".remove-btn").addEventListener("click", () => {

    item.remove();

    total -= itemPrice;

    totalPrice.textContent = total;

    count--;

    document.querySelector(".cart-count").textContent = count;
    if(cartItems.children.length === 1){
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