/*!
 * 
 * 
 * 
 * @author Thuclfc
 * @version 
 * Copyright 2024. MIT licensed.
 */$(document).ready(function () {
  // Chuyển đồi tab ở trang Rank và Event
  $('.tab-panel a').click(function () {
    var tabPanel = $(this).data('panel');
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
    $('.tab-content').removeClass('is-active');
    $(tabPanel).addClass('is-active');
  }); // Total receive tăng từ 0 đến số hiện tại

  $('.countTotalReceive').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: parseFloat($('.countTotalReceive').text())
    }, {
      duration: 10000,
      easing: 'swing',
      step: function (now) {
        $(this).text(now);
      }
    });
  }); // Đồng hồ đếm ngược

  const initialCountDownTime = 24 * 60 * 60 * 1000; // 24 giờ (hoặc giá trị bạn muốn)

  let countDownDate = new Date().getTime() + initialCountDownTime;

  const updateCountdown = () => {
    const now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
      // Reset đồng hồ khi về 0
      countDownDate = new Date().getTime() + initialCountDownTime;
      distance = initialCountDownTime;
    }

    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / 1000);
    $(".hour").text(hours.toString().padStart(2, '0'));
    $(".minute").text(minutes.toString().padStart(2, '0'));
    $(".second").text(seconds.toString().padStart(2, '0'));
  };

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}); // Gọi popup thông báo 

function showPopup(msg) {
  $('.popupNotify').addClass('showPopup').text(msg);
  setTimeout(function () {
    $('.popupNotify').removeClass('showPopup');
    ;
  }, 2000);
} // Gọi popup ở trang Loot


function showNotifyLooted(msg) {
  $('.notify-looted-section').addClass('show-notify-looted');
  $('.notify-looted-section .num').html(msg);
  setTimeout(function () {
    $('.notify-looted-section').removeClass('show-notify-looted');
  }, 3000);
}