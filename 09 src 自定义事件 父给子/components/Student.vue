<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="removeClick">解绑事件</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男',
      a: '学生组件',
    };
  },

  methods: {
    sendStudentName() {
      this.$emit('guigu', this.name, 100, 200);
    },

    // 解绑事件
    removeClick() {
      this.$off('guigu');
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
