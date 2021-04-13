let API = `http://vacationaroma.rocket-coding.com/api/Login`;

const MyToken = "";
const license = { headers: { Authorization: `Bearer ${MyToken}` } };
// Bearer ${MyToken}沒有打空格就會他馬的吃不到  postman上右側可以讀取程式碼
let VaLogin = {
    "Email":"",
    "Password":"",
};
let VaData = [];  //先在全域宣告要儲存在axios載入後 要存放的位置



//getElementById
const account=document.querySelector(".account");

const password=document.querySelector(".password");
const loginBtn=document.querySelector(".loginBtn");



function try01(){

    console.log(account.value);


    VaLogin = {
        "Email":`${account.value}`,
        "Password":`${password.value}`,
    };
    
    axios.post(API,VaLogin)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    ;

    console.log(VaLogin);

}


loginBtn.addEventListener("click",try01);

