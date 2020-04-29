<template>
  <div class="page-home">
    <div class="nav">
      <div class="nav_left">
        <img
          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/icon.b72a7a04.png"
          alt=""
        />
      </div>
      <div class="nav_right">
        <div class="nav_switch_gender male_btn"></div>
        <div class="nav_search iconfont icon-search"></div>
        <div class="nav_mine iconfont icon-gerenzhongxin"></div>
      </div>
    </div>
    <div class="swiper-bar">
      <swiper class="my-swiper" :autoplay="2000" :loop="true"  v-if='bannerList.length > 0'>
        <swiperItem v-for='item in bannerList' :key='item.info_id'>
          <img :src="item.image_url" alt="" />
        </swiperItem>
        <!-- <swiperItem>
          <img src="../../assets/icon/02-banner.png" alt="" />
        </swiperItem>
        <swiperItem>
          <img src="../../assets/icon/03-banner.jpg" alt="" />
        </swiperItem>
        <swiperItem>
          <img src="../../assets/icon/04-banner.png" alt="" />
        </swiperItem> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperItem } from '@/components/swiper'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'home',
  components: {
    swiper,
    swiperItem
  },
  data () {
    return {
      bannerList: []
    }
  },
  created () {
    getBanner().then(res => {
      // console.log(res)
      if (res.code === 1) {
        this.bannerList = res.data.h5_recommend_male_rotation_map
      } else {
        alert(res.message)
      }
    }).catch(err => {
      console.log(err)
      alert('网络异常，请稍后重试')
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .nav {
    @include border-bottom;
    width: 100%;
    height: 44px;
    // background: pink;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // border-bottom: 1px solid #e6e6e6;
    .nav_left {
      padding-left: 16px;
      img {
        width: 87px;
        height: 24px;
      }
    }
    .nav_right {
      display: flex;
      flex-direction: row;
      .nav_search,
      .nav_mine {
        width: 44px;
        height: 44px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
      }
      //  .nav_mine {
      //   width: 44px;
      //   height: 44px;
      //   font-size: 24px;
      //   color: #333;
      //    display: flex;
      //   justify-content: center;
      //   align-items: center;
      // }
    }
  }
  .swiper-bar {
    padding-top: 8px;
    .my-swiper {
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
