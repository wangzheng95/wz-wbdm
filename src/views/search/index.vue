<template>
  <div class="page-search" id="search_">
    <div class="search_header">
      <form method="get" action="javascript:void(0);">
        <div class="search_ferame">
          <span class="search_ferame_icon"></span
          ><input placeholder="请输入搜索关键字" /><span
            class="search_clear_cion"
            style="display: none;"
          ></span>
        </div>
      </form>
      <div class="search_fix_btn">
        <span>取消</span
        ><!---->
      </div>
    </div>
    <div style="display: none;"><!----></div>
    <div class="search_footer">
      <div class="search_page" style="">
        <div class="hot_search">
          <div class="hot_serch_header">
            <div class="search_title">热门搜索</div>
            <!-- <div class="search_icon refresh"></div> -->
            <div class="iconfont icon-qingkong-"></div>
          </div>
          <ul class="hot_search_conent">
            <li class="search_label">
              <a href="/c/71229" class="">
                爷就是开挂少女
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71196" class="">
                初恋AI
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71197" class="">
                妖咒录
              </a>
            </li>
            <li class="search_label">
              <a href="/c/70617" class="">
                氪命游戏
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71172" class="">
                我在武林做微商
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71173" class="">
                都市小妖精
              </a>
            </li>
            <li class="search_label">
              <a href="/c/70992" class="">
                万能的外卖小哥哥
              </a>
            </li>
            <li class="search_label">
              <a href="/c/70113" class="">
                我是小三劝退师
              </a>
            </li>
            <li class="search_label">
              <a href="/c/68585" class="">
                人鱼公主
              </a>
            </li>
            <li class="search_label">
              <a href="/c/68266" class="">
                天才宝贝的腹黑嫡娘
              </a>
            </li>
            <li class="search_label">
              <a href="/c/68670" class="">
                美人老矣
              </a>
            </li>
            <li class="search_label">
              <a href="/c/71007" class="">
                倾世帝王姬
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hot_search hosity">
        <div class="hot_serch_header">
          <div class="search_title">搜索历史</div>
          <div class="iconfont icon-qingkong "></div>
        </div>
        <ul class="hot_search_conent">
          <li class="search_label">
            <span class="search_label_text">你</span>
          </li>
          <li class="search_label">
            <span class="search_label_text">wo</span>
          </li>
          <li class="search_label">
            <span class="search_label_text">sss</span>
          </li>
        </ul>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style>
#search_ {
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

#search_,
#search_ .search_header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#search_ .search_header {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 16px 16px 0;
}

#search_ .search_header .search_ferame {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 288px;
  height: 44px;
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
}

#search_ .search_header .search_ferame input::-webkit-input-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame input:-moz-placeholder,
#search_ .search_header .search_ferame input::-moz-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame input:-ms-input-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame textarea::-webkit-input-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame textarea:-moz-placeholder,
#search_ .search_header .search_ferame textarea::-moz-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame textarea:-ms-input-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame input {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: none;
  outline: none;
  border: 0;
  padding-top: 4px;
  width: 206px;
  height: 22px;
  line-height: normal;
  font-size: 14px;
  color: #666;
  vertical-align: middle;
}

