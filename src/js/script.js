// 結構為 上方定義func 下方為事件綁定
// 提醒：功能.func.事件皆需相對應的註解


$(function () {
  // Sticky header function
  const handleStickyHeader = function () {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  };


  // 網頁首次載入時就先執行一次 Sticky 判斷條件
  handleStickyHeader();

  // 事件處理 
  $(document).on('scroll', window, function () {
      // Gotop button visibility 當滾動距離超過 100px 時，顯示 "回到頂部" 按鈕，否則隱藏
      if ($(window).scrollTop() > 100) {
        $('.gotop-btn').fadeIn();
      } else {
        $('.gotop-btn').fadeOut();
      }
    })
    .on('click', '.gotop', function () {
      // 當點擊 "回到頂部" 按鈕時，平滑滾動到頁面頂部
      $('html, body').animate({ scrollTop: 0 }, 500);
    })
    .on('scroll', window, handleStickyHeader) // Sticky 當滾動事件發生時，執行 Sticky header 功能
    .on('click', '#closure-swiper', function () {
      // 當點擊 "關閉小公告" 按鈕時，隱藏公告欄
      $('.bk-ad-note').addClass('d-none');
    });

});