<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ sumTodo }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'ToFooter',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],

  computed: {
    total() {
      return this.todos.length;
    },

    sumTodo() {
      // let i = 0;
      // this.todos.forEach((item) => {
      //   if (item.done === true) i++;
      // });
      // return i;

      return this.todos.reduce((pre, item) => {
        return pre + (item.done ? 1 : 0);
      }, 0);
    },

    // isAll() {
    //   return this.total === this.sumTodo && this.total > 0;
    // },

    isAll: {
      get() {
        return this.total === this.sumTodo && this.total > 0;
      },
      set(val) {
        // console.log(val);
        this.checkAllTodo(val);
      },
    },
  },

  methods: {
    //   checkAll(e) {
    //     // console.log(e.target.checked);
    //     this.checkAllTodo(e.target.checked);
    //   },

    clearAll() {
      this.clearAllTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
