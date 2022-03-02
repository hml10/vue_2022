<template>
  <div>
    <h2>点击次数:{{ count }},奇数or偶数: {{ evenOrOdd }}</h2>
    <br />
    <button @click="inncement">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementOrOdd">incrementOrOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    evenOrOdd() {
      return this.count % 2 === 0 ? "偶数" : "奇数";
    },
  },
  methods: {
    inncement() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementOrOdd() {
      if (this.count % 2 !== 0) {
        this.count++;
      }
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style scoped>
</style>
