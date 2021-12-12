let API = `${allApi}api/Login`;

////line會員登入
let LineLoginUrl = `${allApi}api/Linelogin/GetLineLoginUrl`;

let VaLogin = {
    "Email": "",
    "Password": "",
};



const account = document.querySelector(".account");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".loginBtn");
const signUpBtnId = document.getElementById("signUpBtnId")

function signUp() {
    console.log("a");
    window.location.replace(`${domain}/signUp.html`);
}
signUpBtnId.addEventListener("click", signUp);

let doCookieSetup = new Date();
doCookieSetup.setTime(doCookieSetup.getTime() + 172800000);
//  //有效時間保存 2 天 2*24*60*60*1000


document.cookie = `'username=Mike; max-age=172800000; path=/'`;
var cookies = document.cookie;
//Set-Cookie: [VaCookie]=[cdoCookieSetup]
console.log(doCookieSetup);
docCookies.getItem(doCookieSetup);
domain=allApi;

function login() {

    VaLogin = {
        "Email": `${account.value}`,
        "Password": `${password.value}`,
    };

    axios.post(API, VaLogin)
        .then(function (response) {
            userToken = response.data.mytoken;
            console.log(userToken);
            localStorage.setItem("mytoken", `${response.data.mytoken}`);

            //登入成功 要寫跳轉的功能 可以額外寫函式再放進來
            if (userToken === undefined) {
                alert("登入不成功")
                console.log("Token空的");
            } else {
                window.location.replace(`${domain}/index.html`)
            };

        })
        .catch(function (error) {
            console.log(error);
        });
    ;
}


//line會員登入的功能    
const lineLogin = document.getElementById("lineLoginASD");


function testLine() {
    axios.get(LineLoginUrl)
        .then(function (response) {
            console.log(response);
            let lineUrl = response.data;
            window.open(lineUrl);
        }
        )
};

lineLogin.addEventListener("click", testLine)
loginBtn.addEventListener("click", login);

