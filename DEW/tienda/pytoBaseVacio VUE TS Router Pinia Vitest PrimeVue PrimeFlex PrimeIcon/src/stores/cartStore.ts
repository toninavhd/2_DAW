import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface CartItem {
  productId: number
  cantidad: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const STORAGE_KEY = 'GuestCartStore'
  const AUTH_STORAGE_KEY = 'ShopSession'

  const loadFromStorage = () => {
    const sessionData = sessionStorage.getItem(STORAGE_KEY)
    if (sessionData) {
      items.value = JSON.parse(sessionData)
    }
  }

  const saveToStorage = () => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items.value))
  }

  const add = (productId: number) => {
    const existing = items.value.find(i => i.productId === productId)
    if (existing) {
      existing.cantidad++
    } else {
      items.value.push({ productId, cantidad: 1 })
    }
    saveToStorage()
  }

  const getQuantity = (productId: number) => {
    const item = items.value.find(i => i.productId === productId)
    return item?.cantidad ?? 0
  }

  const clearCart = () => {
    items.value = []
    sessionStorage.removeItem(STORAGE_KEY)
  }

  return { items, loadFromStorage, saveToStorage, add, getQuantity, clearCart }
})
