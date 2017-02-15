
// jQuery 出让 $ 符号的使用权限 (也就是说，从这里开始 $ 将不是 jQuery，只能使用变量 jQuery 调用 )
jQuery.noConflict();

// zySlide() 只要轮播图的根标签（任何选择器）
jQuery('.zy-slide').zySlide({speed:300});
