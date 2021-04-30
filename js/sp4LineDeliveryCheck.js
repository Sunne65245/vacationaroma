// let API3 = `http://vacationaroma.rocket-coding.com/api/Orders/GetOrderList/26`;
// let API4 = `http://vacationaroma.rocket-coding.com/api/Orders/Consignee/26`;


// const MyToken = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJVY2I0MzQ4NmEwZTUxZTRkNTYwZDU2MWY3NjIzYWQ2OTciLCJQZXJtaXNzaW9uIjoxLCJpYXQiOiI0LzIzLzIwMjEgMjo1MTowNyBQTSIsIkV4cCI6IjQvMjQvMjAyMSAyOjUxOjA3IFBNIn0.ONBKVlzjv2qoVbf2MBfm3pVV1eVIVp0bfvXpTaaKCl4svkb5_bEhKwYa_Fk314oudNOBRV8S1rvFrZP6jDMWqQ";
// // const MyToken = localStorage.getItem("token");
// // console.log(MyToken);
// const license2 = { headers: { Authorization: `Bearer ${MyToken}` } };
// //測試能否抓到訂單

// function text03(){

//     axios.get(API3,license2)
//     .then(function (response) {
//         console.log(response);     //response（顯示）
//         })
//         .catch(function (error) {
//         console.log(error);
//     });
//     axios.get(API4,license2)
//     .then(function (response) {
//         console.log(response);     //response（顯示）
//         })
//         .catch(function (error) {
//         console.log(error);
//     });
// };

//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*
//哪知網址是接ＬＩＮＥＰＡＹ?




//訂單id
let orderLineId=JSON.parse(localStorage.getItem("orderId"));
console.log(orderLineId);
console.log(memberToken);


//►►►_____________________Dom____________________►►►
const deliveryLinePickerId = document.getElementById("deliveryLinePickerId");
const stepBtnLineId = document.getElementById("stepBtnLineId");

let pickerLineAPI = `${allApi}api/Orders/Consignee/${orderLineId}`;
let orderConfirm = [];


//lienPayApl
let LinePayApi=`${allApi}api/Pay/Getreserve/${orderLineId}`

let lineDataWeb=""
function goLinePay() {


    let data = {
        "Id": orderLineId   //訂單id
    };
    axios.get(LinePayApi, license)
    .then(function (response) {
        console.log(response.data);
        lineDataWeb = response.data.web;
        console.log(lineDataWeb);
        window.location.replace(lineDataWeb)
    });

    //window.location.replace(`sp2Pay.html`);
    //window.location.replace(`memberPage.html`)
    console.log("goLinePay");

    var url3 = `https://vacationaroma.rocket-coding.com/api/Pay/Put`;
    axios.put(url3, data)
        .then(function (response) {
            console.log(response.data);
        });

}



stepBtnLineId.addEventListener("click",goLinePay);









//渲染用
axios.get(pickerLineAPI,license)
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
        </li>

        <li>手機
        <span>${orderConfirm.Address}</span>
        <hr class="solid">
        </li>`;
        
        deliveryLinePickerId.innerHTML=Srt;
    })
    .catch(function (error) {
        console.log(error);
    });