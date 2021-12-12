// <!-- API-->
const allApi = `https://vacationaroma.rocket-coding.com/`;

//要的網域
//domain=allApi;



//網頁預先載入商品購物車    
let OrderDetailsJudge = localStorage.getItem('OrderDetails');
if (OrderDetailsJudge == null) {
    let OrderDetails = [];
    localStorage.setItem("OrderDetails", JSON.stringify(OrderDetails));
}

// 遠端網址
let domain = `https://vacationaroma.rocket-coding.com/vacationaroma`;

// 本地端
//let domain = "";
