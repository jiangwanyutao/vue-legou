# legou项目

## 安装依赖
```
npm install
```

### 运行项目
```
npm run serve
```

### 打包项目
```
npm run build
```


乐购是一款商城购物类App，项目仿制真实线上项目网易严选，系统采用前后端分离的开发模式，前台使用了Vue.js等技术栈构建的SPA应用程序，UI层面使用基于Vue的Mobile组件库Vant，页面风格统一，提高开发效率，适合有Vue基础或者有其他MVVM框架应用经验的同学进行学习。

## 预览地址

[点我直达](http://xm.jwyt.cloud)

## 接口文档

[点我直达](https://apizza.net/pro/#/project/14fa6a9c4a45468acf235da89ee8e1be/browse?pass=a511db3cf920386c952dd6bdfbcf42fd)

## 技术站

vue、vuex、vue-router、axios、async/await、vant、百度地图

## 商城主要实现的功能

* 首页、专题、分类、购物车、我的
* 首页包含品牌制造页、品牌制造详情页面、新品首发页面、人气推荐页面、各分类列表
* 商品详情页面，包含常见问题、大家都在看商品列表、加入购物车、收藏商品、立即购买、下订单、选择收货地址
* 搜索功能，包含历史记录、热门搜索、搜索后列表展示、模糊搜索提示
* 商品列表部分包含综合、价格高低进行排序
* 专题功能，包含专题详情、专题推荐列表
* 分类，包含左边大分类和右边详细分类
* 购物车，包含商品单选全选、左滑删除商品、下订单等功能
* 地址管理，包含新建地址、地址编辑、左滑删除、设置默认地址
* 我的页，包含我的收藏、地址管理、意见反馈

## 部分效果展示

### 1.首页、搜索页、定位页展示

![](./mdImages/首页、搜索页、定位页展示.gif)

### 2、专题页及详情展示

![](./mdImages/专题页及详情展示.gif)

### 3、分类页分类及详情展示

![](./mdImages/分类页分类及详情展示.gif)

### 4、商品详情、添加购物车、删除商品、选择收货地址、订单展示

![](./mdImages/商品详情、添加购物车、删除商品、选择收货地址、订单展示.gif)

### 5、我的页面收藏、地址、反馈展示

![](./mdImages/我的页面收藏、地址、反馈展示.gif)

## 注意事项

### axios 封装 

在公司开发项目，考虑到项目开发、上线使用的是不同的接口域名，所以对axios封装是很有必要的

在src目录新建api文件夹 在此文件夹下新建request.js  

```js
// request.js 封装

import axios from "axios";
import qs from "qs";

var  host;
// process.env是Nodejs提供的一个API，它返回一个包含用户环境信息的对象。
// 通过NODE_ENV 判断当前环境是生产环境(production)还是开发环境(development) 自动切换不同域名
// 暂时开发环境和生产环境  所以域名暂时一样 
if(process.env.NODE_ENV == "development"){ 
    host = "http://shop.bufantec.com/bufan";
}else{
    host = "http://shop.bufantec.com/bufan";
}

// 创建axios实例 
const instance = axios.create({
    // baseURL  公共接口路径
    baseURL: host,
    // timeout 超时时间
    timeout: 5000
});
// 请求拦截器
instance.interceptors.request.use(
    config => {
        if (config.method.toLowerCase() == 'post') {
            // qs系列化
            // https://www.npmjs.com/package/qs
            //  arrayFormat: 'repeat' 作用:  { a: ['b', 'c'] }  ==> 'a=b&a=c'
            //  allowDots: true  作用: { a: { b: { c: 'd', e: 'f' } } }  ==>  'a.b.c=d&a.b.e=f'
            config.data = qs.stringify(config.data, { arrayFormat: 'repeat', allowDots: true })
        } else{
            // 
            config.params = config.data
        }
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
)

// 响应拦截器  

instance.interceptors.response.use(

    response => {
      const res = response.data
      return res
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
)


export default  instance


```



```js
// 单个页面的封装 接口独立  一旦出现接口变动 可以直接去js文件当中查找而无需翻遍整个vue文件 对项目维护很有帮助
// 格式参考页面格式 如 页面组件路径为 views/home/index.vue  就在api文件夹新建home文件夹  api/home/index.js
import request from "@/api/request"

// 请求首页数据
function  home(data){
    return request({
        method:"get",
        url:"/topic/listaction",
        data
    })
}

// 意见反馈
function submitAction(data){
    return request({
        url:"/feedback/submitAction",
        method:"post",
        data
    })
}
export {
    home,
    submitAction
}
```



```js
// 引入封装好的请求
import { home,submitAction } from "@/api/home"

home({
    // 传递参数
	page:1
})
.then(res =>{
	console.log(res)
})

var obj = {
    content:"大法好",
    name:"张三",
    openId:1231,
    phone:12312341234
}
submitAction(obj)
    .then(res =>{
    console.log(res)
})
```

### 百度地图

https://dafrok.github.io/vue-baidu-map/#/zh/start/installation  github地址

http://lbsyun.baidu.com/index.php?title=%E9%A6%96%E9%A1%B5  百度地图sdk

#### 入门准备

http://lbsyun.baidu.com/index.php?title=jspopularGL/guide/getkey

#### 获取当前位置信息

http://lbsyun.baidu.com/jsdemo.htm#i8_1

#### 关键字检索

http://lbsyun.baidu.com/jsdemo.htm#i1_1


### rem  1px 问题 
在移动端web开发中，UI设计稿中设置边框为1像素，前端在开发过程中如果出现border:1px，测试会发现在某些机型上，1px会比较粗，即是较经典的移动端1px像素问题。
写css的时候 把1px 写成1Px  这样rem就不会对Px进行转换

### vant

vant的设计图是375px ;而项目的设计图是750px;这个时候vant的组件在项目当中存在缩放行为
安装插件  postcss-pxtorem 及 lib-flexible 

再项目中新建 postcss.config.js  

```js
module.exports = ({ file }) => {
    let isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
    let rootValue = isVant ? 37.5 : 75; // 判断条件 请自行调整
    return {
        plugins: {
            autoprefixer: {},
            "postcss-pxtorem": {
                rootValue: rootValue,
                propList: ["*"] 
            }
        }
    }
}
```

### v0.1.0版本
1.修复首页搜索后点击关闭历史记录不出现数据 
2.修复多次进入分类列表页 数据都是旧的数据  
3.修复购物车列表没数据  全选按钮不应选中  
4.修复订单数据未渲染  
5.写样式穿透的时候  最好在前面加上父级类名  否则对其他页面可能有影响  
6.点击编辑地址后,在点击新增地址,不应该出现上次点击的值 
 