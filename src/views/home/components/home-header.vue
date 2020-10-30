<template>
  <div class="home-header">
    <van-dropdown-menu>
        <van-dropdown-item :modelValue="category" :options="options" @change="change"/>
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { CATOGORY_TYPES } from '@/typing/home'
import {defineComponent, PropType, reactive, toRef, toRefs} from 'vue' //提示功能
export default defineComponent({
    props:{
        category:{
            type:Number as PropType<CATOGORY_TYPES>
        }
    },
    emits:['setCurrentCategory'], //为了有提示，可以不写
    setup(props,context) { //接受参数和上下文
        let state = reactive({
            options: [
                { text: '全部商品', value: CATOGORY_TYPES.ALL },
                { text: '新款商品', value: CATOGORY_TYPES.REACT},
                { text: '活动商品', value: CATOGORY_TYPES.VUE },
                { text: '更多', value: CATOGORY_TYPES.MORE }
            ],
        })
        function change(value:CATOGORY_TYPES){
            context.emit('setCurrentCategory',value)
            console.log(value);
            
        }
        return {
            ...toRefs(state),
            change
        }
        // context.emit('setCurrentCategory') //触发传进来的方法
    }
})
</script>
