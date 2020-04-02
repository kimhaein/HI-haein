<template>
  <div class="section aboutBox">
    <div class="photo"></div>
    <div>
      <h2>ABOUT ME 🙋🏻</h2>
      <div>
        <h4>학력</h4>
        <p>
          - 고려대학교 세종캠퍼스 / 경영정보학과 / 2017.08 졸업 (편입)
          <br />- 동양미래대학교 / e-비즈니스학과 / 2015.02 졸업
        </p>
      </div>
      <div>
        <h4>경력</h4>
        <p>- SBCN / 프론트엔드 개발자 / 2017.07 ~ 2020.02 (2년 8개월)</p>
      </div>
      <div>
        <h4>보유 기술</h4>
        <p>
          - 개발 언어 : JavaScript(ES6+), HTML5, CSS3, Sass
          <br />- 프레임워크 / 라이브러리 : Express.js, React.js, React
          Native, Redux, Redux-Saga <br />- DBMS : MySQL, MariaDB <br />- 서버
          : Node.js <br />- 도구, DevOps : GitHub, Bitbucket, Jira, Confluence
          <br />- 관심 기술 : Vue.js, TypeScript, Python / Jest, Jenkins / PWA
          <br />
        </p>
      </div>
      <div>
        <h4>관심 기술</h4>
        <p>- Vue.js, TypeScript, Python / Jest, Jenkins / PWA</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss'>
@import '../assets/styles/theme.scss';
@import '../assets/styles/main.scss';

.aboutBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  @include backgroundImg("../img/bg02.jpg");
   background-color: $colorBg;
  .photo {
    overflow:initial;
    position: relative;
    width: 300px;
    height: 340px;
    background-image: url("../img/hi03.png");
    background-size: cover;
    background-position: center;
    &::before {
      content: '김혜인 / KIM HAEIN';
      position: absolute;
      top:-30px;
      left:50%;
      margin-left: -90px;
      padding:15px 15px;
      background-color: rgba($colorSub01, $alpha: 0.95);
      transform: rotate(20deg);
      box-shadow: -3px -3px 5px rgba($colorBlack, 0.3);
      font-weight: bold;
      font-size: 18px;
    }
  }
  > div {
    overflow: auto;
    position: relative;
    width: 38%;
    height: 75%;
    // margin-right: 15%;
    padding: 0 20px;
    background: $colorBg;
    border: 10px solid $colorPoint;
    box-shadow: 10px 10px 3px $colorShadow;
    h2 {
      margin: 30px 20px 20px;
      font-size: 60px;
      font-weight: bold;
    }
    h4 {
      margin: 15px 0 10px;
      font-size: 20px;
      font-weight: bold;
    }
    p {
      line-height: 25px;
    }
  }
}

</style>
