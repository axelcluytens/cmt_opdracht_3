let menuBtn = document.querySelector(".menu-btn");
let body = document.querySelector("body");
let closeMenu = document.querySelector(".close-menu");
let menu = document.querySelector(".menu");
let menuContainer = document.querySelector(".menu-container");
let searchForm = document.querySelectorAll(".search-form");

menuBtn.addEventListener("click", function(e){
  e.preventDefault();
  body.classList.add("menu-active");
});

closeMenu.addEventListener("click", function(e){
  e.preventDefault();
  body.classList.remove("menu-active");
});

menu.addEventListener("click", function(e){
  e.stopImmediatePropagation();
});

menuContainer.addEventListener("click", function(){
  body.classList.remove("menu-active");
});

// Redirect user to search url
for (let i=0;i<searchForm.length;i++) {
  searchForm[i].addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "/search/" + searchForm[i].querySelector(".search-field").value;
  });
}
