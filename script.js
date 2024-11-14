// survey form of javascript

const password = document.getElementById("password");

const lengthCriteria = /.{8,}/;
const uppercaseCriteria = /[A-Z]/;
const lowercaseCriteria = /[a-z]/;
const digitOrSpecialcriteria = /(\d|\W)/;

// define checkPassword function
function checkPassword() {
    if(lengthCriteria.test(password) &&
        uppercaseCriteria.test(password) &&
        lowercaseCriteria.test(password) &&
        digitOrSpecialcriteria.test(password)) {
            console.log("hello world")
    } else {
        alert("hi");
    }
    console.log(password.value);

}