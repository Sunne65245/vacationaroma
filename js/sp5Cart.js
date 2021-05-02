
//►►►_____________________待辦事項____________________►►►
//要把OrderList的物件資料渲染 綁好後inner到頁面上
//要先榜ＤＯＭ
//綁修改數量的函式
//要同步修改總金額
//按鈕下去跟單一商品一樣打包存進lg 但要比對ＩＤ
//下一頁面要帶資料



//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*

//►►►_____________________DOM____________________►►►
const userCartList = document.getElementById("userCartList");
//const signOutBtnId = document.getElementById("signOutBtnId")
const nextIndexBtnId = document.getElementById("nextBtnId")
//let userOrderListRender = [];

//補 總計
let productList = [];
let OrderList = [];
const orderSubtotal = document.getElementById("ordersubtotal");
//const deliveryLinePickerId = document.getElementById("deliveryLinePickerId");


// function userCartListRender() {
//     console.log("會員訂單成立資訊");
//     let userOrderListRenderSrt = "";
//     userOrderListRender.forEach(function (item) {
//         userOrderListRenderSrt += `
//         <tr>
//         <th>${item.Id}</th>
//         <th>${item.AddTime}</th>
//         <th>${item.SubTotal}</th>
//         <th>店取或宅配${item.AddTime}</th>
//         <th>${item.Name}</th>
//         <th>${item.ProductName}</th>
//         </tr>
//         `
//     })
//     userCartList.innerHTML = userOrderListRenderSrt;
// }

//補
//►►►渲染產品資料
function productRender() {
    let orderResultSrt = "";
    //let subtoalStr = "";
    productList.forEach(function (item) {
        orderResultSrt += `
    <tr>
        <td data-set:"${item.ProductId}">
            <div class="productImg" >
            <img src="https:${item.ProductImg}" alt="">
            </div>      
        </td>
        <td>
            <div>
                <h3 class="product">${item.ProductName}</h3>
                <span class="grinding">沖煮方式：${item.ProductBrew}</span>
                <span class="price">單價${item.UnitPrice}</span>
            </div>
        </td>
        <td>
            <div>
            <span>${item.Quantity}</span>
            </div>
        </td>
        <td>
            <span id="purchasingPay">NT.${item.Price}</span>
        </td>
    </tr>`;
    });
    //subtoalStr += `<td colspan="4">總計${OrderList.SubTotal}</td>`;
    userCartList.innerHTML = orderResultSrt;
    //orderSubtotal.innerHTML = subtoalStr;
}

//訂單id
let orderLineId = JSON.parse(localStorage.getItem("orderId"));
//補linepay兩隻api
let data = {
    "Id": orderLineId   //訂單id
};

//►►►_____________________API____________________►►►
//補
let memberPageAPI = `${allApi}api/Orders/GetOrderList/${orderLineId}`;
let payment = localStorage.getItem("payment");
//let pickerLineAPI = `${allApi}api/Orders/Consignee/${orderLineId}`;

console.log(headtoken);

//補
//linepay專用--第二支api第三支api
if (linetoken !== null && payment === "1") {
    let c = window.location.search.split(`=`)[1].split(`&`)[0];
    let confirmAPI = `${allApi}api/Pay/Postconfirm?transactionId=${c}`;
    axios.post(confirmAPI, data)
        .then(function (response) {
            console.log(response.data);
            console.log("linepay訂單成立");
        });
    //?
    let StatusAPI = `${allApi}api/Pay/Put`;
    axios.put(StatusAPI, data)
        .then(function (response) {
            console.log(response.data);
            console.log("linepay訂單狀態為處理中");
        });
}


//共用---訂購完成(本人訂單資料)
axios.get(memberPageAPI, headtoken)
    .then(function (response) {
        productList = response.data.detaildata;
        OrderList = response.data;
        console.log(productList);
        productRender()
    })
    .catch(function (error) {
        console.log(error);
    });

//補 收件人
// axios.get(pickerLineAPI, token)
//     .then(function (response) {
//         console.log(response);
//         orderConfirm = response.data;
//         // console.log(orderConfirm);

//         //修改樣式
//         let Srt = "";
//         Srt += `
//         <li>姓名
//             <span>${orderConfirm.Name}</span>
//             <hr class="solid">
//         </li>

//         <li>手機
//             <span>${orderConfirm.Phone}</span>
//             <hr class="solid">
//         </li>
//         <li style="${address}">地址
//         <span>${orderConfirm.Address}</span>
//         <hr class="solid">
//         </li>`;

//         deliveryLinePickerId.innerHTML = Srt;
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// function signOutBtn() {
//     //console.log("aaa");
//     localStorage.removeItem("mytoken");
//     localStorage.removeItem("linetoken");
//     window.location.replace(`${domain}/index.htm`);
// }
// signOutBtnId.addEventListener("click", signOutBtn)


function nextIndexBtn() {
    window.location.replace(`${domain}/index.html`)
}
nextIndexBtnId.addEventListener("click", nextIndexBtn)