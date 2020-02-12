<template>
  <div id="app">
    <MainHeader :message="message"></MainHeader>
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
// 컴포넌트 지역등록
import { MainHeader } from './components/common';

export default {
  name: 'App',
  components: { MainHeader },
  data() {
    return {
      message: '안냥',
      rawHtml: '<span>12312<span>',
      test: '1234',
      attributeName: 'href',
      url: 'https://www.naver.com',
    };
  },
  methods: {
  },

};
</script>

<style lang="scss">
@import url('./assets/styles/reset.scss');
@import url('./assets/styles/common.scss');

html, body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color:#4C5549;
  height: 100%;
  background: #F1F3F2;
}
</style>
