<template>
  <div>
    <h2>
      点击次数:{{ $store.state.count }},奇数or偶数:
      {{ $store.getters.evenOrOdd }}
    </h2>
    <br />
    <button @click="increment">increment</button>
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
      // count: 0,
    };
  },
  // computed: {
  //   evenOrOdd() {
  //     return this.count % 2 === 0 ? "偶数" : "奇数";
  //   },
  // },

  methods: {
    increment() {
      // 提交action--->写对应action名字
      // this.$store.dispatch("increment");

      // 提交对应的mutation
      this.$store.commit("increment");
    },
    decrement() {
      // 提交对应的mutation
      this.$store.commit("decrement");
    },

    incrementOrOdd() {
      // 提交对应的action
      this.$store.dispatch("incrementOrOdd");
    },
    incrementAsync() {
      // 提交对应的action
      this.$store.dispatch("incrementAsync");
    },
  },

  // mounted() {
  //   console.log(this);
  // },
};
</script>

<style scoped>
</style>
