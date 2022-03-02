// 引入vue
import Vue from "vue";

// 引入vuex
import Vuex from "vuex";

// 引入mutation-type
import { INCREMENT, DECREMENT } from "./mutation-type";

// 声明使用
Vue.use(Vuex);

// 状态数据
const state = {
  count: 0
};

// 包含了多个直接修改状态数据的对象
const mutations = {
  // 加的操作
  [INCREMENT](state) {
    state.count++;
  },
  // 减的操作
  [DECREMENT](state) {
    state.count--;
  }
};

// 包含了多个间接修改状态数据的对象
const actions = {
  // increment(context) {
  //   context.commit("INCREMENT"); //提交对应的mutation--->调用mutation中对应的某个方法
  // },
  // decrement({ commit }) {
  //   commit("DECREMENT");
  // },

  incrementOrOdd({ commit, state }) {
    if (state.count % 2 !== 0) {
      commit(INCREMENT);
    }
  },

  incrementAsync({ commit }) {
    setTimeout(() => {
      commit(INCREMENT);
    }, 1000);
  }
};

// 包含了多个状态数据的计算属性方法
const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? "偶数" : "奇数";
  }
};

// 创建vuex对象并且暴露
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

/**
Vuex_集中式管理数据：
① 安装 npm install vuex --save
② 创建 vuex 文件夹、创建store.js书写vuex代码，或者在 store 文件夹、里面用index.js---推荐方式
store.js或index.js里面：
1、引入vue 2、引入vuex 3、声明使用vuex 4、实列化Vuex.Store对象并且暴露

Vuex.Store包含模块：
1、state				用来管理状态数据的对象
2、mutations	设置	同步		包含直接修改状态数据的方法
3、actions	设置	异步		包含间接修改状态数据的方法
4、getters	获取			计算属性中状态get的方法
5、module				模块

③ 在main.js中引入store并且注册store仓库---现在全局已经拥有$store对象
④ 直接使用就ok啦 列如{{$store.state.count}}
action ==> dispatch、mutation ==> commit
      // 提交action
      // this.$store.dispatch ('increment')
      // 提交mutation
      // this.$store.commit ("increment")

用法：
mutations对象,里面的每个方法都可以叫mutation
actions对象,里面的每个方法都可以叫action
1、state		存放状态数据
2、mutations		可以传入state参数，state.可以直接修改state状态
3、actions		间接修改状态数据的方法(通过commit找对应的mutation)
4、getters		书写计算属性get操作的方法，可传入state状态数据参数
   如果想要直接修改状态数据,那么就通过commit找对应的mutation
   如果想要间接修改状态数据,那么就通过dispatch找对应的action
 */
