<template>
  <div class='normalHeader'>
    <div class='normalHeader-content'>
      <div class="normalHeader-left">
        <i class="iconfont icon-arrow-left" @click='goBack'></i>
      </div>
       <div class="normalHeader-middle">
         <span>{{title}}</span>
       </div>
        <div class="normalHeader-right">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'normalHeader',
  props: {
    title: {
      type: String
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang='scss' scoped>
.normalHeader {
    width: 100%;
    // background: pink;
  .normalHeader-content {
    display: flex;
    box-sizing: border-box;
    height: 44px;
    width: 100%;
    // background: pink;
    flex-direction: row;
    justify-content: space-between;
    .normalHeader-left {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .normalHeader-right {
      width: 44px;
      height: 44px;
    }
    .normalHeader-middle {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      font-size: 18px;
    }
  }
}
</style>
