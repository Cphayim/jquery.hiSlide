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
