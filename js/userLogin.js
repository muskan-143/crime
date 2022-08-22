// for user Login
let userLoginBtn = document.getElementById("userLoginBtn");
userLoginBtn.addEventListener("click", () => {
    location.href = "../html/user.html";
    console.log("click");
});

// for user registration
let userRegisterBtn = document.getElementById('userRegisterBtn');
userRegisterBtn.addEventListener('click', () => {
    location.href = "../html/userSignUp.html";
})