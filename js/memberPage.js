
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


function userCartListRender() {
    console.log("a");
    let userOrderListRenderSrt = "";
    userOrderListRender.forEach(function (item) {
        userOrderListRenderSrt += `
        <tr>
        <th>${item.Id}</th>
        <th>${item.AddTime}</th>
        <th>${item.SubTotal}</th>
        <th>店取或宅配${item.AddTime}</th>
        <th>${item.Name}</th>
        <th>${item.ProductName}</th>
        </tr>
        `
    })
    userCartList.innerHTML = userOrderListRenderSrt;

}

//補 用變數token接值(line還是會員)
let token = "";

if (linetoken !== null) {
    token = { headers: { Authorization: `Bearer ${linetoken}` } };
} else {
    token = license;
}
//共用--歷史訂單
axios.get(memberPageAPI, token)
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
    window.location.replace(`${domain}/index.html`);
}
signOutBtnId.addEventListener("click", signOutBtn)

//回首頁
function nextIndexBtn() {
    window.location.replace(`${domain}/index.html`)
}
nextIndexBtnId.addEventListener("click", nextIndexBtn)