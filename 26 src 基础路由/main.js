import Vue from 'vue';
import App from './App.vue';

// 引入路由器对象
import router from './router/index';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // beforeCreate() {
  //   Vue.prototype.$bus = this;
  // },

  // 注册路由器
  router,
}).$mount('#app');
