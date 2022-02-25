<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <ToHeader :todos="todos" :addTodo="addTodo" />
          <Lists :todos="todos" :isCheck="isCheck" :del="del" />
          <ToFooter
            :todos="todos"
            :checkAllTodo="checkAllTodo"
            :clearAllTodo="clearAllTodo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lists from './components/Lists.vue';
import ToHeader from './components/ToHeader.vue';
import ToFooter from './components/ToFooter.vue';

export default {
  name: 'App',
  components: { Lists, ToHeader, ToFooter },

  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      // todos: [
      //   { id: '001', title: '抽烟', done: true },
      //   { id: '002', title: '喝酒', done: false },
      //   { id: '003', title: '开车', done: true },
      // ],
    };
  },
  methods: {
    // 添加一个todo对象，把传过来的todo对象进行添加操作
    addTodo(x) {
      // console.log(x);
      this.todos.unshift(x);
    },

    // 勾选或不选，把传过来的id和遍历后的id进行比较，然后取反
    isCheck(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },

    // 删除
    del(id) {
      if (confirm('确定删除吗？')) {
        // this.todos.splice(id, 1); //只能删除index索引的那种

        this.todos = this.todos.filter((item) => {
          // if (item.id !== id) {
          //   return true;
          // }

          return item.id !== id;
        });
      }
    },

    // 全选或全不选
    checkAllTodo(done) {
      // console.log(done);
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },

    // 清除选中的所有todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return todo.done !== true;
        // return !todo.done
      });
    },
  },

  // 监视
  watch: {
    todos: {
      deep: true,
      handler(val) {
        localStorage.setItem('todos', JSON.stringify(val));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
