<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {};
  },

  // mounted() {
  //   console.log(this);
  // },

  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('about--beforeRouteEnter', to, from);
    if (to.meta.isAuth === true) {
      // 判断是否需要鉴权，(如果需要鉴权多个路由组件，可用meta鉴权)
      if (localStorage.getItem('admin') === '123456') {
        next(); // 条件符合通行
      } else {
        alert('用户密码不对，无权限查看！');
      }
    } else {
      next(); // 其它通行
    }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('about--beforeRouteLeave', to, from);
    next();
  },
};
</script>

<style scoped></style>
