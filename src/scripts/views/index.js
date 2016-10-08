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
    var url = result.wap_onlyphone[i].link.split('/');
    // console.log(url[url.length-1]);
    var html = '<li class="swiper-slide"><a href="/build/detail.html?listId='+url[url.length-1]+'" class="logB"> <img src="'+ result.wap_onlyphone[i].imgUrl +'"> <p> <span class="b_tit">'+result.wap_onlyphone[i].title+'</span> <i class="b_price">'+ JSON.parse(result.wap_onlyphone[i].customAttribute).price+'</i> </p> </a> </li>'
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

//猜您喜欢
var enjoySrc = document.createElement('script');
enjoySrc.src = "http://service.ule.com/api/mobile/indexListingCommentGet.do?jsonApiCallback=enjoy&sectionKeys=ule_index2&moduleKeys=ule_android_index_prodlist&startIndex=0&pageSize=10&type=1&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475673963218";
document.body.appendChild(enjoySrc);
window.enjoy = function (result) {
  $('.enjoy ul').html("");
  for(var i=0;i<result.result.length;i++){
    console.log(result.result[i].listingId);
  var url = result.result[i].itemId.split(" ");

    var html = '<li><a href="/build/detail.html?listId='+result.result[i].listingId+'"><img width="176" height="176" src="'+result.result[i].imgUrl+'"> <p class="goodsName">'+result.result[i].listingName+'</p><p class="price"><del>¥'+result.result[i].maxPrice+'</del><br>¥'+result.result[i].minPrice+'<span class="zhe">'+(parseInt(result.result[i].minPrice)*10/parseInt(result.result[i].maxPrice)).toFixed(1)+'折</span></p></a></li>';
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
$('#search_btn').on('tap', function () {
  var inputSearch = $("#searchkeyWord").val();
  if(!inputSearch){
    inputSearch="iphone 7";
  }
  $('#search_btn').attr("href","http://www.ule.com/ulewap/npwap.html?keyWords="+inputSearch);
});

//
// var str = '<a class="go_back" href="#top"  target="_self"></a><a class="shopping_cart" href="car.html"></a>'
// $(".fixed_btn").html("");
// common.append($('.fixed_btn'), str);
