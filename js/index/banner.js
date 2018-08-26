//定时器函数，设置播放图片延时
//setInterval(funName, 2500);

//实例化一个数组，存放图片路径
var arrImg = new Array;
arrImg[0] = "img/index/banner/banner1.jpg";
arrImg[1] = "img/index/banner/banner2.jpg";
arrImg[2] = "img/index/banner/banner3.jpg";
arrImg[3] = "img/index/banner/banner4.jpg";
var count = 0;

//自动播放图片函数
function autoPlayer() {
	if(arrImg.length == count)
		count = 0;
	document.getElementById('banner1').src = arrImg[count];
	count++;
}
//设置一个定时器，设置播放图片延时时间,重复执行函数
var Timer = setInterval(autoPlayer, 2500); /*以毫秒为单位*/

//清除定时器对象
function clearTimer() {
	clearInterval(Timer);
}

//鼠标悬停时指定播放的图片
function showBannerById(num) {
	clearTimer(); //清除自动播放
	var index = parseInt(num);
	
	document.getElementById('banner1').src = arrImg[index - 1];
	count = index;
}
//当鼠标离开后恢复自动播放效果
function btnMouseOut() {
	Timer = setInterval(autoPlayer, 2500);
}
