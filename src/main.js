// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './assets/less/index.less'

Vue.config.productionTip = false
Vue.use(VueResource);
/*设置全局 eventBus */
window.eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
  template: '<App/>',
  components: { App }
});

