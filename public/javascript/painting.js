let backBtn = document.querySelector(".back");
let desc = document.querySelector("p.desc");
let readBtn = document.querySelector(".read-more");
let frame1 = document.querySelector(".frame1 p"),
    frame2 = document.querySelector(".frame2"),
    frame3 = document.querySelector(".frame3 p");

// Limit amount of characters inside description
let descString = desc.textContent;

let descStringShort;

if (descString.length < 250) {
  descStringShort = descString;
  readBtn.remove();
} else {
  descStringShort = descString.substr(0, 250) + "...";
}

// Get year
let year = frame2.textContent;
// Round off year example: 1894 => 1890
let startYear = Math.floor(year/10)*10;

let yearPercentage = (year - startYear)*10;

// Change description to limited version
desc.innerHTML = descStringShort;



// Change frames to correct value
// Check if year is equal to startYear
if (startYear == year) {
  frame1.textContent = "";
} else {
  frame1.textContent = startYear;
}
frame3.textContent = startYear+10;

// Set actual frame percentage
frame2.style.left = yearPercentage + "%";

// Go back one page when clicking back btn
backBtn.addEventListener("click", function(e){
  e.preventDefault();
  window.history.back();
});

// Check for btn click
readBtn.addEventListener("click", function(e){
  e.preventDefault();
  if (readBtn.classList.contains("active")) {
    // Limited version
    readBtn.innerHTML = "Meer Lezen";
    readBtn.classList.remove("active");
    desc.innerHTML = descStringShort;
  } else {
    // Full version
    readBtn.innerHTML = "Minder Lezen";
    readBtn.classList.add("active");
    desc.innerHTML = descString;
  }
});