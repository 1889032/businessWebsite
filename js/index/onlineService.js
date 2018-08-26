//实现浮动人工客服滚动特效
window.onload = function() {
	function changeHeight() {
	var qq = document.getElementById("onlineBox");
//	alert(document.documentElement.scrollTop);
//加上document.body.scrollTop解决浏览器兼容性问题
	qq.style.top = document.documentElement.scrollTop+ document.body.scrollTop + 200+ "px";
	}
	window.onscroll = changeHeight;
}
