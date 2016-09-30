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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(2);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(3);

	var header = __webpack_require__(4);
	var footer = __webpack_require__(5);
	var common = __webpack_require__(6);

	common.renderBody($('body'), str);
	common.append($('.container'), header);
	common.append($('.container'), footer);
	// common.switchPage(0);
	//
	// // swiper 定义
	// var mySwiper = new Swiper('#index-swiper', {
	//   onSlideChangeEnd: function(swiper){
	//     $('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
	//   }
	// });
	$('#cclose').on('tap', function () {
	  $('footer').css('display','none');
	});
	// swiper 定义
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    spaceBetween: 30,
	    centeredSlides: true,
	    autoplay: 2500,
	    autoplayDisableOnInteraction: false,
	    loop:true
	});
	//
	// $.ajax({
	//   url: '/api/list.php',
	//   success: function (res) {
	//     var html = template('list', res);
	//     common.inner($('#index-scroll'), html);
	//   }
	// });
	//
	// window.onload = function () {
	//   var myScroll = new IScroll("#index-scroll");
	// };



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">  <section class=\"section-con\">    <div class=\"swiper-container\">        <div class=\"swiper-wrapper\">            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160928/6198a9da4987bb6a_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160927/ad07426b72d4f108_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160928/3d75e40c4208ba5f_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160829/4916a913696fefaf_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160919/56b96aeb6c1999be_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160923/f54446a9d249b77a_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160926/44060d43b3ae9888_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160926/11d9cec36c52de71_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160920/3bbc69259aa7d068_-1x-1.jpg\"/></div>        </div>        <div class=\"swiper-pagination\"></div>    </div>  </section></div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<header>  <div class=\"ctit_list\"></div>  <input type=\"text\" placeholder=\"iphone 7\" id=\"ckeyWord\">  <div class=\"clogin\">登录</div></header>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<footer>  <div class=\"clogo-red\"></div>  <p class=\"cfootp\">疯狂逢9秒，特价天天享！</p>  <a href=\"http://a.app.qq.com/o/simple.jsp?pkgname=com.tom.ule.ui&amp;g_f=994283\" class=\"downloadBtn\">立即下载</a>  <em id=\"cclose\">×</em></footer>"

/***/ },
/* 6 */
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



/***/ }
/******/ ]);