<template>
   <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    /* eslint-disable */
    new swiper (this.$el, {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      } : false,
      loop:this.loop
    })
    /* eslint-enable */
  }
}
</script>

<style lang='scss'>
 .swiper-container {
    width: 343px;
    height: 214px;
  }
</style>
