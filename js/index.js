var interval,interval2,interval3;//时钟id
var time=1000;//time定义一个时间
$(document).ready(function(){//记录 登入界面

	interval=setInterval("switchImg()",time);

	interval2=setInterval("switchImg2()",time);
	//间隔等于setInterval() 方法可按照指定的周期（以毫秒计）
	//来调用函数或计算表达式。
	//开启函数，time计时 
	$(".imgswitch").mouseenter(function(){//查找 图片 鼠标穿过
	clearInterval(interval);//清零间隔
    });

	$(".imgswitch").mouseleave(function(){//查找 图片 鼠标离开
	interval=setInterval("switchImg()",time);//同上
	});

	
	$(".imgmenu .imagemenutext").mouseenter(function(){//查找 文字 鼠标穿过
 	var index=$(".imgmenu .imagemenutext").index(this);//
	showImg(index);
	position=index;
	});

	$(".ping04").mouseenter(function(){//查找 图片 鼠标穿过
	clearInterval(interval2);//清零间隔
    });

	$(".ping04").mouseleave(function(){//查找 图片 鼠标离开
	interval2=setInterval("switchImg2()",time);//同上
	});

	$(".jian").click(function(){
		if (position2==0) {
			position2=1;
		}
		else{
			position2=0;
		}
		showImg2(position2);
	})
	$(".jian1").click(function(){
		if (position2==0) {
			position2=1;
		}
		else{
			position2=0;
		}
		showImg2(position2);

	})

	$(".shu").focus(function(){

		$(".biao2").show();
		$(".shu").val("");


	})
	$(".shu").blur(function(){

		$(".biao2").hide();
		$(".shu").val("老九门");


	})

	$(".menuupload1").click(function(){
		
		$(".shangchuan").show();
		$(".sanjiao").show();
		$(".xinxi").hide();
		$(".sanjiao1").hide();
		$(".bofang").hide();
		$(".sanjiao2").hide();
		return false;

	})

	$("body").click(function(){
		$(".sanjiao").hide();
		$(".shangchuan").hide();

	})

	$(".menuupload1").mouseleave(function(){

		interval3=setInterval("shangchuan()",time);
		

	})
	$(".menuupload1").mouseenter(function(){

		clearInterval(interval3);//
		

	})
// 
	$(".menuupload2").click(function(){
		
		$(".xinxi").show();
 		$(".sanjiao1").show();
 		$(".shangchuan").hide();
		$(".sanjiao").hide();
 		$(".bofang").hide();
 		$(".sanjiao2").hide();
 		
	
		return false;

	})

	$("body").click(function(){
		$(".xinxi").hide();
		$(".sanjiao1").hide();

	})



	$(".menuupload2").mouseleave(function(){

		interval3=setInterval("xinxi()",time);
		

	})
	$(".menuupload2").mouseenter(function(){

		clearInterval(interval3);//
		

	})


	$(".menuupload").click(function(){
		
		$(".bofang").show();
 		$(".sanjiao2").show();
 		$(".shangchuan").hide();
		$(".sanjiao").hide();
		$(".xinxi").hide();
		$(".sanjiao1").hide();
		return false;

	})

	$("body").click(function(){
		$(".bofang").hide();
		$(".sanjiao2").hide();

	})

	$(".menuupload").mouseleave(function(){

		interval3=setInterval("bofang()",time);
		

	})
	$(".menuupload").mouseenter(function(){

		clearInterval(interval3);//
		

	})

	$(".quan").mouseenter(function(){

		$(".dubo01").show();

		
	})

	$(".dubo00").mouseleave(function(){

		$(".dubo01").hide();
		
	})

	$(".xinxi2").mouseenter(function(){
		var i=$(".xinxi2").index(this);
		$(".xinxi2").removeClass("xinxi2_hover");
		$(".xinxi2").eq(i).addClass("xinxi2_hover");

		if (i==0) {
		
		$(".xinxi5").html("您还没有收到新的更新消息");
	}
	else if (i==1) {

		$(".xinxi5").html("暂时还没有新的推荐");
	}
	else if (i==2) {
		$(".xinxi5").html("您还没有登录您登录后可以查看完整的通知列表");

	}
	else{

		$(".xinxi5").html("您还没有收到新的更新消息4");

	}


	})


	

}); 

var position=0,position2=0;//位置等于0
function switchImg()//记录开启函数
{
	var size=$(".switchimg img").size();//设 尺寸=图片
	//size() 方法返回被 jQuery 选择器匹配的元素的数量。
	position=(position+1)%size;//位置=（位置+1） if 大于size 回到0
	showImg(position);//showImg 函数调用位置
}


function showImg(pos)//启用showimg函数
{
	$(".switchimg img").hide();
	//如果被选的元素已被显示，则隐藏该元素。

	$(".switchimg img").eq(pos).show();

	//fadeIn() 方法使用淡入效果来显示被选元素，假如该元素是隐藏的。


	$(".imgmenu .imagemenutext").css("color","#ccc");
	$(".imgmenu .imagemenutext").eq(pos).css("color","#fff");

	$(".imgmenu .imagemenutext").css("background","");
	$(".imgmenu .imagemenutext").eq(pos).css("background","#63b504");


}


function switchImg2()//记录开启函数
{
	var size=$(".ping04_img img").size();

	//size() 方法返回被 jQuery 选择器匹配的元素的数量。
	position2=(position2+1)%size;//位置=（位置+1） if 大于size 回到0
	showImg2(position2);//showImg 函数调用位置
}

function showImg2(pos)//启用showimg函数
{

	$(".ping04_img img").hide();
	$(".ping04_img img").eq(pos).show();
	if (pos==0) {
		
		$(".ping08").html("《琅琊榜2》阵容出炉 黄晓明刘昊然率军亮相");
	}
	else{

		$(".ping08").html("二次元美女--游戏有戏 真的好玩");
	}

}

function shangchuan()
{
	$(".shangchuan").hide();
	$(".sanjiao").hide();
}
function xinxi()
{
 	$(".xinxi").hide();
 	$(".sanjiao1").hide();
 	
}
function bofang()
{
 	$(".bofang").hide();
 	$(".sanjiao2").hide();
 	
}






console.log("关上");
console.log("谁让你看我代码了！");
console.log("谁让你看我代码了！");
console.log("您正在下载病毒~");
console.log("                  作者：梅衍青");