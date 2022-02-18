export default {
  install(Vue) {
    // console.log('@@ install', Vue);

    // 全局过滤器
    Vue.filter('mySlice', function (value) {
      return value.slice(0, 4);
    });
  },
};
// 先应用插件，再使用插件
