<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
          >
            News
          </router-link>
        </li>
        <li>
          <!-- <a class="list-group-item" href="./home-message.html">Message</a> -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
          >
            Message
          </router-link>
        </li>
      </ul>

      <!-- 缓存组件 include 写的是谁的组件名，多个的话写数组 -->
      <keep-alive :include="['News', 'Message']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  // mounted() {
  //   console.log(this);
  // },
};
</script>

<style scoped></style>
