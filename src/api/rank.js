// 处理接口请求
import request from '@/utils/request'

// http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
export const getRank1 = () => {
  return request({
    url: '/wbdm/wbcomic/home/rank_read?_type=h5',
    methods: 'GET'
  })
}
// http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
export const getRank2 = () => {
  return request({
    url: '/wbdm/wbcomic/home/rank_share?_type=h5',
    methods: 'GET'
  })
}
export const getRank3 = () => {
  return request({
    url: '/wbdm/wbcomic/home/rank?_type=h5',
    methods: 'GET'
  })
}
