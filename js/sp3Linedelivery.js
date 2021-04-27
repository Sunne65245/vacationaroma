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

// const deliveryBtn=document.querySelector(".nextBtn");
// deliveryBtn.addEventListener("click",text03);

//line的 "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI3ODI4Yjc4OS1kOWE4LTQzM2ItYTJkZC1mY2QyMTg5ZjE4YjciLCJQZXJtaXNzaW9uIjoxLCJpYXQiOiIyMDIxLzQvMTIg5LiL5Y2IIDAzOjM5OjU5IiwiRXhwIjoiMjAyMS80LzEzIOS4i-WNiCAwMzozOTo1OSJ9.c2nbLkXgSDoBVJxlo1Xo9w2NtfPnp29Dks1MrSHod17CtUPidwDVel874_c95IGaCDRz-nhoFHQekOHGoiG_dg",


//►►►_____________________備註結束____________________►►►
//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*

//►►►_____________________DOM____________________►►►
const recipientName=document.getElementById("recipientName")
const recipientPhone=document.getElementById("recipientPhone")
const recipientAddress=document.getElementById("recipientAddress")
console.log(memberToken);

const nextBtnSP3Id= document.getElementById("nextBtnSP3Id")

//►►►要推到資料的
let data =
{
    "mytoken": memberToken,
    "order": {
        "Name": recipientName.value,
        "Phone": recipientPhone.value,
        "Address": recipientAddress.value,
        "Payment": 2,   //門市付款都是 
        "ProTotal": 250,  //產品總額
        "Shipping": 60,    //運費
        "SubTotal": 310,   //訂單總額
      //  "Remark": "麻煩了",
        "OrderDetails": [
            { "ProductName": "巴拿馬 哈特曼莊園 日曬 藝伎 咖啡豆半磅", 
            "ProductBrew": "手沖", 
            "UnitPrice": 10, 
            "Quantity": 5 },
        ]
    }
}

function a(){

    let data ={
    "mytoken": memberToken,
    "order": {
        "Name": recipientName.value,
        "Phone": recipientPhone.value,
        "Address": recipientAddress.value,
        "Payment": 2,   //門市付款都是 
        "ProTotal": 250,  //產品總額
        "Shipping": 60,    //運費
        "SubTotal": 310,   //訂單總額
      //  "Remark": "麻煩了",
        "OrderDetails": [
            { "ProductName": "巴拿馬 哈特曼莊園 日曬 藝伎 咖啡豆半磅", 
            "ProductBrew": "手沖", 
            "UnitPrice": 10, 
            "Quantity": 5 },
        ]
    }}    ;
    console.log(data);
}
nextBtnSP3Id.addEventListener("click",a)