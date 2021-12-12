

//►►►_____________________DOM____________________►►►
const userCartList = document.getElementById("userCartList");
const nextIndexBtnId = document.getElementById("nextBtnId")

let productList = [];
let OrderList = [];

//AF補 總計
const orderSubtotal = document.getElementById("ordersubtotal");

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
    userCartList.innerHTML = orderResultSrt;
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
let cartSp5 = document.getElementById("cartSp5id");

//loader定時器
setTimeout(removeHideClassName, 2500);
//通知定時器
setTimeout(orderNotice, 5000);

function removeHideClassName() {
    //document.querySelector(".cartSp5").removeClass(" hide");
    document.querySelector(".loader_container").className = "hide";
    //document.querySelector("#cartSp5").className.remove =( "hide");
    cartSp5.classList.remove("hide");

}

function orderNotice() {
    if (linetoken !== null) {
        alert("LINE已發送訂購完成通知,請到vacationaroma群組查看");
    } else {
        alert("MAIL已發送訂購完成通知,請到e-mail查看");
    }
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



function nextIndexBtn() {
    window.location.replace(`${domain}/index.html`)
}
nextIndexBtnId.addEventListener("click", nextIndexBtn)