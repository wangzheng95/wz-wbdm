// 处理接口请求
import request from '@/utils/request'

// http://manhua.weibo.cn/wbcomic/comic/filter_list?_type=h5
export const getHeader = () => {
  return request({
    url: '/wbdm/wbcomic/comic/filter_list?_type=h5',
    methods: 'GET'
  })
}

// http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5
export const getBottom = () => {
  return request({
    url: '/wbdm/wbcomic/comic/filter_result?&page_num=1&rows_num=20&order=&_type=h5',
    methods: 'GET',
    params: {
      cate_id: 0,
      end_status: 0,
      comic_pay_status: 0
    }
  })
}
