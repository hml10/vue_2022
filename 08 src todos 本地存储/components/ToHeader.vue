<template>
  <div>
    <div class="todo-header">
      <input
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
        v-model="search"
        @keyup.enter="add"
      />
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  name: 'ToHeader',
  props: ['todos', 'addTodo'],

  data() {
    return {
      search: '',
    };
  },

  methods: {
    add() {
      if (this.search.trim() === '') return alert('输入不能为空！');

      const obj = {
        id: nanoid(),
        title: this.search.trim(),
        done: false,
      };

      // this.todos.unshift(obj);
      this.search = '';

      this.addTodo(obj);
    },

    // add() {
    //   const title = this.search.trim();

    //   if (title === '') return alert('输入不能为空！');

    //   const obj = {
    //     id: nanoid(),
    //     title,
    //     done: false,
    //   };

    //   // this.todos.unshift(obj);
    //   this.search = '';

    //   this.addTodo(obj);
    // },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
