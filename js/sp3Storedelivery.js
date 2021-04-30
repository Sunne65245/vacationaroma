

//►►►_____________________備註結束____________________►►►
//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*

//►►►_____________________DOM____________________►►►
const recipientName=document.getElementById("recipientName")
const recipientPhone=document.getElementById("recipientPhone")
console.log(memberToken);

const nextBtnSDsp3Id= document.getElementById("nextBtnSDsp3Id")

//►►►要推到資料的
let OrderSp3=JSON.parse(localStorage.getItem("OrderDetails"));
console.log(OrderSp3);


let orderListArray="";

let dataProTotal=0;
OrderSp3.forEach(function (item){
    let ProTotal = Number(item.ProTotal);
    dataProTotal+=ProTotal;
})

let orderData="";

console.log(orderData);



let orderId="";
let PostOrderAPI = `${allApi}api/Orders/PostOrder`;

// let Phone=recipientPhone.value;
// let MobileReg = /^(09)[0-9]{8}$/;
// (str.match(MobileReg)) ? true : false;
function confirmOrder(){

    if( recipientName.value === ""){
        alert("名字未填寫");
        return
    }else if(recipientPhone.value===""){
        alert("手機未填寫")
        return
    }
    
    else{
        orderData={
            "mytoken": memberToken,
            "order": {
                "Name": String(recipientName.value),
                "Phone": recipientPhone.value,
                "Address": "門市取貨付款",
                "Payment": 2,   //Line才是都是1
                "ProTotal": Number(dataProTotal),  //產品總額
                "Shipping": 60,    //運費固定
                "SubTotal": dataProTotal+60,   //訂單總額 待改
                "OrderDetails": OrderSp3,
                //data-set:"${item.ProductId} 額外的ＩＤ
        }}

        axios.post(PostOrderAPI,orderData)
        .then(function (response) {



            console.log(response); 
            sp3Data=response.data;
            let c=sp3Data.message
            if(response.data.check ==="no"){
                console.log(`訂單錯誤${c}`);
                alert("訂單不成功")                
            }else{
                orderId=sp3Data.Id;
                console.log(orderId);
                localStorage.setItem("orderId",`${orderId}`);
                window.location.replace(`sp4StoreDeliveryCheck.html`)
            }
            
        })
        .catch(function (error) {
            console.log(error);
    })
    }
}



nextBtnSDsp3Id.addEventListener("click",confirmOrder);
