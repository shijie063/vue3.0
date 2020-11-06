// import { ISliders } from '@/typing/home'
import { CATOGORY_TYPES } from '@/typing/home'
import axios from '.'

export function getSlider<T>(){
    return axios.get<T,T>('/swiper/list')
}
export function getLessons<T>(category:CATOGORY_TYPES,offset:number = 0,limit:number = 5){
    return axios.get<T,T>(`/lesson/list?category=${category}&offset=${offset}&limit=${limit}`)
}


// getSlider<ISliders>().then(res=>{ //泛型，标志这接口返回的类型
//     console.log(res);
    
// })
