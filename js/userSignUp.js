console.log('Form Validation Demo');

let firstName = document.getElementById('firstName');
let secondName = document.getElementById('secondName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let termsAndCondition = document.getElementById('termsAndCondition');


let firstNameValid = false;
let secondNameValid = false;
let emailValid = false;
let passwordValid = false;


// console.log(firstName, secondName, email, password, termsAndCondition, address);

// first Name validation.
firstName.addEventListener('blur', () => {
    let reg = /^[a-zA-Z]([a-zA-Z]){4,9}$/; // Start with and end with.
    let str = firstName.value;
    if (reg.test(str)) {
        console.log('matched');
        firstName.classList.remove('is-invalid');
        firstNameValid = true;
    } else {
        console.log('not matched');
        firstName.classList.add('is-invalid');
        let firstNameValid = document.getElementById('firstNameValid');
        firstNameValid.style.color = 'red';

        // document.getElementById('firstNameValid').style.color = 'red';
    }
});

// Second Name validation.
secondName.addEventListener('blur', () => {
    let reg = /^[a-zA-Z]([a-zA-Z]){4,9}$/; // Start with and end with.
    let str = secondName.value;
    if (reg.test(str)) {
        console.log('matched');
        secondName.classList.remove('is-invalid');
        secondNameValid = true;
    } else {
        console.log('not matched');
        secondName.classList.add('is-invalid');
        // let firstNameValid = document.getElementById('firstNameValid');
        // firstNameValid.style.color = 'white';

        document.getElementById('secondNameValid').style.color = 'red';
    }
});

// Email Name validation.
email.addEventListener('blur', () => {
    let reg = /^([_\-\.a-zA-Z0-9]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}/;
    let str = email.value;
    if (reg.test(str)) {
        console.log('matched');
        email.classList.remove('is-invalid');
        emailValid = true;
    } else {
        console.log('not matched');
        email.classList.add('is-invalid');
        // let firstNameValid = document.getElementById('firstNameValid');
        // firstNameValid.style.color = 'white';

        document.getElementById('email').style.color = 'red';
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
        // let firstNameValid = document.getElementById('firstNameValid');
        // firstNameValid.style.color = 'white';

        document.getElementById('passwordValidation').style.color = 'red';
    }
});

let checkBtnTerms = false;
if (termsAndCondition.value === 'on') { // To checked whether a checked box is checked by the user or not.
    checkBtnTerms = true;
    console.log("YEs checked");
} else {
    checkBtnTerms = false;
}

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (firstNameValid && secondNameValid && passwordValid && emailValid && checkBtnTerms) {
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