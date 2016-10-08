$(document).ready(function() {

	function getCookie(cookieName){
	    var cookieValue="";
	    var strCookies=document.cookie;
	    var arrCookies=strCookies.split("; ");
	    for(var i=0;i<arrCookies.length;i++){
	        var arrItem=arrCookies[i].split("=");
	        if(arrItem[0]==cookieName){
	            cookieValue=arrItem[1];
	        }
	    }
	    return decodeURIComponent(cookieValue);
	}

	function setCookie(name,value,expiredays){
	    var date=new Date();
	    date.setDate(date.getDate()+expiredays);
	    document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
	}

	function remove(name){
	    setCookie(name,"",-1);
	}
/********************MOBILE***********************/

	//mobile中fixed全选
	$('.all-selected1').on('click','.allSelected2',function(event){
		if ($(this).prop('checked')) {
			$(':checkbox').prop('checked',true);
			$('.commodityInfo').css({
				'background-color':'#FFF8E1'
			});
		} else {
			$(':checkbox').prop('checked',false);
			$('.commodityInfo').css({
				'background-color':'#fcfcfc'
			});
		}
		getCountMobile();
	})

	//mobile中点击某商品时选中
	$('body').on('click','.td-inner1 input',function(event){
		if ($(this).prop('checked')) {
			$(this).parents('.commodityInfo').siblings('.shopInfo1').find('input').prop('checked',true);
			$(this).parents('.commodityInfo').css({
				'background-color':'#fff8e1'
			});
		} else {
			$(this).parents('.commodityInfo').siblings('.shopInfo1').find('input').prop('checked',false);
			$(this).parents('.commodityInfo').css({
				'background-color':'#fcfcfc'
			});
		}
		cancelSelectMobile();
		getCountMobile();
	});

	//mobile中点击某商品时选中
	$('body').on('click','.shopInfo1 input',function(event){
		if ($(this).prop('checked')) {
			$(this).parents('.shopInfo1').siblings('.commodityInfo').find('.td-inner1 input').prop('checked',true);
			$(this).parents('.shopInfo1').siblings('.commodityInfo').css({
				'background-color':'#fff8e1'
			});
		} else {
			$(this).parents('.shopInfo1').siblings('.commodityInfo').find('.td-inner1 input').prop('checked',false);
			$(this).parents('.shopInfo1').siblings('.commodityInfo').css({
				'background-color':'#fcfcfc'
			});
		}
		cancelSelectMobile();
		getCountMobile();
	});
	//
	// //商品数量的输入框
	// $('body').on('keypress keyup blur','.changeCount input',function(event){
	// 	if (event.type==='keypress') {
	// 		var thisParent = $(this).parents('.td-amount');
	// 		var thisInput = $(this).parent('.item-amount');
	// 		var $text = thisParent.siblings('.td-price').find('span').text();
	// 		var tdSum = thisParent.find('.td-sum').children('span');
	// 		var keyCode = event.keyCode ? event.keyCode : event.charCode ;
	// 		if (keyCode !== 0 && (keyCode <48 || keyCode >57) && keyCode!==8 && keyCode !==37 && keyCode !==39 && keyCode !==46) {
	// 			return false;
	// 		} else {
	// 			return true;
	// 		};
	// 	} else if(event.type ==='keyup'){
	// 		var thisParent = $(this).parents('.td-amount');
	// 		var thisInput = $(this).parent('.item-amount');
	// 		var $text = thisParent.siblings('.td-price').find('span').text();
	// 		var tdSum = thisParent.siblings('.td-sum').find('span');
	// 		var keyCode = event.keyCode ? event.keyCode : event.charCode ;
	// 		if (keyCode !== 8) {
	// 			var num = parseInt($(this).val()) || 0;
	// 			num = num < 1 ? 1 : num;
	// 			var num = $(this).val();
	// 			tdSum.text($text * num + '.00');
	// 		};
	// 		var anNum = $(this).val();
	// 		tdSum.text($text * anNum +'.00');
	// 		getCount();
	// 	} else {
	// 		var thisParent = $(this).parents('.td-amount');
	// 		var thisInput = $(this).parent('.item-amount');
	// 		var $text = thisParent.siblings('.td-price').find('span').text();
	// 		var tdSum = thisParent.siblings('.td-sum').find('span');
	// 		var keyCode = event.keyCode ? event.keyCode : event.keyCode;
	// 		var num = parseInt($(this).val()) || 0;
	// 		num = num < 1 ? 1 : num ;
	// 		$(this).val(num);
	// 		var anNum = $(this).val();
	// 		tdSum.text($text * anNum +'.00');
	// 		getCount();
	// 	}
	// });




	//Mobile商品数量增加
	$('body').on('click','.plusCount',function(event){
		var aaParent = $(this).parents('.shopInfo1');
		var thisParentS = aaParent.siblings('.commodityInfo');
		var $id = aaParent.find('.goodsId').html();
		var title = thisParentS.find('.item-basis-info').children().html();
		var unitPrice = thisParentS.find('.unitPrice').text();
		var maxPrice = thisParentS.find('.non-discount').children().html();
		var img = thisParentS.find('.desImg').children().attr("src");

		var thisInput = $(this).parent('.changeCount');
		var $sum = thisParentS.find('.discount');
		var $text = thisParentS.find('.discount').text();
		var num = thisInput.find('input').val();
		num++;
		var obj = {
			"id":$id,
			"title":title,
			"min":unitPrice,
			"max":maxPrice,
			"num":num,
			"img":img
		}
		var str = JSON.stringify(obj);
		setCookie($id,str,100);
		// str  = JSON.parse(getCookie($id));
		// console.log(str.id);
		thisInput.find('input').val(num);
		$sum.text(unitPrice * num + '.00');
		getCountMobile();
		return false;
	});

	//Mobile商品数量减少
	$('body').on('click','.substrCount',function(event){
		var aaParent = $(this).parents('.shopInfo1');
		var thisParentS = aaParent.siblings('.commodityInfo');
		var $id = aaParent.find('.goodsId').html();
		var title = thisParentS.find('.item-basis-info').children().html();
		var maxPrice = thisParentS.find('.non-discount').children().html();
		var img = thisParentS.find('.desImg').children().attr("src");
		var unitPrice = thisParentS.find('.unitPrice').text();
		var thisInput = $(this).parent('.changeCount');
		var $sum = thisParentS.find('.discount');
		var $text = thisParentS.find('.discount').text();
		var num = thisInput.find('input').val();
		if (num>1) {
			num--;
			thisInput.find('input').val(num);
		}
		var obj = {
			"id":$id,
			"title":title,
			"min":unitPrice,
			"max":maxPrice,
			"num":num,
			"img":img
		}
		var str = JSON.stringify(obj);
		setCookie($id,str,100);
		$sum.text(unitPrice * num + '.00');
		getCountMobile();
		return false;
	});

	//Mobile商品数量减少
	$('body').on('click','.amount-left',function(event){
		var thisParent = $(this).parents('.td-amount');
		var thisInput = $(this).parent('.item-amount');
		var $text = thisParent.siblings('.td-price').find('span').text();
		var tdSum = thisParent.siblings('.td-sum').find('span');
		var num = thisInput.find('input').val();
		if (num > 1 ) {
			num--;
			thisInput.find('input').val(num);
		}
		tdSum.text($text * num +'.00');
		getCount();
		return false;
	});

	//mobile中取消全选
	function cancelSelectMobile(){
		if ($('.td-inner1 input').length === $('.td-inner1 input:checked').length) {
			$('.allSelected2').prop('checked',true);
		} else {
			$('.allSelected2').prop('checked',false);
		}
	}


	//mobile中获得已选中商品和商品价格总额
	function getCountMobile(){
		var counts = 0;
		var sum = 0;
		$('.td-inner1 input').each(function(index, el) {
			if ($(this).prop('checked')) {
				for (var i = 0; i < $(this).length; i++) {
					console.log($(this).parents(".commodityInfo").html());
					counts += parseInt($(this).parents('.td-chk').siblings('.td-info1').find('.discount').text());

					sum += 1;
				}
			}
		});
		$('.totalSum').text(sum);
		$('.total-sum').html((counts).toFixed(2));
	};




});
