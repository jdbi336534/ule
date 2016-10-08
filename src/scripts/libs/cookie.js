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