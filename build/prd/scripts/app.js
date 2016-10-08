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
	    var html = '<li class="swiper-slide"><a href="#" class="logB"> <img src="'+ result.wap_onlyphone[i].imgUrl +'"> <p> <span class="b_tit">'+result.wap_onlyphone[i].title+'</span> <i class="b_price">'+ JSON.parse(result.wap_onlyphone[i].customAttribute).price+'</i> </p> </a> </li>'
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
	//今日好店铺
	// var goodStoreScr = document.createElement('script');
	// goodStoreScr.src = "http://search.ule.com/api/recommend?restype=2002&jsoncallback=goodStore&sectionKeys=wap_index_dp&_=1475656262741";
	// document.body.appendChild(goodStoreScr);
	// window.goodStore = function (result) {
	//   console.log(result.wap_index_dp);
	//   $('.swiper-container4 .swiper-wrapper').html("");
	//   for(var i=0;i<result.wap_index_dp.length;i++){
	//     var html = '<div class="swiper-slide"><div class="product-pic" href="javascript:;"><div class="goodstore_top"><a href="#"><span class="goodstore_loge"><img src="'+result.wap_index_dp[i].imgUrl+'"></span><div class="goodstore_title"><h3  class="goodstore_title">'+result.wap_index_dp[i].title+'</h3><p class="goodstore_subtit">'+JSON.parse(result.wap_index_dp[i].customAttribute).subTitle+'</p></div><span class="goodstore_btn">进入店铺</span></a></div><div class="goodstore_imglist"><a href="#"><img src="'+JSON.parse(result.wap_index_dp[i].customAttribute).picurl_item1+'"></a><a href="#"><img src="'+JSON.parse(result.wap_index_dp[i].customAttribute).picurl_item2+'"></a><a href="#"><img src="'+JSON.parse(result.wap_index_dp[i].customAttribute).picurl_item3+'"></a></div></div></div>';
	//     common.append($('.swiper-container4 .swiper-wrapper'), html);
	//   }
	//   swiper4.update();
	// }
	//猜您喜欢
	var enjoySrc = document.createElement('script');
	enjoySrc.src = "http://service.ule.com/api/mobile/indexListingCommentGet.do?jsonApiCallback=enjoy&sectionKeys=ule_index2&moduleKeys=ule_android_index_prodlist&startIndex=0&pageSize=10&type=1&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475673963218";
	document.body.appendChild(enjoySrc);
	window.enjoy = function (result) {
	  $('.enjoy ul').html("");
	  for(var i=0;i<result.result.length;i++){
	    var html = '<li><a href="#"><img width="176" height="176" src="'+result.result[i].imgUrl+'"> <p class="goodsName">'+result.result[i].listingName+'</p><p class="price"><del>¥'+result.result[i].maxPrice+'</del><br>¥'+result.result[i].minPrice+'<span class="zhe">'+(parseInt(result.result[i].minPrice)*10/parseInt(result.result[i].maxPrice)).toFixed(1)+'折</span></p></a></li>';
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

	// $(function(){
	//     var counter = 0;
	//     // 每页展示4个
	//     var num = 0;
	//     // var pageStart = 0,pageEnd = 0;
	//
	//     // dropload
	//     $('.enjoy ul').dropload({
	//         scrollArea : window,
	//         loadDownFn : function(me){
	//           $.ajax({
	//                type: 'GET',
	//                url: 'http://search.ule.com/api/recommend?restype=2002&jsoncallback=jsonp1&sectionKeys=wap_onlyphone&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475572375350',
	//                dataType: 'jsonp',
	//                success: function(data){
	//                  var html = "<li></li>"
	//                  + "<li></li>"
	//                  + "<li></li>"
	//                  + "<li></li>"
	//                  + "<li></li>"
	//                  + "<li></li>"
	//                  + "<li></li>"
	//                  + "<li></li>"
	//                  + "<li></li>"
	//                  + "<li></li>";
	//                  common.append($('.enjoy ul'), html);
	//                   //  var result = '';
	//                   //  counter++;
	//                   //  pageEnd = num * counter;
	//                   //  pageStart = pageEnd - num;
	//                    //
	//                   //  for(var i = pageStart; i < pageEnd; i++){
	//                   //    console.log("aaaa"+data);
	//                   //      result +=   i+"aaaaaaaaaaaaaaa";
	//                   //     //  if((i + 1) >= data.wap_onlyphone.length){
	//                   //     //      // 锁定
	//                   //     //      me.lock();
	//                   //     //      // 无数据
	//                   //     //      me.noData();
	//                   //     //      break;
	//                   //     //  }
	//                   //  }
	//                    //common.append($('.enjoy ul'), result);
	//                    // 每次数据加载完，必须重置
	//                    me.resetload();
	//
	//                }
	//
	//            });
	//         }
	//     });
	// });


	// $.ajax({
	//   url: '/api/list.php',
	//   success: function (res) {
	//     var html = template('list', res);
	//     common.inner($('#index-scroll'), html);
	//   }
	// });
	//
	// window.onload = function () {
	//   var myScroll = new IScroll(".oobody");
	// };



	//
	// $.ajax({
	//   url: '/api/list.php',
	//   success: function (res) {
	//     var strScrollTop = '<div><div class="head"> \
	//         <img src="/build/images/arrow.png"/> \
	//         <span>下拉刷新...</span> \
	//     </div>';
	//
	//     var strScrollBottom = '<div class="foot"> \
	//         <img src="/build/images/arrow.png"/> \
	//         <span>上拉加载更多...</span> \
	//     </div></div>';
	//
	//     var html = template('list', res);
	//
	//     html = strScrollTop + html + strScrollBottom;
	//
	//     common.inner($('#index-scroll'), html);
	//   }
	// });
	//



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">  <section class=\"section-con\">    <div class=\"swiper-container\">      <div class=\"swiper-wrapper\">        <div class=\"swiper-slide\" id=\"top\"><img src=\"http://pic.ule.com/item/user_0102/desc20160928/6198a9da4987bb6a_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160927/ad07426b72d4f108_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160928/3d75e40c4208ba5f_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160829/4916a913696fefaf_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160919/56b96aeb6c1999be_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160923/f54446a9d249b77a_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160926/44060d43b3ae9888_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160926/11d9cec36c52de71_-1x-1.jpg\"/></div>        <div class=\"swiper-slide\"><img src=\"http://pic.ule.com/item/user_0102/desc20160920/3bbc69259aa7d068_-1x-1.jpg\"/></div>      </div>      <div class=\"swiper-pagination\"></div>    </div>    <ul class=\"selectul\">      <li><a href=\"#\"><img src=\"/build/images/wap_foot_02.png\"/>邮乐农品</a></li>      <li><a href=\"#\"><img src=\"/build/images/category_icon02.png\"/>商品分类</a></li>      <li><a href=\"#\"><img src=\"/build/images/ticket_home.png\"/>领券</a></li>      <li><a href=\"#\"><img src=\"/build/images/wap_foot_05.png\"/>邮乐特卖</a></li>    </ul>    <div class=\"itemlist\">      <div class=\"onlyphone\">        <h3 class=top_tit>手机专享</h3>        <div class=\"swiper-container2\">          <ul class=\"swiper-wrapper\" id=\"onlyPhoneUl\">            <li class=\"swiper-slide\">              <a href=\"#\">                <img src=\"http://pic1.ule.com/item/user_0102/desc20160930/5361dc574db28aa2_-1x-1.jpg\">                <p>                  <span class=\"b_tit\">【今日最值】天然洋槐蜂蜜2瓶！</span>                  <i class=\"b_price\">立减20元</i>                </p>              </a>            </li>            <li class=\"swiper-slide\">              <a href=\"#\">                <img src=\"http://pic1.ule.com/item/user_0102/desc20160930/5361dc574db28aa2_-1x-1.jpg\">                <p>                  <span class=\"b_tit\">槐蜂蜜2瓶</span>                  <i class=\"b_price\">立减20元</i>                </p>              </a>            </li>            <li class=\"swiper-slide\">              <a href=\"#\">                <img src=\"http://pic1.ule.com/item/user_0102/desc20160930/5361dc574db28aa2_-1x-1.jpg\">                <p>                  <span class=\"b_tit\">槐蜂蜜2瓶</span>                  <i class=\"b_price\">立减20元</i>                </p>              </a>            </li>            <li class=\"swiper-slide\">              <a href=\"#\">                <img src=\"http://pic1.ule.com/item/user_0102/desc20160930/5361dc574db28aa2_-1x-1.jpg\">                <p>                  <span class=\"b_tit\">槐蜂蜜2瓶</span>                  <i class=\"b_price\">立减20元</i>                </p>              </a>            </li>          </ul>        </div>      </div>      <div class=\"active\">        <ul class=\"hot_active\">          <li><a href=\"#\"><img src=\"http://pic1.ule.com/item/user_0102/desc20160930/145a9dea4c49b93c_-1x-1.jpg\"></a></li>          <li><a href=\"#\"><img src=\"http://pic4.ule.com/item/user_0102/desc20160928/5626b45c4ada362f_-1x-1.jpg\"></a></li>          <li><a href=\"#\"><img src=\"http://pic3.ule.com/item/user_0102/desc20160928/8045a311e6467dbb_-1x-1.jpg\"></a></li>        </ul>        <div class=\"brandStreet\">          <p><img src=\"http://i0.ule.com/ulewap/i/street.jpg\"></p>          <div class=\"swiper-container3\">            <ul class=\"swiper-wrapper\">              <li class=\"swiper-slide\"><a href=\"#\"><img src=\"http://pic0.ule.com/item/user_0102/desc20160928/48bbcd6cc59ec319_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"> <a href=\"#\"><img src=\"http://pic4.ule.com/item/user_0102/desc20160928/e7bc14d23bfe4265_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"><a href=\"#\"><img src=\"http://pic1.ule.com/item/user_0102/desc20160928/ecb5cb6db4b7bf60_-1x-1.png\"></a></li>              <li class=\"swiper-slide\"><a href=\"#\"><img src=\"http://pic4.ule.com/item/user_0102/desc20160928/f7977c5c21b492ac_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"><a href=\"#\"><img src=\"http://pic4.ule.com/item/user_0102/desc20160928/f19701853176e8f3_-1x-1.jpg\"></a></li>              <li class=\"swiper-slide\"><a href=\"#\"><img src=\"http://pic4.ule.com/item/user_0102/desc20160928/4b5c06a0f3cc2998_-1x-1.jpg\"></a></li>            </ul>          </div>        </div>      </div>      <div class=\"np_wrap\">        <div class=\"title\">          <h3>特色农品</h3>        </div>        <div class=\"prodlist\">          <a class=\"big-l\" href=\"#\"><img src=\"http://pic3.ule.com/item/user_0102/desc20160930/494d52850b3cf899_-1x-1.jpg\"></a>          <a class=\"big-r\" href=\"#\"><img src=\"http://pic1.ule.com/item/user_0102/desc20160930/42cf87979d1a618d_-1x-1.jpg\"></a>          <div class=\"small\">            <a class=\"\" href=\"#\"><img src=\"http://pic3.ule.com/item/user_0102/desc20160930/e71d49878f1991e7_-1x-1.jpg\"></a>            <a class=\"\" href=\"#\"><img src=\"http://pic4.ule.com/item/user_0102/desc20160930/a430818404c8a433_-1x-1.jpg\"></a>          </div>        </div>      </div>      <div class=\"crazy\">        <a href=\"#\"><img src=\"http://pic3.ule.com/item/user_0102/desc20160930/40daaff288bd2d50_-1x-1.jpg\"></a>      </div>      <div class=\"goodstore\">        <h3>          <span class=\"line\"></span>          <span class=\"tui\">今日好店铺</span>        </h3>        <div class=\"swiper-container4\">          <div class=\"swiper-wrapper\">            <div class=\"swiper-slide\">              <div class=\"product-pic\" href=\"javascript:;\">                <div class=\"goodstore_top\">                  <a href=\"#\">                    <span class=\"goodstore_loge\">                      <img src=\"http://pic2.ule.com/item/user_0102/desc20160928/515e3f4f65af9714_-1x-1.jpg\">                    </span>                    <div class=\"goodstore_title\">                      <h3  class=\"goodstore_title\">锋福母婴旗舰店</h3>                      <p class=\"goodstore_subtit\">全场满100元立减10元</p>                    </div>                    <span class=\"goodstore_btn\">进入店铺</span>                  </a>                </div>                <div class=\"goodstore_imglist\">                  <a href=\"#\"><img src=\"http://pic1.ule.com/pic/user_800106792/product/prd20160615/bc5894ab4ea9b2c4_p450x450_l.jpg\"></a>                  <a href=\"#\"><img src=\"http://pic4.ule.com/pic/user_800106792/product/prd20160316/1db0f9edde33b89d_p450x450_l.jpg\"></a>                  <a href=\"#\"><img src=\"http://pic0.ule.com/pic/user_800106792/product/prd20160506/3cfc4abdbcbb6302_p800x800_l.jpg\"></a>                </div>              </div>            </div>            <div class=\"swiper-slide\">              <div class=\"product-pic\" href=\"javascript:;\">                <div class=\"goodstore_top\">                  <a href=\"#\">                    <span class=\"goodstore_loge\">                      <img src=\"http://pic0.ule.com/item/user_0102/desc20160928/41f61b3407884526_-1x-1.jpg\">                    </span>                    <div class=\"goodstore_title\">                      <h3  class=\"goodstore_title\">上海行立家居有限公司</h3>                      <p class=\"goodstore_subtit\">品质家居生活 全场3折起</p>                    </div>                    <span class=\"goodstore_btn\">进入店铺</span>                  </a>                </div>                <div class=\"goodstore_imglist\">                  <a href=\"#\"><img src=\"http://pic1.ule.com/pic/user_800108691/product/prd20160926/00e041214dbf9dac_p800x800_l.jpg\"></a>                  <a href=\"#\"><img src=\"http://pic1.ule.com/pic/user_800108691/product/prd20160713/e14659b39d670731_p800x800_l.jpg\"></a>                  <a href=\"#\"><img src=\"http://pic3.ule.com/pic/user_800108691/product/prd20160415/42aaed8cb3033cd9_p800x1000_l.jpg\"></a>                </div>              </div>            </div>            <div class=\"swiper-slide\">              <div class=\"product-pic\" href=\"javascript:;\">                <div class=\"goodstore_top\">                  <a href=\"#\">                    <span class=\"goodstore_loge\">                      <img src=\"/build/images/goodStore3.jpg\">                    </span>                    <div class=\"goodstore_title\">                      <h3  class=\"goodstore_title\">品牌手机专营店</h3>                      <p class=\"goodstore_subtit\">原装正品，不忘初心</p>                    </div>                    <span class=\"goodstore_btn\">进入店铺</span>                  </a>                </div>                <div class=\"goodstore_imglist\">                  <a href=\"#\"><img src=\"http://pic0.ule.com/pic/user_800109014/product/prd20160916/7b5c3a904c66aaee_p450x450_l.jpg\"></a>                  <a href=\"#\"><img src=\"http://pic0.ule.com/pic/user_100055/product/prd20160920/8b54c184ea5af48e_p459x457_l.jpg\"></a>                  <a href=\"#\"><img src=\"http://pic3.ule.com/pic/user_100055/product/prd20160511/40c887102a66aacb_p557x546_l.jpg\"></a>                </div>              </div>            </div>          </div>          <div class=\"swiper-pagination4\"></div>        </div>      </div>    </div>    <div class=\"moretui\">      <h3>        <span class=\"line\"></span>        <span class=\"tui\">猜您喜欢</span>      </h3>      <div class=\"enjoy\">        <ul>          <li><a href=\"http://m.ule.com/item/detail/768443?source=index\"><img data-src=\"http://pic0.ule.com/pic/user_0102/product/prd20160930/4b72a3aac4eacbde_p800x800_290x290.jpg\" width=\"176\" height=\"176\" src=\"http://pic0.ule.com/pic/user_0102/product/prd20160930/4b72a3aac4eacbde_p800x800_290x290.jpg\"> <p class=\"goodsName\">30年老品牌 郑明明鱼子精华修颜霜35g BB霜 遮瑕</p><p class=\"price\"><del>¥168.00</del><br>¥29.00<span class=\"zhe\">1.7折</span></p></a></li>        </ul>      </div>    </div>    <div class=\"bottomContent\">      <p class=\"device_type\">        <a href=\"javascript:void(0);\" class=\"app_type\"><i></i>客户端</a>        <a href=\"javascript:void(0);\" class=\"wap_type\"><i></i>触屏版</a>      </p>      <p><span><!-- (021)28943666 --></span>沪ICP备 13037728号</p>      <p class=\"connect\">        <a href=\"/about.jsp\" class=\"about\">关于我们</a>&nbsp;&nbsp;&nbsp;&nbsp;        <a class=\"contact\" href=\"/contact.jsp\">联系我们</a>      </p>    </div>    <div class=\"fixed_btn\">      <a class=\"go_back\" href=\"#top\"  target=\"_self\"></a>      <a class=\"shopping_cart\" href=\"#\"><i>1</i></a>    </div>    <div id=\"search_container\" >      <a href=\"javascript:\" class=\"close\"></a>      <h3 class=\"search_box\">        <form id=\"searchForm\">          <input type=\"search\" id=\"searchkeyWord\" maxlength=\"30\" placeholder=\"iphone 7\"/>          <span id=\"search_btn\">搜索</span>          <i class=\"clear\" style=\"display: none;\"></i>        </form>      </h3>      <div class=\"search_wrap\">        <h3>热门搜索</h3>        <ul class=\"clearfix\">          <li><a href=\"#\">牙膏</a></li>          <li><a href=\"#\">巧克力</a></li>          <li><a href=\"#\">美白面膜</a></li>          <li><a href=\"#\">兰蔻</a></li>          <li><a href=\"#\">纸巾</a></li>        </ul>      </div>    </div>  </section></div><!-- <script id=\"list\" type=\"text/html\">  <ul>    {{each data as value i}}    <li><span><i><img src={{value.img}} alt=\"\"></i><b>{{value.title}}</b></span></li>    {{/each}}  </ul></script> -->"

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