import { CATOGORY_TYPES,IHomeState, ISliders } from '@/typing/home'
import { Module } from 'vuex'
import {IGlobalState} from '../index'
// import { Module } from 'vuex'
import * as Types from '../action_types'
import { getSlider } from '@/api/home'
//存首页的数据

const state:IHomeState = {
    currentCategory: CATOGORY_TYPES.ALL, //描述这里的状态只能取CATOGORY_TYPES里面的
    sliders: [],
    lessions: {
        hsaMore:true, //是否有更多
        loading: false, //默认没有加载
        offset:0,
        limit:5,
        list:[], //当前显示在页面的数据
    }

}
// Moudle里的参数 1.自己的状态，2.全局的状态
const home:Module<IHomeState,IGlobalState> = { //Moudle vue3自带的
    namespaced:true,
    state,
    mutations: { //修改数据
        [Types.SET_CATEGORY](state,payload:CATOGORY_TYPES) {
            state.currentCategory = payload 
            //paload传进来的数据，更改store中的数据
        },
        [Types.SET_SLIDER_LIST](state,payload:ISliders[]){
            state.sliders = payload
        }
    },
    actions:{
        async [Types.SET_SLIDER_LIST]({commit}){
            let sliders = await getSlider<ISliders>() //请求轮播图的方法
            commit(Types.SET_SLIDER_LIST,sliders)
        }
    }

}
export default home