const allApi = `https://vacationaroma.rocket-coding.com/`;

// <!-- 集中管理API HTML的格式-->
// <!-- <script src="config.js"></script>
// <script>
//     const url = "http://www.rocket"
// </script> -->




let OrderDetailsJudge = localStorage.getItem('OrderDetails');
if (OrderDetailsJudge == null) {
    let OrderDetails = [];
    localStorage.setItem("OrderDetails", JSON.stringify(OrderDetails));
}
// 預設登入網址
//let domain = `https://vacationaroma.rocket-coding.com/vacationaroma`;
let domain = "https://127.0.0.1:5501";