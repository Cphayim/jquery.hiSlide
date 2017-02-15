/* 
 * jquery.hislide.min.css
 * Version: v1.0.0
 * Date: 2017-02-15
 * Author: Cphayim
 * Site: https://cphayim.me 
*/
!function(a){var b=function(b,c){function d(){j.each(function(b,c){var d=i[b];a(c).css("zIndex",d.$zIndex).finish().animate(d,h.speed).find("img").css("opacity",d.$opacity)})}function e(){i.unshift(i.pop()),d()}function f(){k=setInterval(e,h.interval)}var g=a(b),h={speed:1e3,interval:2e3};a.extend(!0,h,c);var i=[{$zIndex:1,width:120,height:150,top:69,left:134,$opacity:.2},{$zIndex:2,width:130,height:170,top:59,left:0,$opacity:.4},{$zIndex:3,width:170,height:218,top:35,left:110,$opacity:.7},{$zIndex:4,width:224,height:288,top:0,left:263,$opacity:1},{$zIndex:3,width:170,height:218,top:35,left:470,$opacity:.7},{$zIndex:2,width:130,height:170,top:59,left:620,$opacity:.4},{$zIndex:1,width:120,height:150,top:69,left:500,$opacity:.2}],j=g.find("li"),k=null;g.find(".hi-next").on("click",function(){e()}),g.find(".hi-prev").on("click",function(){i.push(i.shift()),d()}),g.on("mouseenter",function(){clearInterval(k),k=null}).on("mouseleave",function(){f()}),d(),f()};a.fn.hiSlide=function(c){return a(this).each(function(a,d){b(d,c)}),this}}(jQuery);