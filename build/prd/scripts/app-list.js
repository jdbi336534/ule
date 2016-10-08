/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	  renderBody: function ($el, str) {
	    $el.prepend(str);
	  },
	  inner: function ($el, str) {
	    $el.html(str);
	  },
	  append: function ($el, str) {
	    $el.append(str);
	  },

	  switchPage: function (index) {
	    $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	  }
	};

	module.exports = common;



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(6);



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var list = __webpack_require__(7);

	var common = __webpack_require__(4);

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


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header>		<ul>			<li> <a href=\"#\"><i class=\"iconfont\">&#xe679;</i></a></li>			<li>苹果</li>			<li class=\"filter\"></li>		</ul>	</header>	<section>	<div class=\"fixed\"></div>	<div class=\"fixLeft\">      <ul class=\"filterUl\">   <li><span class=\"focus\">属性</span></li>   <li><span class=\"\">所在地</span></li>   </ul>   <div class=\"attrContent\" style=\"transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);\">   <ul class=\"attrUl\"><li><p class=\"title\">品牌<i></i></p><ol><li brandid=\"11256\"><span>洛川苹果</span><i></i></li><li brandid=\"19134\"><span>郜台</span><i></i></li><li brandid=\"39375\"><span>好彭邮</span><i></i></li><li brandid=\"30055\"><span>农家自产</span><i></i></li><li brandid=\"29013\"><span>帝安</span><i></i></li><li brandid=\"27304\"><span>关李</span><i></i></li><li brandid=\"32784\"><span>绿源凯歌/LYKG</span><i></i></li><li brandid=\"20286\"><span>WUXINGGUOPIN</span><i></i></li><li brandid=\"28572\"><span>黄灵</span><i></i></li><li brandid=\"25324\"><span>西山龙</span><i></i></li><li brandid=\"39551\"><span>杞农优食</span><i></i></li><li brandid=\"37800\"><span>富岗</span><i></i></li><li brandid=\"34391\"><span>广志</span><i></i></li><li brandid=\"34350\"><span>秦盛</span><i></i></li><li brandid=\"41468\"><span>包龙图</span><i></i></li><li brandid=\"25249\"><span>方德蜂园</span><i></i></li><li brandid=\"9939\"><span>泰优汇</span><i></i></li><li brandid=\"26934\"><span>草鲜禾堂</span><i></i></li><li brandid=\"32756\"><span>美域高</span><i></i></li><li brandid=\"31164\"><span>银铃</span><i></i></li><li brandid=\"26227\"><span>绿水峡谷</span><i></i></li><li brandid=\"40242\"><span>旺园</span><i></i></li><li brandid=\"20256\"><span>阿丽米罕</span><i></i></li><li brandid=\"23617\"><span>梨花香</span><i></i></li><li brandid=\"27392\"><span>锦曙光</span><i></i></li></ol></li><li><p class=\"title\">优惠<i></i></p><ol><li promotionid=\"13\">区域限购<i></i></li></ol></li><li><p class=\"checked\">支持邮乐卡支付<i class=\"focus\"></i></p></li><li><p class=\"checked\">商家包邮<i></i></p></li><li><p class=\"\">价格区间</p><div class=\"price\"><input type=\"text\" placeholder=\"0\" name=\"minPrice\">—<input type=\"text\" placeholder=\"∞\" name=\"maxPrice\"></div></li></ul>   </div>         <div class=\"placeContent\" style=\"transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1); display: none;\">       <p class=\"allPlace\">所有地区<i class=\"focus\"></i></p>       <ol><li provinceid=\"21\">内蒙古<i></i></li><li provinceid=\"19\">辽宁<i></i></li><li provinceid=\"18\">吉林<i></i></li><li provinceid=\"11\">黑龙江<i></i></li><li provinceid=\"25\">上海<i></i></li><li provinceid=\"2\">北京<i></i></li><li provinceid=\"30\">天津<i></i></li><li provinceid=\"10\">河北<i></i></li><li provinceid=\"26\">山西<i></i></li><li provinceid=\"4\">福建<i></i></li><li provinceid=\"17\">江西<i></i></li><li provinceid=\"24\">山东<i></i></li><li provinceid=\"12\">河南<i></i></li><li provinceid=\"14\">湖北<i></i></li><li provinceid=\"16\">江苏<i></i></li><li provinceid=\"34\">浙江<i></i></li><li provinceid=\"1\">安徽<i></i></li><li provinceid=\"7\">广西<i></i></li><li provinceid=\"9\">海南<i></i></li><li provinceid=\"29\">台湾<i></i></li><li provinceid=\"3\">重庆<i></i></li><li provinceid=\"28\">四川<i></i></li><li provinceid=\"8\">贵州<i></i></li><li provinceid=\"15\">湖南<i></i></li><li provinceid=\"6\">广东<i></i></li><li provinceid=\"5\">甘肃<i></i></li><li provinceid=\"23\">青海<i></i></li><li provinceid=\"22\">宁夏<i></i></li><li provinceid=\"31\">新疆<i></i></li><li provinceid=\"13\">香港<i></i></li><li provinceid=\"20\">澳门<i></i></li><li provinceid=\"35\">海外<i></i></li><li provinceid=\"33\">云南<i></i></li><li provinceid=\"32\">西藏<i></i></li><li provinceid=\"27\">陕西<i></i></li></ol>   </div>      <div class=\"bottmBtn\">     <a href=\"javascript:void(0);\">确定</a>   </div>   </div>		<section id=\"index-scroll\">			<div>				<ul id=\"order\">					<li>						<span class=\"hot focus\">人气</span>					</li>					<li><span class=\"price\">价格					<i class=\"up\"></i>					<i class=\"down\"></i></span>					</li>				</ul>				<ul id=\"ul-list\">					<!--<li>						<a href=\"#\" listingid=\"1317405\">							<img src=\"http://pic2.ule.com/pic/user_800111024/product/prd20160110/d4d3325040c2beff_p800x800.jpg\">							<p class=\"name\">【洛川<em>苹果</em>】陕西<em>苹果</em>延安洛川<em>苹果</em>红富士<em>苹果</em>新鲜水果<em>苹果</em>约18斤40枚80装</p>							<p class=\"price\"><span class=\"minPrice\">¥138.0</span><span class=\"maxPrice\"><del>¥218.0</del></span></p>						</a>					</li>-->					<script id=\"list\" type=\"text/html\">						{{each listInfos as value i}}						<li>							<a href=\"#\" listingid={{value.listingId}}>								<img src={{value.imgurl}}>								<p class=\"name\">{{value.listname}}</p>								<p class=\"price\"><span class=\"minPrice\">¥{{value.pointPrice}}</span><span class=\"maxPrice\"><del>¥{{value.maxPrice}}</del></span></p>							</a>						</li>						{{/each}}					</script>									<li class=\"loadli\">						<span>正在加载数据...</span>					</li>				</ul>			</div>			<!-- </script>-->	</section>		</section></div>"

/***/ }
/******/ ]);