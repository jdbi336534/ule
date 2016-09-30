var str = require('../tpls/index.string');
var footer = require('../tpls/footer.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);
common.append($('.container'), footer);
common.switchPage(0);

// swiper 定义
var mySwiper = new Swiper('#index-swiper', {
  onSlideChangeEnd: function(swiper){
    $('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
  }
});
$('#swiper-nav li').on('tap', function () {
  mySwiper.slideTo($(this).index());
  $(this).addClass('active').siblings().removeClass('active');
});

$.ajax({
  url: '/api/list.php',
  success: function (res) {
    var html = template('list', res);
    common.inner($('#index-scroll'), html);
  }
});

window.onload = function () {
  var myScroll = new IScroll("#index-scroll");
};
