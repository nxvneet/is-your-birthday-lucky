const userDob = document.querySelector("#user-dob");
const userNum = document.querySelector("#user-num");
const btnCheck = document.querySelector("#btn-check");
const message = document.querySelector("#message");

function numberCheckHandler() {

    const userDobValue = userDob.value;

    //removes special character like '/'
    const newUserDobValue = userDobValue.replaceAll('-', '');

    const userNumValue = userNum.value;

    //We split this numeric string into an array of individual digits.
    const digits = newUserDobValue.split("").map(Number);

    console.log(digits);

    // We use the reduce function to calculate the sum of the digits, initializing the sum to 0.
    var sum = digits.reduce(function (a, b) {
        return a + b;
    }, 0);

    if (sum % userNumValue == 0) {
        message.innerText = userNumValue + " is a lucky number!!!";
    }
    else {
        message.innerText = userNumValue + " is not that lucky";
    }

}

btnCheck.addEventListener("click", numberCheckHandler);