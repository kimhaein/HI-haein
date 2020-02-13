<template>
  <div id="main">
    <div class="section whoamiBox">
      <h1>
        WHO AM I ?
        <br />
        <br />I AM
        <br />FRONT-END
        <br />DEVELOPER
      </h1>
      <div class="imgBox">
        <div></div>
      </div>
      <div class="textBox">
        <!-- <div>
          <h2>안녕하세요 :-) 프론트엔드</h2>
          <p>안녕 반가워요 꺄륵꺌구</p>
        </div>-->
      </div>
    </div>
    <div class="section aboutBox">
      <div>
        <h2>ABOUT</h2>
        <div>
          <h4>학력</h4>
          <span>고려대학교 세종캠퍼스 경영정보학과</span>
        </div>
        <div>
          <h4>경력</h4>
          <span>SBCN / 프론트엔드 개발자 / 2017.07 ~ 2020.02 (2년 6개월)</span>
        </div>
      </div>
    </div>
    <div class="section careerBox">
      <div class="careerTitle">
        <h2>TimeLine</h2>
      </div>
      <div class="careerList">
        <ul>
          <li class="careerItem">
            <h4>2020.02 - 2019.07</h4>
            <div class="thumnail"></div>
            <h5>투자의 달인 앱 리뉴얼 / SBCN</h5>
            <p>투자 정보 제공</p>
            <p>
              프론트 설계 및 UI 컴포넌트 개발
              <br />회원가입, 인증, 로그인, 대시보드, 관심종목 기능 등 개발
              <br />React-native, Redux, Redux-Saga
              <br />
            </p>
          </li>
          <li class="careerItem">
            <h4>2020.02 - 2017.07</h4>
            <div class="thumnail"></div>
          </li>
          <li class="careerItem">
            <h4>2020.02 - 2017.07</h4>
            <div class="thumnail"></div>
          </li>
          <li class="careerItem">
            <h4>2020.02 - 2017.07</h4>
            <div class="thumnail"></div>
          </li>
          <li class="careerItem">
            <h4>2020.02 - 2017.07</h4>
            <div class="thumnail"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="section sideBox">
      <h2>SIDE PREJECT</h2>
      <div></div>
    </div>
    <div class="section contactBox">
      <h2>CONTACT</h2>
      <div class="footer"></div>
    </div>
    <!-- <h1>{{ msg }}</h1>
    <h1 v-if="isTrue">보인다</h1>
    <h1 v-else>안보인다</h1>
    <h1 v-show="show">안녕하세요!</h1>
    <button @click="onClick">Click!</button>-->
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      message: "안냥",
      fullHeight: "height : 100%",
      show: true
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("../assets/styles/main.scss");

.section {
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
}

.whoamiBox {
  h1 {
    position: fixed;
    top: 50px;
    left: 450px;
    font-size: 100px;
    font-weight: bold;
  }
  div {
    width: 50%;
    height: 100%;
  }
  .imgBox {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 50%;
      height: 60%;
      margin-top: 100px;
      background: #cc7f07;
      // background-image:url('../assets/imgs/hi01.jpg');
      // background-size: contain;
      // background-repeat: no-repeat;
      // background-position: 0;
      // background-attachment: fixed;
    }
  }
  .textBox {
    background: #ebded5;
  }
}

.aboutBox {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url("../assets/imgs/bg02.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0;
  background-attachment: fixed;
  > div {
    position: relative;
    width: 30%;
    height: 70%;
    margin: 0px 15%;
    background: #ffffff;
    border: 10px solid #4c554b;
    h2 {
      margin: 30px 20px 20px;
      font-size: 60px;
      font-weight: bold;
    }
  }
  div::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -60px;
    right: -60px;
    width: 150px;
    height: 150px;
    background: #4c554b;
  }
}

.careerBox {
  display: flex;
  background: #f1f3f2;
  .careerTitle {
    display: flex;
    align-items: center;
    width: 30%;
    background: #ebded5;
  }
  .careerList {
    align-self: center;
    overflow: scroll;
    height: 600px;
    ul {
      width: 200%;
      padding: 0px 10px;
      .careerItem {
        float: left;
        width: 300px;
        height: 600px;
        padding: 0px 10px;
        margin: 0px 10px;
        h4 {
          margin: 20px 0px;
          font-size: 30px;
          font-weight: bold;
        }
        .thumnail {
          height: 200px;
          background: #d8b59d;
          border-radius: 10px;
        }
        h5 {
          margin-top: 20px;
          padding: 20px 0px;
          font-size: 20px;
          font-weight: bold;
          border-top: 1px solid #000;
        }
        p {
          line-height: 1.8em;
        }
      }
    }
  }
}
.sideBox {
  background: #f1f3f2;
}

.footer {
  align-self: flex-end;
  width: 100%;
  height: 40%;
  background: #4c554b;
}
</style>
