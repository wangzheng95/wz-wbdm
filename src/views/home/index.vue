<template>
  <div class="page-home">
    <!-- 顶部 -->
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

    <!-- 下面可动部分 -->
    <div class="main">
      <!-- 轮播图 -->
      <div class="swiper-bar">
        <swiper
          class="my-swiper"
          :autoplay="2000"
          :loop="true"
          v-if="bannerList.length > 0"
        >
          <swiperItem v-for="item in bannerList" :key="item.info_id">
            <img :src="item.image_url" alt="" />
          </swiperItem>
        </swiper>
      </div>
      <!-- 分类导航 -->
      <indexNav></indexNav>
      <!-- 动漫分类 -->
      <div>
        <!-- 精品佳作 -->
        <div class="home-recommend-block">
          <classifyHeader></classifyHeader>
          <div>
            <div class="home-recommend-comics">
              <div
                class="home-recommend-comic"
                v-for="item in fineWorksLit"
                :key="item.extra_comic_id"
              >
                <div class="comic-cover-container">
                  <div class="comic-cover">
                    <img :src="item.image_ext_url" alt="" />
                  </div>
                  <div class="comic-cover-info">
                    <div class="comic-cover-title">{{ item.extra.name }}</div>
                    <div class="comic-cover-desc">
                      {{ item.extra.watching_focus }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 人气作品 -->
        <div class="home-recommend-block">
          <classifyHeader></classifyHeader>

          <div>
            <div class="home-recommend-comics">
              <div
                class="home-recommend-comic"
                v-for="item in popularList"
                :key="item.extra_comic_id"
              >
                <div class="comic-cover-container">
                  <div class="comic-cover">
                    <img :src="item.image_ext_url" alt="" />
                  </div>
                  <div class="comic-cover-info">
                    <div class="comic-cover-title">{{ item.extra.name }}</div>
                    <div class="comic-cover-desc">
                      {{ item.extra.watching_focus }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最新上架 -->
        <div class="home-recommend-block2">
          <classifyHeader></classifyHeader>

          <div>
            <div class="home-recommend-comics">
              <div
                class="home-recommend-comic"
                v-for="item in newArrivalList"
                :key="item.extra_comic_id"
              >
                <div class="comic-cover-container">
                  <div class="comic-cover">
                    <img :src="item.image_ext_url" alt="" />
                  </div>
                  <div class="comic-cover-info">
                    <div class="comic-cover-title">
                      {{ item.extra.name }}
                    </div>
                    <div class="comic-cover-classify">
                      <img src="" alt="" />
                      暂无分类
                    </div>
                    <div class="comic-cover-author">
                      <img src="" />
                      {{ item.extra.sina_nickname }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 热门连载 -->
        <div class="home-recommend-block">
          <classifyHeader></classifyHeader>

          <div>
            <div class="home-recommend-comics">
              <div
                class="home-recommend-comic"
                v-for="item in hotList"
                :key="item.extra_comic_id"
              >
                <div class="comic-cover-container">
                  <div class="comic-cover">
                    <img :src="item.image_ext_url" alt="" />
                  </div>
                  <div class="comic-cover-info">
                    <div class="comic-cover-title">{{ item.extra.name }}</div>
                    <div class="comic-cover-desc">
                      {{ item.extra.watching_focus }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 小编推荐 -->
        <div class="home-recommend-block">
          <classifyHeader></classifyHeader>

          <div>
            <div class="home-recommend-comics">
              <div
                class="home-recommend-comic"
                v-for="item in xiaobianList"
                :key="item.extra_comic_id"
              >
                <div class="comic-cover-container">
                  <div class="comic-cover">
                    <img :src="item.image_ext_url" alt="" />
                  </div>
                  <div class="comic-cover-info">
                    <div class="comic-cover-title">{{ item.extra.name }}</div>
                    <div class="comic-cover-desc">
                      {{ item.extra.watching_focus }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 本周推荐 -->
        <div class="home-recommend-block3">
          <classifyHeader></classifyHeader>

          <div>
            <div class="home-recommend-comics">
              <div
                class="home-recommend-comic"
                v-for="item in weekList"
                :key="item.extra_comic_id"
              >
                <div class="comic-cover-container">
                  <div class="comic-cover">
                    <img :src="item.image_ext_url" alt="" />
                  </div>
                  <div class="comic-cover-info">
                    <div class="comic-cover-title">{{ item.extra.name }}</div>
                    <div class="comic-cover-desc">
                      {{ item.extra.watching_focus }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperItem } from '@/components/swiper'
import { getBanner } from '@/api/cartoon'
import classifyHeader from './components/classifyHeader'
import indexNav from './components/indexNav'
export default {
  name: 'home',
  components: {
    swiper,
    swiperItem,
    indexNav,
    classifyHeader
  },
  data () {
    return {
      bannerList: [],
      fineWorksLit: [],
      popularList: [],
      newArrivalList: [],
      hotList: [],
      xiaobianList: [],
      weekList: []
    }
  },
  methods: {
    getBanner () {
      getBanner()
        .then(res => {
          // console.log(res)
          if (res.code === 1) {
            this.bannerList = res.data.h5_recommend_male_rotation_map
            this.fineWorksLit = res.data.h5_recommend_male_fine_works.splice(0, 3)
            this.popularList = res.data.h5_recommend_male_popular_works.splice(0, 4)
            this.newArrivalList = res.data.h5_recommend_male_new_arrival.splice(0, 3)
            this.hotList = res.data.h5_recommend_male_hot_serial.splice(0, 2)
            this.xiaobianList = res.data.h5_recommend_male_xiaobian_recommend.splice(0, 3)
            this.weekList = res.data.h5_recommend_male_week_recommend.splice(0, 3)
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    }
  },
  created () {
    this.getBanner()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow-y: auto;
  }
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
    }
  }
  // 轮播图
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
  // 精品佳作样式
  .home-recommend-block {
    width: 100%;
    background: #ccc;
    padding: 8px 0 0 0;
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
    .home-recommend-comics {
      padding: 0 16px;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      background: #fff;
      .home-recommend-comic .comic-cover-info {
        margin: 0 8px 0 0;
        display: flex;
        flex-direction: column;
        width: 159.5px;
        // align-items: center;
        .comic-cover-title {
          font-size: 14px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis; //这是让文本溢出后，显示成省略号。
          white-space: nowrap; //禁止自动换行
        }
        .comic-cover-desc {
          font-size: 12px;
          color: #999;
          margin: 0 0 6px;
          overflow: hidden;
          text-overflow: ellipsis; //这是让文本溢出后，显示成省略号。
          white-space: nowrap; //禁止自动换行
        }
      }
      .home-recommend-comic {
        margin-bottom: 8px;
        flex: 1 0 40%;
        overflow: hidden;
        max-width: 167.5px;
        .comic-cover {
          height: 90px;
          width: 167.5px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .home-recommend-comic:first-child {
        max-width: 100%;
        width: 100%;
        flex: auto;
        .comic-cover {
          height: 215px;
          width: 100%;
        }
      }
      .home-recommend-comic:nth-child(2) {
        margin-right: 8px;
      }
    }
  }
  // 人气作品样式
  .home-recommend-block:nth-child(2) {
    .home-recommend-comics {
      .home-recommend-comic {
        margin-bottom: 8px;
        flex: 1 0 40%;
        overflow: hidden;
        .comic-cover {
          height: 105px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .home-recommend-comic:nth-child(odd) {
        margin-right: 8px;
      }
    }
  }
  // 最新上线样式
  .home-recommend-block2 {
    width: 100%;
    background: #ccc;
    padding: 8px 0 0 0;
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
    .home-recommend-comics {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      background: #fff;
      width: 100%;
      .home-recommend-comic {
        width: 100%;
        padding: 0 16px 16px;
        .comic-cover-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          box-sizing: border-box;
          .comic-cover {
            margin: 0 4px 0 0;
            width: 160px;
            height: 90px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .comic-cover-info {
            padding: 0 16px 0 0;
            height: 90px;
            width: 179px;
            .comic-cover-title {
              width: 163px;
              overflow: hidden;
              color: #333;
              font-size: 16px;
              margin: 4px 0 0;
              padding: 0 0 8px;
              overflow: hidden;
              text-overflow: ellipsis; //这是让文本溢出后，显示成省略号。
              white-space: nowrap; //禁止自动换行
            }
            .comic-cover-classify {
              color: #000;
              font-size: 12px;
              padding: 0 0 8px;
              position: relative;
              padding-left: 16px;
            }
            .comic-cover-classify:before {
              position: absolute;
              top: 0;
              left: 0;
              content: "";
              width: 16px;
              height: 16px;
              background: url(~@/assets/icon/classify.png);
              background-size: cover;
              background-position: 50%;
              background-repeat: no-repeat;
            }
            .comic-cover-author {
              color: #000;
              font-size: 12px;
              position: relative;
              padding-left: 16px;
            }
            .comic-cover-author:before {
              position: absolute;
              top: 0;
              left: 0;
              content: "";
              width: 16px;
              height: 16px;
              background: url(~@/assets/icon/ink.png);
              background-size: cover;
              background-position: 50%;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
  }
  //热门连载样式
  .home-recommend-block:nth-child(4) {
    .home-recommend-comics {
      .home-recommend-comic {
        margin-bottom: 8px;
        flex: 1 0 40%;
        overflow: hidden;
        .comic-cover {
          height: 105px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .home-recommend-comic:nth-child(odd) {
        margin-right: 8px;
      }
    }
  }
  // 本周推荐样式
  .home-recommend-block3 {
    width: 100%;
    background: #ccc;
    padding: 8px 0 0 0;
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
    .home-recommend-comics {
      padding: 0 16px;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      background: #fff;
      .home-recommend-comic {
        width: 108px;
        height: 200px;
        margin: 0 0 8px 6px;
        display: flex;
        flex-direction: column;
        .comic-cover-container {
          width: 109px;
          height: 150px;
          .comic-cover {
            width: 109px;
            height: 150px;
            border-radius: 5px;
            overflow: hidden;
            img {
              width: 109px;
              height: 150px;
            }
          }
        }
        .home-recommend-comic:first-child {
          margin-left: 0;
        }
        .comic-cover-info {
          margin-right: 8px;
          width: 101px;
          .comic-cover-title {
            font-size: 14px;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis; //这是让文本溢出后，显示成省略号。
            white-space: nowrap; //禁止自动换行
          }
          .comic-cover-desc {
            font-size: 12px;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis; //这是让文本溢出后，显示成省略号。
            white-space: nowrap; //禁止自动换行
          }
        }
      }
    }
  }
}
</style>
