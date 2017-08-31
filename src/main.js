// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/less/index.less'

Vue.config.productionTip = false
Vue.prototype.$http = axios

//注册全局组件
var elCheck = Vue.extend({
    template:"<a  :class='checked ? '':'checked'' @click='checked = !checked'></a>"
});
Vue.component('el-check',elCheck);
/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
  template: '<App/>',
  components: { App }
});
