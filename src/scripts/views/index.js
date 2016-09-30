var str = require('../tpls/index.string');

var header = require('../tpls/header.string');
var footer = require('../tpls/cdown.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), str);
common.append($('.container'), header);
common.append($('.container'), footer);
// common.switchPage(0);
//
// // swiper 定义
// var mySwiper = new Swiper('#index-swiper', {
//   onSlideChangeEnd: function(swiper){
//     $('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
//   }
// });
$('#cclose').on('tap', function () {
  $('footer').css('display','none');
});
// swiper 定义
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop:true
});
//
// $.ajax({
//   url: '/api/list.php',
//   success: function (res) {
//     var html = template('list', res);
//     common.inner($('#index-scroll'), html);
//   }
// });
//
// window.onload = function () {
//   var myScroll = new IScroll("#index-scroll");
// };
