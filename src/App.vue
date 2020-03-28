<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
@import './assets/styles/reset.scss';
@import './assets/styles/common.scss';

html, body {
  height: 100%;
}
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  height: 100%;
}

.section {
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
