import { postlogin } from '@/api/user'
const TOKEN_USER = 'TOKEN'
export default {
  namespaced: true,
  state: () => {
    return {
      token: window.localStorage.getItem(TOKEN_USER) || ''
    }
  },
  mutations: {
    userPldate(state, payload) {
      state.token = payload
      // 拿到后台返回的 token 存储到本地
      payload = window.localStorage.setItem(TOKEN_USER, payload)
    }
  },
  actions: {
    async uprequse(state, payload) {
      const { data } = await postlogin(payload)
      console.log(data)
      state.commit('userPldate', data.data)
    }
  }

}
