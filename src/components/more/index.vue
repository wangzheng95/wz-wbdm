<template>
  <div class="comic">
    <div class="comic-cover">
       <img :src="info.image_ext_url" alt="">
    </div>
    <div class="comic-info">
      <div class="info-title">{{ info.extra.name }}</div>
      <div class="info-author">作者：{{info.extra.sina_nickname}}</div>
      <div class="info-desc">{{ info.extra.watching_focus }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'more',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
  .comic {
    padding: 8px 8px 8px 16px;
    display: flex;
    flex-direction: row;
    .comic-cover {
      width: 128px;
      height: 72px;
      margin-right: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .comic-info {
      .info-title {
        color: #333;
        font-size: 14px;
        line-height: 28px;
      }
      .info-author {
        color: #999;
        font-size: 12px;
      }
      .info-desc {
        color: #999;
        font-size: 12px;
        margin: 10px 0 0 ;
      }
    }
  }
</style>
