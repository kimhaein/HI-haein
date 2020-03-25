<template>
  <div id="main">
    <div class="section whoamiBox">
      <!-- <h1>WHO AM I ?</h1> -->
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
        <ul :style="{width: careerList.length * 360 + 'px'}">
          <li
            v-for="item in careerList"
            v-bind:key="item.title"
            class="careerItem"
          >
            <h4>{{ item.startDate }} - {{ item.endDate }}</h4>
            <div class="thumnail">{{ item.thumnail }}</div>
            <h5>{{ item.title }} / {{ item.company }}</h5>
            <p
              v-for="(content, index) in item.contents"
              :key="index"
            >
              - {{content}}
            </p>
            <p><b>{{ item.tech.join(", ")}}</b></p>
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
          <p
            v-for="(content, index) in projectList[activeProject].contents"
            :key="index"
          >
            - {{content}}
          </p>
          <p><b>{{projectList[activeProject].tech.join(', ')}}</b></p>
          <a v-bind:href="projectList[activeProject].link">링크</a>
        </div>
      </div>
    </div>
    <div class="section activitiesBox" v-if="activityList.length > 0">
      <div class="section">
        <h2>ACTIVITIES 🎪</h2>
        <div>
          <ul class="activityList">
            <li
              v-for="item in activityList"
              :key="item.title"
              class="activityItem"
            >
              <div class="tumbnail">img</div>
                <div class="info">
                  <h4>{{item.title}}</h4>
                  <p>{{item.date}}</p>
                </div>
                <div class="contents">
                  <p
                    v-for="(content, index) in item.contents"
                    :key="index"
                  >
                    - {{content}}
                  </p>
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
    <h1 v-if='isTrue'>보인다</h1>
    <h1 v-else>안보인다</h1>
    <h1 v-show='show'>안녕하세요!</h1>
    <button @click='onClick'>Click!</button>-->
    <div id="point"></div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';

export default {
  name: 'Main',
  data() {
    return {
      message: '안냥',
      font: 'font-size : 60px; text-align:right;',
      show: true,
      careerList: [],
      activeProject: 0,
      projectList: [],
      activityList: [],
    };
  },
  mounted() {
    // this.getData('project', this.projectList);
    // this.getData('career', this.careerList);
    // this.getData('activity', this.activityList);
  },
  methods: {
    async getData(collection, target) {
      const dataRef = await firebase.firestore().collection(collection);
      const data = await dataRef.where('isVisible', '==', true).orderBy('order', 'desc').get();
      data.forEach((doc) => {
        target.push(doc.data());
      });
    },
    check(target) {
      this.activeProject = target;
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
      // @include backgroundImg($url : '../assets/img/hi01.jpg', $size : contain);
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
  @include backgroundImg("../img/bg02.jpg");
  .photo {
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
    height: 80%;
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
    height: 80%;
    padding-left: 50px;
    ul {
      overflow: hidden;
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
          b {
            display: block;
            margin: 10px 0;
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
  @include backgroundImg("../img/bg.jpg");
  h2 {
    font-size: 80px;
    font-weight: bold;
    text-align: center;
  }
  > div {
    display: flex;
    width: 80%;
    height: 80%;
    align-items: center;
    justify-content: center;
    .projectBox {
      @include flexAlignCenter();
      flex-direction: column;
      justify-content: space-around;
      width: 30%;
      height: 90%;
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
      height: 90%;
      padding: 30px;
      background: $colorBg;
      box-shadow: 5px 5px 3px $colorShadow;
      box-sizing: border-box;
      .thumnail {
        width: 80%;
        height: 45%;
        margin: 0 auto;
        background: $colorMain;
      }
      h5 {
        font-size: 25px;
        font-weight: bold;
        margin: 30px 0 15px;
      }
      p {
        line-height: 1.8em;
      }
    }
  }
}

.activitiesBox {
  @include flexAllCenter();
  > div {
    @include flexAlignCenter();
    flex-direction: column;
    background-image: url("../img/point01.png");
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
      height: 67%;
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
        overflow: hidden;
        width: 48%;
        height: 200px;
        margin: 20px 0;
        border: 1px solid $colorPoint;
        border-radius: 10px;
        .tumbnail {
          width: 250px;
          height: 200px;
          background-color: red;
        }
        .info {
          flex:1;
          padding: 20px;
          text-align: center;
          h4 {
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 20px;
          }
        }
        .contents {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 0px 20px;
          border-radius: 10px;
          box-sizing: border-box;
          background: white;
          p {
            margin: 5px 0px;
            line-height: 1.5em;
          }
        }
        &:hover {
          .contents {
            @include flexJustifyCenter();
            flex-direction: column;
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
