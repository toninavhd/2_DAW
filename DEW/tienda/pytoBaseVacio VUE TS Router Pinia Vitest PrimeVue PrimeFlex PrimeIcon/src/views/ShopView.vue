<template>
  <div class="shop-view">
    <div class="shop-header">
      <h1>Nuestra Tienda</h1>
      <p>Descubre nuestros productos</p>
    </div>

    <div v-if="loading" class="loading">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      <p>Cargando productos...</p>
    </div>

    <div v-else-if="filteredProducts.length === 0" class="no-results">
      <i class="pi pi-exclamation-circle" style="font-size: 2rem"></i>
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
import { ref, computed, onMounted } from 'vue'
import ProductCardComponent, { type Product } from '../components/ProductCardComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const products = ref<Product[]>([])
const loading = ref(true)
const searchQuery = ref('')

// Cargar productos desde JSON
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

// Filtrar productos por nombre
const filteredProducts = computed(() => {
  if (!searchQuery.value.trim()) {
    return products.value
  }
  const query = searchQuery.value.toLowerCase().trim()
  return products.value.filter(product =>
    product.nombreProducto.toLowerCase().includes(query)
  )
})

// Manejar añadir al carrito
const handleAddToCart = (product: Product) => {
  console.log('Añadir al carrito:', product.nombreProducto)
  // Por ahora solo navegamos al carrito
  router.push('/cart')
}

// Exponer searchQuery para el padre
defineExpose({
  searchQuery
})
</script>

<style scoped>
.shop-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.shop-header {
  text-align: center;
  margin-bottom: 30px;
}

.shop-header h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.shop-header p {
  color: #666;
  font-size: 1.1rem;
}

.loading,
.no-results {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.loading i,
.no-results i {
  color: #3498db;
  margin-bottom: 16px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>

