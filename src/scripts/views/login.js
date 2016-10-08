var str = require('../tpls/login.string');

var common = require('../utils/common.util.js');

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




