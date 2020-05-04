<template>
  <div class="more-fine">
    <normalHeader :title='"精品佳作"'></normalHeader>
    <div class="main">
      <more v-for='item in fineWorksLit' :key="item.extra_comic_id" :info='item'></more>
    </div>
  </div>
</template>

<script>
import normalHeader from '@/components/normalHeader'
import more from '@/components/more'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'fine',
  components: {
    normalHeader,
    more
  },
  data () {
    return {
      fineWorksLit: []
    }
  },
  methods: {
    getBanner () {
      getBanner()
        .then(res => {
          if (res.code === 1) {
            this.fineWorksLit = res.data.h5_recommend_male_fine_works
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
