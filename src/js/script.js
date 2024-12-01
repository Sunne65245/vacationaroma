$(function () {
  // Functions 區塊
  // 保存商品原始單價
  const originalPrice = parseInt($('.unit-price').text());  // 儲存初始單價

  // Header 固定在頂部功能
  const handleStickyHeader = function () {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  };

  // 計算總價格功能
  const updateTotalPrice = function (quantity) {
    const total = originalPrice * quantity;  // 使用原始單價計算
    $('.unit-price').text(total.toLocaleString());
  };

  // 初始化執行
  handleStickyHeader();    // 網頁載入時執行一次 Sticky 判斷

  // Events 區塊
  $(document)
    // 監聽滾動事件
    .on('scroll', window, function () {
      if ($(window).scrollTop() > 100) {
        $('.gotop-btn').fadeIn();
      } else {
        $('.gotop-btn').fadeOut();
      }
    })
    .on('click', '.gotop', function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
    })
    .on('scroll', window, handleStickyHeader)
    .on('click', '.category-group-title', function (e) {
      e.preventDefault();
      const $content = $(this).next('.category-group-content');
      const $arrow = $(this).find('.arrow-down');

      $('.category-group-content.active').not($content).removeClass('active');
      $('.arrow-down.active').not($arrow).removeClass('active');

      $content.toggleClass('active');
      $arrow.toggleClass('active');
    })
    // 商品數量減少
    .on('click', '.btn-minus', function () {
      const $input = $(this).siblings('input');
      const currentValue = parseInt($input.val());
      if (currentValue > 1) {
        $input.val(currentValue - 1);
        updateTotalPrice(currentValue - 1);
      }
    })
    // 商品數量增加
    .on('click', '.btn-plus', function () {
      const $input = $(this).siblings('input');
      const currentValue = parseInt($input.val());
      $input.val(currentValue + 1);
      updateTotalPrice(currentValue + 1);
    });
});