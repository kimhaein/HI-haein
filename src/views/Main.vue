<template>
  <div id="main">
    <div class="section whoamiBox">
      <h1>
        WHO AM I ?
      </h1>
      <h2>
        I AM<br />
        FRONT-END<br />
        DEVELOPER 👩🏻‍💻<br />
      </h2>
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
      <!-- <h2 :style="font">배움이 즐겁고 🤗<br>😘나눔이 행복한 개발자</h2> -->
      <div>
        <h2>ABOUT 🌱</h2>
        <div>
          <h4>학력</h4>
          <span>고려대학교 세종캠퍼스 경영정보학과</span>
        </div>
        <div>
          <h4>경력</h4>
          <span>SBCN / 프론트엔드 개발자 / 2017.07 ~ 2020.02 (2년 6개월)</span>
        </div>
        <p>
          개발 언어 : JavaScript(ES6+), HTML5, CSS3, Sass
          <br />프레임워크 / 라이브러리 : Express.js, React.js, React Native, Redux, Redux-Saga
          <br />DBMS : MySQL, MariaDB
          <br />서버 : Node.js
          <br />도구, DevOps : GitHub, Swagger, Bitbucket, Jira, Confluence
          <br />관심 기술 : Vue.js, TypeScript, Python / Jest, Jenkins / PWA
          <br />
        </p>
      </div>
    </div>
    <div class="section careerBox">
      <div class="careerTitle">
        <h2>CAREER</h2>
      </div>
      <div class="careerList">
        <ul>
          <li class="careerItem">
            <h4>2020.02 - 2019.07</h4>
            <div class="thumnail"></div>
            <h5>투자의 달인 앱 리뉴얼 / SBCN</h5>
            <p>
              프론트 설계 및 UI 컴포넌트 개발<br>
              회원가입, 인증, 로그인, 대시보드, 관심종목 기능 등 개발<br>
              <b>React-native, Redux, Redux-Saga</b>
            </p>
            <a href="#">링크</a>
          </li>
          <li class="careerItem">
            <h4>2020.02 - 2017.07</h4>
            <div class="thumnail"> No image available 🙏🏻</div>
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
    <div class="section sideProjectBox">
      <h2>SIDE PREJECT</h2>
      <div>
        <div class="projectBox">
          <div class="projectList active">📷 Insta-Clone</div>
          <div class="projectList">🌄 Tumbnail-Maker</div>
          <div class="projectList">📔 MAD-Blog</div>
          <div class="projectList">📝 Himentum</div>
        </div>
        <div class="projectDetailBox">
          <div class="thumnail"></div>
          <h5>인스타 그램 클론 코딩 </h5>
          <p>
            - Pug, Sass를 사용하여 프로젝트 마크업 및 스타일 작업<br>
            - 회원가입, 로그인, 회원상세, 게시글 상세, 댓글 기능 등 개발<br>
            <b>Node.js, MySQL, Pug, Sass</b>
          </p>
          <a href="#">링크</a>
        </div>
      </div>
    </div>
    <div class="section contactBox">
      <div class="footer"></div>
    </div>
    <!-- <h1>{{ msg }}</h1>
    <h1 v-if="isTrue">보인다</h1>
    <h1 v-else>안보인다</h1>
    <h1 v-show="show">안녕하세요!</h1>
    <button @click="onClick">Click!</button>-->
    <div id="point"></div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      message: '안냥',
      font: 'font-size : 60px; text-align:right;',
      show: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/theme.scss';
@import "../assets/styles/main.scss";

.section {
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
}

.whoamiBox {
  h1 {
    @include positionVcenter(533px);
    @include title01();
    position: absolute;
    margin-top:80px;
  }
  h2 {
    @include positionVcenter(676px);
    @include positionHcenter(330px);
    @include title01();
    position: fixed;
    padding-top:30px;
    line-height:1.1em
  }
  div {
    width: 50%;
    height: 100%;
  }
  .imgBox {
    @include flexAllCenter();
    div {
      width: 50%;
      height: 60%;
      margin-top: 100px;
      background: $colorSub02;
      box-shadow: 10px 10px 3px $colorShadow;
      // @include backgroundImg($url : "../assets/imgs/hi01.jpg", $size : contain);
    }
  }
  .textBox {
    background: $colorMain;
  }
}

