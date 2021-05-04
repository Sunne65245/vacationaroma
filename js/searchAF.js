
//jq抓li分類值
$(document).ready(function () {
  $('.commodityArea').on('click', 'li', function (e) {
    getIndex = $(this).data('value');
    rootFolder();
    return false;
  });
});

//補 初始化綁回去下拉選單
//js li下拉選單收合
let backSearchi = localStorage.getItem("backSearch2");
var toggler = document.getElementsByClassName("caret");
let i;
if (backSearchi !== null) {
  console.log("有值")
  toggler[backSearchi].parentElement.querySelector(".commodityArea").classList.toggle("active");
  getIndex = localStorage.getItem("backSearch");
  rootFolder();
  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".commodityArea").classList.toggle("active");
    });
  }
} else {
  console.log("沒值");
  //畫面初始化(期間限定)
  Free();
  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".commodityArea").classList.toggle("active");
    });
  }
}

//產品渲染內容區
const cc = document.querySelector('.commodity');
//菜單產品分類(價格排序低到高)
var btnlow = document.querySelector(".LowToHeight");
btnlow.addEventListener('click', Low);
//菜單產品分類(價格排序高到低)
var btnhigh = document.querySelector(".HeightToLow");
btnhigh.addEventListener('click', High);
//JS排序(價格排序低到高)
var JSbtnlow = document.querySelector(".JSLowToHeight");
JSbtnlow.addEventListener('click', JSLow);
//JS排序(價格排序高到低)
var JSbtnhigh = document.querySelector(".JSHeightToLow");
JSbtnhigh.addEventListener('click', JSHigh);

cc.addEventListener("click", commodityLink);
function commodityLink(e) {
  let commodityLinkId = e.path[1].id;
  console.log();
  if (e.path[1].className !== "commodityLiList") {
    return;
  } else {
    localStorage.setItem("commodityId", `${commodityLinkId}`);
    window.location.replace(`commodityPage.html`);
  }
}

//期間限定
let free = document.querySelector(".free");
free.addEventListener('click', Free);



//data資料
let hhDate = [];
let LowDate = [];
let HighDate = [];
let FreeDate = [];

//axios抓api
function rootFolder() {
  var hhApi = `${allApi}api/MinProducts/MenuClass?classid=${getIndex}`;
  console.log(getIndex);
  axios.get(hhApi)
    .then(function (response) {
      console.log(response);
      hhDate = response.data.orderProducts;
      let str = '';
      hhDate.forEach(function (item) {
        str += `<li class="commodityLiList" id="${item.Id}"><img src="http:${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
      })
      cc.innerHTML = str;
      btnlow.style.display = "block";
      btnhigh.style.display = "block";
      JSbtnlow.style.display = "none";//JS隱藏
      JSbtnhigh.style.display = "none";//JS隱藏
    })
    .catch(function (error) {
      console.log(error);
    });
}

function Low() {
  var LowApi = `${allApi}api/MinProducts/MenuClassLow?classid=${getIndex}`;
  console.log(getIndex);
  axios.get(LowApi)
    .then(function (response) {
      console.log(response);
      LowDate = response.data.orderProducts;
      let str = '';
      LowDate.forEach(function (item) {
        str += ` <li  class="commodityLiList" id="${item.Id}"><img src="http:${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
      })
      cc.innerHTML = str;
      btnlow.style.display = "block";
      btnhigh.style.display = "block";
      JSbtnlow.style.display = "none";//JS隱藏
      JSbtnhigh.style.display = "none";//JS隱藏
    })
    .catch(function (error) {
      console.log(error);
    });
}

function High() {
  var HighApi = `${allApi}api/MinProducts/MenuClassHigh?classid=${getIndex}`;
  console.log(getIndex);
  axios.get(HighApi)
    .then(function (response) {
      console.log(response);
      HighDate = response.data.orderProducts;
      let str = '';
      HighDate.forEach(function (item) {
        str += `<li class="commodityLiList" id="${item.Id}"><img src="http:${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
      })
      cc.innerHTML = str;
      btnlow.style.display = "block";
      btnhigh.style.display = "block";
      JSbtnlow.style.display = "none";//JS隱藏
      JSbtnhigh.style.display = "none";//JS隱藏
    })
    .catch(function (error) {
      console.log(error);
    });
}

function Free() {
  var FreeApi = `${allApi}api/MinProducts/GetIndex`;

  axios.get(FreeApi)
    .then(function (response) {
      console.log(response);
      FreeDate = response.data.recommend;
      console.log(FreeDate);
      let str = '';
      FreeDate.forEach(function (item) {
        str += `<li class="commodityLiList" id="${item.Id}"><img src="http:${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
      })
      cc.innerHTML = str;
      btnlow.style.display = "none";//隱藏
      btnhigh.style.display = "none";//隱藏
      JSbtnlow.style.display = "block";//顯示
      JSbtnhigh.style.display = "block";//顯示
    })
    .catch(function (error) {
      console.log(error);
    });
}

function JSLow() {
  FreeDate.sort(function (a, b) {
    return a["ProducPrice"] - b["ProducPrice"];
  });
  let str = '';
  FreeDate.forEach(function (item) {
    str += ` <li class="commodityLiList" id="${item.Id}"><img src="http:${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
  })
  cc.innerHTML = str;
  btnlow.style.display = "none";//隱藏
  btnhigh.style.display = "none";//隱藏
  JSbtnlow.style.display = "block";//顯示
  JSbtnhigh.style.display = "block";//顯示
}

function JSHigh() {
  FreeDate.sort(function (a, b) {
    return b["ProducPrice"] - a["ProducPrice"];
  });
  let str = '';
  FreeDate.forEach(function (item) {
    str += `<li class="commodityLiList" id="${item.Id}"><img src="http:${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
        </li>`;
  })
  cc.innerHTML = str;
  btnlow.style.display = "none";//隱藏
  btnhigh.style.display = "none";//隱藏
  JSbtnlow.style.display = "block";//顯示
  JSbtnhigh.style.display = "block";//顯示
}