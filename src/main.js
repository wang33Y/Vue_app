// 入口文件
import Vue from 'vue'
// 1.1导入路由的包
import vueRouter from 'vue-router'
// 1.3导入自己的router.js路由模块
import router from './router/index.js'
// 2.1导入vue-resource
import VueResource from 'vue-resource'

// 导入时间插件
import moment from 'moment'

// 导入App组件
import app from './App.vue'

// 导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui中的组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 1.2安装路由
Vue.use(vueRouter)

// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

// 2.2安装vue-resource
Vue.use(VueResource)

// 这只请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 全局设置post时候表单数据格式组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(app),
  router// 1.4挂载路由对象到实例上
})
