<template>
  <div>
    <div class="row">
      <Banner/>

    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- a标签跳转路由 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- 路由跳转地址 -->
          <router-link class="list-group-item" to="/about" active-class="active"> About </router-link>
          <router-link class="list-group-item" to="/home" active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由视图 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components:{Banner}
};
</script>

<style scoped></style>
