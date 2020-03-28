<template>
  <div class="section whoamiBox">
    <h2>
      I AM
      <br />FRONT-END <br />DEVELOPER 👩🏻‍💻
      <br />
    </h2>
    <div class="imgBox">
      <div></div>
    </div>
    <div class="textBox">
    </div>
  </div>
</template>

<script>
export default {
  name: 'whoami',
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss'>
@import '../assets/styles/theme.scss';
@import '../assets/styles/main.scss';

.whoamiBox {
  h2 {
    @include positionVcenter(680px);
    @include positionHcenter(350px);
    @include title01();
    position: fixed;
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
      background: $colorSub02;
      box-shadow: 10px 10px 3px $colorShadow;
      // @include backgroundImg($url : '../assets/img/hi01.jpg', $size : contain);
    }
  }
  .textBox {
    background: $colorPoint;
  }
}

</style>
