const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const cartIcon = document.querySelector(".cart-icon");
const cartitemsContainer = document.querySelector(".cart-items-container");

searchIcon.addEventListener("click", () =>{
  searchForm.classList.add("active");
  cartitemsContainer.classList.remove("active");
  navbar.classList.remove("active");
});
menuIcon.addEventListener("click", () =>{
  console.log("Menu icon clicked");
  navbar.classList.add("active");
  searchForm.classList.remove("active");
  cartitemsContainer.classList.remove("active");
});

cartIcon.addEventListener("click", () =>{
  cartitemsContainer.classList.add("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
});

window.onscroll = ()=> {
  cartitemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
}