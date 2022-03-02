// 引入Vue
import Vue from 'vue';

// 引入vue-router
import VueRouter from 'vue-router';

// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';

// 声明使用插件
Vue.use(VueRouter);

// 创建路由器对象,并暴露出去
export default new VueRouter({
  // mode: 'history', // history---地址栏中没有#  hash ----地址栏中带有#
  routes: [
    // 路由地址和组件建立关系
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
    },
  ],
});
