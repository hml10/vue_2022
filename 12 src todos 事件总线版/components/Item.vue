<template>
  <div>
    <li
      @mouseenter="mouseHandle(true)"
      @mouseleave="mouseHandle(false)"
      :style="{ color: fontColor, backgroundColor: bgColor }"
    >
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
        />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="delTodo(todo.id)">
        删除
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Item',
  // props: ['todo', 'isCheck', 'del'],
  props: ['todo'],

  data() {
    return {
      fontColor: '',
      bgColor: '',
      isShow: false,
    };
  },

  methods: {
    // 勾选或取消勾选
    handleCheck(id) {
      // this.isCheck(id);
      this.$bus.$emit('isCheck', id);
    },

    //鼠标移动添加高亮
    mouseHandle(flag) {
      if (flag) {
        this.fontColor = 'green';
        this.bgColor = '#ddd';
        this.isShow = true;
      } else {
        this.fontColor = '';
        this.bgColor = '';
        this.isShow = false;
      }
    },

    // 删除
    delTodo(id) {
      // this.del(id);
      this.$bus.$emit('del', id);
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
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

/* li:hover {
  color: green;
  background-color: #ddd;
}

li:hover button{
  display: block;
} */
</style>
