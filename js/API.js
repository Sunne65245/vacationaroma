// <!-- API-->
const allApi = `https://vacationaroma.rocket-coding.com/`;




//網頁預先載入商品購物車    
let OrderDetailsJudge = localStorage.getItem('OrderDetails');
if (OrderDetailsJudge == null) {
    let OrderDetails = [];
    localStorage.setItem("OrderDetails", JSON.stringify(OrderDetails));
}

// 遠端網址
//let domain = `https://vacationaroma.rocket-coding.com/vacationaroma`;

// 本地端
let domain = "";
//let domain = `http://127.0.0.1:5500`;
//let domain = ` http://127.0.0.1:3000`;