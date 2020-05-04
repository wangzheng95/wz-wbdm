<template>
  <div class="rank_list_title">
    <div :title='"read"' class="list_title_item" @click='HandleClick(item,title)'   :class="{ 'list_title_color' : title === clickTitle }">
      <!-- list_title_color -->
      阅读榜
    </div>
    <div class="list_title_item" :title='"share"'  @click='HandleClick(item,title)'   :class="{ 'list_title_color' : title === clickTitle }">
      新作榜
    </div>
    <div class="list_title_item" :title='""'  @click='HandleClick(item,title)'   :class="{ 'list_title_color' : title === clickTitle }">
      综合榜
    </div>
  </div>
</template>

<script>
export default {
  name: 'rankHeader',
  data () {
    return {
      title: {
        type: String,
        default: 'read'
      }
    }
  },
  methods: {
    handleClick (item, title) {
      this.clickTitle = title
    }
  }
}
</script>

<style lang='scss' scoped>
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
</style>
