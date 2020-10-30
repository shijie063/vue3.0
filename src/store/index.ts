import { IHomeState } from '@/typing/home'
import { createStore } from 'vuex'
import home from './modules/home'

export interface IGlobalState {
    home:IHomeState //模块中的属性可以在这增加
}
const store = createStore<IGlobalState>({
  mutations: {
  },
  actions: {
  },
  modules: {
      home
  }
})
export default store


