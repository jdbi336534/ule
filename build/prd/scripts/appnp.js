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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ },

/***/ 4:
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

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(18);



/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var npstr = __webpack_require__(19);
	var npcommon = __webpack_require__(4);
	npcommon.renderBody($('body'), npstr);
	// banner图
	    var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    centeredSlides: true,
	    autoplay: 2500,
	    autoplayDisableOnInteraction: false,
	    loop:true
	});
	//农品值得买
	var swiper2 = new Swiper('.swiper-container2', {
	    slidesPerView: 'auto',
	    paginationClickable: true
	});
	//农品值得买
	var npSaleScr = document.createElement('script');
	npSaleScr.src = "http://service.ule.com/api/mobile/indexListingCommentGet.do?jsonApiCallback=npSale&moduleKeys=ulenp_2016_mwap_cnxh&startIndex=0&pageSize=100&type=1&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475731183836";
	document.body.appendChild(npSaleScr);
	window.npSale = function (result) {
	  console.log(result.result[0]);
	  $('#onlyPhoneUl').html("");
	  for(var i=result.result.length-1;i>=0;i--){
	    var html = '    <li class="swiper-slide"><a href="#" target="_blank"><img src="'+result.result[i].imgUrl+' alt="/build/images/a71c6c945acafee9_p800x800_l.jpg""/><p><span class="b_tit">'+result.result[i].listingName+'</span><span class="b_discount">'+Math.ceil(parseInt(result.result[i].minPrice)*10/parseInt(result.result[i].maxPrice))+'折</span><span class="b_price"><strong>¥<i class="minPrice">'+Math.floor(parseFloat(result.result[i].minPrice))+'</i>.'+Math.floor(parseFloat(result.result[i].minPrice)*100%100)+'</strong></span></p></a></li>'
	    npcommon.append($('#onlyPhoneUl'), html);
	  }
	  swiper2.update();
	}
	//为您推荐
	var tuijianSrc = document.createElement('script');
	tuijianSrc.src = "http://service.ule.com/api/mobile/indexListingCommentGet.do?jsonApiCallback=tuijian&moduleKeys=ulenp_2016_mwap_cnxh&startIndex=0&pageSize=100&type=1&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475731183836";
	document.body.appendChild(tuijianSrc);
	window.tuijian = function (result) {
	  $('.enjoy ul').html("");
	  for(var i=0;i<result.result.length;i++){
	    var html = '<li><a href="#"><img width="176" height="176" src="'+result.result[i].imgUrl+' alt="/build/images/a71c6c945acafee9_p800x800_l.jpg""/> <p class="goodsName">'+result.result[i].listingName+'</p><p class="price"><del>¥'+result.result[i].maxPrice+'</del><br>¥'+result.result[i].minPrice+'<span class="zhe">'+(parseInt(result.result[i].minPrice)*10/parseInt(result.result[i].maxPrice)).toFixed(1)+'折</span></p></a></li>';
	    npcommon.append($('.enjoy ul'), html);
	  }
	}

	//查询
	$('#ckeyWord').on('tap', function () {
	  $('#search_container').css('display','block');
	});
	$('.close').on('tap', function () {
	  $('#search_container').css('display','none');
	});



/***/ },

