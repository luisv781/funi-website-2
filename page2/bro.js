const locationBtn = document.getElementById("mapButton");

let lati;
let long;
let locationEnabled = false;

function bro() {
    if (!locationEnabled) {
        if (navigator.geolocation) {
            locationBtn.style.display = "none";
            navigator.geolocation.getCurrentPosition(loc);
        }
    } else {
        window.open("https://www.google.com/maps?q=" + lati + "," + long);
    }
}

function loc(pos) {
    lati = pos.coords.latitude;
    long = pos.coords.longitude;

    locationEnabled = true;
    locationBtn.style.display = "block";
    locationBtn.innerHTML = "open";
}

function changeImg() {
    let img = document.getElementById("carlito");
    img.src = "/funi-website-2/assets/carl.jpg";
}

