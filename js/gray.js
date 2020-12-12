date=new Date();
dateString = date.getMonth()+' '+date.getDate();
switch(dateString) {
	case '11 13':
		document.documentElement.classList.add('gray');
		document.styleSheets[0].addRule('*::-webkit-scrollbar-thumb','background: black');
		var e = document.createElement('link');
		e.rel='icon';
		e.href='/favicon.gray.ico';
		document.head.appendChild(e);
}