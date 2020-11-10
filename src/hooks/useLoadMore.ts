import { IGlobalState } from '@/store';
import { Ref } from 'vue';
import { Store } from 'vuex'
import _ from 'lodash'
export function useLoadMore(refreshElm:Ref<null | HTMLElement>,store:Store<IGlobalState>,type:string) {
    return {
        isLoading:false,
        isMore:false
    }
}