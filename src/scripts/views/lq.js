var str = require('../tpls/lq.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), str);

common.switchPage(0);

window.onload = function () {
  var myScroll = new IScroll("#lq-scroll");
  var myscroll=new IScroll("#wrapper",{hScrollbar:false, vScrollbar:false});
   
};
/*
 * GET /api/item/searchItems.do?jsonApiCallback=jsonp2&storeId=13482&sort=9&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475773053207 HTTP/1.1
 * 
 * GET /api/item/searchItems.do?jsonApiCallback=jsonp2&storeId=10676&sort=9&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475773130804 HTTP/1.1
 * 
 * GET /api/item/searchItems.do?jsonApiCallback=jsonp2&storeId=12969&sort=9&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475773139673 HTTP/1.1
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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
    var strScrollTop = '<div><div class="head"> \
        <img src="/build/images/arrow.png"/> \
        <span>下拉刷新...</span> \
    </div>';

    var strScrollBottom = '<div class="foot"> \
        <img src="/build/images/arrow.png"/> \
        <span>上拉加载更多...</span> \
    </div></div>';

    var html = template('list', res);

    html = strScrollTop + html + strScrollBottom;

    common.inner($('#index-scroll'), html);
  }
});

window.onload = function () {
  var myScroll = new IScroll('#index-scroll', {
      probeType: 3,
      mouseWheel: true
  });
  myScroll.scrollBy(0, -35);

  var head = $('.head img'),
      topImgHasClass = head.hasClass('up');
  var foot = $('.foot img'),
      bottomImgHasClass = head.hasClass('down');

  myScroll.on('scroll', function () {
      var y = this.y,
          maxY = this.maxScrollY - y;
      if (y >= 0) {
          !topImgHasClass && head.addClass('up');
          return '';
      }
      if (maxY >= 0) {
          !bottomImgHasClass && foot.addClass('down');
          return '';
      }
  });

  myScroll.on('scrollEnd', function () {
      if (this.y >= -35 && this.y < 0) {
          myScroll.scrollTo(0, -35);
          head.removeClass('up');
      } else if (this.y >= 0) {
          head.attr('src', '/build/images/ajax-loader.gif');
          //TODO ajax下拉刷新数据

          setTimeout(function () {
              myScroll.scrollTo(0, -35);
              head.removeClass('up');
              head.attr('src', '/build/images/arrow.png');
          }, 1000);
      }

      var maxY = this.maxScrollY - this.y;
      if (maxY > -35 && maxY < 0) {
          var self = this;
          myScroll.scrollTo(0, self.maxScrollY + 35);
          foot.removeClass('down')
      } else if (maxY >= 0) {
          foot.attr('src', '/build/images/ajax-loader.gif');
          //TODO ajax上拉加载数据


          var self = this;
          setTimeout(function () {
              $('.foot').before(
                  '<div class="item">add 1</div>'+
                  '<div class="item">add 2</div>'+
                  '<div class="item">add 3</div>'+
                  '<div class="item">add 4</div>'+
                  '<div class="item">add 5</div>'
              );
              myScroll.refresh();

              myScroll.scrollTo(0, self.y + 35);
              foot.removeClass('down');
              foot.attr('src', '/build/images/arrow.png');
          }, 1000);
      }
  });
};
*/