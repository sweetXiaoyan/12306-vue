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
    template:' <span class="checkbox">\n' +
    '<input type="checkbox" value="0" class="isRemember"\n' +
    'id="checkbox-isRemember" style="display: none;">\n' +
    '<label for="checkbox-isRemember"></label>\n' +
    '</span>'
});
Vue.component('el-check',elCheck);
/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
  template: '<App/>',
  components: { App }
});
