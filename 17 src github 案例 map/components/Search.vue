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
          const result = response.data.items.map((user) => ({
            login: user.login,
            html_url: user.html_url,
            avatar_url: user.avatar_url,
          })); // 因为得到的是一个数组，在使用map方法把需要的数据，取出来

          console.log('##', result);
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
