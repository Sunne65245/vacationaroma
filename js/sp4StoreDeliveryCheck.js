//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*

// ►►► 預設載入產品ＡＰＩ
let orderId=JSON.parse(localStorage.getItem("orderId"));//訂單id
console.log(orderId);
// let OrderListData=[OrderList];
// console.log(OrderListData)


//►►►_____________________Dom____________________►►►
const deliveryPickerId = document.getElementById("deliveryPickerId");
let pickerAPI = `${allApi}api/Orders/Consignee/${orderId}`;
let orderConfirm = [];

axios.get(pickerAPI,license)
    .then(function (response) {
        console.log(response);
        orderConfirm=response.data;
        console.log(orderConfirm);

        //修改樣式
        let Srt = "";
        Srt=`
        <li>姓名
            <span>${orderConfirm.Name}</span>
            <hr class="solid">
        </li>

        <li>手機
            <span>${orderConfirm.Phone}</span>
            <hr class="solid">
        </li>

        <li class="stepBtn">
            <div class="nextBtn">確認訂購人資料</div>
        </li>`;

        deliveryPickerId.innerHTML=Srt;
    })
    .catch(function (error) {
        console.log(error);
    });