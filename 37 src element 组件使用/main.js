import Vue from 'vue';
import App from './App.vue';

// 全局引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, Alert } from 'element-ui';

Vue.config.productionTip = false;

// Vue.use(ElementUI); // 全局注册
Vue.use(Button);
Vue.use(Row);
Vue.use(Alert);

new Vue({
  render: (h) => h(App),
  // beforeCreate() {
  //   Vue.prototype.$bus = this;
  // },
}).$mount('#app');
