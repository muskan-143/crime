console.log('Form Validation Demo');

let userName = document.getElementById('userName');
let password = document.getElementById('password');



let userNameValid = false;
let passwordValid = false;


// console.log(userName, secondName, email, password, termsAndCondition, address);

// first Name validation.
userName.addEventListener('blur', () => {
    let reg = /^[a-zA-Z]([a-zA-Z]){4,9}$/; // Start with and end with.
    let str = userName.value;
    if (reg.test(str)) {
        console.log('matched');
        userName.classList.remove('is-invalid');
        userNameValid = true;
    } else {
        console.log('not matched');
        userName.classList.add('is-invalid');
        let userNameValid = document.getElementById('userNameValid');
        userNameValid.style.color = 'red';
        userNameValid = false;


        // document.getElementById('userNameValid').style.color = 'red';
    }
});

// Password validation.
password.addEventListener('blur', () => {
    let reg = /^([a-zA-Z])([A-Za-z0-9]){9,14}$/;
    let str = password.value;
    if (reg.test(str)) {
        console.log('matched');
        password.classList.remove('is-invalid');
        passwordValid = true;
    } else {
        console.log('not matched');
        password.classList.add('is-invalid');
        // let userNameValid = document.getElementById('userNameValid');
        // userNameValid.style.color = 'white';

        document.getElementById('passwordValidation').style.color = 'red';
        passwordValid = false;

    }
});


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (userNameValid && passwordValid) {
        console.log('Success...');
        let str = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Form submitted successfully!!.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                     </div>`;
        let displayMessage = document.getElementById('displayMessage');
        displayMessage.innerHTML = str;
        setTimeout(() => {
            displayMessage.innerHTML = " ";
        }, 3000);
    } else {
        console.log('Error');
        let str = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Form not submitted successfully!.<br>Please check the information you have provided.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                     </div>`;
        let displayMessage = document.getElementById('displayMessage');
        displayMessage.innerHTML = str;
        setTimeout(() => {
            displayMessage.innerHTML = " ";
        }, 3000);
    }

});