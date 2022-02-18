<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ myName }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <!-- <h2>学生年龄：{{ age * 1 + 2 }}</h2> -->
    <button @click="upAge">尝试修改prop收到的年龄</button>
    <button @click="upName">修改名字</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  props: ['name', 'age', 'sex'], // 1、简单接收
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // }, // 对类型限制接收

  // props: {
  //   name: {
  //     type: String,
  //     require: true, //名字是必须的
  //   },
  //   age: {
  //     type: Number,
  //     default: 99, // 默认值
  //   },
  //   sex: {
  //     type: String,
  //   },
  // },

  data() {
    // console.log(this);
    return {
      msg: '我是一个学校的学生',
      // name: '张三',
      // sex: '男',
      // age: 18,
      myAge: this.age,
      myName: this.name,
    };
  },
  methods: {
    upAge() {
      this.myAge++;
    },
    upName() {
      this.myName = '老杨';
    },
  },
};
</script>

<style scoped></style>
