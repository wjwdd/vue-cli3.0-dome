import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import 'amfe-flexible';
import './plugins/vant'
import './assets/less/index.less'
new Vue({
  router,
  el: '#app',
  render: h => h({ ...App, store })
});
