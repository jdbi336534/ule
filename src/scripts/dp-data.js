/*
 window.onload=function(){
 	alert(1);
 	function getdata(curl,cfn,cel) {
			$.ajax({
				type: "get",
				url: curl,
				dataType: "jsonp",
				success: function(data) {
					console.log(data);
					console.log(data.listInfo.listInfos[0]);
					console.log(data.listInfo.listInfos[0].imgUrl);
					var bestshopli = template('bestshop', data.listInfo);
				    //common[cfn]($(cel),bestshopli);

				}

			});
}

getdata("http://service.ule.com/api/item/searchItems.do?jsonApiCallback=jsonp1&storeId=10217&sort=9&start=1&end=3&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475559282206","append",".shops");
getdata("http://service.ule.com/api/item/searchItems.do?jsonApiCallback=jsonp3&storeId=10217&sort=9&start=1&end=10&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1475581481245","append",".shops");
			
	function jsonp3(){
				alert(1)
			}	

}
*/