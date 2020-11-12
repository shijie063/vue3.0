<template>
  <div class="home">
      <!-- 头部 -->
      <HomeHeader 
        :category='category'
        @setCurrentCategory='setCurrentCategory'
       ></HomeHeader>
      <!-- 轮播图 -->
      
      <div class="home-container" ref="refreshElm">
          <Suspense>
            <template #default>
                <HomeSwiper></HomeSwiper>
            </template>
            <template #fallback>
                <div>loading ...</div>
            </template>
        </Suspense>
        <!-- 列表 -->
        <HomeList :category='category' :lessonList='lessonList'></HomeList>
        <div v-if="hasMore" class="loading">loading...</div>
        <div v-else class="hasMore">- 我是有底线的 -</div>
      </div>
      
  </div>
</template>

<script lang="ts">
import HomeHeader from './components/home-header.vue'
import HomeSwiper from './components/home-swiper.vue'
import HomeList from './components/home-list.vue'
import {computed, defineComponent, onMounted, onUnmounted, ref} from 'vue' //提示功能
import { createStore, Store, useStore } from 'vuex'
import store, { IGlobalState } from '@/store'
import { CATOGORY_TYPES,ISliders } from '@/typing/home'
import * as Types from '@/store/action_types'
import { getSlider } from '@/api/home'
import {useLoadMore} from '@/hooks/useLoadMore'

//功能函数，修改分类使用
function useCategory(store:Store<IGlobalState>) { // 使用store中的数据 分类
    let category =  computed(()=>store.state.home.currentCategory)
    function setCurrentCategory(category:CATOGORY_TYPES) { //传过来最新的数据
        store.commit(`home/${Types.SET_CATEGORY}`,category) //commit修改store的数据
        store.state.home.lessons = {
            hasMore:true, //是否有更多
            limit:5,
            list:[], //当前显示在页面的数据
            offset: 0
        }
        store.dispatch(`home/${Types.SET_LESSON_LIST}`) // 列表更新方法
    }
    return {
        category,
        setCurrentCategory
    }
}

// 列表数据
function useLessonList (store:Store<IGlobalState>) {
    let lessonList = computed(()=>store.state.home.lessons.list)
    onMounted(()=>{ //初始化加载。如过vuex里面有数据，只取一次
        if(lessonList.value.length == 0) {
            store.dispatch(`home/${Types.SET_LESSON_LIST}`)
        }
    })
    return  lessonList 
}

export default defineComponent({
    components: {
        HomeHeader,
        HomeSwiper,
        HomeList
    },
    setup() {
        // onMounted(()=>{
        //    getSlider<ISliders>().then(res=>{ //泛型，标志这接口返回的类型
        //         console.log(res);
        //     })
        // })
        // 1.先获取vuex中的数据
        let store = useStore<IGlobalState>()
        let {category,setCurrentCategory} = useCategory(store)
        let  lessonList  = useLessonList(store)
        const refreshElm = ref<null | HTMLElement>(null)
        const hasMore = useLoadMore(refreshElm,store,`home/${Types.SET_LESSON_LIST}`)
        return {
            category,
            setCurrentCategory,
            lessonList,
            refreshElm,
            hasMore
        }
        
    },
    

})
</script>

<style lang="scss">
.home-container {
    position: absolute;
    top:65px;
    bottom: 50px;
    width: 100%;
    overflow-y: scroll;
    .loading,.hasMore {
        font-size: 14px;
        color: #ccc;
        width: 100%;
        margin: 16px 0;
        text-align: center;
    }
}
</style>
