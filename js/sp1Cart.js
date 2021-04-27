//我要把資料待到這 才推到 遠端ＡＰＩ
// ►►► 預設載入產品ＡＰＩ
let OrderList=JSON.parse(localStorage.getItem("OrderDetails"));
console.log(OrderList);
let OrderListData=[OrderList];
console.log(OrderListData)

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
const purchasingValueSP1Id=document.getElementById("purchasingValueSP1Id");
const purchasingNumAddLessPlus = document.getElementById("purchasingNumAddLessPlus");
const purchasingPay = document.getElementById("purchasingPay");
let domain=`http://127.0.0.1:5500`;
//►►►_____________________API____________________►►►
let postOrderAPI = `${allApi}api/Orders/PostOrder`;
//測試line登入用  const MyToken = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJVY2I0MzQ4NmEwZTUxZTRkNTYwZDU2MWY3NjIzYWQ2OTciLCJQZXJtaXNzaW9uIjoxLCJpYXQiOiI0LzIzLzIwMjEgMjo1MTowNyBQTSIsIkV4cCI6IjQvMjQvMjAyMSAyOjUxOjA3IFBNIn0.ONBKVlzjv2qoVbf2MBfm3pVV1eVIVp0bfvXpTaaKCl4svkb5_bEhKwYa_Fk314oudNOBRV8S1rvFrZP6jDMWqQ";
const MyToken = localStorage.getItem("mytoken")
//const license = { headers: { Authorization: `Bearer ${MyToken}` } };
const nextBtnSpc1=document.getElementById("nextBtnId");



let purchasingNumAddLessPlusSrt="";
let purchasingPaySrt="";
let Quantity=Number(OrderListData[0].Quantity);
let ProTotal=Number(OrderListData[0].ProTotal);
let UnitPrice=Number(OrderListData[0].UnitPrice);

//►►►渲染產品資料
function productRender(){
    let productImgIdSrt=`
    <img src="http://${OrderListData[0].ProductImg}"  alt="">`;
    let productOrderListSrt=`
    <h3 class="product">${OrderListData[0].ProductName}</h3>
    <span class="grinding">沖煮方式：${OrderListData[0].ProductBrew}</span>
    <span class="price">單價 ${OrderListData[0].UnitPrice}</span>`
    
    purchasingNumAddLessPlusSrt=`
    <span class="selectValueAddSub addLess">-</span>
    <input type="text" name="" id="purchasingValueSP1Id" value="${Quantity}" class="purchasingValue">
    <span class="selectValueAddSub  addPlus">+</span>`;
    purchasingPaySrt=`NT.${ProTotal}`


    //（照片）
    productImgId.innerHTML=productImgIdSrt;
    //（產品名）
    productOrderList.innerHTML=productOrderListSrt;
    //(產品預設數量)
    purchasingNumAddLessPlus.innerHTML=purchasingNumAddLessPlusSrt;
    //（價格）g
    purchasingPay.innerHTML=purchasingPaySrt;
}
productRender();


//►►►數量加減 價格變動

let ProTotalAllSP1=Number(ProTotal)

function quantitySP1(e){

    if(e.path[0].classList[1] === "addLess" && Quantity >=0){
        console.log("--");
        Quantity--;
        purchasingNumAddLessPlusSrt=`
        <span class="selectValueAddSub addLess">-</span>
        <input type="text" name="" id="purchasingValueSP1Id" value="${Quantity}" class="purchasingValue">
        <span class="selectValueAddSub  addPlus">+</span>`
        purchasingNumAddLessPlus.innerHTML=purchasingNumAddLessPlusSrt;
        ProTotalAllSP1-=UnitPrice;

        purchasingPaySrt=`NT.${ProTotalAllSP1}`
        purchasingPay.innerHTML=purchasingPaySrt;

    }else if(e.path[0].classList[1] ==="addPlus"  && Quantity >=0 ){
        console.log("++");
        Quantity++;
        purchasingNumAddLessPlusSrt=`
        <span class="selectValueAddSub addLess">-</span>
        <input type="text" name="" id="purchasingValueSP1Id" value="${Quantity}" class="purchasingValue">
        <span class="selectValueAddSub  addPlus">+</span>`
        purchasingNumAddLessPlus.innerHTML=purchasingNumAddLessPlusSrt;
        ProTotalAllSP1+=UnitPrice;

        purchasingPaySrt=`NT.${ProTotalAllSP1}`
        purchasingPay.innerHTML=purchasingPaySrt;
    }else{
        return
    }
}

purchasingNumAddLessPlus.addEventListener("click",quantitySP1)




//推二次購物車清單
let shoppingCart = {
    "OrderDetails": [
        { 
            "ProductName": OrderListData[0].ProductName, 
            "ProductBrew": OrderListData[0].ProductBrew, 
            "ProductImg": OrderListData[0].ProductImg, 
            "UnitPrice": OrderListData[0].UnitPrice, 
            "Quantity": Quantity,
            "ProTotal": ProTotalAllSP1,
            //"ProductId":OrderListData[0].ProductId,
        },
    ]
};
console.log(shoppingCart);

function text03(){


    if(Quantity <=0 ){
        alert("尚未選購");
        return;
    }else{
    
        let cartPushSP1 = 
        { 
            "ProductName": OrderListData[0].ProductName, 
            "ProductBrew": OrderListData[0].ProductBrew, 
            "ProductImg": OrderListData[0].ProductImg, 
            "UnitPrice": OrderListData[0].UnitPrice, 
            "Quantity": Quantity,
            "ProTotal": ProTotalAllSP1,
            //"ProductId":OrderListData[0].ProductId,
        };
        shoppingCart.push(cartPushSP1)
        localStorage.setItem("OrderDetails",JSON.stringify(cartPushSP1));
        alert("要去下一頁囉")
        window.location.replace(`sp2Pay.html`);
    
    
}};

nextBtnSpc1.addEventListener("click",text03)