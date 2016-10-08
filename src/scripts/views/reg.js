var str = require('../tpls/reg.string');

var common = require('../utils/common.util.js');

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