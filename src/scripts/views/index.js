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
// banner图
    var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop:true
});
//手机专享
var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 'auto',
    //centeredSlides: true,
    paginationClickable: true
});
//手机专享
var onlyPhoneScr = document.createElement('script');
onlyPhoneScr.src = "http://search.ule.com/api/recommend?restype=2002&jsoncallback=onlyPhone&sectionKeys=wap_onlyphone&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475572375350";
document.body.appendChild(onlyPhoneScr);
window.onlyPhone = function (result) {
  $('#onlyPhoneUl').html("");
  for(var i=0;i<result.wap_onlyphone.length;i++){
    var html = '<li class="swiper-slide"><a href="#" class="logB"> <img src="'+ result.wap_onlyphone[i].imgUrl +'"> <p> <span class="b_tit">'+result.wap_onlyphone[i].title+'</span> <i class="b_price">'+ JSON.parse(result.wap_onlyphone[i].customAttribute).price+'</i> </p> </a> </li>'
    common.append($('#onlyPhoneUl'), html);
  }
  swiper2.update();
}

//
var swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 'auto',
    //centeredSlides: true,
    paginationClickable: true
});
//今日好店铺
    var swiper4 = new Swiper('.swiper-container4', {
    pagination: '.swiper-pagination4',
    paginationClickable: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop : true,
    loopedSlides :3,
});
//今日好店铺
// var goodStoreScr = document.createElement('script');
// goodStoreScr.src = "http://search.ule.com/api/recommend?restype=2002&jsoncallback=goodStore&sectionKeys=wap_index_dp&_=1475656262741";
// document.body.appendChild(goodStoreScr);
// window.goodStore = function (result) {
//   console.log(result.wap_index_dp);
//   $('.swiper-container4 .swiper-wrapper').html("");
//   for(var i=0;i<result.wap_index_dp.length;i++){
//     var html = '<div class="swiper-slide"><div class="product-pic" href="javascript:;"><div class="goodstore_top"><a href="#"><span class="goodstore_loge"><img src="'+result.wap_index_dp[i].imgUrl+'"></span><div class="goodstore_title"><h3  class="goodstore_title">'+result.wap_index_dp[i].title+'</h3><p class="goodstore_subtit">'+JSON.parse(result.wap_index_dp[i].customAttribute).subTitle+'</p></div><span class="goodstore_btn">进入店铺</span></a></div><div class="goodstore_imglist"><a href="#"><img src="'+JSON.parse(result.wap_index_dp[i].customAttribute).picurl_item1+'"></a><a href="#"><img src="'+JSON.parse(result.wap_index_dp[i].customAttribute).picurl_item2+'"></a><a href="#"><img src="'+JSON.parse(result.wap_index_dp[i].customAttribute).picurl_item3+'"></a></div></div></div>';
//     common.append($('.swiper-container4 .swiper-wrapper'), html);
//   }
//   swiper4.update();
// }
//猜您喜欢
var enjoySrc = document.createElement('script');
enjoySrc.src = "http://service.ule.com/api/mobile/indexListingCommentGet.do?jsonApiCallback=enjoy&sectionKeys=ule_index2&moduleKeys=ule_android_index_prodlist&startIndex=0&pageSize=10&type=1&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475673963218";
document.body.appendChild(enjoySrc);
window.enjoy = function (result) {
  $('.enjoy ul').html("");
  for(var i=0;i<result.result.length;i++){
    var html = '<li><a href="#"><img width="176" height="176" src="'+result.result[i].imgUrl+'"> <p class="goodsName">'+result.result[i].listingName+'</p><p class="price"><del>¥'+result.result[i].maxPrice+'</del><br>¥'+result.result[i].minPrice+'<span class="zhe">'+(parseInt(result.result[i].minPrice)*10/parseInt(result.result[i].maxPrice)).toFixed(1)+'折</span></p></a></li>';
    common.append($('.enjoy ul'), html);
  }
}
//查询
$('#ckeyWord').on('tap', function () {
  $('#search_container').css('display','block');
});
$('.close').on('tap', function () {
  $('#search_container').css('display','none');
});

// $(function(){
//     var counter = 0;
//     // 每页展示4个
//     var num = 0;
//     // var pageStart = 0,pageEnd = 0;
//
//     // dropload
//     $('.enjoy ul').dropload({
//         scrollArea : window,
//         loadDownFn : function(me){
//           $.ajax({
//                type: 'GET',
//                url: 'http://search.ule.com/api/recommend?restype=2002&jsoncallback=jsonp1&sectionKeys=wap_onlyphone&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475572375350',
//                dataType: 'jsonp',
//                success: function(data){
//                  var html = "<li></li>"
//                  + "<li></li>"
//                  + "<li></li>"
//                  + "<li></li>"
//                  + "<li></li>"
//                  + "<li></li>"
//                  + "<li></li>"
//                  + "<li></li>"
//                  + "<li></li>"
//                  + "<li></li>";
//                  common.append($('.enjoy ul'), html);
//                   //  var result = '';
//                   //  counter++;
//                   //  pageEnd = num * counter;
//                   //  pageStart = pageEnd - num;
//                    //
//                   //  for(var i = pageStart; i < pageEnd; i++){
//                   //    console.log("aaaa"+data);
//                   //      result +=   i+"aaaaaaaaaaaaaaa";
//                   //     //  if((i + 1) >= data.wap_onlyphone.length){
//                   //     //      // 锁定
//                   //     //      me.lock();
//                   //     //      // 无数据
//                   //     //      me.noData();
//                   //     //      break;
//                   //     //  }
//                   //  }
//                    //common.append($('.enjoy ul'), result);
//                    // 每次数据加载完，必须重置
//                    me.resetload();
//
//                }
//
//            });
//         }
//     });
// });


// $.ajax({
//   url: '/api/list.php',
//   success: function (res) {
//     var html = template('list', res);
//     common.inner($('#index-scroll'), html);
//   }
// });
//
// window.onload = function () {
//   var myScroll = new IScroll(".oobody");
// };



//
// $.ajax({
//   url: '/api/list.php',
//   success: function (res) {
//     var strScrollTop = '<div><div class="head"> \
//         <img src="/build/images/arrow.png"/> \
//         <span>下拉刷新...</span> \
//     </div>';
//
//     var strScrollBottom = '<div class="foot"> \
//         <img src="/build/images/arrow.png"/> \
//         <span>上拉加载更多...</span> \
//     </div></div>';
//
//     var html = template('list', res);
//
//     html = strScrollTop + html + strScrollBottom;
//
//     common.inner($('#index-scroll'), html);
//   }
// });
//
