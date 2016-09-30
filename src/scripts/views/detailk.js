var str = require('../tpls/detail.string');
var common = require('../utils/common.util.js');
common.renderBody($('body'), str);

// swiper 定义
var mySwiper = new Swiper('.swiper-container',{
pagination : '.swiper-pagination',

})

