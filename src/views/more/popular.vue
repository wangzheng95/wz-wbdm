<template>
  <div class="more-popular">
    <normalHeader :title="'人气作品'"></normalHeader>
    <div class="main">
      <more
        v-for="item in popularList"
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
  name: 'popular',
  components: {
    normalHeader,
    more
  },
  data () {
    return {
      popularList: []
    }
  },
  methods: {
    getBanner () {
      getBanner().then(res => {
        this.popularList = res.data.h5_recommend_male_popular_works
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
