<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.imagen" :alt="product.nombreProducto" />
    </div>
    <div class="product-content">
      <h3 class="product-title">{{ product.nombreProducto }}</h3>
      <p class="product-description">{{ product.descripcion }}</p>
      <div class="product-details">
        <span class="product-price">{{ formatPrice(product.precio) }}€</span>
        <span class="product-stock" :class="{ 'low-stock': product.stock < 10 }">
          Stock: {{ product.stock }}
        </span>
      </div>
      <Button 
        label="Añadir" 
        icon="pi pi-cart-plus" 
        @click="addToCart"
        :disabled="product.stock === 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import Button from 'primevue/button'

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
    type: Object as PropType<Product>,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'add-to-cart', product: Product): void
}>()

const formatPrice = (price: number): string => {
  return price.toFixed(2)
}

const addToCart = () => {
  emit('add-to-cart', props.product)
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-content {
  padding: 16px;
}

.product-title {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.product-description {
  margin: 0 0 12px 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.product-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.product-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
}

.product-stock {
  font-size: 0.85rem;
  color: #27ae60;
}

.product-stock.low-stock {
  color: #e74c3c;
}
</style>

