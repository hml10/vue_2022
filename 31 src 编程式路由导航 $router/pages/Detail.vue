<template>
  <ul>
    <!-- <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li> -->

    <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li>

    <!-- 对象写法 -->
    <!-- <li>a:{{ a }}</li>
    <li>b:{{ b }}</li> -->

    <!-- 布尔写法 -->
    <!-- <li>id:{{ id }}</li>
    <li>title:{{ title }}</li> -->

    <!-- 函数方式 -->
    <li>id:{{ id }}</li>
    <li>title:{{ title }}</li>
  </ul>
</template>

<script>
export default {
  // props: ['a', 'b'], // 接收对象写法、插值使用
  // props: ['id', 'title'], // 布尔写法(收到params传过来的所有参数)、插值使用
  props: ['id', 'title'], // 接收函数写法、插值使用

  name: 'Detail',
  data() {
    return {};
  },

  // 不可行
  // computed: {
  //   id() {
  //     return this.$route.params.id;
  //   },
  //   title() {
  //     return this.$route.params.title;
  //   },
  // },

  mounted() {
    console.log(this.$route); // this.$route 能够得到这个组件、相关的路由信息
  },
};
</script>

<style scoped></style>
