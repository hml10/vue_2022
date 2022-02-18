<template>
  <div>
    app 组件

    <Student name="里斯" sex="女" :age="18" />
    <hr />
    <!-- <Student name="里斯" sex="女" age="18" /> -->
  </div>
</template>

<script>
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: { Student },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
