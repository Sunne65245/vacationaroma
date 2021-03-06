//►►►_____________________ＤＯＭ____________________►►►
const purchasingId = document.getElementById("purchasingId")
const purchasingImg = document.getElementById("purchasingImg")
const areaNameId = document.getElementById("areaNameId");
const areaText = document.getElementById("areaText");



const cartLessPlus = document.getElementById("cartLessPlus");
const cartBtnId = document.getElementById("cartBtnId");
const purchasingValueId = document.getElementById("purchasingValueId");
const totalNumId = document.getElementById("totalNumId");



//►►►_____________________產品ＡＰＩ與ＩＤ擷取____________________►►►
let commodityId = localStorage.getItem("commodityId");
const commodityApi = `${allApi}api/MinProducts/Get/${commodityId}`;
let pageArea = [];
let areaProductContent = [];
let totalCash = "";


// ►►► 預設載入產品ＡＰＩ
axios.get(commodityApi)
    .then(function (response) {
        console.log(response);
        pageArea = response.data;

        totalCash = pageArea.ProducPrice;
        areaProductContentSrt();
        purchasingRender();
    })
    .catch(function (error) {
        console.log(error);
    });


let totalNumIdSrt = "";
//宣告物件
function purchasingRender() {

    let purchasingImgSrt =
        `<div class="productImg" style="background-image:url('https:${pageArea.ProductImg}'); width:600px;height:400px">
    </div>`

    let areaIdaNameSrt = `<h1>${pageArea.ProductName}</h1>`;
    let areaTextSrt = `<p>${pageArea.ProductDescription}</p></li>`;
    totalNumIdSrt = `<span>合計</span>
    <span class="totalNum">NT.${pageArea.ProducPrice}</span>`;
    //預備innerHtml
    purchasingImg.innerHTML = purchasingImgSrt;

    areaNameId.innerHTML = areaIdaNameSrt;
    areaText.innerHTML = areaTextSrt;
    totalNumId.innerHTML = totalNumIdSrt;

}



// ►►► 擷取文字說明陣列  ►►►之後需要清空陣列空值
function areaProductContentSrt() {
    areaProductContent = pageArea.ProductContent.split(`＊`);
    console.log(areaProductContent);
    let cpAreaSrt = "";
    areaProductContent.forEach(function (item) {

        cpAreaSrt +=
            `<p>*${item}</p>`
        pageAreaText.innerHTML = cpAreaSrt;
    })
}



//►►►_____________________購物功能____________________►►►

purchasingId.addEventListener("click", quantity)


////金額
let totalCashAll = Number(totalCash);


//►►►數量加減
function quantity(e) {
    if (e.path[0].classList[1] === "addLess" && purchasingValueId.value > 0 && totalCashAll > totalCash) {

        purchasingValueId.value--;
        totalCashAll -= totalCash;

        totalNumIdSrt = `<span>合計</span>
        <span class="totalNum">NT.${totalCashAll}</span>`
        totalNumId.innerHTML = totalNumIdSrt;

    } else if (e.path[0].classList[1] === "addPlus" && purchasingValueId.value >= 0) {

        purchasingValueId.value++;
        totalCashAll += totalCash;

        totalNumIdSrt = `<span>合計</span>
        <span class="totalNum">NT.${totalCashAll}</span>`
        totalNumId.innerHTML = totalNumIdSrt;

    } else {
        return
    }

}

//推購物車清單



const selectGrindId = document.getElementById("selectGrindId");
const grindingMethodId = document.getElementById("selectGrindId");

const selectNoGrindId = document.getElementById("selectNoGrindId");
const grinHandPunchId = document.getElementById("grinHandPunchId");
const ItalianGrinHandPunchId = document.getElementById("ItalianGrinHandPunchId");



let shoppingCart = JSON.parse(localStorage.getItem("OrderDetails"));

let catchInitialValue = selectGrindId.options[selectGrindId.selectedIndex].value;
console.log(catchInitialValue);

function buyCartBtn() {
    if (purchasingValueId.value <= 0 && selectGrindValue == `選取研磨方式`) {
        alert("尚未選購");
        return;
    } else {

        let selectGrindValue = selectGrindId.options[selectGrindId.selectedIndex].value;
        console.log(selectGrindValue);
        let cartPush = {
            "ProductName": pageArea.ProductName,
            "ProductBrew":selectGrindValue, 
            //selectGrindId.options[selectGrindId.selectedIndex].value,
            "ProductImg": pageArea.ProductImg,
            "UnitPrice": pageArea.ProducPrice,
            "Quantity": purchasingValueId.value,
            "ProTotal": totalCashAll,
            "ProductId": +new Date(),
        };

        shoppingCart.push(cartPush)

        localStorage.setItem("OrderDetails", JSON.stringify(shoppingCart));
        cartJudgment()
        alert("加入購物車成功")


    }
}
cartBtnId.addEventListener("click", buyCartBtn);
