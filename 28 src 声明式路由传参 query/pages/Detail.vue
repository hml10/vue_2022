<template>
  <ul>
    <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {};
  },

  mounted() {
    console.log(this.$route); // this.$route 能够得到这个组件、相关的路由信息
  },
};
</script>

<style scoped></style>
