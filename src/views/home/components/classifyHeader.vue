<template>
  <div class="home-recommend-header">
    <div class="home-recommend-title">精品佳作</div>
    <div class="home-recommend-more">更多&gt;</div>
  </div>
</template>

<script>
export default {
  name: 'classifyHeader'
}
</script>

<style  lang='scss' scoped>
.home-recommend-header {
  padding: 0 16px;
  height: 44px;
  // margin-top: 8px;
  line-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // width: 100%;
  background: #fff;
  .home-recommend-title {
    font-size: 18px;
    color: #666;
    padding-left: 26px;
    position: relative;
  }

  .home-recommend-title:before {
    position: absolute;
    top: 11px;
    left: 0;
    content: "";
    width: 22px;
    height: 22px;
    background: url(~@/assets/icon/ink.png);
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .home-recommend-more {
    font-size: 12px;
    color: #fff;
    width: 42px;
    height: 20px;
    text-align: center;
    line-height: 22px;
    background: #4a90e2;
    border-radius: 10px;
  }
}
</style>
