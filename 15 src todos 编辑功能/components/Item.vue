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

        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="delTodo(todo.id)">
        删除
      </button>
      <button
        class="btn btn-edit"
        v-show="isShow && !todo.isEdit"
        @click="editTodo(todo)"
      >
        编辑
      </button>
    </li>
  </div>
</template>

<script>
// 引入pubsub
import pubsub from 'pubsub-js';

export default {
  name: 'Item',
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
      pubsub.publish('del', id);
    },

    // 编辑
    editTodo(todo) {
      // console.log(todo);
      // todo.isEdit = true;
      // this.$set(todo, 'isEdit', true); //添加响应式数据

      if (todo.hasOwnProperty.call('isEdit')) {
        todo.isEdit = true;
      } else {
        this.$set(todo, 'isEdit', true); //添加响应式数据
      }

      // 将回调延迟到下次 DOM 更新循环之后执行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },

    // 失去焦点变为文字(失去焦点时，执行修改的逻辑)
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert('输入不能为空！');

      this.$bus.$emit('updateTodo', todo.id, e.target.value);
      // console.log('updateTodo', todo.id, e.target.value);//最新的value值
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
