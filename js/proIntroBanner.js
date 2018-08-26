//实例化一个数组用于存放图片路径
var arrImg = new Array;
arrImg[0] = "../img/index/banner/banner1.jpg";
arrImg[1] = "../img/index/banner/banner2.jpg";
arrImg[2] = "../img/index/banner/banner3.jpg";
arrImg[3] = "../img/index/banner/banner4.jpg";

var count = 0;
var time = 2500; //定时器延时时间
//图片自动轮播
function autoPlayer() {
	if(arrImg.length == count) {
		count = 0;
	}
	document.getElementById("banner1").src = arrImg[count];
	count++;
}
//设置一个定时器，设置播放图片延时时间,重复执行函数
var Timer = setInterval(autoPlayer, time);

//清除定时器对象函数
function clearTimer() {
	clearInterval(Timer);
}
//鼠标移到按钮上时显示相应图片
function showBannerById(num) {
	clearTimer();
	index = parseInt(num);
	
	document.getElementById("banner1").src = arrImg[index - 1];
	count = index;
}
//鼠标离开按钮恢复自动轮播效果
function btnMouseOut() {
	Timer = setInterval(autoPlayer, time);
}

