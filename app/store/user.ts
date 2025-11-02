import type { AuthUser } from '~~/auth/client'

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<AuthUser | undefined>(undefined)

  function setUser(newUser: AuthUser) {
    user.value = newUser
  }

  function clearUser() {
    user.value = undefined
  }

  return {
    user,
    setUser,
    clearUser,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
