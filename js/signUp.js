let API = `http://vacationaroma.rocket-coding.com/api/User/PostUser`;

const MyToken = "";
const license = { headers: { Authorization: `Bearer ${MyToken}` } };
let signUp = {
    "Name":"",
    "Phone":"",
    "Password":"",
    "Email":"",
};
let signUpDate = [];


const userName=document.querySelector(".userName");
const userPhone=document.querySelector(".userPhone");
const userEmail=document.querySelector(".userEmail");
const userLogin=document.querySelector(".userLogin");
const confirmPassword=document.querySelector(".confirmPassword");
const signUpBtn=document.querySelector(".signUpBtn");

function try02(){
    signUp= {
        "Name":`${userName.value}`,
        "Phone":`${userPhone.value}`,
        "Email":`${userEmail.value}`,
        "Password":`${userLogin.value}`,
    }

    //console.log("yoooo",signUp); 

    axios.post(API,signUp)
    .then(function (response) {
        console.log(response);
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


signUpBtn.addEventListener("click",try02);