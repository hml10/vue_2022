<template>
  <div class="catApp">
    <Category title="美食" :listDate="foods">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="http://www.baidu.com">百度美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center" v-for="(item, index) in games" :key="index">
        <li>{{ item }}</li>
      </ul>
      <div slot="footer" class="noNbsp">
        <a href="http://www.baidu.com">百度游戏</a>
        <a href="http://www.baidu.com">单机游戏</a>
      </div>
    </Category>

    <Category title="电影" :listDate="films">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>

      <template v-slot:footer>
        <div class="noNbsp">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎来看电影</h4>
      </template>

      <!-- <div slot="footer" class="noNbsp">
        <a href="http://www.baidu.com">经典</a>
        <a href="http://www.baidu.com">热门</a>
        <a href="http://www.baidu.com">推荐</a>
      </div>
      <h4 slot="footer">欢迎来看电影</h4> -->
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
  components: { Category },

  name: 'App',
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'],
    };
  },
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
