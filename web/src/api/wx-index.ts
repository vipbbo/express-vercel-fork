import { post } from '@/utils/request'

export function fetchWxUser<T>() {
  console.log("============H5调用微信获取个人信息接口================")
  return post<T>({
    url: 'https://service.ibitly.cn/users/wx-user',
  })
}

