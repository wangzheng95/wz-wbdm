// 处理接口请求
import request from '@/utils/request'
export const getBanner = () => {
  return request({
    url: '/wbdm/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5',
    methods: 'GET'
  })
}
