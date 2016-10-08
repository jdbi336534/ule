var npstr = require('../tpls/npule.string');
var npcommon = require('../utils/common.util.js');
npcommon.renderBody($('body'), npstr);
// banner图
    var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop:true
});
//农品值得买
var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 'auto',
    paginationClickable: true
});
//农品值得买
var npSaleScr = document.createElement('script');
npSaleScr.src = "http://service.ule.com/api/mobile/indexListingCommentGet.do?jsonApiCallback=npSale&moduleKeys=ulenp_2016_mwap_cnxh&startIndex=0&pageSize=100&type=1&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475731183836";
document.body.appendChild(npSaleScr);
window.npSale = function (result) {
  console.log(result.result[0]);
  $('#onlyPhoneUl').html("");
  for(var i=result.result.length-1;i>=0;i--){
    var html = '    <li class="swiper-slide"><a href="#" target="_blank"><img src="'+result.result[i].imgUrl+' alt="/build/images/a71c6c945acafee9_p800x800_l.jpg""/><p><span class="b_tit">'+result.result[i].listingName+'</span><span class="b_discount">'+Math.ceil(parseInt(result.result[i].minPrice)*10/parseInt(result.result[i].maxPrice))+'折</span><span class="b_price"><strong>¥<i class="minPrice">'+Math.floor(parseFloat(result.result[i].minPrice))+'</i>.'+Math.floor(parseFloat(result.result[i].minPrice)*100%100)+'</strong></span></p></a></li>'
    npcommon.append($('#onlyPhoneUl'), html);
  }
  swiper2.update();
}
//为您推荐
var tuijianSrc = document.createElement('script');
tuijianSrc.src = "http://service.ule.com/api/mobile/indexListingCommentGet.do?jsonApiCallback=tuijian&moduleKeys=ulenp_2016_mwap_cnxh&startIndex=0&pageSize=100&type=1&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475731183836";
document.body.appendChild(tuijianSrc);
window.tuijian = function (result) {
  $('.enjoy ul').html("");
  for(var i=0;i<result.result.length;i++){
    var html = '<li><a href="#"><img width="176" height="176" src="'+result.result[i].imgUrl+' alt="/build/images/a71c6c945acafee9_p800x800_l.jpg""/> <p class="goodsName">'+result.result[i].listingName+'</p><p class="price"><del>¥'+result.result[i].maxPrice+'</del><br>¥'+result.result[i].minPrice+'<span class="zhe">'+(parseInt(result.result[i].minPrice)*10/parseInt(result.result[i].maxPrice)).toFixed(1)+'折</span></p></a></li>';
    npcommon.append($('.enjoy ul'), html);
  }
}

//查询
$('#ckeyWord').on('tap', function () {
  $('#search_container').css('display','block');
});
$('.close').on('tap', function () {
  $('#search_container').css('display','none');
});
