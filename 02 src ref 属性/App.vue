<template>
  <div>
    app 组件
    <h1 v-text="msg" ref="do" id="title"></h1>
    <!-- <button @click="showDom($event)">点我输出上方的DOM元素</button> -->
    <button @click="showDom">点我输出上方的DOM元素</button>
    <School ref="zujian" />
  </div>
</template>

<script>
import School from './components/School.vue';

export default {
  name: 'App',
  components: { School },
  data() {
    return {
      msg: '欢迎学习vue',
    };
  },
  methods: {
    // showDom(e) {
    //   console.log(e.target);
    // },
    showDom() {
      console.log(this);
      console.log('@@', this.$refs.do); // 真实dom元素
      console.log('##', document.getElementById('title')); // 真实dom元素
      console.log('');
      console.log('@@', this.$refs.zujian); // 组件实例对象
    },
  },
};
</script>

<style scoped></style>
