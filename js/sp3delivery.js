let API3 = `http://vacationaroma.rocket-coding.com/api/Orders/GetOrderList/26`;
let API4 = `http://vacationaroma.rocket-coding.com/api/Orders/Consignee/26`;


const MyToken = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJVY2I0MzQ4NmEwZTUxZTRkNTYwZDU2MWY3NjIzYWQ2OTciLCJQZXJtaXNzaW9uIjoxLCJpYXQiOiI0LzIzLzIwMjEgMjo1MTowNyBQTSIsIkV4cCI6IjQvMjQvMjAyMSAyOjUxOjA3IFBNIn0.ONBKVlzjv2qoVbf2MBfm3pVV1eVIVp0bfvXpTaaKCl4svkb5_bEhKwYa_Fk314oudNOBRV8S1rvFrZP6jDMWqQ";
// const MyToken = localStorage.getItem("token");
// console.log(MyToken);
const license2 = { headers: { Authorization: `Bearer ${MyToken}` } };
//測試能否抓到訂單

function text03(){
    //axios.get(url+'/cart',license) 整合用
    axios.get(API3,license2)
    .then(function (response) {
        console.log(response);     //response（顯示）
        })
        .catch(function (error) {
        console.log(error);
    });
    axios.get(API4,license2)
    .then(function (response) {
        console.log(response);     //response（顯示）
        })
        .catch(function (error) {
        console.log(error);
    });
};

const deliveryBtn=document.querySelector(".nextBtn");

deliveryBtn.addEventListener("click",text03);
