<template>
  <div class="page-rank">
    <normalHeader :title="'排行榜'"></normalHeader>
    <!-- <rankHeader></rankHeader> -->
    <div class="rank_list_title">
      <div
        class="list_title_item"
        :class="{'list_title_color' : item.index === clickIndex}"
        @click="handleClick(item.index)"
        v-for='item in title'
        :key='item.name'
      >
        <!-- list_title_color -->
        {{item.name}}
      </div>
    </div>
    <div class="main">
      <div class="rank-comics">
        <div class="rank-comic" v-for="item in rankList" :key="item.comic_id">
          <div class="comic-cover">
            <img :src="item.hcover" alt="" />
          </div>
          <div class="comic-info">
            <div class="comic-title">
              {{ item.name }}
            </div>
            <div class="comic-desc">
              没找到
            </div>
            <div class="comic-author">
              {{ item.sina_nickname }}
            </div>
          </div>
          <div class="comic-num">{{ item.rank_no }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import normalHeader from '@/components/normalHeader'
import { getRank1, getRank2, getRank3 } from '@/api/rank'
export default {
  name: 'rank',
  components: {
    normalHeader
  },
  data () {
    return {
      rankList: [],
      title: [{ name: '阅读榜', index: 1 }, { name: '新作榜', index: 2 }, { name: '综合榜', index: 3 }],
      clickIndex: 1
    }
  },
  methods: {
    a () {
      getRank1()
        .then(res => {
          if (res.code === 1) {
            // console.log(res.data.week)
            this.rankList = res.data.week
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    b () {
      getRank2()
        .then(res => {
          if (res.code === 1) {
            // console.log(res.data.week)
            this.rankList = res.data.week
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    c () {
      getRank3()
        .then(res => {
          if (res.code === 1) {
            // console.log(res.data.week)
            this.rankList = res.data.week
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    handleClick (index) {
      // console.log(index)
      this.clickIndex = index
      if (index === 1) {
        this.a()
      }
      if (index === 2) {
        this.b()
      }
      if (index === 3) {
        this.c()
      }
    }
  },
  created () {
    this.a()
    this.b()
    this.c()
  }
}
</script>

<style lang="scss" scoped>
.page-rank {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
    overflow-y: auto;
    .rank-comics {
      display: flex;
      flex-direction: column;
      .rank-comic {
        padding: 0 16px 16px;
        display: flex;
        flex-direction: row;
        .comic-cover {
          width: 144px;
          height: 81px;
          margin: 0 4px 0 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .comic-info {
          padding: 0 16px 0 0;
          height: 81px;
          width: 139px;
          .comic-title {
            width: 139px;
            overflow: hidden;
            color: #333;
            font-size: 16px;
            margin: 4px 0 0;
            padding: 0 0 8px;
            overflow: hidden;
            text-overflow: ellipsis; //这是让文本溢出后，显示成省略号。
            white-space: nowrap; //禁止自动换行
          }
          .comic-desc {
            color: #000;
            font-size: 12px;
            padding: 0 0 8px;
            position: relative;
            padding-left: 16px;
          }
          .comic-desc:before {
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
          .comic-author {
            color: #000;
            font-size: 12px;
            position: relative;
            padding-left: 16px;
          }
          .comic-author:before {
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
        .comic-num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          font-size: 18px;
          margin: 20px 0 0;
          color: #666;
        }
      }
      .rank-comic:first-child {
        .comic-num {
          color: #fff;
          height: 45px;
          background-image: url(../../assets/img/rang1.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .rank-comic:nth-child(2) {
        .comic-num {
          height: 45px;
          background-image: url(../../assets/img/rank2.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .rank-comic:nth-child(3) {
        .comic-num {
          height: 45px;
          background-image: url(../../assets/img/rank3.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
  .rank_list,
  .rank_list_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .rank_list_title {
    margin-bottom: 8px;
    box-shadow: inset 0 -1px 0 0 #efefef;
  }

  .rank_list_title .list_title_item {
    flex: 1;
    width: 375px;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    text-align: center;
    color: #b3b3b3;
  }

  .rank_list_title .list_title_color {
    color: #666;
    position: relative;
  }

  .rank_list_title .list_title_color:before {
    position: absolute;
    content: "";
    width: 44px;
    height: 2px;
    background: #f75d79;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
