<template>
  <div class="shop-view">
    <div class="shop-header">
      <h1>Nueva Colección</h1>
      <p class="shop-subtitle">Descubre las últimas tendencias</p>
    </div>

    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Cargando productos...</p>
    </div>

    <div v-else-if="filteredProducts.length === 0" class="empty-state">
      <i class="pi pi-search"></i>
      <p>No se encontraron productos</p>
    </div>

    <div v-else class="products-grid">
      <ProductCardComponent
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, inject, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import ProductCardComponent, { type Product } from '../components/ProductCardComponent.vue'
import { useCartStore } from '../stores/cartStore'
import { useToast } from 'primevue/usetoast'

const router = useRouter()
const cartStore = useCartStore()
const toast = useToast()

const products = ref<Product[]>([])
const loading = ref(true)

const searchQuery = inject<Ref<string>>('searchQuery', ref(''))

onMounted(async () => {
  try {
    const response = await fetch('/dataProductsShop.json')
    if (response.ok) {
      products.value = await response.json()
    }
  } catch (error) {
    console.error('Error al cargar productos:', error)
  } finally {
    loading.value = false
  }
})

const filteredProducts = computed(() => {
  if (!searchQuery.value?.trim()) {
    return products.value
  }
  const query = searchQuery.value.toLowerCase().trim()
  return products.value.filter(product =>
    product.nombreProducto.toLowerCase().includes(query)
  )
})

const handleAddToCart = (product: Product) => {
  cartStore.add(product.id)
  toast.add({
    severity: 'success',
    summary: 'Añadido al carrito',
    detail: product.nombreProducto,
    life: 2000
  })
}
</script>

<style scoped>
.shop-view {
  max-width: 1400px;
  margin: 0 auto;
  padding: 48px 24px;
}

.shop-header {
  text-align: center;
  margin-bottom: 48px;
}

.shop-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
}

.shop-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
}

.loading-state,
.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: var(--text-secondary);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 2px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-state i {
  font-size: 2.5rem;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 32px 24px;
}

@media (max-width: 640px) {
  .shop-view {
    padding: 32px 16px;
  }
  
  .shop-header h1 {
    font-size: 1.75rem;
  }
  
  .products-grid {
    gap: 24px 16px;
  }
}
</style>

