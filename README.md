# alidnstool01-luckystun
for lucky stun

自打看了楼主的帖子后一直在用stun穿透，穿透后webhook通知钉钉收ip和端口。
后来阿里云搞了个域名，用lucky的DDNS连接上了域名和IP，但是还有个端口号需要经常改。
为此，先在阿里云域名解析增加了一条显性URL跳转，s2.xxx.com --> s1.xxx.com:1234。然后在lucky中，让stun每次穿透成功后调用脚本，改写上面这条跳转记录的端口号。这样http的应用就不用再手动改端口啦。

下面是操作，需要有阿里域名账号，电脑和lucky镜像中要安装node.js。

1.https://ram.console.aliyun.com/profile/access-key 查看accesskey 和secret。

2.https://next.api.aliyun.com/api/Alidns/2015-01-09/DescribeSubDomainRecords?useCommon=true 
查看子域名的记录ID，最后要用来做显性URL跳转的域名的记录ID，上面例子的话就是"s2"。需要在SubDomain下面填写子域名，运行示例，查看结果。

3.https://next.api.aliyun.com/api/Alidns/2015-01-09/UpdateDomainRecord?tab=DEMO&lang=NODEJS&useCommon=true Common模式生成示例，下载nodejs完整工程。

4.新建目录，如/tool ，进入目录后安装依赖 npm install @alicloud/alidns20150109@3.4.9

5.第3步下的包解压放到/tool里面， /src和/node_modules是在一个层级的。

6.使用第1、2步的结果，修改client.js ，有两处需要修改的。改完存放到/src下面替换。

7.把/tool打包，传输到lucky目录下面，解压。进入lucky设置界面，stun下面找到web穿透条目，自定义脚本触发，

/usr/bin/node /goodluck/dnstool01/src/client.js ${port} 

也可以先在docker中手动先试验一下上面的命令，看看是否成功。

以上7步完成操作。感谢楼主，感谢AI，让我再次接入了公网。


4d4y---写了个自动更新内网打洞IP和端口服务，没有公网IP的宽带用户也可以全自动全速连回家 
https://www.4d4y.com/forum/viewthread.php?tid=3364156


