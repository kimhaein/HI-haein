<template>
  <div id="app">
    <!-- <div id="header">
      <div>
        <router-link to="/test">test</router-link>
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        <div :id="dynamicId">123</div>
        <button :disabled="isButtonDisabled">Button</button>
        <a :[attributeName]="url">11313</a>
        <div @click="doSomething">{{reversedMessage}}</div>
        <div>{{reversedMessage}}</div>
      </div>
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      rawHtml: '<span>12312<span>',
      test: '1234',
      dynamicId: true,
      isButtonDisabled: true,
      attributeName: 'href',
      url: 'https://www.naver.com',
    };
  },
  computed: {
    // reversedMessage:;;
  },

};
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #2c3e50;
}
</style>
