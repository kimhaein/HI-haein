<template>
  <div id="main">
    <h1>{{ msg }}</h1>
    <h1 v-if="isTrue">보인다</h1>
    <h1 v-else>안보인다</h1>
    <h1 v-show="show">안녕하세요!</h1>
    <button @click="onClick">Click!</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      message: '안냥',
      isTrue: true,
      show: true,
    };
  },
  methods: {
    onClick() {
      console.log(this.message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/styles/main.css');
</style>
