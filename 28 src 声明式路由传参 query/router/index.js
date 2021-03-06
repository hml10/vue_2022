// 引入Vue
import Vue from 'vue';
// 引入vue-router
import VueRouter from 'vue-router';

// 引入所有的路由组件 routes
import routes from './routes'

// 声明使用插件
Vue.use(VueRouter);

// 创建路由器对象,并暴露出去
export default new VueRouter({
  mode: 'history', // history---地址栏中没有#  hash ----地址栏中带有#
  routes,
});
