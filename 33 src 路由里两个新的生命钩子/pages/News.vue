<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1,
    };
  },

  activated() {
    console.log('news 组件被激活了');
    this.timeId = setInterval(() => {
      console.log('##');
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },

  deactivated() {
    console.log('news 组件被失活了');
    clearInterval(this.timeId); // 开启缓存组件时，定时器没有被销毁
  },

  // mounted() {
  //   this.timeId = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) {
  //       this.opacity = 1;
  //     }
  //   }, 16);
  // },

  // beforeDestroy() {
  //   console.log('news 组件即将被销毁');
  //   clearInterval(this.timeId); // 开启缓存组件时，定时器没有被销毁
  // },
};
</script>

<style scoped></style>
