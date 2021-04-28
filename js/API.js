const allApi= `http://vacationaroma.rocket-coding.com/`;

// <!-- 集中管理API HTML的格式-->
// <!-- <script src="config.js"></script>
// <script>
//     const url = "http://www.rocket"
// </script> -->




let OrderDetailsJudge =localStorage.getItem('OrderDetails');
if(OrderDetailsJudge==null){
    let OrderDetails=[];
    localStorage.setItem("OrderDetails",JSON.stringify(OrderDetails));
}