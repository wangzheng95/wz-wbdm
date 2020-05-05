import axios from 'axios'
import { Notify } from 'vant'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  tiemout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const res = response.data
  if (res.code !== 1) {
    Notify(res.message)

    return Promise.reject(new Error(res.message))
  }

  return response.data
}, function (error) {
  // 对响应错误做点什么
  console.log(error)
  Notify('网络异常，请稍后重试')
  return Promise.reject(error)
})
export default instance
