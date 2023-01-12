import axios from 'axios'

const service=axios.create({
    baseURL:'https://jinjiawork.usemock.com/api',
    timeout:1000
})
service.interceptors.request.use((config)=>{
    return config

})
service.interceptors.response.use(res=>{
    if(res.data.message==='success'){
        return res.data.data
    }
},error=>{
    return Promise.reject(error)
})
export default service