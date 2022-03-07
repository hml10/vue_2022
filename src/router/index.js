// 引入Vue
import Vue from 'vue';
// 引入vue-router
import VueRouter from 'vue-router';

// 引入所有的路由组件 routes
import routes from './routes';

// 声明使用插件
Vue.use(VueRouter);

// 创建路由器对象,并暴露出去
const router = new VueRouter({
  mode: 'hash', // history---地址栏中没有#  hash ----地址栏中带有#
  routes,
});

//#region
// 全局前置路由守卫，1、初始化的时候被调用，2、每次路由切换之前被调用
// to 你要去哪
// from 你从哪来
// next 放行
/* router.beforeEach((to, from, next) => {
  console.log('前置路由守卫：', to, from);

  // 列子：只有admin是123456才给用户看/news和/message组件,(先在localStorage 里面储存了一个admin和123456)
  // 判断是否放行

  // if (to.path === '/home/news' || to.path === '/home/message') {
  if (to.meta.isAuth === true) {
    // 判断是否需要鉴权，(如果需要鉴权多个路由组件，可用meta鉴权)
    if (localStorage.getItem('admin') === '123456') {
      // document.title = to.meta.title || 'Vue 路由';
      next(); // 条件符合通行
    } else {
      alert('用户密码不对，无权限查看！');
    }
  } else {
    // document.title = to.meta.title || 'Vue 路由';
    next(); // 其它通行
  }
}); */
//#endregion

// 全局后置路由守卫，1、初始化的时候被调用，2、每次路由切换之后被调用
router.afterEach((to, from) => {
  console.log('后置路由守卫：', to, from);

  // 前置路由需要判断两遍，不然(条件不符合时)有bug，后置路由只需要写这一遍即可
  document.title = to.meta.title || 'Vue 路由'; //路由守卫，修改标题操作(此操作有bug，还需要改index.html里面的title为同名)
});

export default router; //接收路由器并暴露，暴露之前添加路由守卫
