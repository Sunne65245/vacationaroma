let API3 = `http://vacationaroma.rocket-coding.com/api/Orders/GetOrderList/3`;
let API4 = `http://vacationaroma.rocket-coding.com/api/Orders/Consignee/3`;


const MyToken = localStorage.getItem("token");
console.log(MyToken);
const license = { headers: { Authorization: `Bearer ${MyToken}` } };
//測試能否抓到訂單

function text03(){
    //axios.get(url+'/cart',license) 整合用
    axios.get(API3,license)
    .then(function (response) {
        console.log(response);     //response（顯示）
        })
        .catch(function (error) {
        console.log(error);
    });
    axios.get(API4,license)
    .then(function (response) {
        console.log(response);     //response（顯示）
        })
        .catch(function (error) {
        console.log(error);
    });
};

const deliveryBtn=document.querySelector(".nextBtn");

deliveryBtn.addEventListener("click",text03);