/***/ 19:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">  <header class=\"npheader\">    <div class=\"ctit_list\"></div>    <input type=\"text\" placeholder=\"农家自产美食\" id=\"ckeyWord\">    <div class=\"clogin\">登录</div>  </header>  <section class=\"section-con\">    <div class=\"swiper-container\">        <div class=\"swiper-wrapper\">            <div class=\"swiper-slide\" id=\"top\"><img src=\"http://pic1.ule.com/item/user_0102/desc20160929/ba4f80537e1a4cb5_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic4.ule.com/item/user_0102/desc20160920/c643aca397d1613a_-1x-1.jpg\"/></div>            <div class=\"swiper-slide\"><img src=\"http://pic0.ule.com/item/user_0102/desc20160824/54ea3917790ff32f_-1x-1.jpg\"/></div>        </div>        <div class=\"swiper-pagination\"></div>    </div>    <ul class=\"selectul\">      <li><a href=\"#\"><img src=\"/build/images/wap_menu_01.png\"/>新鲜到家</a></li>      <li><a href=\"#\"><img src=\"/build/images/wap_menu_03.png\"/>绿色食品</a></li>      <li><a href=\"#\"><img src=\"/build/images/wap_menu_04.png\"/>农家自产</a></li>      <li><a href=\"#\"><img src=\"/build/images/wap_menu_05.png\"/>全部分类</a></li>    </ul>    <div class=\"itemlist\">      <div class=\"onlyphone\">        <h3 class=top_tit>农品值得买</h3>        <div class=\"swiper-container2\">          <ul class=\"swiper-wrapper\" id=\"onlyPhoneUl\">            <li class=\"swiper-slide\">              <a href=\"#\" target=\"_blank\">                <img src=\"http://pic0.ule.com/pic/user_800111241/product/prd20151210/5e2c66df4ef49bb8_p1063x1355_l.jpg\">                <p>                  <span class=\"b_tit\">盘锦大米 蟹田米 5KG</span>                  <span class=\"b_discount\">6折</span>                  <span class=\"b_price\"><strong>¥<i class=\"minPrice\">40</i>.00</strong></span>                </p>              </a>            </li>          </ul>        </div>      </div>      <div class=\"np_wrap\">        <div class=\"title\">          <h3>时令尝鲜</h3>        </div>        <div class=\"prodlist\">          <a class=\"big-l\" href=\"#\"><img src=\"http://pic1.ule.com/item/user_0102/desc20160905/447f8d05bdfe7034_-1x-1.jpg\"></a>          <a class=\"big-r\" href=\"#\"><img src=\"http://pic1.ule.com/item/user_0102/desc20160905/3bc3e6d34902a377_-1x-1.jpg\"></a>          <div class=\"small\">            <a class=\"\" href=\"#\"><img src=\"http://pic3.ule.com/item/user_0102/desc20160905/115215bd4011992f_-1x-1.jpg\"></a>            <a class=\"\" href=\"#\"><img src=\"http://pic2.ule.com/item/user_0102/desc20160923/fb11041d4b76b9a5_-1x-1.jpg\"></a>          </div>        </div>      </div>    </div>    <div class=\"moretui\">      <h3>        <span class=\"line\"></span>        <span class=\"tui\">为您推荐</span>      </h3>      <div class=\"enjoy\">        <ul>          <li><a href=\"http://m.ule.com/item/detail/768443?source=index\"><img data-src=\"http://pic0.ule.com/pic/user_0102/product/prd20160930/4b72a3aac4eacbde_p800x800_290x290.jpg\" width=\"176\" height=\"176\" src=\"http://pic0.ule.com/pic/user_0102/product/prd20160930/4b72a3aac4eacbde_p800x800_290x290.jpg\"> <p class=\"goodsName\">30年老品牌 郑明明鱼子精华修颜霜35g BB霜 遮瑕</p><p class=\"price\"><del>¥168.00</del><br>¥29.00<span class=\"zhe\">1.7折</span></p></a></li>        </ul>      </div>    </div>    <div id=\"search_container\" >      <a href=\"javascript:\" class=\"close\"></a>      <h3 class=\"search_box\">        <form id=\"searchForm\">          <input type=\"search\" id=\"searchkeyWord\" maxlength=\"30\" placeholder=\"农家自产美食\"/>          <span id=\"search_btn\">搜索</span>          <i class=\"clear\" style=\"display: none;\"></i>        </form>      </h3>      <div class=\"search_wrap\">        <h3>热门搜索</h3>        <ul class=\"clearfix\">          <li><a href=\"#\">茶叶</a></li>          <li><a href=\"#\">鸡蛋</a></li>          <li><a href=\"#\">大米</a></li>          <li><a href=\"#\">菌菇</a></li>          <li><a href=\"#\">蜂蜜</a></li>        </ul>      </div>    </div>  </section></div>"

/***/ }

/******/ });