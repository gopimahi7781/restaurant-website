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