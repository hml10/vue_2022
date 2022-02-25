<template>
  <div class="app">
    <h1>{{ msg }},学生名字是：{{ studentName }}</h1>

    <School :getSchoolName="getSchoolName" />
    <!-- <Student @guigu="demo" /> -->
    <Student ref="student" />
  </div>
</template>

<script>
import Student from './components/Student';
import School from './components/School';

export default {
  name: 'App',
  components: { School, Student },
  data() {
    return {
      msg: '你好啊app',
      studentName: '',
    };
  },

  methods: {
    getSchoolName(name) {
      console.log('app收到子组件学校传来的名字：', name);
    },
    // demo(name, ...params) {
    //   console.log('app收到子组件学生传来的名字：', name, params);
    //   this.studentName = name; //赋值
    // },
  },

  mounted() {
    // console.log(this.$refs.student);// 拿到student的组件实例对象
    // this.$refs.student.$on('guigu', this.demo); // 亲手握到组件实例，调用$on方法，触发guigu和回调

    this.$refs.student.$on('guigu', (name, ...params) => {
      console.log('app收到子组件学生传来的名字：', name, params);
      this.studentName = name; //赋值

      // console.log(this); //得用箭头函数来纠正this
      // console.log(this); //这里this输出是student组件中的实例对象(可看data数据)，而不是app。[因为谁触发的guigu事件，它的this就指向谁]
      // [注意：以上的两种解决方法是，1、写在mounted里面，后面跟箭头函数，2、方法中，用普通函数]
    }); // 关于后面直接写方法问题，this
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
