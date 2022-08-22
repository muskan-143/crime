let nextImage = document.getElementById('nextImage').style.backgroundImage;

console.log("Image is: " + typeof(nextImage));

let nextImageArray = new Array('../images/background1.jpg', '../images/background2.jpg', '../images/background3.jpg')
let imageArrayLength = nextImageArray.length;
let imageIndex = 0;

function changeImage() {
    if (imageIndex >= imageArrayLength) {
        imageIndex = 0;
    }
    let strImage = `.intro::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        /* background: url('images/project4.jpg') no-repeat center center/cover; */
        /* background-image: url('../images/background1.jpg'); */
        background: rgba(0, 0, 0, 0.7)url(${nextImageArray[imageIndex]});
        background-blend-mode: darken;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 720px;
        width: 100%;
        z-index: -1;
    }`;
    console.log(imageIndex);
    // nextImage.style.background = nextImageArray[imageIndex];
    nextImage.style.background = strImage;
    imageIndex++;

}
setInterval(() => {
    console.log('call');
    changeImage();
}, 3000);