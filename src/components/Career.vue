<template>
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
          <div
            v-if="item.thumbnail"
            class="thumbnail"
            :style="{backgroundImage: `url('${item.thumbnail}')`}"
          >
            <span class="company">{{ item.company }}</span>
          </div>
          <div v-else class="thumbnail noImg">
            <span class="company">{{ item.company }}</span>
          </div>
          <h5>{{ item.title }}</h5>
          <p
            v-for="(content, index) in item.contents"
            :key="index"
          >
            - {{content}}
          </p>
          <p><b>{{ item.tech.join(", ")}}</b></p>
          <a  v-if="item.link" :href="item.link" target='_blank' >LINK</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'career',
  props: {
    careerList: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss'>
@import '../assets/styles/theme.scss';
@import '../assets/styles/main.scss';

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
        .thumbnail {
          position: relative;
          overflow: hidden;
          @include flexAllCenter();
          height: 200px;
          background: $colorMain;
          border-radius: 10px;
          font-size: 20px;
          background-image: url('../img/no-img.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          box-shadow: 5px 5px 3px $colorShadow;
          &.noImg {
            background-size: 90px;
            background-position: center;
          }
          .company {
            position: absolute;
            top: 18px;
            right: -43px;
            width: 150px;
            transform: rotate(45deg);
            box-shadow: 3px 3px 5px $colorShadow;
            padding: 8px 0px;
            background-color: $colorBg;
            text-align: center;
            font-weight: bold;
            font-size: 16px;
          }
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

</style>
