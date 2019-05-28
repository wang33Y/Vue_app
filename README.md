# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 用传统方式把修改过后的代码上传到git
- git add .
- git commit -m "提交信息"
- git push 

## 制作首页App组件
1. 完成Header区域，使用的的是mint-ui中的Header组件
2. 制作底部的Tabbar区域，使用的是mui中的Tabbar.html
  + 在制作购物车小图标的时候，先把扩展图标的css样式，拷贝到项目中
  + 再拷贝我们的字体库ttf文件到项目中
  + 为购物车小图标添加图像样式
3. 要在中间区域放置一个router-view来展示路由匹配的组件

## 改造tabbar为router-link

## 设置路由高亮

## 点击taddar中的路由连接展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，使用mock

## 九宫格改造为六宫格

## 改造新闻资讯路由链接

## 新闻资讯页面制作
1. 绘制界面
2. 获取数据
3. 渲染真实数据

## 实现新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link,同时在跳转的时候应该提供唯一的id标识符
2. 创建新闻详情的组件页面NewsInfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个 comment.vue 的评论子组件
1. 先创建一个单独的comment.vue组件模板
2. 在需要使用comment组件的页面中，先动手导入comment组件
  + `import comment from './comment.vue'`
3. 在父组件中，使用`components`属性。将刚才导入comment组件注册为自己的子组件
4. 将注册子组件时候的注册名称以标签形式在页面中引用即可

## 获取所有的评论数据显示到页面中