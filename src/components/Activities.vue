<template>
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
</template>

<script>
export default {
  name: 'activities',
  props: {
    activityList: {
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

</style>
