const userDob = document.querySelector("#user-dob");
const userNum = document.querySelector("#user-num");
const btnCheck = document.querySelector("#btn-check");
const message = document.querySelector("#message");

function numberCheckHandler() {

    const userDobValue = userDob.value;
    const newUserDobValue = userDobValue.replaceAll('-', '0');
    const userNumValue = userNum.value;

    const sum =



        console.log("clicked" + newUserDobValue);

}

btnCheck.addEventListener("click", numberCheckHandler);