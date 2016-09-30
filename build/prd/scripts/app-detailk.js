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

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(7);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(8);
	var common = __webpack_require__(5);
	common.renderBody($('body'), str);

	// swiper 定义
	var mySwiper = new Swiper('.swiper-container',{
	pagination : '.swiper-pagination',

	})




/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"containerk\">	<header class=\"headerk\">		<ul>			<li class=\"iconfont\">&#xe679;</li>			<li>商品详情</li>			<li class=\"iconfont\">&#xe6b7;</li>		</ul>	</header>	<section class=\"bodyk\">		<div id=\"bannerimgk\">			<div class=\"swiper-container\" id=\"detailk-swiper\">				<div class=\"swiper-wrapper\">										<div class=\"swiper-slide\">						<section id=\"detailk-scroll1\">								<img src=\"http://pic.ule.com/m/pic/user_800111532/product/prd20160914/fa803c820cb389de_p800x800.jpg\"/>						</section>					</div>										<div class=\"swiper-slide\">						<section id=\"detailk-scroll2\">							<img src=\"http://pic.ule.com/m/pic/user_800111532/product/prd20160914/79874264f5849cf5_p800x800.jpg\"/>						</section>					</div>					<div class=\"swiper-slide\">						<section id=\"detailk-scroll3\">							<img src=\"http://pic.ule.com/m/pic/user_800111532/product/prd20160914/79874264f5849cf5_p800x800.jpg\"/>						</section>					</div>				  				  												</div>				<div class=\"swiper-pagination\">				  					  </div>						</div>					</div>				<p>			<span></span>			<i></i>			<b></b>		</p>		<section class=\"tjgwc\">			<p class=\"sx\"></p>			<p class=\"numberk\">				<ul class=\"numberulk\">					<li></li>					<li></li>					<li></li>				</ul>				<i>(库存495件)</i>			</p>		</section>				<section class=\"shopxx\">			<ul>				<li><a href=\"#\"></a></li>				<li><a href=\"#\"></a></li>				<li><a href=\"#\"></a></li>			</ul>		</section>		<section class=\"zffs\">			<p>支付方式：邮乐卡支付、邮储快捷支付</p>		</section>				<section class=\"rmshop\">			<ul>				<li></li>				<li></li>				<li></li>			</ul>		</section>			</section>	<footer class=\"footerk\">		<form>			<a href=\"#\" class=\"collectbtn\"></a>			<a href=\"#\" class=\"shopbtn\"></a>			<ul>								<li>立即购买</li>				<li>加入购物车</li>			</ul>		</form>	</footer></div>"

/***/ }
/******/ ]);