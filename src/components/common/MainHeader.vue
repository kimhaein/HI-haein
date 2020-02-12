<template>
  <div id="header">
    1
  </div>
</template>

<script>
export default {
  name: 'main-header',
  props: {
    message: {
      type: String, // 데이터 타입
      required: true, // 반드시 필요하다는 의미
      default: 'TEST', // 값을 전달하지 않을 경우 디폴트값 설정 가능
    },
  },
  data() {
    return {};
  },
  computed: {
    sayHellow() {
      return `${this.message}님 환영합니다.`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  position: fixed;
  width:100%;
  height: 50px;
}
</style>
