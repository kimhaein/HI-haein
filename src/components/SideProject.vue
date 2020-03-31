<template>
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
        <div
          v-if="projectList[activeProject].thumbnail"
          class="thumbnail"
          :style="{backgroundImage: `url('${projectList[activeProject].thumbnail}')`}"
        />
        <div v-else class="thumbnail noImg" />
        <h5>{{ projectList[activeProject].title }}</h5>
        <p
          v-for="(content, index) in projectList[activeProject].contents"
          :key="index"
        >
          - {{content}}
        </p>
        <p><b>{{projectList[activeProject].tech.join(', ')}}</b></p>
        <a v-bind:href="projectList[activeProject].link" target='_blank' >LINK</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-project',
  props: {
    projectList: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeProject: 0,
    };
  },
  methods: {
    check(target) {
      this.activeProject = target;
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss'>
@import '../assets/styles/theme.scss';
@import '../assets/styles/main.scss';

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
      overflow: auto;
      width: 50%;
      height: 90%;
      padding: 30px;
      background: $colorBg;
      box-shadow: 5px 5px 3px $colorShadow;
      box-sizing: border-box;
      text-align: center;
      .thumbnail {
        width: 80%;
        height: 48%;
        margin: 0 auto;
        background-color: $colorMain;
        background-image: url('../img/no-img.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        border-radius: 10px;
        box-shadow: 5px 5px 3px $colorShadow;
        &.noImg {
          background-size: 90px;
          background-position: center;
        }
      }
      h5 {
        font-size: 25px;
        font-weight: bold;
        margin: 30px 0 15px;
      }
      p {
        line-height: 1.8em;
        b {
          font-weight: bold;
        }
      }
      a {
        display: block;
        margin-top:10px;
      }
    }
  }
}

</style>
