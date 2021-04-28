let loginMemberAPI = "http://vacationaroma.rocket-coding.com/api/User/Getuserdata";

////line會員登入
let LineLoginUrl = "https://vacationaroma.rocket-coding.com/api/Linelogin/GetLineLoginUrl";

////Dom
////當會員登入時要改變狀態
const loginMember = document.querySelector(".loginMember");
let memberProfile =[];
let memberToken=localStorage.getItem("mytoken");

////下方的Token是庸來做ＬＩＮＥ登入的

const license = { headers: { Authorization: `Bearer ${memberToken}` } };

//console.log(memberToken);




//// line判定 先抓網址檢查有沒有問好？






////原先會員是否登入判斷
if(memberToken === "undefined" || memberToken === null){
    console.log("沒登入拉");

}
else{
    axios.get(loginMemberAPI,license)
    .then(function (response) {
        console.log(response);
        memberProfile=response.data;
        ////console.log(`axios的${memberProfile.Name}`);

        ////修改樣式
        let loginMemberSrt = "";
        loginMemberSrt=`<ul class="loginMember">
        <li><a href="/memberPage.html">${memberProfile.Name} 您好</a></li>
        <li><a href="/sp1Cart.html">購物車</a></li>
        <li><a href="">風味搜尋</a></li>
        </ul>  `;

        loginMember.innerHTML=loginMemberSrt;
    })
    .catch(function (error) {
        console.log(error);
    });

}


//428

//Dom
//當會員登入時要改變狀態

// //隨機推薦商品圖
const proList = document.querySelector('.commodity');
let GetIndexApi = `https://vacationaroma.rocket-coding.com/api/MinProducts/GetIndex`;
let GetIndexDate = [];

axios.get(GetIndexApi)
    .then(function (response) {
        console.log(response);
        GetIndexDate = response.data.recommend;
        let str = '';
        GetIndexDate.forEach(function (item) {
        str += `<li><img src="http:${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
        })
        proList.innerHTML = str;
    })
    .catch(function (error) {
        console.log(error);
    });

// 先抓網址檢查有沒有問好？
let q = window.location.href.indexOf("?")//如果找到會大於-1`
function qaz() {
    let a = window.location.search.split(`=`)[1].split(`&`)[0];
    let b = window.location.search.split(`=`)[2].split(`&`)[0];
    let c = window.location.search.split(`=`)[3].split(`&`)[0];
    let d = "";
    let access_token = "";
    var url2 = `https://vacationaroma.rocket-coding.com/api/Linelogin/GetLineInfo?friendship_status_changed=${a}&code=${b}&state=${c}`;
    if (window.location.href.indexOf("error") > -1) {
        var url = `https://vacationaroma.rocket-coding.com/api/Linelogin/GetLineInfoError`;
        axios.get(url)
            .then(function (response) {
                console.log(response.data);
            });
    };
    if (window.location.href.indexOf("error") === -1) {
        axios.get(url2)
            .then(function (response) {
                //console.log(response.data);
                d = response.data.id_token;
                access_token = response.data.access_token;
                console.log(response.data.friend); //response.data.friend.friendFlag
                localStorage.setItem("friend", `${response.data.friend.friendFlag}`);
                var url3 = `https://vacationaroma.rocket-coding.com/api/Linelogin/PostLinePayload?id_token=${d}`;

                axios.post(url3)
                    .then(function (res) {
                        lineProfile = res.data;
                        console.log(lineProfile);
                        localStorage.setItem("linetoken", `${res.data.mytoken}`);
                        localStorage.setItem("name", `${lineProfile.Name}`);
                        //修改樣式
                        console.log("第一次line登入名稱")
                        let loginMemberSrt = "";
                        loginMemberSrt = `<ul class="loginMember">
        <li><a href="/memberPage.html">${lineProfile.Name} 您好</a></li>
        <li><a href="/sp1Cart.html">購物車</a></li>
        <li><a href="">風味搜尋</a></li>
        </ul>  `;
                        loginMember.innerHTML = loginMemberSrt;
                    }).catch(function (error) {
                        console.log(error);
                    });
            });
    }
}

//第一次line登入
if (q > -1) {
    console.log("LINE登入流程");
    qaz();

} else {
    //會員登入
    console.log("會員登入或尚未登入或非第一次line登入");
}

let linetoken = localStorage.getItem("linetoken");
var username = localStorage.getItem("name");

//非第一次line登入
if (linetoken !== null) {
    console.log("非第一次line登入名稱")
    //修改樣式
    let loginMemberSrt = "";
    loginMemberSrt = `<ul class="loginMember">
        <li><a href="/memberPage.html">${username} 您好</a></li>
        <li><a href="/sp1Cart.html">購物車</a></li>
        <li><a href="">風味搜尋</a></li>
        </ul>  `;
    loginMember.innerHTML = loginMemberSrt;
}

//會員是否登入判斷x`
if (memberToken === "undefined" || memberToken === null) {
    console.log("會員沒東西拉");
}
else {
    axios.get(loginMemberAPI, license)
        .then(function (response) {
            console.log(response);
            memberProfile = response.data;
            //console.log(`axios的${memberProfile.Name}`);
            console.log("會員登入名稱")
            //修改樣式
            let loginMemberSrt = "";
            loginMemberSrt = `<ul class="loginMember">
        <li><a href="/memberPage.html">${memberProfile.Name} 您好</a></li>
        <li><a href="/sp1Cart.html">購物車</a></li>
        <li><a href="">風味搜尋</a></li>
        </ul>  `;

            loginMember.innerHTML = loginMemberSrt;
        })
        .catch(function (error) {
            console.log(error);
        });

}

