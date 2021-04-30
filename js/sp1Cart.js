//我要把資料待到這 才推到 遠端ＡＰＩ
// ►►► 預設載入產品ＡＰＩ
let OrderList=JSON.parse(localStorage.getItem("OrderDetails"));
console.log(OrderList);
//研究桌子
//item要改OrderList


//►►►_____________________待辦事項____________________►►►
//要把OrderList的物件資料渲染 綁好後inner到頁面上
//要先榜ＤＯＭ
//綁修改數量的函式
//要同步修改總金額
//按鈕下去跟單一商品一樣打包存進lg 但要比對ＩＤ
//下一頁面要帶資料



//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*



//►►►_____________________Dom____________________►►►
const productImgId =document.getElementById("productImgId")
const productOrderList=document.getElementById("productOrderList")
//const purchasingValueSP1Id=document.getElementById("purchasingValueSP1Id");
const purchasingNumAddLessPlus = document.getElementById("purchasingNumAddLessPlus");
const purchasingPay = document.getElementById("purchasingPay");
const orderResult = document.getElementById("orderResult");
//►►►_____________________API____________________►►►
let postOrderAPI = `${allApi}api/Orders/PostOrder`;
//測試line登入用  const MyToken = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJVY2I0MzQ4NmEwZTUxZTRkNTYwZDU2MWY3NjIzYWQ2OTciLCJQZXJtaXNzaW9uIjoxLCJpYXQiOiI0LzIzLzIwMjEgMjo1MTowNyBQTSIsIkV4cCI6IjQvMjQvMjAyMSAyOjUxOjA3IFBNIn0.ONBKVlzjv2qoVbf2MBfm3pVV1eVIVp0bfvXpTaaKCl4svkb5_bEhKwYa_Fk314oudNOBRV8S1rvFrZP6jDMWqQ";
const MyToken = localStorage.getItem("mytoken")
//const license = { headers: { Authorization: `Bearer ${MyToken}` } };
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
        <td data-set:"${item.ProductId}">
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




//推二次購物車清單
// let shoppingCart = {
//     "OrderDetails": [
//         { 
//             "ProductName": item[0].ProductName, 
//             "ProductBrew": item[0].ProductBrew, 
//             "ProductImg": item[0].ProductImg, 
//             "UnitPrice": item[0].UnitPrice, 
//             "Quantity": Quantity,
//             "ProTotal": ProTotalAllSP1,

//         },
//     ]
// };
//console.log(shoppingCart);

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
        window.location.replace(`sp2Pay.html`);
    
    
};

nextBtnSpc1.addEventListener("click",text03)