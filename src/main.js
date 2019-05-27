// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(app)

})
