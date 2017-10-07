// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import './assets/less/index.less'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
  template: '<App/>',
  components: { App }
});

