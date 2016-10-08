var list = require('../tpls/list.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), list);

Zepto(function() {
	
	
	var url='http://np.ule.com/item/searchItems.do?jsonApiCallback=jsonp';
	var urljsonp=1;
	var fsop='&fsop=';
	var url2='&start=';
	var url3='&end=';
	var url4='&keyWords=%25E8%258B%25B9%25E6%259E%259C&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=';
	var temp=[];
	var times=0;
	var times1=0;
	var times2=0;
	var times3=0;
	var flag=0;
start(0);
//iscroll初始化
	var myScroll = new IScroll('#index-scroll', {
		scrollbars: true,
		mouseWheel: true,
		fadeScrollbars:true,
		click:true

	});

//iscroll停止滚动监听事件
	myScroll.on('scrollEnd', function(){

			 // console.log(this.y+'&'+this.maxScrollY);
			 if((this.maxScrollY-this.y)>=-20){
				console.log('ok');
				times++;
				switch(flag){
					case 0: times1++; pullDownAction(times1,0); break;
					case 2: times2++; pullDownAction(times2,2); break;
					case 3: times3++; pullDownAction(times3,3); break;
				}

			 }
	});

//封装上拉AJAX加载函数
 function pullDownAction(num,list){
 	//num need >=2
 	var start=10 * (num - 1) + 1;
 	var end=10 * num;
 	var data=new Date().getTime();
 	// var urll=url+num+fsop+list+url2+start+url3+end+url4+data;
 	//console.log(url+num+url2+start+url3+end+url4+data);
		$.ajax({
		type: "GET",
		url: url+times+fsop+list+url2+start+url3+end+url4+data,
		dataType: "jsonp",
		success: function(data) {
		
		if(data.returnCode=='0000'){
			temp=data.listInfo;
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
function start(list){
	times1=0;
	times2=0;
	times3=0;
	times++;
	var data=new Date().getTime();
	$.ajax({
		type: "GET",
		url: url+times+fsop+list+url2+1+url3+10+url4+data,
		dataType: "jsonp",
		success: function(data) {
		// console.log(data.returnCode);
		 //console.log(data.listInfo.listInfos);

		temp=data.listInfo;
		template.config("escape", false);
		 var html = template('list', temp);
		 $('.loadli').before(html);
		 myScroll.refresh(); 
	
	
		}
	});
	
}


	//----------------------------------
	var taptime = 0;
	$('#order>li').on('tap', function() {
		var _this = $(this);
		$(this).parent().find('span').removeClass("focus");
		$(this).children('span').addClass('focus');
		if($(this).find('span').hasClass('hot')) {
			$('.price').find('.up').css('display', "none");
			$('.price').find('.down').css('display', "none");
			flag=0;
		$('#ul-list>li').remove();
		$('#ul-list').append('<li class="loadli"><span>正在加载数据...</span></li>');
		myScroll.refresh();
		start(0);
		}

		if($(this).find('.price').hasClass('focus')) {
			taptime++;
			if(taptime == 1) {
				_this.find('.up').css('display', "inline-block");
				_this.find('.down').css('display', "none");
	
		flag=3;

		$('#ul-list>li').remove();
		$('#ul-list').append('<li class="loadli"><span>正在加载数据...</span></li>');
		myScroll.refresh();
		start(3);
			} else if(taptime == 2) {
				taptime = 0;
				_this.find('.up').css('display', "none");
				_this.find('.down').css('display', "inline-block");
				$('#ul-list>li').remove();
		flag=2;
		$('#ul-list>li').remove();
		$('#ul-list').append('<li class="loadli"><span>正在加载数据...</span></li>');
		myScroll.refresh();
		start(2);


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