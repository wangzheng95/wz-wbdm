<template>
  <!-- 分类导航 -->
  <div class="home_menu">
    <router-link to='/daypub'>
      <div class="home_menu_item">
        <img
          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/daypub.7d71503a.png"
          alt=""
        />
        <p>放送表</p>
      </div>
    </router-link>
    <router-link to='/cate'>
      <div class="home_menu_item">
        <img
          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/catelog.3cfb4bb6.png"
          alt=""
        />
        <p>分类</p>
      </div>
    </router-link>
    <router-link to='/rank'>
      <div class="home_menu_item">
        <img
          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/rank.bfd0ebb0.png"
          alt=""
        />
        <p>榜单</p>
      </div>
    </router-link>
    <router-link to='/end'>
      <div class="home_menu_item">
        <img
          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/ending.932e7864.png"
          alt=""
        />
        <p>完结</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'indexNav'
}
</script>

<style lang="scss" scoped>
.home_menu {
  padding: 19px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .home_menu_item {
    width: 60px;
    height: 88px;
    img {
      width: 60px;
      height: 60px;
    }
    p {
      font-size: 14px;
      color: #333;
      text-align: center;
    }
  }
}
</style>
