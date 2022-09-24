// 权限配置

import router from './router'
import store from '@/store'

//  当路径发生改变时 触发
router.beforeEach((to, from, next) => {
  // 判断 如果是去 login页面 直接放行
  if (to.path === '/login') {
    next()
    return
  } else {
    // 如果没有 token  直接跳转 login 页面
    if (!store.state.user.token) {
      next('/login')
      return
    //   否者放行
    } else {
      next()
    }
  }
})
