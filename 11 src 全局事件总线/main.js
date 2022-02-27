//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//关闭Vue的生产提示
Vue.config.productionTip = false;

// Vue.prototype.x = { a: 100, b: 200 };
Vue.prototype.$bus = new Vue();

//创建vm
new Vue({
  el: '#app',
  render: (h) => h(App),
  // beforeCreate() {
  //   Vue.prototype.x = this;
  // },
});
