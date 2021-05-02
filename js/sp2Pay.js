
let cartAPI = `${allApi}api/Login`;
//點選樣式storePayBtn linePayBtn 加上On


//let API2 = `http://vacationaroma.rocket-coding.com/api/Orders/PostOrder`;



const storePayBtnId = document.getElementById("storePayBtnId");
let linePayBtnId = document.getElementById("linePayBtnId");

//補 非line登入不可用LINEpay
if (linetoken !== null) {
    linePayBtnId.style.display = "block";
}

function storePayBtnSpc2() {
    if ((memberToken === "undefined" || memberToken === null) && (linetoken === "undefined" || linetoken === null)) {
        //請去登入
        console.log("undefined");
        window.location.replace(`${domain}/login.html`)
    } else {
        //下一頁具續選購
        //補 門市取貨
        localStorage.setItem("payment", "2");
        window.location.replace(`${domain}/sp3StoreDelivery.html`)
    }

}

function linePaySpc2() {

    if ((memberToken === "undefined" || memberToken === null) && (linetoken === "undefined" || linetoken === null)) {
        //請去登入
        console.log("undefined");
        window.location.replace(`${domain}/login.html`)
    } else {
        //下一頁具續選購
        //補 linepay付款
        localStorage.setItem("payment", "1");
        window.location.replace(`${domain}/sp3LineDelivery.html`)
    }
}
storePayBtnId.addEventListener("click", storePayBtnSpc2);
linePayBtnId.addEventListener("click", linePaySpc2);

