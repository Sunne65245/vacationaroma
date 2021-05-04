

//訂單id
let orderLineId = JSON.parse(localStorage.getItem("orderId"));
console.log(orderLineId);
console.log(linetoken);


//►►►_____________________Dom____________________►►►
const deliveryLinePickerId = document.getElementById("deliveryLinePickerId");
const stepBtnLineId = document.getElementById("stepBtnLineId");

let pickerLineAPI = `${allApi}api/Orders/Consignee/${orderLineId}`;
let orderConfirm = [];


//lienPayApl
let LinePayApi = `${allApi}api/Pay/Getreserve/${orderLineId}`;


let lineDataWeb = ""
function goLinePay() {


    axios.get(LinePayApi, headtoken)
        .then(function (response) {
            console.log(response.data);
            lineDataWeb = response.data.web;
            console.log(lineDataWeb);
            window.location.replace(lineDataWeb)
        });
}



stepBtnLineId.addEventListener("click", goLinePay);


//渲染用
axios.get(pickerLineAPI, headtoken)
    .then(function (response) {
        console.log(response);
        orderConfirm = response.data;
        console.log(orderConfirm);

        //修改樣式
        let Srt = "";
        Srt += `
        <li>姓名
            <span>${orderConfirm.Name}</span>
            <hr class="solid">
        </li>

        <li>手機
            <span>${orderConfirm.Phone}</span>
            <hr class="solid">
        </li>

        <li>地址
        <span>${orderConfirm.Address}</span>
        <hr class="solid">
        </li>`;

        deliveryLinePickerId.innerHTML = Srt;
    })
    .catch(function (error) {
        console.log(error);
    });