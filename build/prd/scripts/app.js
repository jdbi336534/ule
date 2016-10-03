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

	var list = __webpack_require__(3);

	var common = __webpack_require__(4);

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


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header>		<ul>			<li>1</li>			<li>苹果</li>			<li>2</li>		</ul>	</header>	<section>		<section id=\"index-scroll\">			<div>				<ul id=\"order\">					<li>						<span class=\"hot focus\">人气</span>					</li>					<li><span class=\"price\">价格					<i class=\"up\"></i>					<i class=\"down\"></i></span>					</li>				</ul>				<ul id=\"ul-list\">					<!--<li>						<a href=\"#\" listingid=\"1317405\">							<img src=\"http://pic2.ule.com/pic/user_800111024/product/prd20160110/d4d3325040c2beff_p800x800.jpg\">							<p class=\"name\">【洛川<em>苹果</em>】陕西<em>苹果</em>延安洛川<em>苹果</em>红富士<em>苹果</em>新鲜水果<em>苹果</em>约18斤40枚80装</p>							<p class=\"price\"><span class=\"minPrice\">¥138.0</span><span class=\"maxPrice\"><del>¥218.0</del></span></p>						</a>					</li>-->					<script id=\"list\" type=\"text/html\">						{{each listInfos as value i}}						<li>							<a href=\"#\" listingid={{value.listingId}}>								<img src={{value.imgurl}}>								<p class=\"name\">{{value.listname}}</p>								<p class=\"price\"><span class=\"minPrice\">¥{{value.pointPrice}}</span><span class=\"maxPrice\"><del>¥{{value.maxPrice}}</del></span></p>							</a>						</li>						{{/each}}					</script>									<li class=\"loadli\">						<span>正在加载数据...</span>					</li>				</ul>			</div>			<!-- </script>-->		</section>	</section></div>"

/***/ },
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



/***/ }
/******/ ]);