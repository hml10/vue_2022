<template>
  <li
    @mouseenter="mouseHandle(true)"
    @mouseleave="mouseHandle(false)"
    :style="{ color: fontColor, backgroundColor: bgColor }"
  >
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- <input type="checkbox" v-model="a" /> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="del(todo.id)">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: ['todo', 'checkTodo', 'a', 'delTodo'],

  data() {
    return {
      fontColor: '',
      bgColor: '',
      isShow: false,
    };
  },

  methods: {
    handleCheck(id) {
      this.checkTodo(id);
    },

    // 鼠标事件
    mouseHandle(flag) {
      if (flag) {
        this.fontColor = 'green';
        this.bgColor = '#f5f5f5';
        this.isShow = true;
      } else {
        this.fontColor = '';
        this.bgColor = '';
        this.isShow = false;
      }
    },

    // 删除
    del(id) {
      if (confirm('确定删除吗')) {
        this.delTodo(id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

/* 控制样式 */
/* li:hover {
  background-color: #f5f5f5;
}
li:hover button {
  display: block;
} */

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
