let API = `http://vacationaroma.rocket-coding.com/api/Login`;

const MyToken = "";
const license = { headers: { Authorization: `Bearer ${MyToken}` } };
// Bearer ${MyToken}沒有打空格就會他馬的吃不到  postman上右側可以讀取程式碼
let signUp = {
    "Name":"",
    "Phone":"",
    "Password":"",
    "Email":"",
};
let signUpDate = [];  //先在全域宣告要儲存在axios載入後 要存放的位置



//getElementById

const userName=document.querySelector(".userName");
const userPhone=document.querySelector(".userPhone");
const userEmail=document.querySelector(".userEmail");
const userLogin=document.querySelector(".userLogin");
const confirmPassword=document.querySelector(".confirmPassword");

const signUpBtn=document.querySelector(".signUpBtn");



function try02(){
    alert("彈跳測試");
    signUp= {
        "Name":`${userName.value}`,
        "Phone":`${userPhone.value}`,
        "Email":`${userEmail.value}`,
        "Password":`${userLogin.value}`,
    }

    console.log("yoooo",signUp); 
    axios.post(API,signUp)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

}


signUpBtn.addEventListener("click",try02);