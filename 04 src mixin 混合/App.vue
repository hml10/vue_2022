<template>
  <div>
    app 组件

    <Student />
    <hr />
    <School />
  </div>
</template>

<script>
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: 'App',
  components: { Student, School },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
