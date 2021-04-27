
let cartAPI = `http://vacationaroma.rocket-coding.com/api/Login`;
let domain=`http://127.0.0.1:5500`;
//let memberToken=localStorage.getItem("token");
//console.log(memberToken);
//let API2 = `http://vacationaroma.rocket-coding.com/api/Orders/PostOrder`;



const nextBtnSpc2=document.querySelector(".nextBtn");


function BtnSpc2(){

    if( memberToken === "undefined" || memberToken === null  ){
        //請去登入
        console.log("undefined");
        window.location.replace(`${domain}/login.html`);
    }else{
        //下一頁具續選購
        console.log(domain);
        window.location.replace(`${domain}/sp3delivery.html`);
    }

    
    
}
nextBtnSpc2.addEventListener("click",BtnSpc2);