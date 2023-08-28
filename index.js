const userDob = document.querySelector("#user-dob");
const userNum = document.querySelector("#user-num");
const btnCheck = document.querySelector("#btn-check");
const message = document.querySelector("#message");



function numberCheckHandler() {
    const userDobValue = userDob.value;
    const userNumValue = userNum.value;

    //removes special character like '/'
    const newUserDobValue = userDobValue.replaceAll('-', '');

    //We split this numeric string into an array of individual digits.
    const digits = newUserDobValue.split("").map(Number);

    // We use the reduce function to calculate the sum of the digits, initializing the sum to 0.
    var sum = digits.reduce(function (a, b) {
        return a + b;
    }, 0);

    if (userDobValue == "" || userNumValue == "") {
        message.innerText = "Please fill both the fields";
        return;
    }

    else {
        if (sum % userNumValue == 0) {
            message.innerText = userNumValue + " is a lucky number!! 🥳🥳🥳";
        }
        else {
            message.innerText = userNumValue + " is not that lucky";
        }
    }

}



function setMessage(msg) {
    message.innerText = userNumValue + msg;
}

btnCheck.addEventListener("click", numberCheckHandler);