import { get } from '@/utils/request'

export function fetchWxUser<T>() {
  console.log("============H5调用微信获取个人信息接口================")
  return get<T>({
    url: 'users/wx-user',
  })
}

