
//►►►_____________________待辦事項____________________►►►
//要把OrderList的物件資料渲染 綁好後inner到頁面上
//要先榜ＤＯＭ
//綁修改數量的函式
//要同步修改總金額
//按鈕下去跟單一商品一樣打包存進lg 但要比對ＩＤ
//下一頁面要帶資料



//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*


//►►►_____________________API____________________►►►
let memberPageAPI = `${allApi}api/Orders/GetOrderList`;

//►►►_____________________DOM____________________►►►
const userCartList = document.getElementById("userCartList");
const signOutBtnId = document.getElementById("signOutBtnId")
const nextIndexBtnId = document.getElementById("nextIndexBtnId")
let userOrderListRender = [];


//補
const userList = document.getElementById("userList");
const MemberAPI = `${allApi}api/User/Getuserdata`;
let Profile = [];
let lineUserProfile = JSON.parse(localStorage.getItem("lineUserProfile"));
let Delivery = "";
//會員資料
function LINEuserListRender() {
    console.log("LINE會員資料");
    let userListRenderSrt = "";
    userListRenderSrt = `
         <img src="${lineUserProfile.ImgName}" alt="">
                <h2 class="memberName">${lineUserProfile.Name}</h2>
                <ul class="selectCommodity">
                    <li>
                        <span>會員帳號</span>
                        <span>${lineUserProfile.Email}</span>
                    </li>
                </ul>`
    userList.innerHTML = userListRenderSrt;
}

function userListRender() {
    axios.get(MemberAPI, license)
        .then(function (response) {
            Profile = response.data;
            console.log("會員資料");
            //修改樣式
            let userListRenderSrt = "";
            userListRenderSrt = `
         <img src="${Profile.ImgName}" alt="">
                <h2 class="memberName">${Profile.Name}</h2>
                <ul class="selectCommodity">
                    <li>
                        <span>會員帳號</span>
                        <span>${Profile.Email}</span>
                    </li>
                    <li>
                        <span>手機</span>
                        <span>${Profile.Phone}</span>
                    </li>
                </ul>`
            userList.innerHTML = userListRenderSrt;
        })
        .catch(function (error) {
            console.log(error);
        });
}

//畫面載入渲染
if (linetoken !== null) {
    LINEuserListRender();
} else {
    userListRender();
}



function userCartListRender() {
    console.log("a");
    let userOrderListRenderSrt = "";
    userOrderListRender.forEach(function (item) {
        if (item.Payment === 1) {
            Delivery = "店取";
        } else {
            Delivery = "宅配";
        }
        userOrderListRenderSrt += `
        <tr>
        <th>${item.Id}</th>
        <th>${item.AddTime}</th>
        <th>${item.SubTotal}</th>
        <th>${Delivery} ${item.AddTime}</th>
        <th>${item.Name}</th>
        <th>${item.ProductName}</th>
        </tr>
        `
    })
    userCartList.innerHTML = userOrderListRenderSrt;

}

console.log(headtoken);
//共用--歷史訂單
axios.get(memberPageAPI, headtoken)
    .then(function (response) {
        userOrderListRender = response.data.orderdata;
        console.log(userOrderListRender);
        userCartListRender()
    })
    .catch(function (error) {
        console.log(error);
    });

//登出
function signOutBtn() {
    //console.log("aaa");
    localStorage.removeItem("mytoken");
    //補line註銷
    localStorage.removeItem("linetoken");
    localStorage.removeItem("friend");
    localStorage.removeItem("name");
    localStorage.removeItem("lineUserProfile");
    localStorage.removeItem("OrderDetails");
    localStorage.removeItem("orderId");
    localStorage.removeItem("payment");
    window.location.replace(`${domain}/index.html`);
}
signOutBtnId.addEventListener("click", signOutBtn)

//回首頁
function nextIndexBtn() {
    window.location.replace(`${domain}/index.html`)
}
nextIndexBtnId.addEventListener("click", nextIndexBtn)