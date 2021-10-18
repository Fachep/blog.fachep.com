$('.cmd-title span').text(window.location.host+' bash');
$('.address').text('[root@'+window.location.host+' ~] ');
function setip(data){$('#ip').text(data.ip);}

function f(){
if(window.innerWidth<=767) {
	$('.cmd').addClass('cmd-mobi');
	var offsetTop1 = $('#c1').offset().top;
	var offsetTop2 = $('#c2').offset().top;
	var h1 = $('#c1').height();
	var h2 = window.innerHeight;
	$(window).scroll(function(){
		var v1 = offsetTop1-$(window).scrollTop();
		var v2 = offsetTop2-$(window).scrollTop();
		if(v2 <= 0.7*h1){
			$('#c2').addClass('cmd-hover');
			$('#c1').removeClass('cmd-hover');
		}else if(v1 <= 0.8*h2 && v1 > -0.1*h1){
			$('#c1').addClass('cmd-hover');
			$('#c2').removeClass('cmd-hover');
		}else{
			$('#c1').removeClass('cmd-hover');
			$('#c2').removeClass('cmd-hover');
		}
	});
	$(window).scroll();
}else {
	$(window).unbind('scroll');
	$('.cmd').removeClass('cmd-mobi');
};}

$(window).ready(f);
$(window).resize(function(){setTimeout(f,500)});

var hour = date.getHours();
var output;
if(hour>=6 && hour<11) output="哦哈哟，祝元气满满"
else if(hour>=11 && hour<15) output="午安，吃了吗"
else if(hour>=15 && hour<17) output="hmmmm下午干什么呢"
else if(hour>=17 && hour<21) output="呼呼呼，享受傍晚吧"
else if(hour>=21 || hour<2) output="看完这集就睡"
else if(hour>=2 && hour<6) output="我就是熬夜冠冖"
else output="兄台，今何时也";
$('#output').prepend(output);
$('#copyright').prepend('&copy;2020 - '+date.getFullYear());