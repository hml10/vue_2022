<template>
  <div>
    <!-- <h2>点击次数:{{ $store.state.count }},奇数or偶数:{{ $store.getters.evenOrOdd }}</h2> -->
    <h2>点击次数:{{ count }},奇数or偶数:{{ evenOrOdd }}</h2>
    <br />
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementOrOdd">incrementOrOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
// 引入vuex中的辅助函数
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",

  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapState(["count"]),

    ...mapGetters(["evenOrOdd"]),
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd;
    // },
  },

  methods: {
    // increment() {
    //   // 提交对应的mutation
    //   this.$store.commit("INCREMENT");
    // },
    // decrement() {
    //   // 提交对应的mutation
    //   this.$store.commit("DECREMENT");
    // },

    ...mapMutations({ increment: "INCREMENT", decrement: "DECREMENT" }),

    // incrementOrOdd() {
    //   // 提交对应的action
    //   this.$store.dispatch("incrementOrOdd");
    // },
    // incrementAsync() {
    //   // 提交对应的action
    //   this.$store.dispatch("incrementAsync");
    // },

    ...mapActions(["incrementOrOdd", "incrementAsync"]),
  },
};
</script>

<style scoped>
</style>
