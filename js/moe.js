document.otitle = document.title;
document.addEventListener('visibilitychange',function(){
	switch(document.visibilityState){
		case 'visible':
			document.title = (document.title === '网页崩溃惹‍Σ(ﾟдﾟ;)') ? '骗你哒_(:з」∠)_' : '‍(〜￣△￣)〜欢迎回来';
			clearTimeout(document.titleTimer);
			document.titleTimer = setTimeout(function(){document.title = document.otitle}, 1000);
			break;
		case 'hidden':
			document.titleTimer = setTimeout(function(){document.title = '网页崩溃惹‍Σ(ﾟдﾟ;)'}, 3000);
			break;
		case 'unloaded':
			document.title = '不要我了（/TДT)/';
			break;
	}
});