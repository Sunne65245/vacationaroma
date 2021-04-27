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
//const recipientAddress=document.getElementById("recipientAddress")
console.log(memberToken);

const nextBtnSDsp3Id= document.getElementById("nextBtnSDsp3Id")

//►►►要推到資料的
let OrderSp3=JSON.parse(localStorage.getItem("OrderDetails"));
console.log(OrderSp3);



let orderId="";
let PostOrderAPI = `${allApi}api/Orders/PostOrder`;
function confirmOrder(){

    if( recipientName.value === ""){
        alert("名字未填寫");
        return
    }else if(recipientPhone.value===""){
        alert("手機未填寫")
        return
    }else{
        console.log("測試")
        let data ={
            "mytoken": memberToken,
            "order": {
                "Name": recipientName.value,
                "Phone": recipientPhone.value,
                "Address": "門市取貨付款",
                "Payment": 2,   //Line才是都是1
                "ProTotal": OrderSp3.ProTotal,  //產品總額
                "Shipping": 60,    //運費固定
                "SubTotal": OrderSp3.ProTotal+60,   //訂單總額 待改
                
              //  "Remark": "麻煩了",
                "OrderDetails": [
                    { "ProductName": OrderSp3.ProductName, 
                    "ProductBrew": OrderSp3.ProductBrew, 
                    "UnitPrice": OrderSp3.UnitPrice, 
                    "Quantity": OrderSp3.Quantity },
                ]
            }}
            axios.post(PostOrderAPI,data)
            .then(function (response) {
                console.log(response); 
                orderId=response.data.Id;
                console.log(orderId);
                localStorage.setItem("orderId",`${orderId}`);
                window.location.replace(`sp4StoreDeliveryCheck.html`)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
};


nextBtnSDsp3Id.addEventListener("click",confirmOrder);
