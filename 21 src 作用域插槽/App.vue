<template>
  <div class="catApp">
    <Category title="游戏">
      <template scope="aa">
        <!-- {{ aa.games }} -->
        <ul>
          <li v-for="(item, index) in aa.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{ games }">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
  components: { Category },
  name: 'App',
};
</script>

<style scoped>
.catApp {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}

/* 以上解构不属于样式，不能放入 &nbsp; */
.noNbsp {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
