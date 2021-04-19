let API = `http://vacationaroma.rocket-coding.com/api/Login`;
//let API2 = `http://vacationaroma.rocket-coding.com/api/Orders/PostOrder`;

const MyToken = "";
const license = { headers: { Authorization: `Bearer ${MyToken}` } };
// Bearer ${MyToken}沒有打空格就會他馬的吃不到  postman上右側可以讀取程式碼
let VaLogin = {
    "Email":"",
    "Password":"",
};
//let VaData = [];  //先在全域宣告要儲存在axios載入後 要存放的位置



//getElementById
const account=document.querySelector(".account");

const password=document.querySelector(".password");
const loginBtn=document.querySelector(".loginBtn");
//sun65245@gmail.com


function login(){

    VaLogin = {
        "Email":`${account.value}`,
        "Password":`${password.value}`,
    };
    
    axios.post(API,VaLogin)
    .then(function (response) {
        console.log(response);
        userToken=response.data.token;
        localStorage.setItem("token",`${response.data.token}`);
        //登入成功 要寫跳轉的功能 可以額外寫函式再放進來
        if(userToken === undefined){

            alert("登入不成功")
            console.log("Token空的");
        }else{
            
            window.location.replace(`http://127.0.0.1:5500/index.html`)

        };

    })
    .catch(function (error) {
        console.log(error);
    });
    ;



}


//測試能否訂單資料推PostOrder
// function text02(){

//     axios.request({
//         method: 'post',
//         data: {
//             "token": `${localStorage.getItem("token")}`,
//             "order": {
//                 "Name": "大王",
//                 "Phone": "0955121111",
//                 "Address": "台北市",
//                 "Payment": 2,   //門市付款都是
//                 "ProTotal": 250,
//                 "Shipping": 60,
//                 "SubTotal": 310,
//                 "Remark": "麻煩了",
//                 "OrderDetails": [
//                     { "ProductName": "巴拿馬 哈特曼莊園 日曬 藝伎 咖啡豆半磅", "ProductBrew": "手沖", "UnitPrice": 10, "Quantity": 5 },
//                     { "ProductName": "衣索比亞 極深烘焙綜合豆 半磅", "ProductBrew": "不研磨", "UnitPrice": 20, "Quantity": 10 }
//                 ]
//             },
//         },
//         baseURL: API2,
//         'Content-Type': 'application/json',
//     })
//         .then((result) => { console.log(result.data) })
//         .catch((err) => { console.error(err) })

// };


loginBtn.addEventListener("click",login);

