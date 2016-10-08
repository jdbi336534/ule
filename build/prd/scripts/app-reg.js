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

	module.exports = __webpack_require__(11);


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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(12);



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(13);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);

	Zepto(function(){
	var register = {
			trimAll : function(str) {
				return str.replace(/\s/g, '');
			},
			isMobile : function(str) {
				return new RegExp(/^(13|14|15|17|18)\d{9}$/).test(str);
			},
			init : function() {
				this.initEvent();
			},
			initEvent : function() {
				$('#phoneNum').blur(function() {
					register.validatePhoneNum();
				});
				$('#phoneCode').blur(function() {
					register.validatePhoneCode();
				});
				$('#password').blur(function() {
					register.validatePwd();
				});
				$('#repeatpassword').blur(function() {
					register.validatereptPwd();
				});
				// 注册按钮
				$('a.btn').click(function() {
					var that = $(this);
					if (that.hasClass("disabled")) {
						return false;
					}
					register.validatePhoneNum();
					register.validatePhoneCode();
					register.validatePwd();
					register.validatereptPwd();
					var isValidate = true;
					$('p.error').each(function() {
						var that = $(this);
						if (!(that.text() == "" || that.text() == " ")) {
							isValidate = false;
							return false;
						}
					});
					if (isValidate) {
						that.addClass("disabled");
						document.getElementById("regForm").submit();
					}
				});

				$('a.getCode').tap(function() {
					register.validatePhoneNum();
					var phoneNumErr = $('#phoneNumErr');
					if (!(phoneNumErr.text() == "" || phoneNumErr.text() == " "))
						return false;
					var that = $(this);
					if (!that.hasClass("disabled")) {
						that.addClass("disabled");
						// $.getJSON(mServer + '/user/getRegValidateCode', {
						// 	mobile : register.trimAll($('#phoneNum').val())
						// }, function(obj) {
						// 	if (obj.code == "0000") {
								var timeCount = 60;
								var time = setInterval(function() {
									that.html(--timeCount);
									if (timeCount == 0) {
										clearInterval(time);
										that.removeClass("disabled");
										that.html("获取验证码");
									}
								}, 1000);
							 } //else {
							// 	that.removeClass("disabled");
							// 	$('#phoneNumErr').html(obj.msg);
							// }
						// });
					// }
				 });
			},
			validatePhoneNum : function() {
				var name = $('#phoneNum').val();
				if (register.trimAll(name) == "") {
					$('#phoneNumErr').html("请输入手机号!");
				} else if (!register.isMobile(register.trimAll(name))) {
					$('#phoneNumErr').html("手机号码格式错误!");
				} else {
					$('#phoneNumErr').html("&nbsp;");
				}
			},
			validatePhoneCode : function() {
				var name = $('#phoneCode').val();
				if (register.trimAll(name) == "") {
					$('#phoneCodeErr').html("请输验证码!");
				} else {
					$('#phoneCodeErr').html("&nbsp;");
				}
			},
			validatePwd : function() {
				var name = $('#password').val();
				if (register.trimAll(name) == "") {
					$('#passwordErr').html("请输入密码!").show();
					$('#pwdTips').hide();
				} else if (register.trimAll(name).length < 8) {
					$('#passwordErr').html("密码必须大于等于8位!").show();
					$('#pwdTips').hide();
				} else {
					$('#passwordErr').html("&nbsp;");
				}
			},
			validatereptPwd : function() {
				var name = register.trimAll($('#repeatpassword').val());
				if (name == "") {
					$('#repeatpasswordErr').html("请输入确认密码!");
				} else if (name != register.trimAll($('#password').val())) {
					$('#repeatpasswordErr').html("二次密码输入不一致!");
				} else {
					$('#repeatpasswordErr').html("&nbsp;");
				}
			}
		};
		register.init();
	});


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\"> <header>        <ul>            <li> <a href=\"#\"><i class=\"iconfont\">&#xe679;</i></a></li>            <li>                <span>注册</span>            </li>            <li class=\"iconfont\"></li>        </ul>    </header>    <section>    <div class=\"content\">    <p class=\"tip\">您可以通过以下操作完成手机注册。登录用户名为您的手机号码。</p>		<div class=\"formcontent\">			<form action=\"/user/register\" id=\"regForm\" method=\"post\">				<div class=\"row\">			<div class=\"checkcode\">				<input type=\"text\" name=\"mobile\" id=\"phoneNum\" class=\"randcode\" placeholder=\"请输入您的手机号\" maxlength=\"11\">				<a class=\"getCode\" id=\"getCode\">获取验证码</a>			</div>			<p class=\"error\" id=\"phoneNumErr\">&nbsp;</p>		</div>		<div class=\"row\">			<input type=\"number\" name=\"validateCode\" placeholder=\"请输入验证码\" maxlength=\"8\" id=\"phoneCode\">			<p class=\"error\" id=\"phoneCodeErr\">&nbsp;</p>		</div>		<div class=\"row\">				<input type=\"password\" name=\"pwd\" placeholder=\"请输入您的密码\" maxlength=\"50\" id=\"password\">				<p class=\"pwdTips\" id=\"pwdTips\" style=\"display: none;\">密码长度为8-50位，必须由字母，数字和符号两种以上组成</p>                <p class=\"error\" id=\"passwordErr\">&nbsp;</p>		</div>		<div class=\"row\">			<input type=\"password\" name=\"confirmPwd\" placeholder=\"请再次确认您的密码\" maxlength=\"50\" id=\"repeatpassword\">			<p class=\"error\" id=\"repeatpasswordErr\">&nbsp;</p>		</div>		<a class=\"btn\">注册</a>		</form>		</div>    </div>    </section></div>"

/***/ }
/******/ ]);