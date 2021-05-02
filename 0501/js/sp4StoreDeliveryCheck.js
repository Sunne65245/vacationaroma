//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*

// ►►► 預設載入產品ＡＰＩ
let orderId=JSON.parse(localStorage.getItem("orderId"));//訂單id
console.log(orderId);
// let OrderListData=[OrderList];
// console.log(OrderListData)


//►►►_____________________Dom____________________►►►
const deliveryPickerId = document.getElementById("deliveryPickerId");
const stepBtnSDId = document.getElementById("stepBtnSDId");

let pickerAPI = `${allApi}api/Orders/Consignee/${orderId}`;
let orderConfirm = [];

function goIndex() {

    window.location.replace(`Xsp5Cart.html`)
    
};

stepBtnSDId.addEventListener("click",goIndex);

axios.get(pickerAPI,license)
    .then(function (response) {
        console.log(response);
        orderConfirm=response.data;
        console.log(orderConfirm);

        //修改樣式
        let Srt = "";
        Srt+=`
        <li>姓名
            <span>${orderConfirm.Name}</span>
            <hr class="solid">
        </li>

        <li>手機
            <span>${orderConfirm.Phone}</span>
            <hr class="solid">
        </li>`;

        deliveryPickerId.innerHTML=Srt;
    })
    .catch(function (error) {
        console.log(error);
    });