.aboutBox {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @include backgroundImg("../assets/imgs/bg02.jpg");
  > div {
    position: relative;
    width: 30%;
    height: 70%;
    margin-right: 15%;
    background: $colorBg;
    border: 10px solid $colorPoint;
    box-shadow: 10px 10px 3px $colorShadow;

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
    background: $colorPoint;
     box-shadow: 10px 10px 3px $colorShadow;
  }
}

.careerBox {
  display: flex;
  justify-content: space-between;
  background: $colorBg;
  .careerTitle {
    @include flexJustifyCenter();
    flex-direction: column;
    align-self: center;
    width: 450px;
    height: 70%;
    background: $colorSub02;
    margin-left:5%;
    box-shadow: 10px 10px 3px $colorShadow;
    h2 {
      font-size: 60px;
      font-weight: bold;
      text-align: center;
      color: $colorBg
    }
  }
  .careerList {
    align-self: center;
    overflow: scroll;
    height: 70%;
    padding-left:50px;
    ul {
      width: 200%;
      padding: 0px 10px;
      .careerItem {
        float: left;
        width: 300px;
        padding: 0px 10px;
        margin: 0px 10px;
        h4 {
          margin: 20px 0px;
          font-size: 30px;
          font-weight: bold;
        }
        .thumnail {
          @include flexAllCenter();
          height: 200px;
          background: $colorMain;
          border-radius: 10px;
          font-size: 20px;
        }
        h5 {
          margin-top: 20px;
          padding: 20px 0px;
          font-size: 20px;
          font-weight: bold;
          border-top: 1px solid $colorShadow;
        }
        p {
          line-height: 1.8em;
          margin-bottom: 10px;
        }
      }
    }
  }
}

.sideProjectBox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @include backgroundImg("../assets/imgs/bg.jpg");
  h2 {
    font-size: 80px;
    font-weight: bold;
    text-align: center;
  }
  > div {
  display: flex;
  width: 80%;
  height: 75%;
  align-items: center;
  justify-content: center;
    .projectBox {
      @include flexAlignCenter();
      flex-direction: column;
      justify-content: space-around;
      width: 30%;
      height: 80%;
      background: $colorBg;
      margin-right: 50px;
      padding: 20px 0;
      box-shadow: 5px 5px 3px $colorShadow;
      box-sizing: border-box;
      .projectList {
        position: relative;
        font-size: 30px;
        font-weight:bold;
        cursor: pointer;
        z-index: 1;
        &:before {
          content: '';
          display: block;
          position: absolute;
          bottom:0;
          left:0;
          width: 0px;
          height:10px;
          background: $colorMain;
          z-index: -1;
          transition: all 200ms ease-out;
        }
        &:hover {
          color:$colorSub02;
           &:before {
            width: 100%;
           }
        }
        &.active {
          color:$colorSub02;
          &:before {
            width: 100%;
          }
        }
      }
    }
    .projectDetailBox {
      text-align: center;
      width: 50%;
      height: 80%;
      padding:50px;
      background: $colorBg;
      box-shadow: 5px 5px 3px $colorShadow;
      box-sizing: border-box;
      .thumnail {
        width: 80%;
        height: 60%;
        margin: 0 auto;
        background: $colorMain;
      }
      h5 {
        font-size: 25px;
        font-weight: bold;
        margin:20px 0 15px;
      }
      p {
        line-height: 1.5em;
        margin-bottom: 10px;
      }
    }
  }
}

.contactBox {
    .footer {
      align-self: flex-end;
      width: 90%;
      height: 40%;
      margin-left: 10%;
      background: $colorPoint;
    }
}


// #point {
//   position: fixed;
//   bottom:30px;
//   right:30px;
//   width: 400px;
//   height:400px;
//   background-image:url('../assets/imgs/point01.png');
//   background-size: contain;
//   background-repeat: no-repeat;

// }
</style>
