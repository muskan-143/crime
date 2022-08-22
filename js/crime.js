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

// changeImage();

// for making the loginPage visible when click on the login button.
// let loginPage = document.getElementById("loginPage");
// loginPage.style.display = "none";
// // loginPage.style.position = "absolute";
// let navigationLoginBtn = document.getElementById("navigationLoginBtn");
// navigationLoginBtn.addEventListener("click", displayLoginPage);

// // To directly display the login Page when click on the login page.
// function displayLoginPage() {
//     console.log("click");
//     loginPage.style.display = "block";
//     // window.location.href = "#targetDiv";
// }

// code to redirect to the login page of the user
// let userLogin = document.getElementById("userLogin");
// userLogin.addEventListener("click", () => {
//     location.href = "../html/login.html";
// });

// let navigationLoginBtn = document.getElementById("navigationLoginBtn");
// let loginPage = document.getElementById("loginPage");
// loginPage.style.visibility = "invisible";
// navigationLoginBtn.addEventListener("click", () => {
//     loginPage.style.visibility = "visible";
// });
