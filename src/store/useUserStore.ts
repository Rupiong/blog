import { defineStore } from 'pinia'

interface iUserInfo {
  userName: string
  id: number
  sex: string
}

interface iStore {
  userInfo: iUserInfo
}

const USER_INFO: iUserInfo = {
  userName: '测试',
  id: 1,
  sex: '男'
}

export const useUserStore = defineStore('userInfo', (): iStore => {
  const userInfo: iUserInfo = reactive(USER_INFO)
  return {
    userInfo
  }
})
