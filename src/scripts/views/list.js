var list = require('../tpls/list.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), list);

Zepto(function() {

	$.ajax({
		type: "GET",
		url: "http://np.ule.com/item/searchItems.do?jsonApiCallback=jsonp1&fsop=0&start=11&end=20&keyWords=%25E8%258B%25B9%25E6%259E%259C&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475305091958",
		dataType: "jsonp",
		success: function(data) {
		console.log(data);
		console.log(data.listInfo.listInfos[0].listname);
		template.config("escape", false);
		 var html = template('list', data.listInfo);
		 $('.loadli').before(html);
//		 common.inner($('#ul-list'), html);
		 
		 
		 
		 var myScroll = new IScroll('#index-scroll', {
		vScrollbar: true,
		mouseWheel: true
	});
		}
	});
	//----------------------------------
	var taptime = 0;
	$('#order>li').on('tap', function() {
		var _this = $(this);
		$(this).parent().find('span').removeClass("focus");
		$(this).children('span').addClass('focus');
		if($(this).find('span').hasClass('hot')) {
			$('.price').find('.up').css('display', "none");
			$('.price').find('.down').css('display', "none");
		}

		if($(this).find('.price').hasClass('focus')) {
			taptime++;
			if(taptime == 2) {
				_this.find('.up').css('display', "inline-block");
				_this.find('.down').css('display', "none");
			} else if(taptime == 3) {
				taptime = 1;
				_this.find('.up').css('display', "none");
				_this.find('.down').css('display', "inline-block");
			}

		}

	});

});