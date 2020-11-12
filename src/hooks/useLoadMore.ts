import { IGlobalState } from '@/store';
import { computed, onMounted, Ref } from 'vue';
import { Store } from 'vuex'
import _ from 'lodash'
export function useLoadMore(refreshElm:Ref<null | HTMLElement>,store:Store<IGlobalState>,type:string) {
    //防抖
    let element:HTMLElement
    function _loadMore() {
        // 获取可是区域高度和减去的高度、整个高度
        let containerHeight = element.clientHeight
        let scrollTop = element.scrollTop
        let scrollHeight = element.scrollHeight

        if(containerHeight + scrollTop + 20 >= scrollHeight) {
            store.dispatch(type)
        }
    }
    onMounted(()=>{
        element = refreshElm.value as HTMLElement
        element.addEventListener('scroll',_.debounce(_loadMore,400))
    })
    const hasMore = computed(()=>store.state.home.lessons.hasMore)

    return hasMore
}