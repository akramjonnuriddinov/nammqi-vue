import { defineStore } from "pinia";
import httpClient from "@/composables/useApi";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const error = ref('')

  const login = async (login: string, password: string) => {
    try {
      const response = await httpClient.post('/login', { login, password })
      user.value = response.data.user
      localStorage.setItem('auth_token', response.data.access_token)
      console.log(response)

      error.value = ''
    } catch (err: any) {
      error.value = err.response?.data?.message || "Login failed"
      user.value = null
    }
  }
  return { user, error, login }
})