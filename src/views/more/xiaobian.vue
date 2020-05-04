<template>
  <div class="more-week">
    <normalHeader :title='"小编推荐"'></normalHeader>
    <div class="main">
      <more v-for='item in xiaobianList' :key="item.extra_comic_id" :info='item'></more>
    </div>
  </div>
</template>

<script>
import normalHeader from '@/components/normalHeader'
import more from '@/components/more'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'week',
  components: {
    normalHeader,
    more
  },
  data () {
    return {
      xiaobianList: []
    }
  },
  methods: {
    getBanner () {
      getBanner()
        .then(res => {
          if (res.code === 1) {
            this.xiaobianList = res.data.h5_recommend_male_xiaobian_recommend
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

<style lang='scss' scoped>
.more-fine {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
