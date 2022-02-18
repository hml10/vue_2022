<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
import { mixin } from '../mixin'; //引入混合

export default {
  name: 'Student',

  data() {
    return {
      name: '张三',
      sex: '男',
    };
  },
  mixins: [mixin],

  // methods: {
  //   showName() {
  //     alert(this.name);
  //   },
  // },
};
</script>

<style scoped></style>
