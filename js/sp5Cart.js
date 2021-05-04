

//►►►_____________________DOM____________________►►►
const userCartList = document.getElementById("userCartList");
//const signOutBtnId = document.getElementById("signOutBtnId")
const nextIndexBtnId = document.getElementById("nextBtnId")
//let userOrderListRender = [];

//總計
let productList = [];
let OrderList = [];
const orderSubtotal = document.getElementById("ordersubtotal");

//補
//►►►渲染產品資料
function productRender() {
    let orderResultSrt = "";

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

    userCartList.innerHTML = orderResultSrt;

}

//訂單id
let orderLineId = JSON.parse(localStorage.getItem("orderId"));
//補linepay兩隻api
let data = {
    "Id": orderLineId   //訂單id
};

//►►►_____________________API____________________►►►
let memberPageAPI = `${allApi}api/Orders/GetOrderList/${orderLineId}`;
let payment = localStorage.getItem("payment");

console.log(headtoken);

//AF補
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
//定時器
setTimeout(className, 1800)

function className() {
    document.querySelector(".loader_container").className = "hide";
}

//AF補 共用---訂購完成(本人訂單資料)
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


function nextIndexBtn() {
    window.location.replace(`${domain}/index.html`)
}
nextIndexBtnId.addEventListener("click", nextIndexBtn)