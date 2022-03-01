<template>
  <div class="category">
    <h3>分类{{ title }}</h3>

    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot>默认插槽，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  props: ['listDate', 'title'],
  name: 'Category',
  data() {
    return {};
  },
};
</script>

<style scoped>
.category {
  background-color: aqua;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: pink;
}
</style>
