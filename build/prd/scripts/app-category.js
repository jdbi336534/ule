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

	module.exports = __webpack_require__(7);


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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(8);



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(9);

	var common = __webpack_require__(6);

	common.renderBody($('body'), str);



	document.onload=function(){
		var myScroll = new IScroll('.scroller-l', {
			scrollbars: true,
			mouseWheel: true,
			fadeScrollbars:true
		});
	}



	Zepto(function() {
	$('.first-type li').tap(function(){
		var num=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.scroller-r').find('.second-type').eq(num).removeClass('subcate-hide').siblings().addClass('subcate-hide');
	});


	});


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">			<header>				<a href=\"#\"></a>				<input type=\"search\" placeholder=\"农家自产美食\" />				<a href=\"login.html\">登录</a>			</header>			<section>				<div id=\"wrap-category\">					<div class=\"scroller-l\">						<ul class=\"first-type\">							<li class=\"subcate list1 current\" data-id=\"subcate-list1\"><i class=\"icon\"></i>生鲜食品</li>							<li class=\"subcate list2\" data-id=\"subcate-list2\"><i class=\"icon\"></i>粮油副食</li>							<li class=\"subcate list3\" data-id=\"subcate-list3\"><i class=\"icon\"></i>山珍干货</li>							<li class=\"subcate list4\" data-id=\"subcate-list4\"><i class=\"icon\"></i>休闲零食</li>							<li class=\"subcate list5\" data-id=\"subcate-list5\"><i class=\"icon\"></i>冲调食品</li>							<li class=\"subcate list6\" data-id=\"subcate-list6\"><i class=\"icon\"></i>酒类/礼盒</li>						</ul>					</div>				</div>				<div id=\"wrap-category2\">					<div class=\"scroller-r\">						<div class=\"second-type\" id=\"subcate-list1\">							<a href=\"list.html?clsId=103301&amp;categoryName=%E6%B0%B4%E6%9E%9C%E8%94%AC%E8%8F%9C\" title=\"水果蔬菜\">								<h3>水果蔬菜</h3></a>							<ul>								<li>									<a class=\"hot1\" href=\"list.html?keyWords=%E8%8B%B9%E6%9E%9C\" title=\"苹果\">苹果</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%8C%95%E7%8C%B4%E6%A1%83\" title=\"猕猴桃\">猕猴桃</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%93%9D%E8%8E%93\" title=\"蓝莓\">蓝莓</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%9C%9C%E7%93%9C\" title=\"蜜瓜\">蜜瓜</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%A8%B1%E6%A1%83\" title=\"樱桃\">樱桃</a>								</li>							</ul>							<a href=\"list.html?clsId=103302&amp;categoryName=%E8%9B%8B%E7%B1%BB\" title=\"蛋类\">								<h3>蛋类</h3></a>							<ul class=\"clear\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%B8%A1%E8%9B%8B\" title=\"鸡蛋\">鸡蛋</a>								</li>								<li>									<a class=\"hot1\" href=\"list.html?keyWords=%E9%B8%AD%E8%9B%8B\" title=\"鸭蛋\">鸭蛋</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%9D%BE%E8%8A%B1%E8%9B%8B\" title=\"松花蛋\">松花蛋</a>								</li>							</ul>							<a href=\"list.html?keyWords=%E7%A6%BD%E7%B1%BB\" title=\"鸡鸭鹅\">								<h3>鸡鸭鹅</h3></a>							<ul class=\"clear\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%A6%BD%E7%B1%BB\" title=\"鸡/鸭\">鸡/鸭</a>								</li>							</ul>							<a href=\"list.html?clsId=103303&amp;categoryName=%E5%86%B7%E9%B2%9C%E8%82%89\" title=\"冷鲜肉类\">								<h3>冷鲜肉类</h3></a>							<ul class=\"clear\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%8C%AA\" title=\"猪肉\">猪肉</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%BE%8A%E8%82%89\" title=\"羊肉\">羊肉</a>								</li>							</ul>							<a href=\"list.html?clsId=103304&amp;categoryName=%E6%B5%B7%E9%B2%9C%E6%B0%B4%E4%BA%A7\" title=\"海鲜水产\">								<h3>海鲜水产</h3></a>							<ul class=\"clear\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%9F%B9\" title=\"蟹\">蟹</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%94%B2%E9%B1%BC\" title=\"甲鱼\">甲鱼</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%B1%BC%E5%B9%B2\" title=\"鱼干/虾干\">鱼干/虾干</a>								</li>							</ul>						</div>						<div class=\"second-type subcate-hide\" id=\"subcate-list2\">							<a href=\"list.html?clsId=100103&amp;categoryName=%E5%A4%A7%E7%B1%B3\" title=\"大米\">								<h3>大米</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E4%B8%9C%E5%8C%97%E5%A4%A7%E7%B1%B3\" title=\"东北大米\">东北大米</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E4%BA%94%E5%B8%B8%E5%A4%A7%E7%B1%B3\" title=\"五常米\">五常米</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%A6%99%E7%B1%B3\" title=\"香米\">香米</a>								</li>							</ul>							<a href=\"list.html?clsId=100104&amp;categoryName=%E6%9D%82%E7%B2%AE\" title=\"杂粮\">								<h3>杂粮</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%BB%BF%E8%B1%86\" title=\"绿豆\">绿豆</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%BA%A2%E8%B1%86\" title=\"红豆\">红豆</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E5%B0%8F%E7%B1%B3\" title=\"小米\">小米</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%96%8F%E4%BB%81\" title=\"薏仁\">薏仁</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%8E%89%E7%B1%B3\" title=\"玉米\">玉米</a>								</li>							</ul>							<a href=\"list.html?clsId=101210&amp;categoryName=%E8%B0%83%E5%91%B3%E9%85%B1\" title=\"调味酱菜\">								<h3>调味酱菜</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%85%B1\" title=\"酱\">酱</a>								</li>								<li>									<a class=\"hot\" href=\"\" title=\"麻油\">麻油</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%85%B1%E8%8F%9C\" title=\"腌菜酱菜\">腌菜酱菜</a>								</li>							</ul>						</div>						<div class=\"second-type subcate-hide\" id=\"subcate-list3\">							<a href=\"list.html?keyWords=%E9%A6%99%E8%8F%87\" title=\"菌菇\">								<h3>菌菇</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%A6%99%E8%8F%87\" title=\"香菇\">香菇</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%8C%B6%E6%A0%91%E8%8F%87\" title=\"茶树菇\">茶树菇</a>								</li>							</ul>							<a href=\"list.html?clsId=100406&amp;categoryName=%E5%B9%B2%E8%8F%9C\" title=\"干菜\">								<h3>干菜</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%AC%8B\" title=\"笋干笋衣\">笋干笋衣</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%A2%85%E5%B9%B2%E8%8F%9C\" title=\"梅干菜\">梅干菜</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%BB%84%E8%8A%B1%E8%8F%9C\" title=\"黄花菜\">黄花菜</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?clsId=100408&amp;categoryName=%E7%B2%89%E4%B8%9D\" title=\"粉丝\">粉丝</a>								</li>							</ul>							<a href=\"list.html?clsId=100405&amp;categoryName=%E8%85%8C%E8%85%8A%E5%88%B6%E5%93%81\" title=\"腌腊制品\">								<h3>腌腊制品</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%A6%99%E8%82%A0\" title=\"腊肉/腊肠\">腊肉/腊肠</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%9D%BF%E9%B8%AD\" title=\"板鸭/腊鸭\">板鸭/腊鸭</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%81%AB%E8%85%BF\" title=\"火腿\">火腿</a>								</li>							</ul>							<a href=\"list.html?clsId=100401&amp;categoryName=%E6%9E%A3%E7%B1%BB\" title=\"枣类\">								<h3>枣类</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%BA%A2%E6%9E%A3\" title=\"红枣\">红枣</a>								</li>							</ul>							<a href=\"list.html?clsId=100416&amp;categoryName=%E5%B9%B2%E6%9E%9C\" title=\"枸杞/桂圆干/龙眼\">								<h3>枸杞/桂圆干/龙眼</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%9E%B8%E6%9D%9E\" title=\"枸杞\">枸杞</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%A1%82%E5%9C%86\" title=\"桂圆\">桂圆</a>								</li>							</ul>						</div>						<div class=\"second-type subcate-hide\" id=\"subcate-list4\">							<a href=\"list.html?clsId=100503&amp;categoryName=%E5%9D%9A%E6%9E%9C%E7%82%92%E8%B4%A7\" title=\"坚果炒货\">								<h3>坚果炒货</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%93%9C%E5%AD%90\" title=\"瓜子\">瓜子</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%A0%B8%E6%A1%83\" title=\"核桃\">核桃</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%9D%BE%E5%AD%90\" title=\"松子\">松子</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%8A%B1%E7%94%9F\" title=\"花生\">花生</a>								</li>							</ul>							<a href=\"list.html?clsId=100512&amp;categoryName=%E8%82%89%E5%B9%B2%E7%86%9F%E9%A3%9F\" title=\"肉干熟食\">								<h3>肉干熟食</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%82%89%E5%B9%B2\" title=\"即食肉类\">即食肉类</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%B1%86%E8%85%90%E5%B9%B2\" title=\"豆腐干\">豆腐干</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%B1%BC%E7%89%87\" title=\"鱼片\">鱼片</a>								</li>							</ul>							<a href=\"list.html?clsId=100519&amp;categoryName=%E8%9C%9C%E9%A5%AF%E7%B3%96%E6%9E%9C\" title=\"蜜饯糖果\">								<h3>蜜饯糖果</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%91%A1%E8%90%84%E5%B9%B2\" title=\"葡萄干\">葡萄干</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%BA%A2%E8%96%AF%E5%B9%B2\" title=\"红薯干\">红薯干</a>								</li>								<li>									<a class=\"hot\" href=\"\" title=\"红薯干\">红薯干</a>								</li>							</ul>							<a href=\"list.html?clsId=100518&amp;categoryName=%E7%B3%95%E7%82%B9\" title=\"糕点饼干\">								<h3>糕点饼干</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%A5%BC%E5%B9%B2\" title=\"饼干\">饼干</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?clsId=100506&amp;categoryName=%E7%B3%95%E7%82%B9\" title=\"传统糕点\">传统糕点</a>								</li>							</ul>							<a href=\"list.html?clsId=100505&amp;categoryName=%E8%86%A8%E5%8C%96%E9%A3%9F%E5%93%81\" title=\"膨化食品\">								<h3>膨化食品</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%94%85%E5%B7%B4\" title=\"锅巴\">锅巴</a>								</li>							</ul>							<a href=\"list.html?clsId=100516&amp;categoryName=%E5%85%B6%E4%BB%96\" title=\"其他零食\">								<h3>其他零食</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%BD%90%E5%A4%B4\" title=\"罐头\">罐头</a>								</li>								<li>									<a class=\"hot\" href=\"\" title=\"其他\">其他</a>								</li>							</ul>						</div>						<div class=\"second-type subcate-hide\" id=\"subcate-list5\">							<a href=\"list.html?clsId=100707&amp;categoryName=%E8%8C%B6%E5%8F%B6\" title=\"茶叶\">								<h3>茶叶</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%BB%BF%E8%8C%B6\" title=\"绿茶\">绿茶</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%BA%A2%E8%8C%B6\" title=\"红茶\">红茶</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%8A%B1%E8%8C%B6\" title=\"花草茶\">花草茶</a>								</li>							</ul>							<a href=\"list.html?clsId=100702&amp;categoryName=%E8%9C%82%E8%9C%9C\" title=\"蜂蜜类\">								<h3>蜂蜜类</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%99%BE%E8%8A%B1%E8%9C%9C\" title=\"百花蜜\">百花蜜</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%99%BE%E8%8A%B1%E8%9C%9C\" title=\"洋槐蜜\">洋槐蜜</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%9C%82%E7%8E%8B%E6%B5%86\" title=\"蜂王浆\">蜂王浆</a>								</li>							</ul>							<a href=\"list.html?clsId=100701&amp;categoryName=%E4%BF%9D%E5%81%A5%E9%A3%9F%E6%9D%90\" title=\"绿色冲饮\">								<h3>绿色冲饮</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%9F%B3%E6%96%9B\" title=\"石斛/枫斗\">石斛/枫斗</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E4%BA%BA%E5%8F%82\" title=\"人参\">人参</a>								</li>							</ul>							<a href=\"list.html?clsId=100709&amp;categoryName=%E9%80%9F%E6%BA%B6\" title=\"速溶冲饮\">								<h3>速溶冲饮</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%BA%A6%E7%89%87\" title=\"谷物冲饮\">谷物冲饮</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E5%A5%B6%E8%8C%B6\" title=\"奶茶\">奶茶</a>								</li>							</ul>							<a href=\"list.html?clsId=1006&amp;categoryName=%E9%A5%AE%E6%96%99\" title=\"包装饮料\">								<h3>包装饮料</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E6%9E%9C%E6%B1%81\" title=\"果汁\">果汁</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E9%85%B8%E5%A5%B6\" title=\"乳制品\">乳制品</a>								</li>								<li>									<a class=\"hot\" href=\"https://www.baidu.com/s?ie=utf8&amp;oe=utf8&amp;wd=www%2Eule%2Ecom%2Fulewap%2Fnpwahttp%3A%2F%2Fwww%2Eule%2Ecom%2Fulewap%2Fnpwap%2Ehtml%3FkeyWords%3D%E7%9F%BF%E6%B3%89%E6%B0%B4p%2Ehtml%3FkeyWords%3D%E6%9E%9C%E6%B1%81&amp;tn=98010089_dg&amp;ch=2\" title=\"饮用水\">饮用水</a>								</li>							</ul>						</div>						<div class=\"second-type subcate-hide\" id=\"subcate-list6\">							<a href=\"list.html?clsId=101403&amp;categoryName=%E7%99%BD%E9%85%92\" title=\"白酒\">								<h3>白酒</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%A5%BF%E5%87%A4\" title=\"西凤酒\">西凤酒</a>								</li>								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E8%BF%8E%E9%A9%BE\" title=\"迎驾\">迎驾</a>								</li>							</ul>							<a href=\"list.html?clsId=1032&amp;categoryName=%E7%A4%BC%E7%9B%92\" title=\"礼盒\">								<h3>礼盒</h3></a>							<ul class=\"clearfix\">								<li>									<a class=\"hot\" href=\"list.html?keyWords=%E7%A4%BC%E7%9B%92\" title=\"礼盒\">礼盒</a>								</li>							</ul>						</div>					</div>				</div>			</section>		</div>"

/***/ }
/******/ ]);