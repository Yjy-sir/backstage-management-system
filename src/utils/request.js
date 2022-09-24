import axios from 'axios'
// import store  from '@/store'
// create an axios instance
const service = axios.create({
  baseURL: '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// 请求拦截器
axios.interceptors.request.use(function(config) {
  config.headers.Authorization = `Bearer`
})

export default service
