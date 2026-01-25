import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuth } from '../composables/authComposable'

export interface CartItem {
  productId: number
  cantidad: number
}

export interface Product {
  id: number
  nombreProducto: string
  descripcion: string
  precio: number
  stock: number
  imagen: string
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const STORAGE_KEY = 'GuestCartStore'
  const AUTH_STORAGE_KEY = 'ShopSession'

  // Cargar productos desde JSON
  const products = ref<Product[]>([])
  const loadProducts = async () => {
    try {
      const response = await fetch('/dataProductsShop.json')
      products.value = await response.json()
    } catch (error) {
      console.error('Error loading products:', error)
    }
  }

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

  // Obtener items con información completa del producto
  const cartItemsWithDetails = computed(() => {
    return items.value.map(item => {
      const product = products.value.find(p => p.id === item.productId)
      return {
        ...item,
        nombreProducto: product?.nombreProducto || 'Producto desconocido',
        precioUnitario: product?.precio || 0,
        imagen: product?.imagen || '/assets/images/placeholder.svg'
      }
    })
  })

  // Calculos
  const totalBase = computed(() => {
    return cartItemsWithDetails.value.reduce((sum, item) => {
      return sum + (item.precioUnitario * item.cantidad)
    }, 0)
  })

  const igic = computed(() => {
    return totalBase.value * 0.07
  })

  const totalFinal = computed(() => {
    return totalBase.value + igic.value
  })

  // Metodo para pagar
  const pay = () => {
    const { currentUser, isAuthenticated } = useAuth()

    if (isAuthenticated() && currentUser.value) {
      // Guardar en historial del usuario autenticado
      const historyKey = `${currentUser.value.correoElectronico}HistoryPurchased`
      const purchase = {
        fechaCompra: new Date().toISOString(),
        items: cartItemsWithDetails.value.map(item => ({
          id: item.productId,
          nombreProducto: item.nombreProducto,
          precioUnitario: item.precioUnitario,
          cantidad: item.cantidad
        })),
        totalBase: totalBase.value,
        igic: igic.value,
        totalFinal: totalFinal.value
      }

      // Obtener historial existente
      const existingHistory = JSON.parse(sessionStorage.getItem(historyKey) || '[]')
      existingHistory.push(purchase)
      sessionStorage.setItem(historyKey, JSON.stringify(existingHistory))
    }
    // Si es invitado, no se guarda el histórico

    // Limpiar carrito
    clearCart()

    return true
  }

  return {
    items,
    products,
    loadProducts,
    loadFromStorage,
    saveToStorage,
    add,
    getQuantity,
    clearCart,
    cartItemsWithDetails,
    totalBase,
    igic,
    totalFinal,
    pay
  }
})