#search_ .search_header .search_ferame .search_ferame_icon {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAATlBMVEUAAADc3NzNzc3Nzc3Nzc3R0dHNzc3Ozs7Nzc3Pz8/Nzc3MzMzNzc3V1dXNzc3Nzc3MzMzNzc3Ozs7Nzc3MzMzMzMzOzs7Nzc3Nzc3MzMwpeB3gAAAAGXRSTlMAB+u20iLdblxAQOOFDMuYv513VzwtH5Rn8Ph9LwAAAb5JREFUeNrs1Q2OgyAQBeAnCojVqvWnnftfdFMhIZutyiZAm2a+E7xk5s2AMcYYY4wxxhhjjLFvseh+UIJIqKHXC96gGQX9IsYGeU2KXlAT8mmutOPaIA9Z0oFSIgMj6JAwSO5BXtXWRnadNHVbkfdAYnefQEvAk9rnuCMln+FS44/6kiOFn8WtwAvFLcNEDFlixo5ZkGWQiBRuG1bsWiuXUyKN0mXocKBzKUok0dBGrDi0Cto0SMHd6hknZnfBkcDkeoFTriMT4lP2PhQ4Vdh7oWDF34gaAepUWzHaZiCIbciI2OzOawTRtkeIbKGNRBBJmwVxaT+N8HloxNXTU4tALT31iGvw3Qjvx4C41P9+o0lyKYTby0AyST1o0yFQR5tvDPER4/iIxfxpz45tGIZhIIqSIFJJSOrsv2gygcWG9i/+m+AAwxJ1RPyiiMMKcWwjLjDEVc4YahDjHWLQZYz8iMcP4xmIeBAzqgFEScKoixjFWWSrQvzEyXyZ+q2Mg6la+d4UryKkuFo1vM8p5pcuWY0U0+unborBRdwpxTxTmKKVYkffWIoVT8oChIisxz/HX+61doYkSZIkSZLafn8rXwYRltTWAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#search_ .search_header .search_ferame .search_clear_cion {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin: 12px 18px 12px 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAATlBMVEUAAADNzc3Nzc3Pz8/MzMzNzc3Nzc3MzMzMzMzNzc3Nzc3MzMzMzMzPz8/Ozs7MzMzb29vMzMz////w8PD6+vrOzs7y8vLn5+fl5eXo6Oj0tA+zAAAAEXRSTlMAxfoXoHFH8Ozfs6Z5QD4KB1znN2YAAAFBSURBVEjHnNPdbsMgDIZh2xDyn/RL2Lrd/42uqiK5C9SFvOePsCxD+dYwee47ka5nP4WVinMNC/4l3LgiugyCTDIsH+nMeBvP9sAjzEZj+NDiQ214ZxsU1GTpzaMof0utYxTGLnmXURyf3/aoyBu7qtxaQGVBrWtrcatLG1HdSEczLjQfmK9gPv4gLrU88YBT9xjveO3rN8YfnBqeq5az3R7tr/Z7e3TW4nL3ETfVareYuxROsWq1KWaiVZCMrVptMjZkzV3mrlrtnrvRCYY2LSbysLRl4YlhacuCqYehTYueOhjatOhIYGjTQv5Kr5MaAAAYBIIfHODfKw74jIAmTQ9YqJjapoHZqv6R9FWHzpMeg15SxIBkiARQpJdEX+yGjE4slsxdsEKARlCKIE7wUcAVkFlgXWKCBhSPRh7KKA4Of+C7Vk03XIMAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#search_ .search_header .search_fix_btn {
  width: 44px;
  height: 24px;
  -webkit-box-orient: horizontal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin: 10px 0 10px 11px;
  font-size: 14px;
  color: #666;
}

#search_ .search_header .search_fix_btn,
#search_ .search_result {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

#search_ .search_result {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-top: 24px;
  overflow: auto;
}

#search_ .search_list {
  margin: 0 16px 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#search_ .search_list .searchList {
  width: 343px;
  height: 96px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

#search_ .search_list .searchList .search_list_img {
  width: 72px;
  height: 96px;
}

#search_ .search_list .searchList .search_list_delete {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 8px;
  height: 96px;
}

#search_ .search_list .searchList .search_list_delete .sarchList_title {
  height: 24px;
  font-size: 14px;
  color: #666;
  letter-spacing: 0;
  line-height: 24px;
}

#search_ .search_list .searchList .search_list_delete .sina_nickname {
  height: 24px;
  font-size: 12px;
  color: #999;
  letter-spacing: 0;
  line-height: 24px;
}

#search_ .hosity {
  padding-top: 0;
}

#search_ .list_done,
#search_ .load_more {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  text-align: center;
  color: #999b9a;
}

#search_ .load_more {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

#search_ .load_more img {
  width: 36px;
  -webkit-animation: circle 1s linear 1s infinite;
  animation: circle 1s linear 1s infinite;
}

#search_ .loadMoreError {
  display: block;
  width: 94px;
  height: 36px;
  margin: 0 auto;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  white-space: nowrap;
  background: #f75d79;
}

.hot_search {
  padding: 16px 16px 24px;
}

.hot_search .hot_serch_header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.hot_search .hot_serch_header .search_title {
  font-size: 18px;
  color: #666;
  letter-spacing: 0;
  line-height: 44px;
  font-weight: 700;
}

.hot_search .hot_serch_header .iconfont {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size: 24px; */
}

.hot_search .hot_search_conent .search_label {
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom: 1;
  *display: inline;
  background: #efefef;
  border-radius: 2px;
  margin-right: 16px;
  margin-bottom: 8px;
  padding: 0 17px;
  height: 36px;
  line-height: 36px;
  color: #666;
  font-size: 14px;
}

.hot_search .hot_search_conent .search_label a {
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 36px;
  line-height: 36px;
}
</style>
