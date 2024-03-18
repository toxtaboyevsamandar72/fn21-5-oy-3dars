

let res = setInterval(() => {
    document.querySelector('h2').textContent = new Date().toLocaleTimeString();
    document.querySelector('h3').textContent = new Date().toLocaleDateString();
}, 1000)



if (res >= 1 && res < 6) {
    document.body.style.backgroundImage = "url('./img/download-chiqishi.jpeg')";
} else if (res >= 7 && res < 8) {
   document.body.style.backgroundImage = "url('./img/download.jpeg')";
} else if (res >= 8 && res < 5) {
   document.body.style.backgroundImage = "url('./img/download-quyosh.jpeg')";
} else if (res >= 5 && res < 6) {
   document.body.style.backgroundImage = "url('./img/download-kechki.jpeg')";
} else if (res >= 6 && res < 12) {
   document.body.style.backgroundImage = "url('./img/istockphoto-172667102-612x612.jpg')";
} 






