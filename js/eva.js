function hexagoninit() {
    var hexcss = '';
	var a = {};
    $('.hexagon').each(function () {
        var width = Number(this.getAttribute('hex-a'));
        if (!width || a[width])
            return true;
        hexcss += `.hexagon[hex-a="${width}"] {
	width: ${width}px;
	height: ${width*Math.sqrt(3)}px;
	margin: 0 ${width/2}px 0 ${width/2}px;
	line-height: ${width*Math.sqrt(3)}px;
}

.hexagon[hex-a="${width}"] div {
    left: -${width/2}px;
    width: ${width*2}px;
}

.hexagon[hex-a="${width}"]:before {
	border-top-width: ${width*Math.sqrt(3)/2}px;
	border-bottom-width: ${width*Math.sqrt(3)/2}px;
	border-right-width: ${width/2}px;
	left: -${width/2}px;
}

.hexagon[hex-a="${width}"]:after {
	border-top-width: ${width*Math.sqrt(3)/2}px;
	border-bottom-width: ${width*Math.sqrt(3)/2}px;
	border-left-width: ${width/2}px;
	right: -${width/2}px;
}

`;a[width]=true;
    });
    $('<style>').text(hexcss).appendTo($('head'));
}
