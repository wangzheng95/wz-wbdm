<template>
  <div class="more-hot">
    <normalHeader :title="'热门连载'"></normalHeader>
    <div class="main">
      <more
        v-for="item in hotList"
        :key="item.extra_comic_id"
        :info="item"
      ></more>
    </div>
  </div>
</template>

<script>
import normalHeader from '@/components/normalHeader'
import more from '@/components/more'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'hot',
  components: {
    normalHeader,
    more
  },
  data () {
    return {
      hotList: []
    }
  },
  methods: {
    getBanner () {
      getBanner().then(res => {
        this.hotList = res.data.h5_recommend_male_hot_serial
      })
    }
  },
  created () {
    this.getBanner()
  }
}
</script>

<style lang="scss" scoped>
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
