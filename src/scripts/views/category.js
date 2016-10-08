var str = require('../tpls/category.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);



document.onload=function(){
	var myScroll = new IScroll('.scroller-l', {
		scrollbars: true,
		mouseWheel: true,
		fadeScrollbars:true
	});
}



Zepto(function() {
$('.first-type li').tap(function(){
	var num=$(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	$('.scroller-r').find('.second-type').eq(num).removeClass('subcate-hide').siblings().addClass('subcate-hide');
});


});