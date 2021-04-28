let loginMemberAPI = "http://vacationaroma.rocket-coding.com/api/User/Getuserdata";

//line會員登入
let LineLoginUrl = "https://vacationaroma.rocket-coding.com/api/Linelogin/GetLineLoginUrl";

//Dom
//當會員登入時要改變狀態
const loginMember = document.querySelector(".loginMember");
let memberProfile =[];
let memberToken=localStorage.getItem("mytoken");

//下方的Token是庸來做ＬＩＮＥ登入的
//let memberToken="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJVY2I0MzQ4NmEwZTUxZTRkNTYwZDU2MWY3NjIzYWQ2OTciLCJQZXJtaXNzaW9uIjoxLCJpYXQiOiI0LzIzLzIwMjEgMjo1MTowNyBQTSIsIkV4cCI6IjQvMjQvMjAyMSAyOjUxOjA3IFBNIn0.ONBKVlzjv2qoVbf2MBfm3pVV1eVIVp0bfvXpTaaKCl4svkb5_bEhKwYa_Fk314oudNOBRV8S1rvFrZP6jDMWqQ"

const license = { headers: { Authorization: `Bearer ${memberToken}` } };

//console.log(memberToken);




// 先抓網址檢查有沒有問好？
let q = window.location.href.indexOf("?")//如果找到會大於-1`

function qaz(){
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
                    //console.log(d);
                    var url3 = `https://vacationaroma.rocket-coding.com/api/Linelogin/PostLinePayload?id_token=${d}`;

                    axios.post(url3)
                        .then(function (res) {
                            console.log(res.data);
                        }).catch(function (error) {
                            console.log(error);
                        });
                });
        }
}



if(q>-1){
    qaz();
}else{
    console.log("xxx");
}



//原先會員是否登入判斷
if(memberToken === "undefined" || memberToken === null){
    console.log("沒登入拉");

}
else{
    axios.get(loginMemberAPI,license)
    .then(function (response) {
        console.log(response);
        memberProfile=response.data;
        //console.log(`axios的${memberProfile.Name}`);

        //修改樣式
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
