// Setting the background image
let imgBackground = document.getElementById("backgroundImage");
let images = new Array(
    "../images/backgroundImage1.jpg",
    "../images/backgroundImage2.jpg",
    "../images/backgroundImage3.jpg"
);
let imageArrayLength = images.length;
let imageIndex = 0;
changeImage();

function changeImage() {
    if (imageIndex >= imageArrayLength) {
        imageIndex = 0;
    } else {
        imgBackground.style.backgroundImage = "url(" + images[imageIndex] + ")";
        imageIndex++;
        // imgBackground.innerText = images[imageIndex];
    }
}
setInterval(() => {
    console.log("call");
    changeImage();
}, 2500);

