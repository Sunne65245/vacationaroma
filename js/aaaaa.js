//jq抓li分類值
var getIndex = "";
$(document).ready(function () {
  $('.commodityArea').on('click', 'li', function (e) {
    getIndex = $(this).data('value');
    localStorage.setItem("backSearch",`${getIndex}`);
    window.location.replace(`searchAF.html`)
    rootFolder();
    return false;
  });
});


//axios抓api
function rootFolder() {
    var hhApi = `http://vacationaroma.rocket-coding.com/api/MinProducts/MenuClass?classid=${getIndex}`;
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

  //js li下拉選單收合
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    // let backSearch2= i;
    // console.log(this.i);
    // localStorage.setItem("backSearch2",backSearch2);

    this.parentElement.querySelector(".commodityArea").classList.toggle("active");
  });
//   toggler[i].addEventListener("click", function (e){
// console.log(e.path);
//   })

}

