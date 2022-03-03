<template>
  <div>
    <ul>
      <li v-for="(m, id) in messageList" :key="id">
        <!-- <router-link to="/home/message/detail?id=666&title=你好啊！">消息001</router-link> -->

        <!-- 跳转路由并携带query参数，to的字符串写法，第一种： -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->

        <!-- 跳转路由并携带query参数，to的对象写法，第二种：(参数：path跳转地址，query配置对象) -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' },
      ],
    };
  },
};
</script>

<style scoped></style>
