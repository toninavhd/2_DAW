<template>
  <div class="cart-view">
    <div class="cart-header">
      <h1>Tu Carrito</h1>
      <p v-if="cartStore.items.length > 0" class="item-count">
        {{ cartStore.items.length }} {{ cartStore.items.length === 1 ? 'artículo' : 'artículos' }}
      </p>
    </div>

    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <i class="pi pi-shopping-bag"></i>
      <h2>Tu carrito está vacío</h2>
      <p>Parece que no has añadido ningún producto todavía</p>
      <RouterLink to="/shop" class="btn-primary">
        Ver productos
      </RouterLink>
    </div>

    <div v-else class="cart-layout">
      <!-- Lista de productos -->
      <div class="cart-items">
        <div v-for="item in cartStore.cartItemsWithDetails" :key="item.productId" class="cart-item">
          <div class="item-image">
            <img :src="item.imagen" :alt="item.nombreProducto" />
          </div>
          
          <div class="item-details">
            <h3 class="item-name">{{ item.nombreProducto }}</h3>
            <p class="item-price">{{ formatPrice(item.precioUnitario) }}</p>
          </div>
          
          <div class="item-actions">
            <div class="quantity-selector">
              <span class="quantity-label">Cantidad</span>
              <span class="quantity-value">{{ item.cantidad }}</span>
            </div>
            <p class="item-subtotal">{{ formatPrice(item.precioUnitario * item.cantidad) }}</p>
          </div>
        </div>
      </div>

      <!-- Resumen del pedido -->
      <div class="cart-summary">
        <h2>Resumen del pedido</h2>
        
        <div class="summary-lines">
          <div class="summary-line">
            <span>Subtotal</span>
            <span>{{ formatPrice(cartStore.totalBase) }}</span>
          </div>
          <div class="summary-line">
            <span>IGIC (7%)</span>
            <span>{{ formatPrice(cartStore.igic) }}</span>
          </div>
          <div class="summary-line total">
            <span>Total</span>
            <span>{{ formatPrice(cartStore.totalFinal) }}</span>
          </div>
        </div>

        <div class="summary-actions">
          <Button
            label="Vaciar carrito"
            icon="pi pi-trash"
            severity="secondary"
            class="btn-secondary"
            @click="handleCancel"
          />
          <Button
            label="Finalizar compra"
            icon="pi pi-lock"
            severity="primary"
            class="btn-primary"
            @click="handlePay"
          />
        </div>
      </div>
    </div>

    <Toast position="top-center" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cartStore'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

const router = useRouter()
const cartStore = useCartStore()
const toast = useToast()

onMounted(async () => {
  await cartStore.loadProducts()
  cartStore.loadFromStorage()
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  }).format(price)
}

const handleCancel = () => {
  cartStore.clearCart()
  toast.add({
    severity: 'info',
    summary: 'Carrito vaciado',
    detail: 'Se ha eliminado todos los productos',
    life: 3000
  })
}

const handlePay = () => {
  cartStore.pay()
  toast.add({
    severity: 'success',
    summary: 'Pedido realizado',
    detail: 'Tu compra se ha completado correctamente',
    life: 3000
  })
  router.push('/purchased')
}
</script>

<style scoped>
.cart-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.cart-header {
  margin-bottom: 32px;
}

.cart-header h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.item-count {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.empty-cart {
  text-align: center;
  padding: 80px 20px;
}

.empty-cart i {
  font-size: 4rem;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.empty-cart h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.empty-cart p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.btn-primary {
  display: inline-block;
  padding: 14px 32px;
  background: var(--color-primary);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background: var(--color-accent);
}

.cart-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 48px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cart-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.item-image {
  width: 100px;
  height: 130px;
  flex-shrink: 0;
  background: var(--color-border-light);
  border-radius: 4px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.item-price {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
}

.quantity-selector {
  text-align: right;
}

.quantity-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.quantity-value {
  font-weight: 600;
}

.item-subtotal {
  font-weight: 600;
  font-size: 1.1rem;
}

.cart-summary {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 24px;
  height: fit-content;
  position: sticky;
  top: 88px;
}

.cart-summary h2 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border);
}

.summary-lines {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.summary-line.total {
  font-weight: 700;
  font-size: 1.125rem;
  padding-top: 12px;
  border-top: 1px solid var(--color-border);
  margin-top: 8px;
}

.summary-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.summary-actions :deep(.p-button) {
  width: 100%;
  justify-content: center;
  padding: 14px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-secondary {
  background: var(--color-surface) !important;
  border-color: var(--color-border) !important;
  color: var(--text-primary) !important;
}

@media (max-width: 900px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }
  
  .cart-summary {
    position: static;
  }
}

@media (max-width: 640px) {
  .cart-view {
    padding: 32px 16px;
  }
  
  .cart-item {
    flex-direction: column;
  }
  
  .item-image {
    width: 100%;
    height: 180px;
  }
  
  .item-actions {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
}
</style>

