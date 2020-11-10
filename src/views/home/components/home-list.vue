<template>
  <div class="home-list">
        <van-card v-for="item in lessonList" :key="item.title"
            :price="item.price"
            :title="item.title"
            :thumb="item.poster"
            tag="热卖"
        >
        <template #tags>
            <van-tag plain type="danger">{{formatCategory(category)}}</van-tag>
        </template>
        <template #footer>
            <van-button size="mini">购买</van-button>
        </template>
        </van-card>
  </div>
</template>

<script lang="ts">
import { ILessons } from '@/typing/home'
import {defineComponent, onMounted, PropType, reactive, toRef, toRefs} from 'vue' //提示功能
export default defineComponent({
    props:{
        lessonList:{
            type: Array
        },
        category: {
            type: Number
        }
    },
    setup() {
        function formatCategory(type:number) {
            switch(type){
                case 0:
                    return '全部'
                case 1:
                    return '新款'
                case 2: 
                    return '活动'
                case 3: 
                    return '其他'
            }
        }
        return {
            // lessonList
            formatCategory
        }
    }
    
})
</script>