const loginMemberAPI = `${allApi}api/User/Getuserdata`;


//Dom
//當會員登入時要改變狀態
const loginMember = document.querySelector(".loginMember");
let memberProfile = [];
let memberToken = localStorage.getItem("mytoken");
let lineProfile = [];
let license = { headers: { Authorization: `Bearer ${memberToken}` } }
//頭部導覽列
let loginMemberSrt = "";
// 先抓網址檢查有沒有問好？
let q = window.location.href.indexOf("?f")//如果找到會大於-1`
function qaz() {
    let a = window.location.search.split(`=`)[1].split(`&`)[0];
    let b = window.location.search.split(`=`)[2].split(`&`)[0];
    let c = window.location.search.split(`=`)[3].split(`&`)[0];
    let d = "";
    let access_token = "";
    var url2 = `${allApi}api/Linelogin/GetLineInfo?friendship_status_changed=${a}&code=${b}&state=${c}`;
    if (window.location.href.indexOf("error") > -1) {
        var url = `${allApi}api/Linelogin/GetLineInfoError`;
        axios.get(url)
            .then(function (response) {
                console.log(response.data);
            });
    };
    if (window.location.href.indexOf("error") === -1) {
        axios.get(url2)
            .then(function (response) {
                //console.log(response.data);
                d = response.data.id_token;
                access_token = response.data.access_token;
                console.log(response.data.friend); //response.data.friend.friendFlag
                localStorage.setItem("friend", `${response.data.friend.friendFlag}`);
                var url3 = `${allApi}api/Linelogin/PostLinePayload?id_token=${d}`;

                axios.post(url3)
                    .then(function (res) {
                        lineProfile = res.data;
                        console.log(lineProfile);
                        localStorage.setItem("linetoken", `${res.data.linetoken}`);
                        localStorage.setItem("name", `${lineProfile.Name}`);
                        localStorage.setItem("lineUserProfile", JSON.stringify(lineProfile));
                        //修改樣式
                        console.log("第一次line登入名稱")
                        loginMemberSrt = `<ul class="loginMember">
        <li><a href="./memberPage.html">${lineProfile.Name} 您好</a></li>
        </ul>  `;
                        loginMember.innerHTML = loginMemberSrt;
                    }).catch(function (error) {
                        console.log(error);
                    });
            });
    }
}

//第一次line登入
if (q > -1) {
    console.log("LINE登入流程");
    qaz();

} else {
    //會員登入
    console.log("會員登入或尚未登入或非第一次line登入");
}

let linetoken = localStorage.getItem("linetoken");
let username = localStorage.getItem("name");


//非第一次line登入
if (linetoken !== null) {
    console.log("非第一次line登入名稱")
    if (loginMemberSrt === "") {
        //修改樣式
        loginMemberSrt = `<ul class="loginMember">
        <li><a href="./memberPage.html">${username} 您好</a></li>
        <li><a href="./sp1Cart.html">購物車</a></li>
        </ul>  `;
        loginMember.innerHTML = loginMemberSrt;
    }
}

//一般會員是否登入判斷x`
if (memberToken === "undefined" || memberToken === null) {
    console.log("一般的會員 沒東西拉");
}
else {
    axios.get(loginMemberAPI, license)
        .then(function (response) {
            console.log(response);
            memberProfile = response.data;
            //console.log(`axios的${memberProfile.Name}`);
            console.log(`會員登入名稱${memberProfile.Name}`)
            if (loginMemberSrt === "") {
                //修改樣式
                loginMemberSrt = `<ul class="loginMember">
        <li><a href="./memberPage.html">${memberProfile.Name} 您好</a></li>
        <li><a href="./sp1Cart.html">購物車</a></li>
        </ul>  `;
                loginMember.innerHTML = loginMemberSrt;
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}

//補
let headtoken = "";
let checktoken = "";
//是否有加好友
let friend = localStorage.getItem("friend");
//訊息通知
let notice = 0;
//用變數token接值(line還是會員)
if (linetoken !== null) {
    headtoken = { headers: { Authorization: `Bearer ${linetoken}` } };
    checktoken = linetoken;

} else {
    headtoken = { headers: { Authorization: `Bearer ${memberToken}` } }
    checktoken = memberToken;
}

if (friend === "true") {
    notice = 1;//LINE通知
} else {
    notice = 2;//Email通知
}




//購物車判斷



function cartJudgment() {
    const shoppingCartBar= document.getElementById("shoppingCartID");
    const cartListJudgment=JSON.parse(localStorage.getItem("OrderDetails"));
    let shoppingCartNum=cartListJudgment.length;
    let shoppingCarSrt=`<a href="./sp1Cart.html">購物車${shoppingCartNum}</a>`;
    shoppingCartBar.innerHTML= shoppingCarSrt;
}
cartJudgment();