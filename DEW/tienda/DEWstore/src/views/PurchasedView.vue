<template>
  <div class="purchased-view">
    <div class="purchased-header">
      <h1>Mis Compras</h1>
      <p v-if="hasSession">Historial de tus pedidos</p>
    </div>

    <div v-if="!hasSession" class="auth-required">
      <i class="pi pi-lock"></i>
      <h2>Inicia sesión para ver tus compras</h2>
      <p>Necesitas estar logueado para acceder a tu historial</p>
      <RouterLink to="/login" class="btn-primary">
        Iniciar sesión
      </RouterLink>
    </div>

    <div v-else-if="purchases.length === 0" class="empty-state">
      <i class="pi pi-shopping-bag"></i>
      <h2>No tienes pedidos aún</h2>
      <p>Cuando realices una compra aparecerá aquí</p>
      <RouterLink to="/shop" class="btn-primary">
        Ir a la tienda
      </RouterLink>
    </div>

    <div v-else class="purchases-list">
      <div v-for="(purchase, index) in purchases" :key="index" class="purchase-card">
        <div class="purchase-header">
          <div class="purchase-info">
            <span class="purchase-label">Pedido</span>
            <span class="purchase-id">#{{ String(index + 1).padStart(4, '0') }}</span>
          </div>
          <span class="purchase-date">{{ formatDate(purchase.fechaCompra) }}</span>
        </div>

        <DataTable :value="purchase.items" class="purchase-table">
          <Column field="id" header="Ref." class="col-id"></Column>
          <Column field="nombreProducto" header="Producto" class="col-product"></Column>
          <Column field="cantidad" header="Cant." class="col-qty"></Column>
          <Column field="precioUnitario" header="Precio" class="col-price">
            <template #body="slotProps">
              {{ formatPrice(slotProps.data.precioUnitario) }}
            </template>
          </Column>
          <Column header="Subtotal" class="col-subtotal">
            <template #body="slotProps">
              {{ formatPrice(slotProps.data.precioUnitario * slotProps.data.cantidad) }}
            </template>
          </Column>
        </DataTable>

        <div class="purchase-footer">
          <div class="purchase-totals">
            <div class="total-line">
              <span>Subtotal</span>
              <span>{{ formatPrice(purchase.totalBase) }}</span>
            </div>
            <div class="total-line">
              <span>IGIC (7%)</span>
              <span>{{ formatPrice(purchase.igic) }}</span>
            </div>
            <div class="total-line final">
              <span>Total</span>
              <span>{{ formatPrice(purchase.totalFinal) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Toast position="top-center" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuth } from '../composables/authComposable'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

interface PurchaseItem {
  id: number
  nombreProducto: string
  precioUnitario: number
  cantidad: number
}

interface Purchase {
  fechaCompra: string
  items: PurchaseItem[]
  totalBase: number
  igic: number
  totalFinal: number
}

const { currentUser, loadSession, isAuthenticated } = useAuth()
const toast = useToast()

const purchases = ref<Purchase[]>([])

const hasSession = computed(() => {
  const session = sessionStorage.getItem('ShopSession')
  return session !== null
})

onMounted(() => {
  loadSession()
  
  setTimeout(() => {
    if (!isAuthenticated() || !currentUser.value) {
      return
    }

    const historyKey = `${currentUser.value.correoElectronico}HistoryPurchased`
    const historyData = sessionStorage.getItem(historyKey)
    if (historyData) {
      purchases.value = JSON.parse(historyData)
    }
  }, 100)
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  }).format(price)
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.purchased-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.purchased-header {
  margin-bottom: 32px;
}

.purchased-header h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.purchased-header p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.auth-required,
.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.auth-required i,
.empty-state i {
  font-size: 4rem;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.auth-required h2,
.empty-state h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.auth-required p,
.empty-state p {
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

.purchases-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.purchase-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}

.purchase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.purchase-info {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.purchase-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.purchase-id {
  font-weight: 700;
  font-size: 1.1rem;
}

.purchase-date {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.purchase-table {
  border: none;
}

.purchase-table :deep(.p-datatable-tbody > tr > td) {
  padding: 12px 16px;
  border-color: var(--color-border-light);
}

.col-id {
  width: 80px;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.col-product {
  font-weight: 500;
}

.col-qty,
.col-price,
.col-subtotal {
  text-align: right;
}

.purchase-footer {
  padding: 16px 20px;
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
}

.purchase-totals {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.total-line {
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.total-line.final {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--text-primary);
  padding-top: 8px;
  margin-top: 4px;
  border-top: 1px solid var(--color-border);
}

@media (max-width: 640px) {
  .purchased-view {
    padding: 32px 16px;
  }
  
  .purchase-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .total-line {
    width: 100%;
  }
}
</style>

