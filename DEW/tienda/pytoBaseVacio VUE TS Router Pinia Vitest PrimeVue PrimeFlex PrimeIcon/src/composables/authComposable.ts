import { ref } from 'vue'

export interface User {
  correoElectronico: string
  passwordHash: string
  nombre: string
}

const SESSION_KEY = 'ShopSession'

export function useAuth() {
  const currentUser = ref<User | null>(null)

  const loadSession = () => {
    const session = sessionStorage.getItem(SESSION_KEY)
    if (session) {
      currentUser.value = JSON.parse(session)
    }
  }

  const login = (user: User) => {
    currentUser.value = user
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user))
  }

  const logout = () => {
    currentUser.value = null
    sessionStorage.removeItem(SESSION_KEY)
  }

  const isAuthenticated = () => currentUser.value !== null

  return { currentUser, loadSession, login, logout, isAuthenticated }
}
