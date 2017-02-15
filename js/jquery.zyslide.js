// 自运行的匿名函数

(function($) {
//	var $ = jQuery;
    // 本函数每次调用只负责一个轮播图的功能
    // 也就是说只会产生一个轮播图，这个函数的作用域只能分配给一个轮播图
    // 要求在调用本函数的时候务必把当前轮播图的根标签传递过来
    // 这里的形参 ele 就是某个轮播的根标签
    var slide = function(ele) {
        var $ele = $(ele);
        // 默认设置选项
        var setting = {
        		// 控制展开的时间
            delay: 1000,
            // 控制 interval 的时间 (轮播速度)
            speed: 2000,
            
        };
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

        var $lis = $ele.find('li');
        var timer = null;

        // 事件
        $ele.find('.zy-next').on('click', function() {
            next();
        });
        $ele.find('.zy-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        // 让每个 li 对应上面 states 的每个状态
        // 让 li 从正中间展开
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.delay).find('img').css('opacity', state.$opacity);
            });
        }

        // 切换到下一张
        function next() {
            // 原理：把数组最后一个元素移到第一个
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.speed);
        }
    }
    // 找到要轮播的轮播图的根标签，调用 slide()
    $.fn.zySlide = function() {
        $(this).each(function(index, ele) {
            slide(ele);
        });
    }
	
})(jQuery);

/*
 * 用 jQuery 封装插件的几种写法
 * 
 * 插件类写法:
 * $.fn.customFun = function(){
 * 		//自定义插件类的代码
 * }
 * 用法:
 * $('selector').customFun();
 * 
 * 
 * 工具类写法:
 * $.customFun = function(){
 * 		//自定义工具类的代码
 * }
 * 用法:
 * $.customFun();
 */