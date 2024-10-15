let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Array to hold cart items
let cart = [];

// Function to update the cart display
function updateCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItemsDiv.innerHTML = "";

  // If cart is empty, show "cart is empty" message
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "0";
    return;
  }

  // Otherwise, display each cart item
  let total = 0;
  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `<p>${item.name} - $${item.price} (x${item.quantity})</p>`;
    cartItemsDiv.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);  // Update total price
}

// Function to add an item to the cart
function addToCart(name, price) {
  // Check if the item already exists in the cart
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    // If it exists, increment the quantity
    existingItem.quantity += 1;
  } else {
    // If it's a new item, add it to the cart
    const newItem = {
      name: name,
      price: parseFloat(price),
      quantity: 1
    };
    cart.push(newItem);
  }

  // Update the cart display
  updateCart();
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", function () {
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");
    addToCart(name, price);
  });
});

// Save the cart to local storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load the cart from local storage when the page loads
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCart();
  }
}

// Call loadCart when the page loads
window.onload = function () {
  loadCart();
};

// Update the saveCart function to be called after each update
function updateCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "0";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `<p>${item.name} - $${item.price} (x${item.quantity})</p>`;
    cartItemsDiv.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
  saveCart();  // Save the cart to local storage
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
