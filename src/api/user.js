import request from '@/utils/request'

// 登录
export function postlogin(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
// 用户基本资料
export function postusermessage() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
