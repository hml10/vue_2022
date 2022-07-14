<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />
      <List :todos="todos" />
      <MyFooter />
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
      todos: [
        { id: '001', title: '逆天而行', done: true },
        { id: '002', title: '随风起舞', done: false },
      ],
    };
  },

  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
  },
};
</script>

<style></style>
