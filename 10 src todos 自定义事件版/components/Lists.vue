<template>
  <div>
    <ul class="todo-main">
      <Item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :isCheck="isCheck"
        :del="del"
      />
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'Lists',
  props: ['todos', 'isCheck', 'del'],
  components: { Item },

  data() {
    return {};
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
