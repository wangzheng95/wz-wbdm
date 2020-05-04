// 处理接口请求
import request from '@/utils/request'
export const getEnd = () => {
  return request({
    url: '/wbdmwbcomic/home/recommend_list?location_en=ending_works_list&_type=h5',
    methods: 'GET'
  })
}
// http://manhua.weibo.cn/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5
