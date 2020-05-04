<template>
  <div class="endlist">
    <div class="comic">
      <div class="comic-cover">
        <img :src="info.extra.hcover" alt="" />
      </div>
      <div class="comic-info">
        <div class="comic-label">
          恋爱
        </div>
        <div class="comic-title">
          {{info.extra.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'endList',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.endlist {
  .comic {
    margin: 0 0 8px;
    width: 100%;
    .comic-cover {
      height: 211px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .comic-info {
      display: flex;
      justify-content: left;
      align-items: center;
      flex-direction: row;
      margin: 8px 8px 0 8px;
      .comic-label {
        width: 32px;
        height: 16px;
        background: orange;
        color: #efefef;
        font-size: 10px;
        line-height: 18px;
        text-align: center;
      }
      .comic-title {
        margin-left: 5px;
        color: #666666;
        font-size: 16px;
      }
    }
  }
}
</style>
