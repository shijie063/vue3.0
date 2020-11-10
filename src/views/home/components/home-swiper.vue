
<template>
  <div class="home-swiper">
      <van-swipe>
            <van-swipe-item v-for="item in sliderList" :key="item.url">
                <!-- <p>{{item.title}}</p> -->
                <img class="swiper_img" :src="item.url"/>
            </van-swipe-item>
        </van-swipe>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue' //提示功能
import { getSlider } from '@/api/home'
import { useStore } from 'vuex'
import { IGlobalState } from '@/store'
import * as Types from '@/store/action_types'
export default defineComponent({
    async setup() {
        let store = useStore<IGlobalState>()
        let sliderList = computed(()=>store.state.home.sliders)
        if(sliderList.value.length == 0){
            await store.dispatch(`home/${Types.SET_SLIDER_LIST}`)
        }
        return {
            sliderList
        }
    }
})
</script>
<style lang="scss">
    .home-swiper {
        padding: 10px 10px;
        .swiper_img {
            width: 100%;
        }
        .van-swipe-item {
            height: 200px;
        }
    }
</style>

