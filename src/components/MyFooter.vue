<template>
  <div class="todo-footer" v-show="todoLen">
    <label>
      <input type="checkbox" v-model="all" />
    </label>
    <span>
      <span>已完成 {{ doneTotal }}</span> / 全部 {{ todoLen }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'checkAll', 'clear'],

  data() {
    return {};
  },

  computed: {
    doneTotal() {
      let i = 0;
      this.todos.forEach((todo) => {
        if (todo.done === true) i++;
      });
      return i;

      // return this.todos.reduce((pre, item) => {
      //   return pre + (item.done ? 1 : 0);
      // }, 0);
    },

    todoLen() {
      return this.todos.length;
    },

    all: {
      get() {
        return this.doneTotal == this.todoLen && this.todoLen > 0;
      },
      set(val) {
        // console.log(val);
        this.checkAll(val);
      },
    },
  },

  methods: {
    clearAll() {
      this.clear();
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
