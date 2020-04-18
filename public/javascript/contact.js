let modalContainer = document.querySelector(".modal-container");
let modal = document.querySelector(".modal-container .modal");
let modalClick = document.querySelectorAll(".modal-click");
let closeModal = document.querySelectorAll(".modal-close");

for (let i=0;i<modalClick.length;i++) {
  modalClick[i].addEventListener("click", function(e){
    e.preventDefault();
    let elem = this.getAttribute("data-modal");
    document.querySelector(".modal-container"+elem).classList.add("active");
  });
}

for (let i=0;i<closeModal.length;i++) {
  closeModal[i].addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".modal-container.active").classList.remove("active");
  });
}

modal.addEventListener("click", function(e){
  e.stopImmediatePropagation();
});

modalContainer.addEventListener("click", function(){
  document.querySelector(".modal-container.active").classList.remove("active");
});

const mymap = L.map('map').setView([51.215860, 4.410800], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXhlbDM2OCIsImEiOiJjazdxYXRyOHAwMXJmM21sZ2kxZnowNnozIn0.rbjDxz9lU3mKvkA5tn2xNA'
}).addTo(mymap);

var marker = L.marker([51.215860, 4.410800]).addTo(mymap);

marker.bindPopup("<b>Kunstmuseum</b><br>Hopland 18,<br> 2000 Antwerpen.").openPopup();