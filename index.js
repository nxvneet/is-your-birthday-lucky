const userDob = document.querySelector("#user-dob");
const userNum = document.querySelector("#user-num");
const btnCheck = document.querySelector("#btn-check");
const message = document.querySelector("#message");

function numberCheckHandler() {

    const userDobValue = userDob.value;
    const newUserDobValue = userDobValue.replaceAll('-', '0');
    const userNumValue = userNum.value;



    const digits = newUserDobValue.split("").map(Number);



    // Calculate the sum of the digits
    var sum = digits.reduce(function (a, b) {
        return a + b;
    }, 0);

    console.log(sum);

}

btnCheck.addEventListener("click", numberCheckHandler);