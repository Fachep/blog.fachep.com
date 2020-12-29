document.otitle = document.title;
document.addEventListener('visibilitychange',function(){
	switch(document.visibilityState){
		case 'visible':
			document.title = 'o(*￣▽￣*)ブ泥嚎';
			clearTimeout(document.titleTimer);
			document.titleTimer = setTimeout(function(){document.title = document.otitle}, 1000);
			break;
		case 'hidden':
			document.titleTimer = setTimeout(function(){document.title = '网页崩溃了ヽ(*。>Д<)o゜'}, 3000);
			break;
		case 'unloaded':
			document.title = '不要我了QAQ';
			break;
	}
});