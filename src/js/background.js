const images = ["1.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `src/img/${chosenImage}`;

document.body.appendChild(bgImage);
