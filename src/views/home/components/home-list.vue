<template>
  <div class="home-swiper">
        <van-card v-for="item in lessonList" :key="item.title"
            :price="item.price"
            desc="描述信息"
            :title="item.title"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
  </div>
</template>

<script lang="ts">
import { ILessons } from '@/typing/home'
import {defineComponent, onMounted, PropType, reactive, toRef, toRefs} from 'vue' //提示功能
export default defineComponent({
    props:{
        lessonList:{
            type: Array
        }
    },
    setup() {
        return {
            // lessonList
        }
    }
    
})
</script>