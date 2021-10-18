var date=new Date();
var dateString = date.getMonth()+' '+date.getDate();
switch(dateString) {
	case '11 13':
		document.documentElement.classList.add('gray');
		document.styleSheets[0].addRule('*::-webkit-scrollbar-thumb','background: black');
		var e = document.createElement('link');
		e.rel='shortcut icon';
		e.type='images/x-icon';
		e.href='/favicon.gray.ico';
		document.head.appendChild(e);
}