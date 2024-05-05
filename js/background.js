const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const length = 19; // number of images
const imgNum = Math.floor(Math.random() * length);
const imgNumString = String(imgNum).padStart(2, "0");

const bgImage = document.createElement("img");
bgImage.src = `img/${imgNumString}.jpg`;

document.body.appendChild(bgImage);