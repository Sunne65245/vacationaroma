let API2 = `http://vacationaroma.rocket-coding.com/api/Orders/PostOrder`;
let domain=`http://127.0.0.1:5500`;
const MyToken = "";
const license = { headers: { Authorization: `Bearer ${MyToken}` } };

const nextBtnSpc1=document.querySelector(".nextBtn");

//測試能否訂單資料推PostOrder
function text02(){

    axios.request({
        method: 'post',
        data: {
            "token": `${localStorage.getItem("token")}`,
            "order": {
                "Name": "大王",
                "Phone": "0955121111",
                "Address": "台北市",
                "Payment": 2,   //門市付款都是
                "ProTotal": 250,
                "Shipping": 60,
                "SubTotal": 310,
                "Remark": "麻煩了",
                "OrderDetails": [
                    { "ProductName": "巴拿馬 哈特曼莊園 日曬 藝伎 咖啡豆半磅", "ProductBrew": "手沖", "UnitPrice": 10, "Quantity": 5 },
                    { "ProductName": "衣索比亞 極深烘焙綜合豆 半磅", "ProductBrew": "不研磨", "UnitPrice": 20, "Quantity": 10 }
                ]
            },
        },
        baseURL: API2,
        'Content-Type': 'application/json',
    })
        .then((result) => { console.log(result.data) })
        .catch((err) => { console.error(err) });


        //(寫一個功能觸發)    
    window.location.replace(`${domain}/sp2Pay.html`);
};
nextBtnSpc1.addEventListener("click",text02);
