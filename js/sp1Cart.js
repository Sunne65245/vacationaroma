//我要把資料待到這 才推到 遠端ＡＰＩ
// ►►► 預設載入產品ＡＰＩ
let OrderList = JSON.parse(localStorage.getItem("OrderDetails"));
console.log(OrderList);






//►►►_____________________Dom____________________►►►
const productImgId = document.getElementById("productImgId")
const productOrderList = document.getElementById("productOrderList")
//const purchasingValueSP1Id=document.getElementById("purchasingValueSP1Id");
const purchasingNumAddLessPlus = document.getElementById("purchasingNumAddLessPlus");
const purchasingPay = document.getElementById("purchasingPay");
const orderResult = document.getElementById("orderResult");
//►►►_____________________API____________________►►►
const MyToken = localStorage.getItem("mytoken")
const nextBtnSpc1 = document.getElementById("nextBtnId");


let productImgIdSrt = "";
let productOrderListSrt = "";
let purchasingNumAddLessPlusSrt = "";
let purchasingPaySrt = "";


//►►►渲染產品資料
function productRender() {
    let orderResultSrt = "";
    OrderList.forEach(function (item) {
        orderResultSrt += `
    <tr>
        <td data-set:"${item.ProductId}">
            <div class="productImg" >
            <img src="https:${item.ProductImg}"  alt="">
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
            <div class="purchasingNum" >
            <span class="selectValueAddSub addLess">-</span>
            <input type="text" name="" value="${item.Quantity}" class="purchasingValue">
            <span class="selectValueAddSub  addPlus">+</span>
            </div>
        </td>
        <td>
            <span id="purchasingPay">NT.${item.ProTotal}</span>
        </td>
    </tr>`
    });

    orderResult.innerHTML = orderResultSrt;
}
productRender();


//►►►數量加減 價格變動

function quantitySP1(e) {
    console.log(e);
    console.log(e.path[0].classList[1]);

}

orderResult.addEventListener("click", quantitySP1)






function text03() {
    alert("要去下一頁囉")
    window.location.replace(`${domain}/sp2Pay.html`);
};

nextBtnSpc1.addEventListener("click", text03)