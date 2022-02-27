<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入pubsub
import pubsub from 'pubsub-js';

export default {
  name: 'School',

  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    };
  },

  mounted() {
    // 谁需要消息，谁就 订阅消息(回调有两个参数，a是消息名称，b才是数据)
    this.pubId = pubsub.subscribe('hello', (a, b) => {
      console.log('有人发布了hello消息', a, b, this);
    });
  },

  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
