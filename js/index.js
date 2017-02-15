// 规定好每张图片处于的位置和状态
var states = [
    { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.3 },
    { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.5 },
    { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
    { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
    { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
    { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.5 },
    { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.3 }
];

var $lis = $('#box li');
var timer = null;

// 事件
$('.next').on('click',function(){
	next();
});
$('.prev').on('click',function(){
	states.push(states.shift());
	move();
});
$('.ctrl').on('mouseenter',function(){
	clearInterval(timer);
	timer = null;
}).on('mouseleave',function(){
	autoPlay();
});

move();
autoPlay();

// 让每个 li 对应上面 states 的每个状态
// 让 li 从正中间展开
function move() {
	$lis.each(function(index ,ele){
		var state = states[index];
		$(ele).css('zIndex',state.$zIndex).finish().animate(state,600).find('img').css('opacity',state.$opacity);
	});
}

// 切换到下一张
function next(){
	// 原理：把数组最后一个元素移到第一个
	states.unshift(states.pop());
	move();
}


/**
 * 自动播放
 */
function autoPlay(){
	timer = setInterval(next,2000);	
}

/*
 * 中午遗留问题：想一想我们的轮播图能封装成插件吗？会产生什么问题？
 * 1.插件中最好不用使用 id ，原因：插件插件是能够被重复使用的，也就是说在同一个页面中，可能多次使用，造成冲突
 * 2.变量的命名和方法的命名。用户在使用插件的时候，可能还会引入自己创建的 js 文件，也有这样的命名，那么就会产生冲突
 * 3.标签 class 的选择器的问题，名称太大众化，容易产生冲突
 * 4.插件文件名命名问题，应该取例如 jQuery.ZYSlide.js
 */