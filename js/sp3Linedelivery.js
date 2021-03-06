

//►►►_____________________DOM____________________►►►
const LineName = document.getElementById("LineName")
const LinePhone = document.getElementById("LinePhone")
const LineAdd = document.getElementById("LineAdd")
console.log(memberToken);

const nextBtnLineSp3Id = document.getElementById("nextBtnLineSp3Id")

//►►►要推到資料的  
let OrderSp3Line = JSON.parse(localStorage.getItem("OrderDetails"));
console.log(OrderSp3Line);


let orderListLineArray = "";

let dataLineProTotal = 0;
OrderSp3Line.forEach(function (item) {
    let ProTotal = Number(item.ProTotal);
    dataLineProTotal += ProTotal;
})

let orderLineData = "";
let orderId = "";
let PostOrderAPI = `${allApi}api/Orders/PostOrder/${orderId}`;

//補 LINE用戶可選擇宅配或門市判斷
// let userpay = localStorage.getItem("payment");
// if (userpay === "1") {
//     userpayment = 1; //linepay
// } else if (userpay === "2") {
//     userpayment = 2; //門市
// }


function confirmLineOrder(e) {
    if (LineName.value === "") {
        alert("名字未填寫");
        return
    } else if (LinePhone.value === "") {
        alert("手機未填寫")
        return
    } else if (LineAdd.value === "") {
        alert("地址未填寫")
        return
    }

    else {
        console.log("ya");
        //再把塞值放到這
        orderLineData = {
            "mytoken": checktoken,
            "order": {
                "Name": String(LineName.value),
                "Phone": LinePhone.value,
                "Address": LineAdd.value,
                "Payment": 1,
                "ProTotal": Number(dataLineProTotal),  //產品總額
                "Shipping": 0,    //運費固定
                "SubTotal": dataLineProTotal,   //訂單總額 待改
                "Notice": notice,
                "OrderDetails": OrderSp3Line,
                //data-set:"${item.ProductId} 額外的ＩＤ
            }
        }

        axios.post(PostOrderAPI, orderLineData)
            .then(function (response) {

                console.log(response);
                LineSp3Data = response.data;
                let c = LineSp3Data.message
                if (response.data.check === "no") {
                    console.log(`訂單錯誤${c}`);
                    alert("訂單不成功")
                } else {
                    orderId = LineSp3Data.Id;
                    console.log(orderId);
                    localStorage.setItem("orderId", `${orderId}`);
                    window.location.replace(`${domain}/sp4LineDeliveryCheck.html`)
                }

            })
            .catch(function (error) {
                console.log(error);
            }

            )
    }
}



nextBtnLineSp3Id.addEventListener("click", confirmLineOrder);
