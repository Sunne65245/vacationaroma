// let oo = document.getElementById("index1");

// function test1() {
//   let j = 0;
//   console.log(j);
// };
// oo.addEventListener('click', test1);



//jq抓li分類值
$(document).ready(function () {
  $('.commodityArea').on('click', 'li', function (e) {
    getIndex = $(this).data('value');
    localStorage.setItem("backSearch", `${getIndex}`);
    window.location.replace(`${domain}/searchAF.html`)
    rootFolder();
    return false;
  });
});


//axios抓api
function Free() {
  localStorage.removeItem("backSearch");
  localStorage.removeItem("backSearch2");
  window.location.replace(`${domain}/searchAF.html`)
}
//期間限定
let free = document.querySelector(".free");
free.addEventListener('click', Free);

//js li下拉選單收合
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".commodityArea").classList.toggle("active");
  });


}

//＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
let searchIdTw = document.getElementById("index1");
let searchIdAs = document.getElementById("index2");
let searchIdArea = document.getElementById("index3");


function test1() {
  let backSearchTest = "0";
  localStorage.setItem("backSearch2", backSearchTest);
  console.log(backSearchTest);
}
searchIdTw.addEventListener("click", test1);

function test2() {
  let backSearchTest = "1";
  localStorage.setItem("backSearch2", backSearchTest);
  console.log(backSearchTest);
}
searchIdAs.addEventListener("click", test2)

function test3() {
  let backSearchTest = "2";
  localStorage.setItem("backSearch2", backSearchTest);
  console.log(backSearchTest);
}
searchIdArea.addEventListener("click", test3);


