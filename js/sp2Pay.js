
let cartAPI = `${allApi}api/Login`;
//點選樣式storePayBtn linePayBtn 加上On


//let API2 = `http://vacationaroma.rocket-coding.com/api/Orders/PostOrder`;



const storePayBtnId=document.getElementById("storePayBtnId");
const linePayBtnId=document.getElementById("linePayBtnId");


function storePayBtnSpc2(){
    if( memberToken === "undefined" || memberToken === null  ){
        //請去登入
        console.log("undefined");
        window.location.replace(`${domain}/login.html`)
    }else{
        console.log(domain);
        //下一頁具續選購
        window.location.replace(`${domain}/sp3StoreDelivery.html`)
    }
    
}

function linePaySpc2(){

    if( memberToken === "undefined" || memberToken === null  ){
        //請去登入
        console.log("undefined");
        window.location.replace(`${domain}/login.html`)
    }else{
        //下一頁具續選購
        console.log(domain);
        window.location.replace(`${domain}/sp3LineDelivery.html`)
    }
}
storePayBtnId.addEventListener("click",storePayBtnSpc2);
linePayBtnId.addEventListener("click",linePaySpc2);

