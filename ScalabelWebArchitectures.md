netsh wlan start hostednetwork 
C:\Windows\system32>netsh wlan set hostednetwork mode=allow ssid=Test key=lich
dewifi
The hosted network mode has been set to allow.
The SSID of the hosted network has been successfully changed.
The user key passphrase of the hosted network has been successfully changed.


������վ


�վ� ����pv100�� ������վ


###�߲��� ������
	apache 200pv ƽ��ÿ��  -����ҵ���߼�
	google 40509 pv35��
###�߿��� -���� 7*24

###�������� ��MySQL�洢 �洢���ݼ�ǧ�� ��

###�������������Ƶ�� 

#����Ҫ��
	* ������ 
		�߻��� ���м��� ϵͳ�Ż�
	* �߿���
		���ؾ��� ˫������ �Զ��ָ�
	* ��չ��
		������� ������ ҵ��ָ�

��һ����վ           ��
���ݿ� ��ѯ������ ʱ�� 100��������



*���ܸ��ز���
	tps 
	
*��������ʱ��
	ϵͳ������е� ����ص� ������	        

#���Թ���
 ab  - n �ܹ����� -c ÿ�뷢�� ab -n -c http://127.0.0.1/ 

 jmeter
 loadrunner
 
 requests per second ÿ�� �ܳ��ܵ�������

##webǰ���Ż�
	����http����
	ʹ����������� ����ʱ��
	����ѹ�� 
		  gzip,deflate,sdch �ɼ�ʱ��ѹ��
	����cookic�Ĵ��� 
		 ��ͬ������ ie6ֻ�ܴ���������
		 �ӿ�����ٶ� �������������
	css����������
	javascript ����������
yslow


#�߿���

������ 99.99% һ�� 
2��9��������  ���С��88Сʱ
3��9 9Сʱ
4��9 �Զ��ָ����ܵĸ߿���
5��9 ���С��5����

�ܹ��ݻ�

	������� ��ͬҵ������
	����ҳ�滺�� 
	ҳ��Ƭ�λ���
	���ݻ��� memache 
	����webserver
	�ֿ�  
	�ֱ� DAL�ͷֲ�ʽ����
	�����webserver �ֲ�ʽ�ļ�ϵͳ
	��д���� �洢
	���ͷֲ�ʽӦ�úͼ�Ⱥ  ����
        
 ## ������վ����˼��

*  ���֡�����֮�����Ǹ���      
	
	ˮƽ  apache���� �� ��̫�� user1users3users2 ������ͬҵ��
	��ֱ  DAL ���� user�û��У�blog���� ��Ӧ�ò㣬����㣬���ݲ�
	�ֲ�ʽ Ӧ�÷�����Դ���ݼ���
	��������
	��Ⱥ

*   ����  
	���� ��������� cdn

*   �첽��Ϣ����
	 �첽��Ϣ���У�producer-��mq->consumer ���ܣ�ǿ׳���ٶȣ�������
	
*   �Զ���
	�Զ������� �Զ������� �Զ������� �Զ������ �Զ������� ��ȫ��� ʧЧת�ƺͻָ�

*   �����󾫣��Ż�ÿһ��ϸ��
	linux �Ż�  ����ҵ��ѡ�� �Ż�tcp �ļ���������
	apache �Ż� ����ģʽ
	mysql  �Ż�
	php    �Ż�

	chkconfig iptables off �رշ���ǽ 
	/etc/sysconfig/selinux
	/ssh/ssh_confing 
		gssapi nono yes yes 
	cw�滻
	etc/hosts etc/sysconfig/network  # /etc/init.d/network restart
	2 ���û� 3������ 5 ͼ��
	chkconfig --2  iptables off
  	/etc/profile histsize ��ʷ��С  
  	ulimit ���ļ���С rc.loac  ulimit 
	
	free -m�� buffers/cahche free
	�ڶ�����(-/+ buffers/cache):
(-buffers/cache) used�ڴ�����286M (ָ�ĵ�һ����Mem���е�used �C buffers �C cached)
(+buffers/cache) free�ڴ���: 715M (ָ�ĵ�һ����Mem���е�free + buffers + cached)
	
	���� uptime average 1���� ϵͳ��æ ���� һ���Ǽ� )  5����  15���Ӹ���
        
	top 1 cpu
	
	 4��ipת��lvs   hap 4-7
    7��http ת�� ngnix

	ip1=192293
	vip1=192. �����ip �����ڵ� �����
	
	�ͻ���  vim ls vip ͬ������vip vip�����ռ��

	keealived ����  ����Լ� ����vip  ������vip
	
	tail -f ��־

       
	



	
        
	







	


		









