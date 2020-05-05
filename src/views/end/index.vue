<template>
  <div class="page-end">
    <normalHeader :title="'完结'"></normalHeader>
    <div class="main">
      <endList
        v-for="item in endCartoon"
        :key="item.info_id"
        :info="item"
      ></endList>
    </div>
    <!--  v-for='item in endCartoon' :key='item.info_id' -->
  </div>
</template>

<script>
import normalHeader from '@/components/normalHeader'
import endList from './components/endList'
import { getEnd } from '@/api/end'
export default {
  name: 'end',
  components: {
    normalHeader,
    endList
  },
  data () {
    return {
      endCartoon: []
    }
  },
  methods: {
    a () {
      return getEnd().then(res => {
        // console.log(res)
        // console.log(res)
        this.endCartoon = res.data.ending_works_list
      })
    }
  },
  created () {
    this.a()
  }
}
</script>

<style lang="scss" scoped>
.page-end {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
