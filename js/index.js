const commodityTitleId=document.getElementById("commodityTitleId");
const indexApi=`${allApi}api/MinProducts/GetIndex`;
let indexCommodityData=[];
let commodityTitleIdSrt="";


// ►►► 預設載入產品ＡＰＩ
axios.get(indexApi)
.then(function (response) {
    console.log(response);
    indexCommodityData=response.data;
    console.log(indexCommodityData);
    commodityTitleRender();
})
.catch(function (error) {
    console.log(error);
});

function commodityTitleRender(){
    
    indexCommodityData.recommend.forEach(function (item){
        commodityTitleIdSrt+=` <li  class="commodityLiList" id="${item.Id}">
        <img src="${item.ProductImg}" alt="#">
        <span class="commodityName">${item.ProductName}</span>
        <span class="commodityPrice">NT.${item.ProducPrice}</span>
    </li>
        `
    })
    commodityTitleId.innerHTML=commodityTitleIdSrt
}

function commodityLink(e){
    let commodityLinkId=e.path[1].id;
    console.log();
    if (e.path[1].className !== "commodityLiList") {
        return;  
    }else {
    localStorage.setItem("commodityId",`${commodityLinkId}`);
    window.location.replace(`commodityPage.html`);
    //window.location.replace(`?id=${commodityLinkId}`)
}}

commodityTitleId.addEventListener("click",commodityLink)