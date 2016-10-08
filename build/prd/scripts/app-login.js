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

	module.exports = __webpack_require__(19);


/***/ },

/***/ 6:
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

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(20);



/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(21);

	var common = __webpack_require__(6);

	common.renderBody($('body'), str);

	Zepto(function() {
		var login = {
			trimAll : function(str) {
				return str.replace(/\s/g, '');
			},
			isMobile : function(str) {
				return new RegExp(/^(13|14|15|17|18)\d{9}$/).test(str);
			},
			isEmail : function(str) {
				return new RegExp(/^([_a-zA-Z\d\-\.])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/).test(str);
			},
			init : function() {
				this.initEvent();
			},
			initEvent : function() {
				$('.selectp i').tap(function() {
					var that = $(this);
					if (that.hasClass("focus")) {
						$('#freeLogin').val("N");
						that.removeClass("focus");
					} else {
						$('#freeLogin').val("Y");
						that.addClass("focus");
					}
				});
				var validateForm = {
					validateName : function() {
						var name = $('#username').val();
						if (login.trimAll(name) == "") {
							$('#userErr').html("请输入手机号码或者email!");
						} else if (!(login.isMobile(login.trimAll(name)) || login
								.isEmail(login.trimAll(name)))) {
							$('#userErr').html("手机号码或者email格式错误!");
						} else {
							$('#userErr').html("&nbsp;");
						}
					},
					validatePwd : function() {
						var name = $('#userpwd').val();
						if (login.trimAll(name) == "") {
							$('#uerpwdErr').html("请输密码!");
						} else {
							$('#uerpwdErr').html("&nbsp;");
						}
					}
				};
				$('#username').blur(function() {
					validateForm.validateName();
				});
				$('#userpwd').blur(function() {
					validateForm.validatePwd();
				});
				// 登录按钮
				$('.loginBtn').click(function() {
					var that = $(this);
					var date = new Date();
			        var b = that.attr("a");
			        if (b!=null&&b!=""&&(date.getTime()-that.attr("a"))<6000) {
						return false;//两次点击相隔时间短于六秒，不能重复提交
					}
					validateForm.validateName();
					validateForm.validatePwd();
					var isValidate = true;
					$('p.error').each(function() {
						var that = $(this);
						if (!(that.text() == "" || that.text() == " ")) {
							isValidate = false;
							return false;
						}
					});
					if (isValidate) {
						that.attr("a",date.getTime());
						document.getElementById("loginForm").submit();
					}
				});
			}
		}
		
		


	login.init();
		
		
	});







/***/ },

/***/ 21:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <header>        <ul>            <li> <a href=\"index.html\"><i class=\"iconfont\">&#xe679;</i></a></li>            <li>                <span>登录</span>            </li>           <li> <a href=\"login.html\"><i class=\"iconfont\">&#xe657;</i></a></li>        </ul>    </header>    <section>    	    <div class=\"content\">    <form action=\"/user/login\" method=\"post\" id=\"loginForm\">    <input type=\"hidden\" name=\"freeLogin\" id=\"freeLogin\" value=\"Y\">    	<div>    		<input type=\"text\" placeholder=\"请输入您的手机号或email\" id=\"username\" name=\"username\" maxlength=\"100\" value=\"\">    	<p class=\"error\" id=\"userErr\">&nbsp;</p>    	</div>    	<div>    		<input type=\"password\" placeholder=\"请输入密码\" id=\"userpwd\" name=\"passwd\" maxlength=\"100\" value=\"\">    	<p class=\"error\" id=\"uerpwdErr\">&nbsp;</p>    	</div>        <p class=\"selectp\">       <span><i class=\"focus\"></i>记住密码</span>        <a href=\"#\">找回密码</a></p>    	<!-- <div>        <p>    		<span>    			<i class=\"iconfont\">&#xe6d4;</i>    			<p>记住密码</p>    		</span>    		<a href=\"#\">找回密码</a>            </p>    	</div> -->        <ul>            <li class=\"regBtn\"><a href=\"reg.html\">注册</a></li>            <li class=\"loginBtn\"><a href=\"javascript:void(0);\">登录</a></li>        </ul>    	    </div>    <div class=\"union_login\">        <div class=\"title\"><h3>一键登录</h3></div>                <a href=\"#\" class=\"qq_login\"><img src=\"https://secure.ule.com/ulewap/i/qq_icon.png\"><span>QQ</span></a>        <a href=\"#\" class=\"sina_login\"><img src=\"https://secure.ule.com/ulewap/i/sina_icon.png\"><span>新浪微博</span></a>    </div>     </form>    </section></div>"

/***/ }

/******/ });