// 处理接口请求
import request from '@/utils/request'
export const getSearch = () => {
  return request({
    url: '/wbdm/wbcomic/home/hot_words?_type=h5',
    methods: 'GET'
  })
}
// http://manhua.weibo.cn/wbcomic/home/hot_words?_type=h5
// http://manhua.weibo.cn/wbcomic/home/search?word=%E4%BD%A0&page_num=1&_type=h5
export const getWord = (word) => {
  return request({
    url: '/wbdm/wbcomic/home/search?word=' + word + '&page_num=1&_type=h5',
    methods: 'GET'
  })
}
