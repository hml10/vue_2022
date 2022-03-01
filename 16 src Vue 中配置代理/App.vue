<template>
  <div>
    <input type="text" v-model="inputValue" />
    <input type="button" name="" value="百度一下" />
  </div>
</template>

<script>
// 网络接口(百度搜索)：https://www.baidu.com/sugrec?prod=pc&wd=1
import axios from 'axios'; // 引入axios

export default {
  name: 'App',
  data() {
    return {
      inputValue: '',
    };
  },

  watch: {
    inputValue() {
      axios({
        method: 'GET',
        url: 'apis/sugrec?prod=pc&wd=' + this.inputValue, // 使用代理后的 apis
      })
        .then((response) => {
          console.log('请求成功', response);
        })
        .catch((err) => {
          console.log('请求失败', err);
        });
    },
  },
};
</script>
