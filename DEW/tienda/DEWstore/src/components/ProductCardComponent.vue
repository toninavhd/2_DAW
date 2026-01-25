<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <img :src="product.imagen" :alt="product.nombreProducto" class="product-image" />
      <button 
        class="quick-add-btn"
        @click="addToCart"
        :disabled="product.stock === 0"
      >
        <span v-if="product.stock > 0">Añadir al carrito</span>
        <span v-else>Agotado</span>
      </button>
    </div>
    
    <div class="product-info">
      <h3 class="product-name">{{ product.nombreProducto }}</h3>
      <p class="product-description">{{ truncatedDescription }}</p>
      <div class="product-footer">
        <span class="product-price">{{ formattedPrice }}</span>
        <span v-if="product.stock < 10 && product.stock > 0" class="product-stock low">
          {{ product.stock }} disponibles
        </span>
        <span v-else-if="product.stock === 0" class="product-stock out">
          Agotado
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../stores/cartStore'

export interface Product {
  id: number
  nombreProducto: string
  descripcion: string
  precio: number
  stock: number
  imagen: string
}

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'add-to-cart', product: Product): void
}>()

const cartStore = useCartStore()

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  }).format(props.product.precio)
})

const truncatedDescription = computed(() => {
  const maxLength = 80
  if (props.product.descripcion.length <= maxLength) {
    return props.product.descripcion
  }
  return props.product.descripcion.substring(0, maxLength) + '...'
})

const addToCart = () => {
  if (props.product.stock > 0) {
    emit('add-to-cart', props.product)
  }
}
</script>

<style scoped>
.product-card {
  background: var(--color-surface);
  border-radius: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--color-border-light);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.quick-add-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 14px;
  background: var(--color-primary);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product-card:hover .quick-add-btn {
  transform: translateY(0);
}

.quick-add-btn:disabled {
  background: var(--color-secondary);
  cursor: not-allowed;
}

.quick-add-btn:hover:not(:disabled) {
  background: var(--color-accent);
}

.product-info {
  padding: 16px 0;
}

.product-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 6px 0;
  letter-spacing: 0.02em;
}

.product-description {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin: 0 0 12px 0;
  line-height: 1.5;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.product-stock {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--color-success);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-stock.low {
  color: var(--color-warning);
}

.product-stock.out {
  color: var(--color-error);
}

@media (max-width: 640px) {
  .quick-add-btn {
    position: static;
    transform: none;
    width: 100%;
    margin-top: 12px;
  }
}
</style>

