<template>
  <div id="main">
    <div class="section whoamiBox">
      <h1>WHO AM I ?</h1>
      <h2>
        I AM
        <br />FRONT-END <br />DEVELOPER 👩🏻‍💻
        <br />
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
      <div class="photo"></div>
      <div>
        <h2>ABOUT ME 🙋🏻</h2>
        <div>
          <h4>학력</h4>
          <p>
            - 고려대학교 세종캠퍼스 / 경영정보학과 / 2017.08 졸업
            <br />- 동양미래대학교 / e-비즈니스학과 / 2015.02 졸업
          </p>
        </div>
        <div>
          <h4>경력</h4>
          <p>- SBCN / 프론트엔드 개발자 / 2017.07 ~ 2020.02 (2년 7개월)</p>
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
    <div class="section careerBox" v-if="careerList.length > 0">
      <div class="careerTitle">
        <h2>CAREER 🌱</h2>
      </div>
      <div class="careerList">
        <ul>
          <li
            v-for="item in careerList"
            v-bind:key="item.title"
            class="careerItem"
          >
            <h4>{{ item.startDate }} - {{ item.endDate }}</h4>
            <div class="thumnail">{{ item.thumnail }}</div>
            <h5>{{ item.title }} / {{ item.company }}</h5>
            <p>
              {{ item.contents }}
              <b>{{ item.tech.join(", ") }}</b>
            </p>
            <a v-bind:href="item.link">링크</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section sideProjectBox" v-if="projectList.length > 0">
      <h2>SIDE PREJECT 🎉</h2>
      <div>
        <div class="projectBox">
          <div
            v-for="(item, index) in projectList"
            :key="item.id"
            v-on:click="check(index)"
            :class="{ active: index === activeProject ? true : false }"
            class="projectList"
          >
            {{ item.icon }} {{ item.id }}
          </div>
        </div>
        <div class="projectDetailBox">
          <div class="thumnail"></div>
          <h5>{{ projectList[activeProject].title }}</h5>
          <p>
            - Pug, Sass를 사용하여 프로젝트 마크업 및 스타일 작업
            <br />- 회원가입, 로그인, 회원상세, 게시글 상세, 댓글 기능 등 개발
            <br />
            <b>Node.js, MySQL, Pug, Sass</b>
          </p>
          <a href="#">링크</a>
        </div>
      </div>
    </div>
    <div class="section activitiesBox">
      <div class="section">
        <h2>ACTIVITIES 🎪</h2>
        <div>
          <ul class="activityList">
            <li class="activityItem">
              <div class="tumbnail">img</div>
              <div class="contents">
                <h4>스터디활동</h4>
                <p>dkssudasldjal</p>
                <p>dkssudasldjal</p>
              </div>
            </li>
            <li class="activityItem">
              <div>img</div>
              <div>
                <h4>스터디활동</h4>
                <p>dkssudasldjal</p>
                <p>dkssudasldjal</p>
              </div>
            </li>
            <li class="activityItem">
              <div>img</div>
              <div>
                <h4>스터디활동</h4>
                <p>dkssudasldjal</p>
                <p>dkssudasldjal</p>
              </div>
            </li>
            <li class="activityItem">
              <div>img</div>
              <div>
                <h4>스터디활동</h4>
                <p>dkssudasldjal</p>
                <p>dkssudasldjal</p>
              </div>
            </li>
            <li class="activityItem">
              <div>img</div>
              <div>
                <h4>스터디활동</h4>
                <p>dkssudasldjal</p>
                <p>dkssudasldjal</p>
              </div>
            </li>
            <li class="activityItem">
              <div>img</div>
              <div>
                <h4>스터디활동</h4>
                <p>dkssudasldjal</p>
                <p>dkssudasldjal</p>
              </div>
            </li>
          </ul>
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
  name: "Main",
  data() {
    return {
      message: "안냥",
      font: "font-size : 60px; text-align:right;",
      show: true,
      careerList: [
        {
          startDate: "2010.09",
          endDate: "2019.10",
          company: "SBCN",
          thumnail: "No image available 🙏🏻",
          title: "투자의 달인",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        },
        {
          startDate: "2010.09",
          endDate: "2019.10",
          company: "SBCN",
          thumnail: "",
          title: "투자의 달인2",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        },
        {
          startDate: "2010.09",
          endDate: "2019.10",
          company: "SBCN",
          thumnail: "",
          title: "투자의 달인2",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        },
        {
          startDate: "2010.09",
          endDate: "2019.10",
          company: "SBCN",
          thumnail: "",
          title: "투자의 달인2",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        },
        {
          startDate: "2010.09",
          endDate: "2019.10",
          company: "SBCN",
          thumnail: "",
          title: "투자의 달인2",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        }
      ],
      activeProject: 0,
      projectList: [
        {
          id: "HI-Haein",
          thumnail: "No image available 🙏🏻",
          icon: "📷",
          title: "포트폴리오 사이트",
          contents: "dsdssd",
          tech: ["react.js", "html"],
          link: "https://www.naver.com/"
        },
        {
          id: "Insta-Clone",
          thumnail: "No image available 🙏🏻",
          icon: "📷",
          title: "인스타 그램 클론 코딩",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        },
        {
          id: "Tumbnail-Maker",
          thumnail: "No image available 🙏🏻",
          icon: "🌄",
          title: "이미지 메이커",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        },
        {
          id: "MAD-Blog",
          thumnail: "No image available 🙏🏻",
          icon: "📔",
          title: "블로그",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        },
        {
          id: "Himentum",
          thumnail: "No image available 🙏🏻",
          icon: "📝",
          title: "모멘텀 클론 코딩",
          contents: "dsdssd",
          tech: ["react-native", "html"],
          link: "https://www.naver.com/"
        }
      ]
    };
  },
  methods: {
    check(target) {
      this.activeProject = target;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/theme.scss";
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
    margin-top: 90px;
  }
  h2 {
    @include positionVcenter(676px);
    @include positionHcenter(330px);
    @include title01();
    position: fixed;
    padding-top: 40px;
    line-height: 1.1em;
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
      // @include backgroundImg($url : "/static/imgs/hi01.jpg", $size : contain);
    }
  }
  .textBox {
    background: $colorMain;
  }
}

.aboutBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  @include backgroundImg("/static/imgs/bg02.jpg");
  .photo {
    width: 300px;
    height: 340px;
    background-image: url("/static/imgs/hi03.png");
    background-size: cover;
    background-position: center;
  }
  > div {
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
    margin-left: 5%;
    box-shadow: 10px 10px 3px $colorShadow;
    h2 {
      font-size: 60px;
      font-weight: bold;
      text-align: center;
      color: $colorBg;
    }
  }
  .careerList {
    align-self: center;
    overflow: scroll;
    height: 70%;
    padding-left: 50px;
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
          b {
            display: block;
            font-weight: bold;
          }
        }
      }
    }
  }
}

.sideProjectBox {
  @include flexAllCenter();
  flex-direction: column;
  @include backgroundImg("/static/imgs/bg.jpg");
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
      justify-content: space-between;
      width: 30%;
      height: 80%;
      background: $colorBg;
      margin-right: 50px;
      padding: 60px 0;
      box-shadow: 5px 5px 3px $colorShadow;
      box-sizing: border-box;
      .projectList {
        position: relative;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
        z-index: 1;
        &:before {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0px;
          height: 10px;
          background: $colorMain;
          z-index: -1;
          transition: all 200ms ease-out;
        }
        &:hover {
          color: $colorSub02;
          &:before {
            width: 100%;
          }
        }
        &.active {
          color: $colorSub02;
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
      padding: 50px;
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
        margin: 20px 0 15px;
      }
      p {
        line-height: 1.5em;
        margin-bottom: 10px;
      }
    }
  }
}

.activitiesBox {
  @include flexAllCenter();
  > div {
    @include flexAlignCenter();
    flex-direction: column;
    background-image: url("/static/imgs/point01.png");
    background-size: 110%;
    background-position: center;
    background-repeat: no-repeat;
    h2 {
      margin: 80px 0 25px;
      font-size: 80px;
      font-weight: bold;
      text-align: center;
      color: $colorBg;
    }
    > div {
      overflow: scroll;
      width: 70%;
      height: 65%;
      padding: 20px 30px;
      box-sizing: border-box;
      box-shadow: 5px 5px 3px $colorShadow;
      border-radius: 30px;
      background: $colorBg;
    }

    .activityList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .activityItem {
        @include flexAlignCenter();
        position: relative;
        width: 48%;
        height: 200px;
        margin: 20px 0;
        border: 1px solid $colorPoint;
        border-radius: 10px;
        &:hover {
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            background: $colorBg;
          }
        }
        .tumbnail {
          width: 200px;
          height: 200px;
          border-radius: 10px;
          background-color: white;
        }
        .contents {
          padding: 20px;
          h4 {
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 20px;
          }
        }
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
    background: $colorSub02;
  }
}
</style>
