<template>
  <div class="section contactBox">
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'contact',
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss'>
@import '../assets/styles/theme.scss';
@import '../assets/styles/main.scss';

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
