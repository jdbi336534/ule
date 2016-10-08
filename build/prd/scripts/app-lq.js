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

	module.exports = __webpack_require__(8);


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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(9);






/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(10);
	var common = __webpack_require__(4);

	common.renderBody($('body'), str);

	common.switchPage(0);

	window.onload = function () {
	  var myScroll = new IScroll("#lq-scroll");
	  var myscroll2=new IScroll("#wrapper",{hScrollbar:false, vScrollbar:false});
	   
	};
	/*
	 * GET /api/item/searchItems.do?jsonApiCallback=jsonp2&storeId=13482&sort=9&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475773053207 HTTP/1.1
	 * 
	 * GET /api/item/searchItems.do?jsonApiCallback=jsonp2&storeId=10676&sort=9&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475773130804 HTTP/1.1
	 * 
	 * GET /api/item/searchItems.do?jsonApiCallback=jsonp2&storeId=12969&sort=9&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475773139673 HTTP/1.1
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	// swiper 定义
	var mySwiper = new Swiper('#index-swiper', {
	  onSlideChangeEnd: function(swiper){
	    $('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
	  }
	});
	$('#swiper-nav li').on('tap', function () {
	  mySwiper.slideTo($(this).index());
	  $(this).addClass('active').siblings().removeClass('active');
	});

	$.ajax({
	  url: '/api/list.php',
	  success: function (res) {
	    var strScrollTop = '<div><div class="head"> \
	        <img src="/build/images/arrow.png"/> \
	        <span>下拉刷新...</span> \
	    </div>';

	    var strScrollBottom = '<div class="foot"> \
	        <img src="/build/images/arrow.png"/> \
	        <span>上拉加载更多...</span> \
	    </div></div>';

	    var html = template('list', res);

	    html = strScrollTop + html + strScrollBottom;

	    common.inner($('#index-scroll'), html);
	  }
	});

	window.onload = function () {
	  var myScroll = new IScroll('#index-scroll', {
	      probeType: 3,
	      mouseWheel: true
	  });
	  myScroll.scrollBy(0, -35);

	  var head = $('.head img'),
	      topImgHasClass = head.hasClass('up');
	  var foot = $('.foot img'),
	      bottomImgHasClass = head.hasClass('down');

	  myScroll.on('scroll', function () {
	      var y = this.y,
	          maxY = this.maxScrollY - y;
	      if (y >= 0) {
	          !topImgHasClass && head.addClass('up');
	          return '';
	      }
	      if (maxY >= 0) {
	          !bottomImgHasClass && foot.addClass('down');
	          return '';
	      }
	  });

	  myScroll.on('scrollEnd', function () {
	      if (this.y >= -35 && this.y < 0) {
	          myScroll.scrollTo(0, -35);
	          head.removeClass('up');
	      } else if (this.y >= 0) {
	          head.attr('src', '/build/images/ajax-loader.gif');
	          //TODO ajax下拉刷新数据

	          setTimeout(function () {
	              myScroll.scrollTo(0, -35);
	              head.removeClass('up');
	              head.attr('src', '/build/images/arrow.png');
	          }, 1000);
	      }

	      var maxY = this.maxScrollY - this.y;
	      if (maxY > -35 && maxY < 0) {
	          var self = this;
	          myScroll.scrollTo(0, self.maxScrollY + 35);
	          foot.removeClass('down')
	      } else if (maxY >= 0) {
	          foot.attr('src', '/build/images/ajax-loader.gif');
	          //TODO ajax上拉加载数据


	          var self = this;
	          setTimeout(function () {
	              $('.foot').before(
	                  '<div class="item">add 1</div>'+
	                  '<div class="item">add 2</div>'+
	                  '<div class="item">add 3</div>'+
	                  '<div class="item">add 4</div>'+
	                  '<div class="item">add 5</div>'
	              );
	              myScroll.refresh();

	              myScroll.scrollTo(0, self.y + 35);
	              foot.removeClass('down');
	              foot.attr('src', '/build/images/arrow.png');
	          }, 1000);
	      }
	  });
	};
	*/


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header class=\"headerk\">		<ul id=\"tapul\">			<li class=\"iconfont\">&#xe679;</li>			<li>领券中心</li>			<li class=\"iconfont\">&#xe6b7;</li>		</ul>	</header>	<section class=\"test\" id=\"wrapper\">		<ul class=\"scroll\">			<li class=\"active\">特色美食</li>			<li>家用电器</li>			<li>家居生活</li>			<li>箱包鞋子</li>			<li>美妆/洗护</li>			<li>运动/户外</li>			<li>母婴/玩具</li>			<li>厨卫清洁</li>			<li>进口食品</li>			<li>魅力男装</li>			<li>女装/饰品</li>			<li>手机/数码</li>			<li>汽车用品</li>			<li>电脑办公</li>			<li>商务礼品</li>			<li>图书/影响</li>		</ul>	</section>	<section class=\"bodylq\" id=\"lq-scroll\">		<div class=\"boxx\" id=\"boxx\">			<div class=\"dpq d1\">				<h6>		<a href=\"#\">			抓鱼旗舰店			<span>更多			<i class=\"moreIcon\"></i>			</span>		</a>			</h6>				<ul>					<li>						<div class=\"left\">							<p class=\"p1\">							</p>							<p class=\"p2\">								<span class=\"span1\">抓鱼店铺装用券</span>								<span class=\"span2\">￥<i>5</i></span>								<span class=\"span3\">情满88元使用</span>							</p>						</div>						<div class=\"right\">							<p class=\"wp\">								<p id=\"np\">vx</p>								<p>已领取</p>							</p>							<p class=\"px\">								立即领取							</p>						</div>					</li>					<li>						<div class=\"left\">							<p class=\"p1\">							</p>							<p class=\"p2\">								<span class=\"span1\">抓鱼店铺装用券</span>								<span class=\"span2\">￥<i>5</i></span>								<span class=\"span3\">情满88元使用</span>							</p>						</div>						<div class=\"right\">							<p class=\"wp\">								<p id=\"np\">vx</p>								<p>已领取</p>							</p>							<p class=\"px\">								立即领取							</p>						</div>					</li>					<li>						<div class=\"left\">							<p class=\"p1\">							</p>							<p class=\"p2\">								<span class=\"span1\">抓鱼店铺装用券</span>								<span class=\"span2\">￥<i>5</i></span>								<span class=\"span3\">情满88元使用</span>							</p>						</div>						<div class=\"right\">							<p class=\"wp\">								<p id=\"np\">vx</p>								<p>已领取</p>							</p>							<p class=\"px\">								立即领取							</p>						</div>					</li>					<li>						<div class=\"left\">							<p class=\"p1\">							</p>							<p class=\"p2\">								<span class=\"span1\">抓鱼店铺装用券</span>								<span class=\"span2\">￥<i>5</i></span>								<span class=\"span3\">情满88元使用</span>							</p>						</div>						<div class=\"right\">							<p class=\"wp\">								<p id=\"np\">vx</p>								<p>已领取</p>							</p>							<p class=\"px\">								立即领取							</p>						</div>					</li>				</ul>			</div>			<div class=\"dpq d2\">				<h6>		<a href=\"#\">			抓鱼旗舰店			<span>更多			<i class=\"moreIcon\"></i>			</span>		</a>			</h6>				<ul>					<li>						<div class=\"left\">							<p class=\"p1\">							</p>							<p class=\"p2\">								<span class=\"span1\">抓鱼店铺装用券</span>								<span class=\"span2\">￥<i>5</i></span>								<span class=\"span3\">情满88元使用</span>							</p>						</div>						<div class=\"right\">							<p class=\"wp\">								<p id=\"np\">vx</p>								<p>已领取</p>							</p>							<p class=\"px\">								立即领取							</p>						</div>					</li>				</ul>			</div>		</div>	</section></div>"

/***/ }
/******/ ]);