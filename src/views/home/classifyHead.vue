<template>
  <div class="home_classify_header">
    <div class="home_classify_title">精品佳作</div>
    <div class="home_classify_more">更多&gt;</div>
  </div>
</template>

<script>
export default {
  name: 'home_classify_header'
}
</script>
<style lang="scss">
.home_classify_header {
  padding: 0 16px;
  height: 44px;
  margin-top: 8px;
  line-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.home_classify_header .home_classify_title {
  font-size: 18px;
  color: #666;
  padding-left: 26px;
  position: relative;
}

.home_classify_header .home_classify_title:before {
  position: absolute;
  top: 14px;
  left: 0;
  content: "";
  width: 22px;
  height: 1.375rem;
  background: url(../img/default_avatar.8bc0dfd7.png);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}

.home_classify_header .home_classify_more {
  font-size: 12px;
  color: #fff;
  width: 42px;
  height: 20;
  text-align: center;
  line-height: 22px;
  background: #4a90e2;
  border-radius: 10px;
}
</style>
