//我要把資料待到這 才推到 遠端ＡＰＩ
// ►►► 預設載入產品ＡＰＩ
let OrderListCart5=JSON.parse(localStorage.getItem("OrderDetails"));
console.log(OrderListOrderListCart5);



//►►►_____________________待辦事項____________________►►►
//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*



//►►►_____________________Dom____________________►►►
let domain=`http://127.0.0.1:5500`;
//►►►_____________________API____________________►►►
let postOrderAPI = `${allApi}api/Orders/PostOrder`;
const MyToken = localStorage.getItem("mytoken")
const nextBtnSpc1=document.getElementById("nextBtnId");


let productImgIdSrt="";
let productOrderListSrt="";
let purchasingNumAddLessPlusSrt="";
let purchasingPaySrt="";


//►►►渲染產品資料
function productRender(){
    let orderResultSrt="";
    OrderList.forEach(function (item){
        orderResultSrt+=`
    <tr>
        <td>
            <div class="productImg" >
            <img src="http://${item.ProductImg}"  alt="">
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

    orderResult.innerHTML=orderResultSrt;
}
productRender();


//►►►數量加減 價格變動
//let ProTotalAllSP1=Number(ProTotal)

function quantitySP1(e){
    console.log(e);
    console.log(e.path[0].classList[1]);
    // if(e.path[0].classList[1] === "addLess" && Quantity >=0){
    //     console.log("--");
    //     Quantity--;
    //     purchasingNumAddLessPlusSrt=`
    //     <span class="selectValueAddSub addLess">-</span>
    //     <input type="text" name="" id="purchasingValueSP1Id" value="${Quantity}" class="purchasingValue">
    //     <span class="selectValueAddSub  addPlus">+</span>`
    //     purchasingNumAddLessPlus.innerHTML=purchasingNumAddLessPlusSrt;
    //     ProTotalAllSP1-=UnitPrice;

    //     purchasingPaySrt=`NT.${ProTotalAllSP1}`
    //     purchasingPay.innerHTML=purchasingPaySrt;

    // }else if(e.path[0].classList[1] ==="addPlus"  && Quantity >=0 ){
    //     console.log("++");
    //     Quantity++;
    //     purchasingNumAddLessPlusSrt=`
    //     <span class="selectValueAddSub addLess">-</span>
    //     <input type="text" name="" id="purchasingValueSP1Id" value="${Quantity}" class="purchasingValue">
    //     <span class="selectValueAddSub  addPlus">+</span>`
    //     purchasingNumAddLessPlus.innerHTML=purchasingNumAddLessPlusSrt;
    //     ProTotalAllSP1+=UnitPrice;

    //     purchasingPaySrt=`NT.${ProTotalAllSP1}`
    //     purchasingPay.innerHTML=purchasingPaySrt;
    // }else{
    //     return
    // }
}

orderResult.addEventListener("click",quantitySP1)



function text03(){


    // if(Quantity <=0 ){
    //     alert("尚未選購");
    //     return;
    // }else{
    //     let cartPushSP1="";
    //     shoppingCart.forEach(function (item){
    //     cartPushSP1+={ 
    //         "ProductName": OrderList.ProductName, 
    //         "ProductBrew": OrderList.ProductBrew, 
    //         "ProductImg": OrderList.ProductImg, 
    //         "UnitPrice": OrderList.UnitPrice, 
    //         "Quantity": OrderList.Quantity,
    //         "ProTotal": ProTotalAllSP1,
    //         //"ProductId":item[0].ProductId,
    //     }}});
    //     shoppingCart.push(cartPushSP1)
    //    localStorage.setItem("OrderDetails",JSON.stringify(cartPushSP1));
        alert("要去下一頁囉")
        //window.location.replace(`index.html`);
    
    
};

nextBtnSpc1.addEventListener("click",text03)