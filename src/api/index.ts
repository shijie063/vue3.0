import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// axios.defaults.baseURL=''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器

axios.interceptors.request.use((config:AxiosRequestConfig)=> {
    return config;

  }, function(error) {

    return Promise.reject(error);

  })

  // 响应拦截器

axios.interceptors.response.use((response:AxiosResponse)=> {
    if(response.data.code !==0){
        return Promise.reject(response.data.data)
    }
    return response.data.data;
}, function(error) {
    return Promise.reject(error);
})


export default axios
