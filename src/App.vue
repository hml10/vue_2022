<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />
      <List :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo" />
      <MyFooter :todos="todos" :checkAll="checkAll" :clear="clear" />
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import List from './components/List.vue';

export default {
  name: 'App',
  components: { MyHeader, MyFooter, List },
  data() {
    return {
      // todos: [
      //   { id: '001', title: '逆天而行', done: true },
      //   { id: '002', title: '随风起舞', done: false },
      // ],
      todos: JSON.parse(localStorage.getItem('todo')) || [],
    };
  },
  methods: {
    // 添加
    addTodo(todo) {
      // console.log(todo);
      this.todos.unshift(todo);
    },

    // 勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },

    // 删除
    delTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },

    // 全选或全不选
    checkAll(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },

    // 清楚全部
    clear() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },

  watch: {
    todos: {
      deep: true,
      handler(val) {
        // console.log(val);
        localStorage.setItem('todo', JSON.stringify(val));
      },
    },
  },
};
</script>

<style></style>
