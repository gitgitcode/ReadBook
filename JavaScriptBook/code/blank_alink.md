###  空连接 跳转

```
<html>
<head>
	<title>test link </title>
</head>
<body>
	<div style="background:green;height:90px;"> <a id="alink" onclick="myJsFunc()" href="javascript:void(0)">this is div and linke</a>  </div>
</body>
</html>
<script type="text/javascript">
	function myJsFunc(){
		alert('link link to www.google.com')
		if(confirm('gogo?')){ 
		window.location.href="www.google.com"   
		}
	}
</script>
```
