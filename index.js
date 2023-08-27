const userDob = document.querySelector("#user-dob");
const userNum = document.querySelector("#user-num");
const btnCheck = document.querySelector("#btn-check");
const message = document.querySelector("#message");

const userDobValue = userDob.value;
const userNumValue = userNum.value;


function numberCheckHandler() {

    //removes special character like '/'
    const newUserDobValue = userDobValue.replaceAll('-', '');

    //We split this numeric string into an array of individual digits.
    const digits = newUserDobValue.split("").map(Number);


    // We use the reduce function to calculate the sum of the digits, initializing the sum to 0.
    var sum = digits.reduce(function (a, b) {
        return a + b;
    }, 0);


    validation();

    if (sum % userNumValue == 0) {
        setMessage(" is a lucky number!!!");
    }
    else {
        setMessage(" is not that lucky");
    }


}

function validation() {

    if (userDobValue == "" && userNumValue == "") {
        setMessage(" Please fill both the fields");
        return
    }
    console.log("click2")
}


function setMessage(msg) {
    message.innerText = userNumValue + msg;
    console.log("clicked");
}

btnCheck.addEventListener("click", numberCheckHandler);