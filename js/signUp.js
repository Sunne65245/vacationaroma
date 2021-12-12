let signUpAPI = `${allApi}api/User/PostUser`;


let signUp = {
    "Name": "",
    "Phone": "",
    "Password": "",
    "Email": "",
};
let signUpDate = [];


const userName = document.querySelector(".userName");
const userPhone = document.querySelector(".userPhone");
const userEmail = document.querySelector(".userEmail");
const userLogin = document.querySelector(".userLogin");
const confirmPassword = document.querySelector(".confirmPassword");
const signUpBtn = document.querySelector(".signUpBtn");

function try02() {
    signUp = {
        "Name": `${userName.value}`,
        "Phone": `${userPhone.value}`,
        "Email": `${userEmail.value}`,
        "Password": `${userLogin.value}`,
    }


    axios.post(signUpAPI, signUp)
        .then(function (response) {
            signUpDate = response.data;
            console.log(signUpDate);

            switch (signUpDate.message) {
                case 5:
                    alert("會員帳號已經有人使用");
                    break;
                case 15:
                    alert("Email格式不正確");
                    break;
                case 16:
                    alert("手機格式不正確");
                    break;
            }
            if (signUpDate.check === "ok") {
                alert("註冊成功跳轉回登入,請到mail開通帳號");
                window.location.replace(`${domain}/login.html`);
            }
        })



}


const lineSign = document.getElementById("lineSign");
lineSign.addEventListener("click", try02)