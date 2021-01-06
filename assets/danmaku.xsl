<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/i">
<xsl:choose>
<xsl:when test='chatserver = "chat.bilibili.com"'>
<html>
  <head>
    <link rel="stylesheet" href="//blog.fachep.com/css/index.css" />
	<script src="//blog.fachep.com/js/crc32-crack.js"></script>
	<title>CID: <xsl:value-of select="chatid"/>的弹幕</title>
  </head>
  <body>
    
	3.
  </body>
</html>
</xsl:when>
<xsl:otherwise>
<html>
  <head>
    <link rel="stylesheet" href="//blog.fachep.com/css/index.css" />
	<title>不支持的弹幕来源</title>
  </head>
  <body>
    <h2>XML弹幕样式表</h2>
	<h4>用法</h4>
	<p>在XML格式弹幕文件的XML声明下插入以下代码：</p>
	<div class="code-area-wrap">
	  <div class="highlight-tools"><div class="code_lang">xml</div></div>
	  <figure class="highlight xml"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br/><span class="line">2</span><br/></pre></td><td class="code"><pre><span class="line">&lt;?xml-stylesheet type="text/xsl" href="//blog.fachep.com/source/danmaku.xsl"?&gt;</span><br/><span class="line">&lt;!-- 目前仅限B站弹幕 --?&gt;</span><br/></pre></td></tr></tbody></table></figure>
	</div>
	<h4>开源许可</h4>
	<p>本文件使用xmcp以<a href="https://github.com/xmcp/pakku.js/blob/master/LICENSE.txt">GPL 许可协议</a>发布的开源项目<a href="https://github.com/xmcp/pakku.js/">pakku.js</a>中的<a href="https://github.com/xmcp/pakku.js/blob/master/pakkujs/core/crc32-crack.js">crc32-crack.js</a></p>
  </body>
</html>
</xsl:otherwise>
</xsl:choose>
</xsl:template>
</xsl:stylesheet>