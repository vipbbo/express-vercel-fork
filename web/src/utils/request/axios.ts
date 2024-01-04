import axios, { type AxiosResponse } from 'axios'
import { useAuthStore } from '@/store'

const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
})

service.interceptors.request.use(
  (config) => {
    const proxyBaseURL = import.meta.env.VITE_APP_API_BASE_URL || ''; // 获取代理的基础地址
    const completeURL = proxyBaseURL + config.url; // 拼接代理的基础地址和请求的相对路径
    console.log('Proxy Request URL:', completeURL); // 打印真正的请求 URL
    const token = useAuthStore().token
    if (token)
      config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200)
      return response

    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
