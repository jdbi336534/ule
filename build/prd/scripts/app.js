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
	// banner图
	    var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    centeredSlides: true,
	    autoplay: 2500,
	    autoplayDisableOnInteraction: false,
	    loop:true
	});
	//手机专享
	var swiper2 = new Swiper('.swiper-container2', {
	    slidesPerView: 'auto',
	    //centeredSlides: true,
	    paginationClickable: true
	});
	//手机专享
	var onlyPhoneScr = document.createElement('script');
	onlyPhoneScr.src = "http://search.ule.com/api/recommend?restype=2002&jsoncallback=onlyPhone&sectionKeys=wap_onlyphone&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475572375350";
	document.body.appendChild(onlyPhoneScr);
	window.onlyPhone = function (result) {
	  $('#onlyPhoneUl').html("");
	  for(var i=0;i<result.wap_onlyphone.length;i++){
	    var url = result.wap_onlyphone[i].link.split('/');
	    // console.log(url[url.length-1]);
	    var html = '<li class="swiper-slide"><a href="/build/detail.html?listId='+url[url.length-1]+'" class="logB"> <img src="'+ result.wap_onlyphone[i].imgUrl +'"> <p> <span class="b_tit">'+result.wap_onlyphone[i].title+'</span> <i class="b_price">'+ JSON.parse(result.wap_onlyphone[i].customAttribute).price+'</i> </p> </a> </li>'
	    common.append($('#onlyPhoneUl'), html);
	  }
	  swiper2.update();
	}

	//
	var swiper3 = new Swiper('.swiper-container3', {
	    slidesPerView: 'auto',
	    //centeredSlides: true,
	    paginationClickable: true
	});
	//今日好店铺
	    var swiper4 = new Swiper('.swiper-container4', {
	    pagination: '.swiper-pagination4',
	    paginationClickable: true,
	    slidesPerView: 'auto',
	    centeredSlides: true,
	    loop : true,
	    loopedSlides :3,
	});

	//猜您喜欢
	var enjoySrc = document.createElement('script');
	enjoySrc.src = "http://service.ule.com/api/mobile/indexListingCommentGet.do?jsonApiCallback=enjoy&sectionKeys=ule_index2&moduleKeys=ule_android_index_prodlist&startIndex=0&pageSize=10&type=1&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475673963218";
	document.body.appendChild(enjoySrc);
	window.enjoy = function (result) {
	  $('.enjoy ul').html("");
	  for(var i=0;i<result.result.length;i++){
	    console.log(result.result[i].listingId);
	  var url = result.result[i].itemId.split(" ");

	    var html = '<li><a href="/build/detail.html?listId='+result.result[i].listingId+'"><img width="176" height="176" src="'+result.result[i].imgUrl+'"> <p class="goodsName">'+result.result[i].listingName+'</p><p class="price"><del>¥'+result.result[i].maxPrice+'</del><br>¥'+result.result[i].minPrice+'<span class="zhe">'+(parseInt(result.result[i].minPrice)*10/parseInt(result.result[i].maxPrice)).toFixed(1)+'折</span></p></a></li>';
	    common.append($('.enjoy ul'), html);
	  }

	}
	//查询
	$('#ckeyWord').on('tap', function () {
	  $('#search_container').css('display','block');
	});
	$('.close').on('tap', function () {
	  $('#search_container').css('display','none');
	});
	$('#search_btn').on('tap', function () {
	  var inputSearch = $("#searchkeyWord").val();
	  if(!inputSearch){
	    inputSearch="iphone 7";
	  }
	  $('#search_btn').attr("href","http://www.ule.com/ulewap/npwap.html?keyWords="+inputSearch);
	});

	//
	// var str = '<a class="go_back" href="#top"  target="_self"></a><a class="shopping_cart" href="car.html"></a>'
	// $(".fixed_btn").html("");
	// common.append($('.fixed_btn'), str);



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">  <section class=\"section-con\">    <div class=\"swiper-container\">      <div class=\"swiper-wrapper\">        <div class=\"swiper-slide\" id=\"top\"><img src=\"http://pic.ule.com/item/user_0102/desc20160928/6198a9da4987bb6a_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160927/ad07426b72d4f108_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160928/3d75e40c4208ba5f_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160829/4916a913696fefaf_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160919/56b96aeb6c1999be_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160923/f54446a9d249b77a_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160926/44060d43b3ae9888_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160926/11d9cec36c52de71_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160920/3bbc69259aa7d068_-1x-1.jpg\"/></div>      </div>      <div class=\"swiper-pagination\"></div>    </div>    <ul class=\"selectul\">      <li><a href=\"npule.html\"><img src=\"/build/images/wap_foot_02.png\"/>邮乐农品</a></li>      <li><a href=\"category.html\"><img src=\"/build/images/category_icon02.png\"/>商品分类</a></li>      <li><a href=\"lq.html\"><img src=\"/build/images/ticket_home.png\"/>领券</a></li>      <li><a href=\"#\"><img src=\"/build/images/wap_foot_05.png\"/>邮乐特卖</a></li>    </ul>    <div class=\"itemlist\">      <div class=\"onlyphone\">        <h3 class=top_tit>手机专享</h3>        <div class=\"swiper-container2\">          <ul class=\"swiper-wrapper\" id=\"onlyPhoneUl\">            <li class=\"swiper-slide\">              <a href=\"\">                <img src=\"http://pic1.ule.com/item/user_0102/desc20160930/5361dc574db28aa2_-1x-1.jpg\">                <p>                  <span class=\"b_tit\">【今日最值】天然洋槐蜂蜜2瓶！</span>                  <i class=\"b_price\">立减20元</i>                </p>              </a>            </li>            <li class=\"swiper-slide\">              <a href=\"#\">                <img src=\"http://pic1.ule.com/item/user_0102/desc20160930/5361dc574db28aa2_-1x-1.jpg\">                <p>                  <span class=\"b_tit\">槐蜂蜜2瓶</span>                  <i class=\"b_price\">立减20元</i>                </p>              </a>            </li>            <li class=\"swiper-slide\">              <a href=\"#\">                <img src=\"http://pic1.ule.com/item/user_0102/desc20160930/5361dc574db28aa2_-1x-1.jpg\">                <p>                  <span class=\"b_tit\">槐蜂蜜2瓶</span>                  <i class=\"b_price\">立减20元</i>                </p>              </a>            </li>            <li class=\"swiper-slide\">              <a href=\"#\">                <img src=\"http://pic1.ule.com/item/user_0102/desc20160930/5361dc574db28aa2_-1x-1.jpg\">                <p>                  <span class=\"b_tit\">槐蜂蜜2瓶</span>                  <i class=\"b_price\">立减20元</i>                </p>              </a>            </li>          </ul>        </div>      </div>      <div class=\"active\">        <ul class=\"hot_active\">          <li><a href=\"/build/detail.html?listId=1788038\"><img src=\"http://pic0.ule.com/item/user_0102/desc20161008/3883f2f4dce91d62_-1x-1.jpg\"></a></li>          <li><a href=\"/build/detail.html?listId=1813677\"><img src=\"http://pic1.ule.com/item/user_0102/desc20161008/1c82d619636c03c7_-1x-1.jpg\"></a></li>          <li><a href=\"/build/detail.html?listId=1757477\"><img src=\"http://pic4.ule.com/item/user_0102/desc20161008/7094bae8adf65d48_-1x-1.jpg\"></a></li>        </ul>        <div class=\"brandStreet\">          <p><img src=\"http://i0.ule.com/ulewap/i/street.jpg\"></p>          <div class=\"swiper-container3\">            <ul class=\"swiper-wrapper\">              <li class=\"swiper-slide\"><a href=\"/build/dp.html?storeId=7687\"><img src=\"http://pic0.ule.com/item/user_0102/desc20161008/b0fee56004a6d8af_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"><a href=\"/build/dp.html?storeId=5910\"><img src=\"http://pic4.ule.com/item/user_0102/desc20161008/cab46f1a48c54c44_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"><a href=\"/build/dp.html?storeId=7101\"><img src=\"http://pic3.ule.com/item/user_0102/desc20161008/8008ed0b4fbef0eb_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"><a href=\"/build/dp.html?storeId=6619\"><img src=\"http://pic4.ule.com/item/user_0102/desc20161008/a6d115634188aa4c_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"><a href=\"/build/dp.html?storeId=10622\"><img src=\"http://pic2.ule.com/item/user_0102/desc20161008/db68d18755226e4f_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"><a href=\"/build/dp.html?storeId=8176\"><img src=\"http://pic4.ule.com/item/user_0102/desc20161008/89eb6f184ce14f2b_-1x-1.jpg\"></a></li>            </ul>          </div>        </div>      </div>      <div class=\"np_wrap\">        <div class=\"title\">          <h3>特色农品</h3>        </div>        <div class=\"prodlist\">          <a class=\"big-l\" href=\"/build/detail.html?listId=1758278\"><img src=\"http://pic0.ule.com/item/user_0102/desc20161008/9e48a1a4fa2ae321_-1x-1.jpg\"></a>          <a class=\"big-r\" href=\"/build/detail.html?listId=1397962\"><img src=\"http://pic4.ule.com/item/user_0102/desc20161008/6082074475bd0cc2_-1x-1.jpg\"></a>          <div class=\"small\">            <a class=\"\" href=\"/build/detail.html?listId=933217\"><img src=\"http://pic0.ule.com/item/user_0102/desc20161008/e29c2f05d0c26d01_-1x-1.jpg\"></a>            <a class=\"\" href=\"/build/detail.html?listId=1809888\"><img src=\"http://pic2.ule.com/item/user_0102/desc20161008/36d981e447aca27f_-1x-1.jpg\"></a>          </div>        </div>      </div>      <div class=\"crazy\">        <a href=\"/build/dp.html?storeId=8994\"><img src=\"http://pic3.ule.com/item/user_0102/desc20160930/40daaff288bd2d50_-1x-1.jpg\"></a>      </div>      <div class=\"goodstore\">        <h3>          <span class=\"line\"></span>          <span class=\"tui\">今日好店铺</span>        </h3>        <div class=\"swiper-container4\">          <div class=\"swiper-wrapper\">            <div class=\"swiper-slide\">              <div class=\"product-pic\" href=\"javascript:;\">                <div class=\"goodstore_top\">                  <a href=\"/build/dp.html?storeId=6619\">                    <span class=\"goodstore_loge\">                      <img src=\"http://pic4.ule.com/item/user_0102/desc20161008/a6d115634188aa4c_-1x-1.jpg\">                    </span>                    <div class=\"goodstore_title\">                      <h3  class=\"goodstore_title\">LESMART旗舰店</h3>                      <p class=\"goodstore_subtit\">早秋潮翻天</p>                    </div>                    <span class=\"goodstore_btn\">进入店铺</span>                  </a>                </div>                <div class=\"goodstore_imglist\">                  <a href=\"/build/detail.html?listId=648748\"><img src=\"http://pic3.ule.com/pic/user_800106416/product/prd20150929/6f12ee774390b4fd_p800x800_l.jpg\"></a>                  <a href=\"/build/detail.html?listId=1753868\"><img src=\"http://pic1.ule.com/pic/user_800106416/product/prd20160906/5b8d14d31b234250_p800x800_l.jpg\"></a>                  <a href=\"/build/detail.html?listId=1798045\"><img src=\"http://pic0.ule.com/pic/user_800106416/product/prd20160922/a4784a499e9368b1_p800x800_l.jpg\"></a>                </div>              </div>            </div>            <div class=\"swiper-slide\">              <div class=\"product-pic\" href=\"javascript:;\">                <div class=\"goodstore_top\">                  <a href=\"/build/dp.html?storeId=11136\"\">                    <span class=\"goodstore_loge\">                      <img src=\"http://pic2.ule.com/item/user_0102/desc20161008/db68d18755226e4f_-1x-1.jpg\">                    </span>                    <div class=\"goodstore_title\">                      <h3  class=\"goodstore_title\">卡帝乐鳄鱼旗舰店</h3>                      <p class=\"goodstore_subtit\">潮流由我定义</p>                    </div>                    <span class=\"goodstore_btn\">进入店铺</span>                  </a>                </div>                <div class=\"goodstore_imglist\">                  <a href=\"/build/detail.html?listId=1555808\"><img src=\"http://pic1.ule.com/pic/user_800112017/product/prd20160621/5cb324948b87e593_p800x800_l.jpg\"></a>                  <a href=\"/build/detail.html?listId=1439390\"><img src=\"http://pic1.ule.com/pic/user_800112017/product/prd20160414/44e23ba9ac9c4e8b_p800x800_l.jpg\"></a>                  <a href=\"/build/detail.html?listId=1440444\"><img src=\"http://pic4.ule.com/pic/user_800112017/product/prd20160415/6e4fd6ac13df0ed2_p800x800_l.jpg\"></a>                </div>              </div>            </div>            <div class=\"swiper-slide\">              <div class=\"product-pic\" href=\"javascript:;\">                <div class=\"goodstore_top\">                  <a href=\"/build/dp.html?storeId=6577\">                    <span class=\"goodstore_loge\">                      <img src=\"http://pic4.ule.com/item/user_0102/desc20161008/89eb6f184ce14f2b_-1x-1.jpg\">                    </span>                    <div class=\"goodstore_title\">                      <h3  class=\"goodstore_title\">优居生活馆</h3>                      <p class=\"goodstore_subtit\">满299赠送立白洗衣皂一块</p>                    </div>                    <span class=\"goodstore_btn\">进入店铺</span>                  </a>                </div>                <div class=\"goodstore_imglist\">                  <a href=\"/build/detail.html?listId=1101475\"><img src=\"http://pic2.ule.com/pic/user_800105992/product/prd20151207/841faa45efec5e47_p800x800_l.jpg\"></a>                  <a href=\"/build/detail.html?listId=1092607\"><img src=\"http://pic0.ule.com/pic/user_800105992/product/prd20150331/2c43b04123a39b48_p800x800_l.jpg\"></a>                  <a href=\"/build/detail.html?listId=1265711\"><img src=\"http://pic2.ule.com/pic/user_800105992/product/prd20150929/18b7454384c150bc_p800x800_l.jpg\"></a>                </div>              </div>            </div>          </div>          <div class=\"swiper-pagination4\"></div>        </div>      </div>    </div>    <div class=\"moretui\">      <h3>        <span class=\"line\"></span>        <span class=\"tui\">猜您喜欢</span>      </h3>      <div class=\"enjoy\">        <ul>          <li><a href=\"http://m.ule.com/item/detail/768443?source=index\"><img data-src=\"http://pic0.ule.com/pic/user_0102/product/prd20160930/4b72a3aac4eacbde_p800x800_290x290.jpg\" width=\"176\" height=\"176\" src=\"http://pic0.ule.com/pic/user_0102/product/prd20160930/4b72a3aac4eacbde_p800x800_290x290.jpg\"> <p class=\"goodsName\">30年老品牌 郑明明鱼子精华修颜霜35g BB霜 遮瑕</p><p class=\"price\"><del>¥168.00</del><br>¥29.00<span class=\"zhe\">1.7折</span></p></a></li>        </ul>      </div>    </div>    <div class=\"bottomContent\">      <p class=\"device_type\">        <a href=\"javascript:void(0);\" class=\"app_type\"><i></i>客户端</a>        <a href=\"javascript:void(0);\" class=\"wap_type\"><i></i>触屏版</a>      </p>      <p><span><!-- (021)28943666 --></span>沪ICP备 13037728号</p>      <p class=\"connect\">        <a href=\"/about.jsp\" class=\"about\">关于我们</a>&nbsp;&nbsp;&nbsp;&nbsp;        <a class=\"contact\" href=\"/contact.jsp\">联系我们</a>      </p>    </div>    <div class=\"fixed_btn\">      <a class=\"go_back\" href=\"#top\"  target=\"_self\"></a>      <a class=\"shopping_cart\" href=\"/build/car.html\"></a>    </div>    <div id=\"search_container\" >      <a href=\"javascript:\" class=\"close\"></a>      <h3 class=\"search_box\">        <form id=\"searchForm\">          <input type=\"search\" id=\"searchkeyWord\" maxlength=\"30\" placeholder=\"iphone 7\"/>          <a id=\"search_btn\" href=\"javascript:void(0);\">搜索</a>          <i class=\"clear\" style=\"display: none;\"></i>        </form>      </h3>      <div class=\"search_wrap\">        <h3>热门搜索</h3>        <ul class=\"clearfix\">          <li><a href=\"http://www.ule.com/ulewap/npwap.html?keyWords=%E7%89%99%E8%86%8F\">牙膏</a></li>          <li><a href=\"http://www.ule.com/ulewap/npwap.html?keyWords=%E5%B7%A7%E5%85%8B%E5%8A%9B\">巧克力</a></li>          <li><a href=\"http://www.ule.com/ulewap/npwap.html?keyWords=%E7%BE%8E%E7%99%BD%E9%9D%A2%E8%86%9C\">美白面膜</a></li>          <li><a href=\"http://www.ule.com/ulewap/npwap.html?keyWords=%E5%85%B0%E8%94%BB\">兰蔻</a></li>          <li><a href=\"http://www.ule.com/ulewap/npwap.html?keyWords=%E7%BA%B8%E5%B7%BE\">纸巾</a></li>        </ul>      </div>    </div>  </section></div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<header>  <div class=\"ctit_list\"></div>  <input type=\"text\" placeholder=\"iphone 7\" id=\"ckeyWord\">  <div class=\"clogin\"><a href=\"login.html\">登录</a></div></header>"

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