
var str = require('../tpls/car.string');
// var header = require('../tpls/header.string');
var common = require('../utils/common.util.js');
common.renderBody($('body'), str);
// common.append($('.container'), header);
window.getCookie = function (cookieName){
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
  $('.commodityContainer').html("");
  var cookieValue="";
  var strCookies=document.cookie;
  var arrCookies=strCookies.split("; ");
  for(var i=0;i<arrCookies.length;i++){
    var arrItem=arrCookies[i].split("=");
    var obj = JSON.parse(getCookie(arrItem[0]));
    var html = '<div class="mainCommodity"><div class="shopInfo1"><div class="goodsId" style="display:none;">'+obj.id+'</div><div class="changeCount"><a href="#" class="substrCount">-</a><input type="text" value="'+obj.num+'" autocomplete="off" disabled><a href="#" class="plusCount">+</a></div></div><div class="commodityInfo"><ul><li class="td-chk"><div class="td-inner1"><input type="checkbox" name="checkbox" autocomplete="off" ></div></li><li class="td-item1"><a href="#" class="desImg"><img src="'+obj.img+'"></a></li><li class="td-info1"><div class="item-info"><div class="item-basis-info"><a href="#">'+obj.title+'</a></div></div><div class="td-innerMoney"><span>￥</span><p class="discount">'+(parseFloat(obj.min)*parseInt(obj.num)).toFixed(2)+'</p><p class="non-discount">￥<em>'+obj.max+'</em></p><em class="unitPrice">'+obj.min+'</em></div></li></ul></div></div>';
    common.append($('.commodityContainer'), html);
    console.log(obj);
  }
