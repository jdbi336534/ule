var list = require('../tpls/list.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), list);


Zepto(function() {
	var url='http://np.ule.com/item/searchItems.do?jsonApiCallback=jsonp';
	var urljsonp=1;
	var url2='&fsop=0&start=';
	var url3='&end=';
	var url4='&keyWords=%25E8%258B%25B9%25E6%259E%259C&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475305091958'
	var temp=[];
	var times=1;

//iscroll初始化
	var myScroll = new IScroll('#index-scroll', {
		scrollbars: true,
		mouseWheel: true,
		fadeScrollbars:true

	});

//iscroll停止滚动监听事件
	myScroll.on('scrollEnd', function(){

			 // console.log(this.y+'&'+this.maxScrollY);
			 if((this.maxScrollY-this.y)>=-20){
				console.log('ok');
				times++;
				pullDownAction(times);
			


			 }
	});

//封装上拉AJAX加载函数
 function pullDownAction(num){
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
		 // var newdata=temp.listInfos;
			// 	 console.log(newdata);
			// 	 newdata.sort(function(a,b){
			// 	 	return a.pointPrice-b.pointPrice;
			// 	 });
		template.config("escape", false);
		 var html = template('list', temp);
		 $('.loadli').before(html);
		 myScroll.refresh(); 
	
	
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
	// 		 	console.log(temp.listInfos[0].pointPrice);
	// 			 var newdata=temp.listInfos;
	// 			 console.log(newdata);
	// 			 newdata.sort(function(a,b){
	// 			 	return a.pointPrice-b.pointPrice;
	// 			 });
	// 			console.log(temp);
 //              var str='	{{each listInfos as value i}}\
	// 					<li>\
	// 						<a href="#" listingid={{value.listingId}}>\
	// 							<img src={{value.imgurl}}>\
	// 							<p class="name">{{value.listname}}</p>\
	// 							<p class="price"><span class="minPrice">¥{{value.pointPrice}}</span><span class="maxPrice"><del>¥{{value.maxPrice}}</del></span></p>\
	// 						</a>\
	// 					</li>\
	// 					{{/each}}';
 // $('#list').html('');
 //           $('#list').html(str);
 // var html = template('list', temp);
	// 	 $('.loadli').before(html);
	// 	 myScroll.refresh(); 


             
 //           $('body').html('');
 //           common.renderBody($('body'), list);
 // template.config("escape", false);
	// 	 var html = template('list', temp);
	// 	 $('.loadli').before(html);
	// 	 var myScroll = new IScroll('#index-scroll', {
	// 	scrollbars: true,
	// 	mouseWheel: true,
	// 	fadeScrollbars:true
	// });
	// $('.iScrollVerticalScrollbar').css('width','3px');
	// 	 myScroll.refresh(); 
				













			} else if(taptime == 3) {
				taptime = 1;
				_this.find('.up').css('display', "none");
				_this.find('.down').css('display', "inline-block");
			}

		}

	});

	//过滤
	$('.filter').on('tap',function(){
		$('.fixed').fadeToggle('fast');
		if($('.fixLeft').hasClass('outer')){
			$('.fixLeft').removeClass('outer').animate({'right':-250});
			clearTimeout(timerrr);
			var timerrr=setTimeout(function() {
				$('.fixLeft').css('display','none')
			}, 500);
		}else{
			$('.fixLeft').addClass('outer').css('display','block').animate({'right':0});
		}
		
	});
	$('p.title').tap(function(event){
	//	console.log($(event.target));
		var that=$(this);
	//	console.log($(event.target));
		if(that.find('i').hasClass('focus')){
			that.find('i').removeClass('focus');
			that.parent().find('ol').css('display','none');
		}else{
			that.find('i').addClass('focus');
			that.parent().find('ol').css('display','block');
		}
	});

$('p.checked').tap(function(event){
		var that=$(this);
		//console.log($(event.target));
		if(that.find('i').hasClass('focus')){
			that.find('i').removeClass('focus');
		}else{
			that.find('i').addClass('focus');
		}
		
	});

$('.attrUl ol li').tap(function(event){
	var that=$(this);
	$('.attrUl ol li i').removeClass('focus');
	// console.log($(event.target));
	if(that.find('i').hasClass('focus')){
			that.find('i').removeClass('focus');
		}else{
			that.find('i').addClass('focus');
		}

});

$('.filterUl li').tap(function(event){
	var that=$(this);
	var num=$(this).index();
//	console.log(num);
	if(num==0){
		$('.attrContent').css('display','block');
		$('.placeContent').css('display','none');
	}else{
		$('.attrContent').css('display','none');
		$('.placeContent').css('display','block');
	}
	$('.filterUl li span').removeClass('focus');
	
	if(that.find('span').hasClass('focus')){
			that.find('span').removeClass('focus');
			

		}else{
			that.find('span').addClass('focus');
			
		}

});


$('.placeContent li').tap(function(){
	var that=$(this);
	$('.placeContent').find('i').removeClass('focus');
	if(that.find('i').hasClass('focus')){
			that.find('i').removeClass('focus');
			
		}else{
			that.find('i').addClass('focus');

		}
});
$('.placeContent p').tap(function(){
	var that=$(this);
	$('.placeContent').find('i').removeClass('focus');
	if(that.find('i').hasClass('focus')){
			that.find('i').removeClass('focus');
			
		}else{
			that.find('i').addClass('focus');

		}
});










































});