let loginMemberAPI = `http://vacationaroma.rocket-coding.com/api/User/Getuserdata`;

//line會員登入
let LineLoginUrl = "https://vacationaroma.rocket-coding.com/api/Linelogin/GetLineLoginUrl";

//Dom
//當會員登入時要改變狀態
const loginMember = document.querySelector(".loginMember");
let memberProfile =[];
let memberToken=localStorage.getItem("mytoken");

const license = { headers: { Authorization: `Bearer ${memberToken}` } };

//console.log(memberToken);


if(memberToken === "undefined" || memberToken === null){
    console.log("沒東西拉");
}
else{
    axios.get(loginMemberAPI,license)
    .then(function (response) {
        console.log(response);
        memberProfile=response.data;
        //console.log(`axios的${memberProfile.Name}`);

        //修改樣式
        let loginMemberSrt = "";
        loginMemberSrt=`<ul class="loginMember">
        <li><a href="/memberPage.html">${memberProfile.Name} 您好</a></li>
        <li><a href="/sp1Cart.html">購物車</a></li>
        <li><a href="">風味搜尋</a></li>
        </ul>  `;

        loginMember.innerHTML=loginMemberSrt;
    })
    .catch(function (error) {
        console.log(error);
    });

};



//line會員登入的功能    
// const lineLogin =document.getElementById("lineLoginASD");
// console.log(lineLogin);

// function testLine(){
//     axios.get(LineLoginUrl)
//     .then(function (response) {
//         console.log(response);
//         let lineUrl=response.data;
//         window.open(lineUrl);
//     }
//     )};

// lineLogin.addEventListener("click",testLine);