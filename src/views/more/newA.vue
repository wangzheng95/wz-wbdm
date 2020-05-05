<template>
  <div class="more-newA">
    <normalHeader :title="'最新上架'"></normalHeader>
    <div class="main">
      <more
        v-for="item in newArrivalList"
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
  name: 'newA',
  components: {
    normalHeader,
    more
  },
  data () {
    return {
      newArrivalList: []
    }
  },
  methods: {
    getBanner () {
      getBanner().then(res => {
        this.newArrivalList = res.data.h5_recommend_male_new_arrival
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
