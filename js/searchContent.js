const africaApi=`http://vacationaroma.rocket-coding.com/api/MinProducts/MenuClass?classid=2001`;
const southAmericaApi=`http://vacationaroma.rocket-coding.com/api/MinProducts/MenuClass?classid=2002`;
const taiwanApi=`http://vacationaroma.rocket-coding.com/api/MinProducts/MenuClass?classid=3001`;


const commodityTaiwanBtn=document.getElementById("commodityTaiwan");
const commoditySouthAmericaBtn=document.getElementById("commoditySouthAmerica");




//let memberToken=localStorage.getItem("token");
//const license = { headers: { Authorization: `Bearer ${memberToken}` } };


// 先寫非洲
const productAfricaBtn=document.getElementById("productAfrica");
let africaDate=[];

//台灣
const productSouthAmericaBtn=document.getElementById("productSouthAmerica");
let southAmericaDate=[];
//中南美
const productTaiwanBtn=document.getElementById("productTaiwan");
let taiwanDate=[];


function getAxios(){
//=====
    axios.get(africaApi)
    .then(function (response) {
        console.log(response);
        africaDate=response.data.orderProducts;
        console.log(africaDate);
    })
    .catch(function (error) {
        console.log(error);
    });
//======
    axios.get(southAmericaApi)
    .then(function (response) {
        console.log(response);
        southAmericaDate=response.data.orderProducts;
        console.log(southAmericaDate);
    })
    .catch(function (error) {
        console.log(error);
    });

//=======
    axios.get(taiwanApi)
    .then(function (response) {
        console.log(response);
        taiwanDate=response.data.orderProducts;
        console.log(taiwanDate);
    })
    .catch(function (error) {
        console.log(error);
    });
}



function getAfrica(){
    console.log("a");
    commodityAfricaRender();
}
productAfricaBtn.addEventListener("click",getAfrica);

function getSouthAmerica(){
    commoditySouthAmericaRender()
}
productSouthAmericaBtn.addEventListener("click",getSouthAmerica);

function getTaiwan(){
    commodityTaiwanRender()
}
productTaiwanBtn.addEventListener("click",getTaiwan);





// 產品宣染區域
const commodityTitle=document.getElementById("commodityTitle")

let commodityTitleSrt="";

function commodityAfricaRender(){
    commodityTitleSrt="";
    africaDate.forEach(function (item) {
        commodityTitleSrt+=
        `<li>
        <img src="http://${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
    });
    commodityTitle.innerHTML=commodityTitleSrt;
}

function commoditySouthAmericaRender(){

    commodityTitleSrt="";
    southAmericaDate.forEach(function (item) {
        commodityTitleSrt+=
        `<li>
        <img src="http://${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
    });
    commodityTitle.innerHTML=commodityTitleSrt;
}

function commodityTaiwanRender(){
    commodityTitleSrt="";
    taiwanDate.forEach(function (item) {
        commodityTitleSrt+=
        `<li>
        <img src="http://${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
    });
    commodityTitle.innerHTML=commodityTitleSrt;
}


getAxios();