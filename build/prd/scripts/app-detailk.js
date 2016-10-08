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

	module.exports = __webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
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



/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(11);



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(12);
	var common = __webpack_require__(6);
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
	       click:true,
			tap: true,
			
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
			console.log(cdata);
			console.log(cdata.itemInfo);
			obj = {
				"id": cdata.listId,
				"title": cdata.listName,
				"min": cdata.itemInfo[0].salePrice,
				"max": cdata.itemInfo[0].marketPrice,
				"num": 1,
				"img": cdata.itemInfo[0].image[0].imgUrl
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


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ulfgc hide\"><ul class=\"navul1\">				<li class=\"iconfont\">&#xe630;					<a href=\"/build/index.html\">首页</a>				</li>				<li class=\"iconfont\">&#xe699;					<a href=\"\">分类</a>				</li>				<li class=\"iconfont\">&#xe608;					<a href=\"\">购物车</a>				</li>				<li class=\"iconfont\">&#xe6b8;					<a href=\"\">我的邮乐</a>				</li>	</ul></div><div class=\"containerk\" id=\"boxx\">	<header class=\"headerk\">		<ul id=\"tapul\">			<li class=\"iconfont\" id=\"back\">&#xe679;</li>			<li>商品详情</li>			<li class=\"iconfont\" id=\"ml\">&#xe6b7;</li>		</ul>			</header>		<section class=\"bodyk clear\"  id=\"detail-Iscrall\">		<div class=\"detailiscroll\">			<div id=\"bannerimgk\">					<div class=\"swiper-container\" id=\"detailk-swiper\">							<div class=\"swiper-wrapper\">				<script id=\"listimg\" type=\"text/html\">				{{each image as value i}}						<div class=\"swiper-slide\">							<section id=\"detailk-scroll1\">								<img src={{value.imgUrl}} />							</section>						</div>					{{/each}}					             </script>				</div>								<div class=\"swiper-pagination\">				</div>			</div>        		</div>			<p class=\"serverp1\">							<span> 				 <i class=\"namei\">				 					  <script id=\"smdata\" type=\"text/html\">				 {{listName}}				 </script>								 </i>								  			</span>							<i class=\"i1\">				<script id=\"newpricedata\" type=\"text/html\">				¥{{salePrice}}				 </script>			</i>													<i class=\"oldjg\">				<script id=\"oldpricedata\" type=\"text/html\">				¥{{marketPrice}}				 </script>							</i>				<b class=\"activedata\">				<img src=\"images/mj.png\"/>				<script id=\"activedata\" type=\"text/html\">				{{eventtitle}}				 </script>			</b>						 									</p>			<section class=\"tjgwc\">											<p class=\"sx\">                  <script id=\"sxdata\" type=\"text/html\">					<span class=\"colorname\">					<i>{{colors[0].colorName}}多味花生</i>					</span>					<span class=\"specificationName\">					<i>{{specifications[0].specificationName}}</i>					</span>                   </script>				</p>								 				<section class=\"numberk\">								<ul class=\"numberulk clear\">						<li class=\"jj\">—</li>						<li class=\"valuek\">1</li>													<li id=\"add\">+</li>					</ul>					<script id=\"numdata\" type=\"text/html\">					<i>(库存{{itemInfo[0].storage}}件)</i>					</script>														</section>								 </script>			</section>			<section class=\"shopxx clear\">                				<ul class=\"ljbox\">					<script id=\"ljdata\" type=\"text/html\">										<li>						<a href=\"#\">商品评价</a>					</li>					<li>						<a href=\"#\">图文详情</a>					</li>					<li>												<a href=\"/build/dp.html?storeId={{storeId}}\">进入店铺</a>											</li>					</script>				</ul>							</section>			<section class=\"zffs\">				<p>支付方式：邮乐卡支付、邮储快捷支付</p>			</section>			<section class=\"rmshop\">				<h6>热卖商品推荐</h6>				<script id=\"rmshopdata\" type=\"text/html\">				<ul>				   {{each listInfos as value i}}					<li>						<a href=\"/build/detail.html?listId={{value.listId}}\">							<img src={{value.imgUrl}} />							<span class=\"newprice\">￥{{value.salePrice}}</span>							<span class=\"oldprice\">￥{{value.marcketPrice}}</span>						</a>					</li>					 {{/each}}									</ul>				</script>			</section>		</div>	</section>	<footer class=\"footerk\">		<form>			<a href=\"#\" class=\"collectbtn\"></a>			<a href=\"/build/car.html\" class=\"shopbtn\">			<i class=\"numshopgwc\">			</i>			</a>			<ul>				<li>立即购买</li>				<li class=\"jrgwc\">加入购物车</li>			</ul>		</form>	</footer></div>"

/***/ }
/******/ ]);