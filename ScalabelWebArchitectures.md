netsh wlan start hostednetwork 
C:\Windows\system32>netsh wlan set hostednetwork mode=allow ssid=Test key=lich
dewifi
The hosted network mode has been set to allow.
The SSID of the hosted network has been successfully changed.
The user key passphrase of the hosted network has been successfully changed.


大型网站


日均 超过pv100万 大型网站


###高并发 大流量
	apache 200pv 平均每秒  -受限业务逻辑
	google 40509 pv35亿
###高可用 -备份 7*24

###海量数据 （MySQL存储 存储数据几千万 ）

###需求迭代，发布频繁 

#构架要素
	* 高性能 
		高缓存 并行计算 系统优化
	* 高可用
		负载均衡 双机互备 自动恢复
	* 扩展性
		开发框架 多层设计 业务分割

打开一个网站           秒
数据库 查询有索引 时间 100毫秒以下



*性能负载测试
	tps 
	
*并发访问时间
	系统最佳运行点 最大负载点 崩溃点	        

#测试工具
 ab  - n 总共请求 -c 每秒发送 ab -n -c http://127.0.0.1/ 

 jmeter
 loadrunner
 
 requests per second 每秒 能承受的请求量

##web前端优化
	减少http请求
	使用浏览器缓存 缓存时间
	内容压缩 
		  gzip,deflate,sdch 采集时解压缩
	减少cookic的传输 
		 不同的域名 ie6只能打开两个链接
		 加快访问速度 浏览器并发访问
	css放在最上面
	javascript 放在最下面
yslow


#高可用

可用性 99.99% 一年 
2个9基本可用  年度小于88小时
3个9 9小时
4个9 自动恢复功能的高可用
5个9 年度小于5分钟

架构演化

	物理分离 不同业务伸缩
	增加页面缓存 
	页面片段缓存
	数据缓存 memache 
	增加webserver
	分库  
	分表 DAL和分布式缓存
	更多的webserver 分布式文件系统
	读写分离 存储
	大型分布式应用和集群  队列
        
 ## 大型网站核心思想

*  ‘分’而治之，分是根本      
	
	水平  apache服务 ， 表太大 user1users3users2 单表；不同业务；
	垂直  DAL 数据 user用户中，blog单独 ；应用层，服务层，数据层
	分布式 应用服务资源数据计算
	动静分离
	集群

*   缓存  
	数据 浏览器缓存 cdn

*   异步消息队列
	 异步消息队列（producer-〉mq->consumer 性能，强壮，速度，并发）
	
*   自动化
	自动化代码 自动化测试 自动化部署 自动化监控 自动化报警 安全检测 失效转移和恢复

*   精益求精，优化每一个细节
	linux 优化  依据业务选购 优化tcp 文件数打开限制
	apache 优化 运行模式
	mysql  优化
	php    优化

	chkconfig iptables off 关闭防火墙 
	/etc/sysconfig/selinux
	/ssh/ssh_confing 
		gssapi nono yes yes 
	cw替换
	etc/hosts etc/sysconfig/network  # /etc/init.d/network restart
	2 单用户 3命令行 5 图形
	chkconfig --2  iptables off
  	/etc/profile histsize 历史大小  
  	ulimit 读文件大小 rc.loac  ulimit 
	
	free -m兆 buffers/cahche free
	第二部分(-/+ buffers/cache):
(-buffers/cache) used内存数：286M (指的第一部分Mem行中的used – buffers – cached)
(+buffers/cache) free内存数: 715M (指的第一部分Mem行中的free + buffers + cached)
	
	负载 uptime average 1负载 系统繁忙 几核 一般是几 )  5负载  15分钟负载
        
	top 1 cpu
	
	 4层ip转发lvs   hap 4-7
    7层http 转发 ngnix

	ip1=192293
	vip1=192. 虚拟的ip 不存在的 服务端
	
	客户端  vim ls vip 同服务器vip vip虚拟后被占用

	keealived 备份  监控自己 增加vip  解析到vip
	
	tail -f 日志

       
	



	
        
	







	


		









