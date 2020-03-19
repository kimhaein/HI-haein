<template>
  <div id="header">
    <h1>＜Portfolio /＞</h1>
    <div>
      <span>
        <a href="https://github.com/kimhaein" target="_blank" title="깃허브 계정으로 이동">
          <img src="/static/imgs/github.png" alt="깃허브 계정으로 이동" />
        </a>
      </span>
      <span>
        <a href="/static/kimhaein-resume.pdf" target="_blank" title="이력서 다운로드">
          <img src="/static/imgs/resume.png" alt="이력서 다운로드"/>
        </a>
      </span>
    </div>
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
<style lang="scss">
@import '../../assets/styles/theme.scss';
@import '../../assets/styles/main.scss';

#header {
  @include flexAlignCenter();
  justify-content: space-between;
  position: fixed;
  width:100%;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 9999;
  h1 {
    font-size: 25px;
    font-weight: bold;
    padding: 5px 3px 3px;
    border-radius: 10px;
    background: white;
    box-shadow: 5px 5px 3px $colorShadow;
  }
  div {
    span {
      display: inline-block;
      margin-left: 5px;
      padding: 3px 5px ;
      border-radius: 10px;
      background: white;
      box-shadow: 5px 5px 3px $colorShadow;
      a {
        display: inline-block;
        img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
      }

    }
  }
}
</style>
