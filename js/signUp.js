let signUpAPI = `${allApi}api/User/PostUser`;

//const MyToken = "";
//const license = { headers: { Authorization: `Bearer ${MyToken}` } };
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

    //console.log("yoooo",signUp); 

    axios.post(signUpAPI, signUp)
        .then(function (response) {
            signUpDate = response.data;
            console.log(signUpDate);
            window.location.replace(`${domain}/login.html`)
        })
        .catch(function (error) {
            console.log(error);
        });


    // axios.request({
    //     url: `${API}`,  //+license
    //     method: 'post',
    //     headers:headers,
    //     data: signUp
    // });

}

// line註冊的ＡＰＩ 功能取消
// const LineSignUpAPI=`${allApi}api/User/PostUser`;;

const lineSign = document.getElementById("lineSign");
// lineSign.addEventListener("click",lineSignFu)
// function lineSignFu() {
// console.log("a");
// }
lineSign.addEventListener("click", try02)