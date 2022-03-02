import Vue from 'vue';
import App from './App.vue';

// 引入store
import store from './vuex/store';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // beforeCreate() {
  //   Vue.prototype.$bus = this;
  // },

  // 注册store
  store,
}).$mount('#app');
