<template>
  <div class="page-daypub">
    <normalHeader :title="'分类'"></normalHeader>
    <div class="cate-list">
      <div
        class="cate-list-item"
        :class="{ 'active' : item.cate_id === cateIndex }"
        v-for="(item, index) in cateList"
        :key="item.cate_cn_name"
        @click='handleClick1(item, index)'
      >
        {{ item.cate_cn_name }}
      </div>
    </div>
    <div class="showFilterLayout">
      <div class="show_filter">
        <div class="end_status_list">
          <div
            class="end_status_list_item"
            :class="{ 'active' : item.end_status === endIndex }"
            v-for="(item, index) in endList"
            :key="item.end_status_name"
            @click='handleClick2(item, index)'
          >
            {{ item.end_status_name }}
          </div>
        </div>
        <div class="pay_status_list">
          <div
            class="pay_status_list_item"
            :class="{ 'active' : item.comic_pay_status === payIndex }"
            v-for="(item, index) in payList"
            :key="item.comiv_pay_status_name"
            @click='handleClick3(item, index)'
          >
            {{ item.comic_pay_status_name }}
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="cartoonList">
        <div
          class="cartoonList-item"
          v-for="item in cartoonList"
          :key="item.comic_id"
        >
          <div class="cartoonList-item-cover">
            <img :src="item.comic_hcover" alt="" />
          </div>
          <div class="cartoonList-item-cover-info">
            <div class="cartoonList-item-cover-title">
              {{ item.comic_name }}
            </div>
            <div class="cartoonList-item-cover-desc">
              {{ item.comic_desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import normalHeader from '@/components/normalHeader'
import { getHeader, getBottom } from '@/api/classify'
export default {
  name: 'daypub',
  components: {
    normalHeader
  },
  data () {
    return {
      cateList: [],
      payList: [],
      endList: [],
      cartoonList: [],
      cateIndex: 0,
      payIndex: 0,
      endIndex: 0
    }
  },
  methods: {
    a () {
      return getHeader()
        .then(res => {
          // console.log(res)
          if (res.code === 1) {
            this.cateList = res.data.cate_list
            this.payList = res.data.comic_pay_status_list
            this.endList = res.data.end_status_list
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    b (cateIndex, payIndex, endIndex) {
      getBottom(cateIndex, payIndex, endIndex)
        .then(res => {
          // console.log(res)
          if (res.code === 1) {
            this.cartoonList = res.data.data
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    handleClick1 (payload, type, index) {
      this.cateIndex = payload.cate_id
      // console.log(this.cateIndex)
      this.b(this.cateIndex, this.endIndex, this.payIndex)
    },
    handleClick2 (payload, type, index) {
      this.endIndex = payload.end_status
      // console.log(payload)
      this.b(this.cateIndex, this.endIndex, this.payIndex)
    },
    handleClick3 (payload, type, index) {
      this.payIndex = payload.comic_pay_status
      this.b(this.cateIndex, this.endIndex, this.payIndex)
    }
  },
  async created () {
    await this.a()
    this.b()
  }
}
</script>

<style lang="scss">
.page-daypub {
  display: flex;
  // width: 100%;
  height: 100%;
  flex-direction: column;
  .cate-list {
    padding: 0 7px 0 8px;
    .cate-list-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      float: left;
      width: 60px;
      height: 30px;
      color: #cccccc;
      font-size: 14px;
      // margin: 3px 0 0;
    }
    .active {
      width: 60px;
      height: 27px;
      margin: 3px 0 0;
      background: #f75d79;
      color: #fff;
    }
  }
  .end_status_list {
    display: flex;
    flex-direction: row;
    padding: 0 7px 0 8px;
    .end_status_list_item {
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
      width: 60px;
      height: 30px;
      color: #cccccc;
      font-size: 14px;
      margin: 3px 0 0;
    }
    .active {
      width: 54px;
      height: 24px;
      margin: 3px 0 0;
      background: #f75d79;
      color: #fff;
    }
  }
  .pay_status_list {
    padding: 0 7px 0 8px;
    display: flex;
    flex-direction: row;
    .pay_status_list_item {
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
      width: 60px;
      height: 30px;
      color: #cccccc;
      font-size: 14px;
      margin: 3px 0 0;
    }
    .active {
      width: 54px;
      height: 24px;
      margin: 3px 0 0;
      background: #f75d79;
      color: #fff;
    }
  }
  .main {
    // display: flex;
    flex: 1;
    overflow-y: auto;
    .cartoonList {
      padding: 0 8px 0;
      .cartoonList-item {
        float: left;
        width: 175px;
        .cartoonList-item-cover {
          width: 175px;
          height: 105px;
          border-radius: 8px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .cartoonList-item-cover-info {
          width: 167px;
          margin: 8px 8px 0 0;
          .cartoonList-item-cover-title {
            color: #666;
            font-size: 14px;
          }
          .cartoonList-item-cover-desc {
            color: #999;
            font-size: 12px;
            margin-bottom: 6px;
          }
        }
      }
      .cartoonList-item:nth-child(odd) {
        margin-right: 8px;
      }
    }
  }
}
</style>
