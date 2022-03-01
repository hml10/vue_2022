<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        v-model="search"
        @keyup.enter="getUsers"
        placeholder="请输入要搜索的名字"
      />&nbsp;

      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    getUsers() {
      axios
        .get(`http://api.github.com/search/users?q=${this.search}`)
        .then((response) => {
          const result = response.data.items;
          // console.log(result);
          this.$bus.$emit('u', result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style scoped></style>
