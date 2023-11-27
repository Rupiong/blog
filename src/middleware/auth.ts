import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { type RouteLocationNormalized } from 'vue-router'

const randomAuth = (): boolean => Math.random() > 0.5

export default defineNuxtRouteMiddleware(
  async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const isAuthenticated: boolean = randomAuth()
    // 检测认证的样例
    if (!isAuthenticated) {
      return await navigateTo('/login')
    }
  }
)
