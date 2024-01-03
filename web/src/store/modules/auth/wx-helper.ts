import { ss } from '@/utils/storage'

const LOCAL_NAME = 'WX_SECRET_TOKEN'

export function getWxToken() {
  return ss.get(LOCAL_NAME)
}

export function setWxToken(token: string) {
  return ss.set(LOCAL_NAME, token)
}

export function removeWxToken() {
  return ss.remove(LOCAL_NAME)
}
