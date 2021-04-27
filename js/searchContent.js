//等辦事項1 在宣染出來的產品裝上dataSet 與class 才能class用做 ifEs判斷式
//整理這隻js才好後續管理


//►►►_____________________分隔線說明____________________►►►
// ►►► () *,.*♫_____________________☺____________________♫*,.*





//►►►_____________________備註結束____________________►►►

let americaId = "2001";
let southAmericaId = "2002";
let taiwanId = "3001";

// ►►► 產品API
const africaApi=`${allApi}api/MinProducts/MenuClass?classid=${americaId}`;
const southAmericaApi=`${allApi}api/MinProducts/MenuClass?classid=${southAmericaId}`;
const taiwanApi=`${allApi}api/MinProducts/MenuClass?classid=${taiwanId}`;


const commodityTaiwanBtn=document.getElementById("commodityTaiwan");
const commoditySouthAmericaBtn=document.getElementById("commoditySouthAmerica");




//let memberToken=localStorage.getItem("token");
//const license = { headers: { Authorization: `Bearer ${memberToken}` } };


// ►►► 非洲 *,.*♫_____________________☺____________________♫*,.*
const productAfricaBtn=document.getElementById("productAfrica");
let africaDate=[];
function getAfrica(){
    commodityAfricaRender();
}
productAfricaBtn.addEventListener("click",getAfrica);


// ►►► 台灣 *,.*♫_____________________☺____________________♫*,.*
const productSouthAmericaBtn=document.getElementById("productSouthAmerica");
let southAmericaDate=[];
function getSouthAmerica(){
    commoditySouthAmericaRender()
}
productSouthAmericaBtn.addEventListener("click",getSouthAmerica);


// ►►► 中南美 *,.*♫_____________________☺____________________♫*,.*
const productTaiwanBtn=document.getElementById("productTaiwan");
let taiwanDate=[];
function getTaiwan(){
    commodityTaiwanRender()
}
productTaiwanBtn.addEventListener("click",getTaiwan);



// ►►►抓商品的ＡＰＩ *,.*♫_____________________☺____________________♫*,.*
function getAxios(){
// 非洲商品
    axios.get(africaApi)
    .then(function (response) {
        console.log(response);
        africaDate=response.data.orderProducts;
        console.log(africaDate);
    })
    .catch(function (error) {
        console.log(error);
    });
// ►►► 中南美
    axios.get(southAmericaApi)
    .then(function (response) {
        console.log(response);
        southAmericaDate=response.data.orderProducts;
        console.log(southAmericaDate);
    })
    .catch(function (error) {
        console.log(error);
    });

// ►►► 台灣
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







// ►►► _____________________ 產品宣染區域____________________►►►

const commodityArea=document.getElementById("commodityArea")


let commodityAreaSrt="";

// ►►► 非洲 
function commodityAfricaRender(){
    commodityAreaSrt="";
    africaDate.forEach(function (item) {


        commodityAreaSrt+=
        `<li class="commodityPack" id="${item.Id}">
        <img src="http://${item.ProductImg}"  class="commodityImg" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
        
    });
    commodityArea.innerHTML=commodityAreaSrt;
}
// ►►► 中南美
function commoditySouthAmericaRender(){

    commodityAreaSrt="";
    southAmericaDate.forEach(function (item) {
        commodityAreaSrt+=
        `<li class="commodityPack" id="${item.Id}">
        <img src="http://${item.ProductImg}"  class="commodityImg" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
    });
    commodityArea.innerHTML=commodityAreaSrt;
}
// ►►► 台灣
function commodityTaiwanRender(){
    commodityAreaSrt="";
    taiwanDate.forEach(function (item) {
        commodityAreaSrt+=
        `<li class="commodityPack" id="${item.Id}">
        <img src="http://${item.ProductImg}"  class="commodityImg" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
    });
    commodityArea.innerHTML=commodityAreaSrt;
}

//►►►_____________________判斷產品點擊____________________►►►

function getCommodityAreaId(e) {
    let textId=e.path[1].id;
    console.log(textId);

    // africaDate.forEach(function (item) {
    //     if(textId == item.ID){
    //         console.log(item.ID);
    //     }else{
    //         console.log("x",item.ID);
    //     }
    // })

    if (e.path[1].className !== "commodityPack") {
        return;  
    }else {
        console.log(textId);
        localStorage.setItem("commodityId",`${textId}`);
        window.location.replace(`commodityPage.html`);
        //window.location.replace(`./roomTypeInformation.html?id=${textId}`)

        //比對三個陣列裡的ID

    };
}

commodityArea.addEventListener("click",getCommodityAreaId)

//►►►_____________________頁面仔入時就先抓取商品資料庫____________________►►►
getAxios();