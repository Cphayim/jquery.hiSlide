
#jQuery-hislide 旋转木马轮播组件

## 0x01 概述
**hislide** 是一款基于 **jQuery 库**的 **7**图 旋转木马轮播组件，它能够帮助你轻松地实现如下的图片轮播效果

![hislide效果图](http://ofwf89b21.bkt.clouddn.com/jquery_hislide.png)

[效果展示页](http://cphayim.oschina.io/slider/)


## 0x02 项目结构

![项目结构树](http://ofwf89b21.bkt.clouddn.com/path1.png)

## 0x03 使用指南

### 1. 引入文件

首先在页面内引入`jquery.hislide.css`，并在确保引入`jquery.js`的前提下引入`jquery.hislide.js`

```html
<!-- 页面头部引入jquery.hislide.css -->
<link rel="stylesheet" href="css/jquery.hislide.css" />

<script type="text/javascript" src="libs/jquery.js" ></script>
<!-- 页面底部引入jquery.hislide.js，再此之前请确保正确引入了jquery! -->
<script type="text/javascript" src="js/jquery.hislide.js" ></script>
```

### 2. API 

```
	$(selector).hiSlide({options})
```

参数说明

* `selector`: 选择器，目标为轮播组件的根标签
* `options`: 可选项参数，接收一个对象作为参数，目前可以设置两个轮播属性
	* `interval`: 整数，时间间隔<br />设置两张图片切换的间隔时长，单位毫秒，默认`2000`
	* `speed`: 整数，动画速度<br />设置轮播动画的速度，单位毫秒，默认`600`

**hislide** 支持同页面控制多个轮播模块，单独控制只需要重复调用API，传入不同的参数即可，且支持 jQuery 方法链式调用。

### 3. 例子

HTML结构请按照如下格式编写

```html
<!-- 轮播模块 -->
<div id="mySlide" class="hi-slide">
	<!-- 上一张 -->
	<div class="hi-prev "></div>
	<!-- 下一张 -->
	<div class="hi-next "></div>
	<!-- 图片容器 -->
	<ul>
		<li><img src="images/1.jpg" alt="轮播图片1" /></li>
		<li><img src="images/2.jpg" alt="轮播图片2" /></li>
		<li><img src="images/3.jpg" alt="轮播图片3" /></li>
		<li><img src="images/4.jpg" alt="轮播图片4" /></li>
		<li><img src="images/5.jpg" alt="轮播图片5" /></li>
		<li><img src="images/6.jpg" alt="轮播图片6" /></li>
		<li><img src="images/7.jpg" alt="轮播图片7" /></li>
	</ul>
</div>
```

JS部分
```javascript
// 头部为轮播模块根标签
$('.hi-slide').hiSlide();// 以默认参数启动

// 或
$('#mySlide').hiSlide({ // 带参数启动
	interval: 3000; // 3秒一次的频率滚动
	speed: 500; // 1秒的切换动画
});
```

## 0x04 版本迭代

* **v0.1.0** 第一个测试版提交
* **v0.0.7** 添加链式调用的支持
* **v0.0.5** 带参数的插件封装完毕
* **v0.0.3** 不带参数的插件封装完毕


## 0x05 关于作者

###Cphayim
对前端技术兴趣十足的大三狗，爱折腾

个人博客: [https://cphayim.me](https://cphayim.me)

Email: admin@cphayim.me

