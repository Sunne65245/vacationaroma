let API = `${allApi}api/Login`;

////line會員登入
let LineLoginUrl = `${allApi}api/Linelogin/GetLineLoginUrl`;

let VaLogin = {
    "Email":"",
    "Password":"",
};
//let VaData = [];  //先在全域宣告要儲存在axios載入後 要存放的位置



//getElementById
const account=document.querySelector(".account");
const password=document.querySelector(".password");
const loginBtn=document.querySelector(".loginBtn");
//sun65245@gmail.com
const signUpBtnId=document.getElementById("signUpBtnId")

function signUp() {
    console.log("a");
    window.location.replace(`signUp.html`);
}
signUpBtnId.addEventListener("click",signUp)

function login(){

    VaLogin = {
        "Email":`${account.value}`,
        "Password":`${password.value}`,
    };
    
    axios.post(API,VaLogin)
    .then(function (response) {
        console.log(response);
        userToken=response.data.mytoken;
        localStorage.setItem("mytoken",`${response.data.mytoken}`);

        //登入成功 要寫跳轉的功能 可以額外寫函式再放進來
        if(userToken === undefined){
            alert("登入不成功")
            console.log("Token空的");
        }else{
            window.location.replace(`http://127.0.0.1:5500/index.html`)
        };

    })
    .catch(function (error) {
        console.log(error);
    });
    ;
}


//line會員登入的功能    
const lineLogin =document.getElementById("lineLoginASD");
console.log(lineLogin);

function testLine(){
    axios.get(LineLoginUrl)
    .then(function (response) {
        console.log(response);
        let lineUrl=response.data;
        window.open(lineUrl);
    }
)};

lineLogin.addEventListener("click",testLine)
loginBtn.addEventListener("click",login);

