var str = require('../tpls/detail.string');
var common = require('../utils/common.util.js');
common.renderBody($('body'), str);

// swiper 定义
var mySwiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',

})

function UrlSearch() {
	var name, value;
	var str = location.href; //取得地址栏的url
	var num = str.indexOf("?"); //？ 的位置
	str = str.substr(num + 1); //取得所有参数  获取？后面的url内容。
	var arr = str.split("&"); //各个参数放到数组里  ["pid=1"]
	for(var i = 0; i < arr.length; i++) {
		num = arr[i].indexOf("=");
		if(num > 0) {
			name = arr[i].substring(0, num);
			value = arr[i].substr(num + 1);
			this[name] = value;
		}
	}
}
var request = new UrlSearch(); //实例化
var pid = request.listId;
var pstar;
var pend;
if(typeof(pid) == "undefined") {
	pid = 1662302;
}
var urll = "http://service.ule.com/api/item/searchItemsByListId.do?jsonApiCallback=jsonp1&listId=" + pid + "&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475679025017"

//打开页面首次加载数据

window.onload = function() {
	var myScroll = new IScroll("#detail-Iscrall", {

		tap: true,
		click: iScrollClick(), //调用判断函数
	});
	var storeId;

	var obj;

	$.ajax({
		type: "GET",
		url: urll,
		dataType: "jsonp",
		success: function(data) {

			cl1(data);
			pullDownAction(storeId, cl2)

		}
	});

	function iScrollClick() {
		if(/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
		if(/Chrome/i.test(navigator.userAgent)) return(/Android/i.test(navigator.userAgent));
		if(/Silk/i.test(navigator.userAgent)) return false;
		if(/Android/i.test(navigator.userAgent)) {
			var s = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3);
			return parseFloat(s[0] + s[3]) < 44 ? false : true
		}
	}

	function pullDownAction(cstoreId, cfn) {

		url = "http://service.ule.com/api/item/searchItems.do?jsonApiCallback=jsonp2&storeId=" + cstoreId + "&sort=2&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=147573165172";
		console.log(url);
		$.ajax({
			type: "GET",
			url: url,
			dataType: "jsonp",
			success: function(data) {
				if(data.returnCode == '0000') {
					cfn(data);
				} else {
					alert("没有更多的数据了！");
				}

			}
		});

	}

	function cl1(cdata) {
		storeId = cdata.storeId;
		obj = {
			"id": cdata.listId,
			"title": cdata.listName,
			"min": cdata.itemInfo[0].salePrice,
			"max": cdata.itemInfo[0].marketPrice,
			"num": 1,
			"img": cdata.listDescUrl
		}

		var boxstr = template('listimg', cdata.itemInfo[0]);
		common.append($(".swiper-wrapper"), boxstr);
		mySwiper.update();
		console.log(cdata.listName);
		console.log(cdata);
		var smstr = template('smdata', cdata);
		common.append($(".namei"), smstr);

		var newpricetr = template('newpricedata', cdata.itemInfo[0]);
		common.append($(".i1"), newpricetr);

		var oldpricetr = template('oldpricedata', cdata.itemInfo[0]);
		common.append($(".oldjg"), oldpricetr);
		if(cdata.promotionDesc) {
			var objpromotionDesc = JSON.parse(cdata.promotionDesc);
			var actesivtr = template('activedata', objpromotionDesc.events[0].event);
			common.append($(".activedata"), actesivtr);
		} else {
			$(".activedata").hide();
		}

		common.append($(".smdata"), smstr);

		var colorstr = template('sxdata', cdata);
		common.append($(".sx"), colorstr);

		var numstr = template('numdata', cdata);
		common.append($(".numberk"), numstr);

		var ljstr = template('ljdata', cdata);
		common.append($(".ljbox"), ljstr);
		/*var xqshopstr=template('xqshopdata',cdata);
		common.renderBody($(".shopxx"),xqshopstr);
		*/
		myScroll.refresh();

	}

	function cl2(cdata) {
		console.log(cdata.listInfo.listInfos);

		var rmshopstr = template('rmshopdata', cdata.listInfo);
		common.append($(".rmshop"), rmshopstr);

		myScroll.refresh();
	}

	var numshop = 0;
	var numtext;
	var numint = 0;
	var flag = false;
	$('#ml').on('tap', function() {

		$('.ulfgc').removeClass('hide');

		$('.ulfgc').on('tap', function() {
			$('.ulfgc').addClass('hide');
		})
	})
    $("#back").on('tap', function() {
    	window.history.back();

    })
	$('#add').on('tap', function() {

		numtext = $(".valuek").html();
		numint = parseFloat(numtext) + 0.5;
		console.log(numint);
		$(".valuek").html(numint);

	})
	$('.jj').on('tap', function() {
		numtext = $(".valuek").html();
		numint = parseFloat(numtext) - 0.5;
		$(".valuek").html(numint);

	})
	$('.jrgwc').on('tap', function() {
		numtext = $(".valuek").html();
		numint = parseFloat(numtext);
		numshop = numshop + numint;
		console.log(numshop);
		obj.num = numshop;
		$(".numshopgwc").html(numshop);
		console.log(obj);
		var str = JSON.stringify(obj);
		if(getCookie(obj.id)) {
			var getobj = JSON.parse(getCookie(obj.id));
			getobj.num = getobj.num + numshop;
			var getstr = JSON.stringify(getobj);
			setCookie(obj.id, getstr, 100);
		} else {
			setCookie(obj.id, str, 100);

		};

	})

	$('.collectbtn').on('tap', function() {
		flag = !flag;
		if(flag) {
			$('.collectbtn').addClass('collectedd');
		} else {
			$('.collectbtn').removeClass('collectedd');
		}
	})

	if(numshop > 0) {
		$('.shopbtn i').html(numshop);
		$('.shopbtn i').removeClass('hide');
	}

	window.getCookie = function(cookieName) {
		var cookieValue = "";
		var strCookies = document.cookie;
		var arrCookies = strCookies.split("; ");
		for(var i = 0; i < arrCookies.length; i++) {
			var arrItem = arrCookies[i].split("=");
			if(arrItem[0] == cookieName) {
				cookieValue = arrItem[1];
			}
		}
		return decodeURIComponent(cookieValue);

	}

	function setCookie(name, value, expiredays) {
		var date = new Date();
		date.setDate(date.getDate() + expiredays);
		document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date;
	}

}