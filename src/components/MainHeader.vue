<template>
  <div id='header'>
    <h1>＜Hi-Haein /＞</h1>
    <div>
      <span>
        <a href='https://github.com/kimhaein' target='_blank' title='깃허브 계정으로 이동'>
          <img src='../img/github.png' alt='깃허브 계정으로 이동' />
        </a>
      </span>
      <span>
        <a :href='resume' target='_blank' title='이력서 다운로드'>
          <img src='../img/resume.png' alt='이력서 다운로드' />
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';

export default {
  name: 'main-header',
  data() {
    return {
      resume: '',
    };
  },
  mounted() {
    this.getStorageFiles('files/kimhaein-resume.pdf');
  },
  methods: {
    async getStorageFiles(files) {
      const storageRef = await firebase.storage().ref();
      const file = await storageRef.child(files).getDownloadURL();
      this.resume = file;
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss'>
@import '../assets/styles/theme.scss';
@import '../assets/styles/main.scss';

#header {
  @include flexAlignCenter();
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  z-index: 9999;
  h1 {
    font-size: 25px;
    font-weight: bold;
    padding: 5px 3px 10px;
    border-radius: 10px;
    background: $colorBg;
    box-shadow: 5px 5px 3px $colorShadow;
  }
  div {
    span {
      display: inline-block;
      margin-left: 5px;
      padding: 5px;
      border-radius: 10px;
      background: $colorBg;
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
