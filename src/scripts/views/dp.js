var str = require('../tpls/dp.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), str);

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
var pstoreId = request.storeId;
var pstar;
var pend;

//getdata("http://service.ule.com/api/item/searchItems.do?jsonApiCallback=jsonp3&storeId=10217&sort=9&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475581481245", "append", ".shops");

Zepto(function() {
	$('#tapul').on('tap', function() {

		$('.ulfgc').removeClass('hide');

		$('.ulfgc').on('tap', function() {
			$('.ulfgc').addClass('hide');
		})
	})
	var myScroll = new IScroll('#dp-iscrall', {
		scrollbars: true,
		mouseWheel: true,
		fadeScrollbars: true
	});
	var pstart = 1;
	var pend = 3;
	var phdfun = 1;
	var num = 0;
	var url = "http://service.ule.com/api/item/searchItems.do?jsonApiCallback=jsonp" + phdfun + "&storeId=" + pstoreId + "&sort=9&start=" + pstart + "&end=" + pend + "&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475559282206";

	//打开页面首次加载数据

	$.ajax({
		type: "GET",
		url: url,
		dataType: "jsonp",
		success: function(data) {
			// console.log(data.returnCode);
			// console.log(data.listInfo.listInfos[0].listname);

			console.log(data);

			var bestshopli = template('bestshop', data.listInfo);
			common.append($(".shops"), bestshopli);
			pullDownAction(1, cl1);
			myScroll.refresh();
		}
	});

	//封装上拉AJAX加载函数
	function pullDownAction(num, cfn) {
		//num need >=2
		num++;
		pstart = 10 * (num - 1) + 1;
		pend = 10 * num;
		phdfun++;
		url = "http://service.ule.com/api/item/searchItems.do?jsonApiCallback=jsonp" + phdfun + "&storeId=" + pstoreId + "&sort=9&start=" + pstart + "&end=" + pend + "&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475559282206";
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
		console.log("加载数据成功")
		console.log(cdata);
		template.config("escape", false);
		var strScrollBottom = '<div class="foot"> \
        <img src="/build/images/arrow.png"/> \
        <span>上拉加载更多...</span> \
   </div>';
		var norshopli = template('norshops', cdata.listInfo);
		norshopli = norshopli + strScrollBottom;
		common.append($(".shops"), norshopli);

		myScroll.refresh();
	}

	function cl2(cdata) {
		console.log("加载数据成功")
		console.log(cdata);
		template.config("escape", false);
		var norshopli2 = template('norshops', cdata.listInfo);
		common.renderBody($(".foot"), norshopli2);
		myScroll.refresh();
	}

	var foot = $('.foot img'),
		bottomImgHasClass = foot.hasClass('down');
	myScroll.on('scroll', function() {
		var y = this.y,
			maxY = this.maxScrollY - y;
		if(maxY >= 0) {
			!bottomImgHasClass && foot.addClass('down');
			return '';
		}
	});

	myScroll.on('scrollEnd', function() {
		var maxY = this.maxScrollY - this.y;
		if(maxY > -35 && maxY < 0) {
			var self = this;
			myScroll.scrollTo(0, self.maxScrollY + 35);
			foot.removeClass('down')
		} else if(maxY >= 0) {
			foot.attr('src', '/build/images/ajax-loader.gif');
			//TODO ajax上拉加载数据
			var self = this;
			setTimeout(function() {
				pullDownAction(2, cl2);
				myScroll.refresh();

				myScroll.scrollTo(0, self.y + 35);
				foot.removeClass('down');
				foot.attr('src', '/build/images/arrow.png');
			}, 1000);
		}
	});

})

/*Zepto(function() {
	var url='http://np.ule.com/item/searchItems.do?jsonApiCallback=jsonp';
	var urljsonp=1;
	var url2='&fsop=0&start=';
	var url3='&end=';
	var url4='&keyWords=%25E8%258B%25B9%25E6%259E%259C&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475305091958'
	var temp=[];
	var times=1;
//iscroll初始化，并设置样式
	var myScroll = new IScroll('#index-scroll', {
		scrollbars: true,
		mouseWheel: true,
		fadeScrollbars:true
	});
	$('.iScrollVerticalScrollbar').css('width','3px');
//iscroll停止滚动监听事件
	myScroll.on('scrollEnd', function(){
			 // console.log(this.y+'&'+this.maxScrollY);
			 if((this.maxScrollY-this.y)>=-20){
				console.log('ok');
				times++;
				pullDownAction(times);
			


			 }
	});
*/
//封装上拉AJAX加载函数
/* function pullDownAction(num){
 	//num need >=2
 	var start=10 * (num - 1) + 1;
 	var end=10 * num;
 	console.log(url+num+url2+start+url3+end+url4);
		$.ajax({
		type: "GET",
		url: url+num+url2+start+url3+end+url4,
		dataType: "jsonp",
		success: function(data) {
		// console.log(data);
		// console.log(data.listInfo.listInfos[0].listname);
		if(data.returnCode=='0000'){
			for(var i=0;i<data.listInfo.length;i++){
			temp.push(data.listInfo[i]);
		}
		template.config("escape", false);
		 var html = template('list', temp);
		 $('.loadli').before(html);
		 myScroll.refresh();
		}else{
			 $('.loadli').html('没有更多的数据了！');
		}
		
		}
	});

	
}

//打开页面首次加载数据
$.ajax({
		type: "GET",
		url: url+urljsonp+url2+1+url3+10+url4,
		dataType: "jsonp",
		success: function(data) {
		// console.log(data.returnCode);
		// console.log(data.listInfo.listInfos[0].listname);

		temp=data.listInfo;
		 var newdata=temp.listInfos;
				 console.log(newdata);
				 newdata.sort(function(a,b){
				 	return a.pointPrice-b.pointPrice;
				 });
		template.config("escape", false);
		 var html = template('list', temp);
		 $('.loadli').before(html);
		 myScroll.refresh(); 
	
	
		}
	});
*/

/*window.onload = function () {
  var myScroll = new IScroll('#dp-iscrall', {
      probeType: 3,
      mouseWheel: true
  });
  function getdata(curl) {
	$.ajax({
		type: "get",
		url: curl,
		dataType: "jsonp",
		success: function(data) {
			console.log(data);
			console.log(data.listInfo.listInfos[0]);
			console.log(data.listInfo.listInfos[0].imgUrl);
			var bestshopli = template('bestshop', data.listInfo);
			common.append($(".shops"), bestshopli);

		}

	});
}
getdata(url);
};*/