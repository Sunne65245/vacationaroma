
//►►►_____________________待辦事項____________________►►►
//要把OrderList的物件資料渲染 綁好後inner到頁面上
//要先榜ＤＯＭ
//綁修改數量的函式
//要同步修改總金額
//按鈕下去跟單一商品一樣打包存進lg 但要比對ＩＤ
//下一頁面要帶資料



//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*


//►►►_____________________API____________________►►►
let memberPageAPI = `${allApi}api/Orders/GetOrderList`;
// let memberToken=localStorage.getItem("mytoken");
// const license = { headers: { Authorization: `Bearer ${memberToken}` } };
//memberToken license
//►►►_____________________DOM____________________►►►
const userCartList=document.getElementById("userCartList")
let userOrderListRender=[];


function userCartListRender() {
    console.log("a");
    let userOrderListRenderSrt="";
    userOrderListRender.forEach(function (item){
        userOrderListRenderSrt+=`
        <tr>
        <th>${item.Id}</th>
        <th>${item.AddTime}</th>
        <th>${item.SubTotal}</th>
        <th>店取或宅配${item.AddTime}</th>
        <th>${item.Name}</th>
        <th>${item.ProductName}</th>
        </tr>
        `
    })
    userCartList.innerHTML=userOrderListRenderSrt;

}



axios.get(memberPageAPI ,license)
    .then(function (response) {
        console.log(response);
        userOrderListRender=response.data.orderdata;
        console.log(userOrderListRender);
        userCartListRender()
    })
    .catch(function (error) {
        console.log(error);
    });

