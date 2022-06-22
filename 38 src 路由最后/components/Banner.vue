<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">返回</button>
      <button @click="forward">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {};
  },

  methods: {
    // 返回
    back() {
      // console.log(this.$router);
      this.$router.back();
    },

    // 前进
    forward() {
      this.$router.forward();
      // this.$router.go(); //需要传参数、正3就是往前走三步，-4就是往回退四步
    },
  },
};
</script>

<style scoped></style>
