import { CATOGORY_TYPES,IHomeState, ISliders, ILessons } from '@/typing/home'
import { Module } from 'vuex'
import {IGlobalState} from '../index'
// import { Module } from 'vuex'
import * as Types from '../action_types'
import { getSlider, getLessons} from '@/api/home'
import { Loading } from 'vant'
//存首页的数据

const state:IHomeState = {
    currentCategory: CATOGORY_TYPES.ALL, //描述这里的状态只能取CATOGORY_TYPES里面的
    sliders: [],
    lessons: {
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
        },
        [Types.SET_LESSON_LIST](state,payload:ILessons){
            state.lessons.list = [...state.lessons.list,...payload.list];
            state.lessons.hsaMore = payload.hsaMore;
            state.lessons.offset = payload.offset + payload.list.length;
        },
        [Types.SET_LOADING](state,payload:boolean){
            state.lessons.loading = payload
        },
    },
    actions:{
        async [Types.SET_SLIDER_LIST]({commit}){
            let sliders = await getSlider<ISliders>() //请求轮播图的方法
            commit(Types.SET_SLIDER_LIST,sliders)
            console.log(sliders);
            
        },
        async [Types.SET_LESSON_LIST]({commit}){
            // if(state.lessons.loading) {
            //     return
            // }
            // if(state.lessons.hsaMore){
            //     return
            // }
            // commit(Types.SET_LOADING,true) //开始加载数据


            let lessons = await getLessons<ILessons>(state.currentCategory,state.lessons.offset,state.lessons.limit) //请求列表的方法
            console.log(lessons);
            
            commit(Types.SET_LESSON_LIST,lessons)
            commit(Types.SET_LOADING,false)
        }
    }

}
export default home