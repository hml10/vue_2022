<template>
  <div class="category">
    <h3>分类{{ title }}</h3>

    <slot :games="games">默认插槽，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  props: ['title'],
  name: 'Category',

  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    };
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
