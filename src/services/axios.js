import axios from 'axios'

const axioInstance = axios.create({
    timeout:3000
})

axioInstance.interceptors.request.use(function(config){
    const token = localStorage.getItem('aplikasi-antrian-jwt') || ''
    if(token){
        config.headers.Authorization = `${token}`
    }

    return config
},function(err){
    return Promise.reject(err)
})

export default axioInstance