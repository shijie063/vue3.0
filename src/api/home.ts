// import { ISliders } from '@/typing/home'
import axios from '.'

export function getSlider<T>(){
    return axios.get<T,T>('/swiper/list')
}


// getSlider<ISliders>().then(res=>{ //泛型，标志这接口返回的类型
//     console.log(res);
    
// })
