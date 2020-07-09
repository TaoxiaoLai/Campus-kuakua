## Campus夸夸小程序

### 项目说明
将火爆一时的夸夸群功能搬到小程序上，用户可通过小程序发布求夸，也可回复及查看他人的求夸内容，同时通过个人中心管理自己的求夸及回复。
项目中使用腾讯云数据库做后台存储，无需专门去维护服务端及数据库，可在前端直接调用腾讯云数据库所提供的各种方法，如add，get等直接操作云数据库。

### 目录结构
**cloudfunctions** -- 腾讯云数据库相关目录
**miniprogram** -- 项目主体目录
&emsp; — **images** -- 存放项目图片
&emsp; — **pages** -- 存放项目页面相关文件
&emsp;&emsp;  — **homepage** -- 小程序主页，包含夸夸榜及发布求夸
&emsp;&emsp;&emsp;  — **kuakuaList** -- 夸夸榜页面
&emsp;&emsp;&emsp;  — **upkuakua** -- 发布求夸页面
&emsp;&emsp;  — **persoal** --个人管理页面 
&emsp;&emsp;&emsp;  — **mykuakua** -- 个人发布的求夸内容页面
&emsp;&emsp;&emsp;  — **mywonderkua** -- 个人回复内容页面

### 项目截图
#### * 主页
![avatar](/miniprogram/images/homepage.jpg)

#### * 夸夸榜
![avatar](/miniprogram/images/kuakualist.jpg)

#### * 求夸及回复详情页
![avatar](/miniprogram/images/detail.jpg)

#### * 个人管理页面
![avatar](/miniprogram/images/personal.jpg)

#### * 我的夸夸页面
![avatar](/miniprogram/images/mykuakua.jpg)


### 开发工具：微信web开发者工具 v1.02 1904090