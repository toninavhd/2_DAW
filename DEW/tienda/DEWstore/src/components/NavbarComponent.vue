<template>
  <header class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand">
        <span class="brand-name">STORE</span>
      </RouterLink>

      <nav class="navbar-nav">
        <RouterLink 
          v-for="item in navItems" 
          :key="item.route"
          :to="item.route" 
          class="nav-link"
          :class="{ 'active': isActive(item.route) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="navbar-actions">
        <div class="search-wrapper" v-if="showSearch">
          <i class="pi pi-search search-icon"></i>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Buscar..."
            class="search-input"
          />
        </div>
        
        <div class="user-menu" v-if="currentUser">
          <div class="user-info" @click="toggleUserMenu">
            <i class="pi pi-user"></i>
            <span class="user-name">{{ currentUser.nombre }}</span>
            <i class="pi pi-chevron-down"></i>
          </div>
          <div class="user-dropdown" v-if="showUserMenu">
            <RouterLink to="/purchased" class="dropdown-item" @click="showUserMenu = false">
              <i class="pi pi-shopping-bag"></i>
              Mis Compras
            </RouterLink>
            <button class="dropdown-item logout" @click="handleLogout">
              <i class="pi pi-sign-out"></i>
              Cerrar Sesión
            </button>
          </div>
        </div>
        
        <RouterLink to="/cart" class="cart-icon">
          <i class="pi pi-shopping-cart"></i>
          <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, inject } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useAuth } from '../composables/authComposable'
import { useCartStore } from '../stores/cartStore'

const route = useRoute()
const router = useRouter()
const { currentUser, logout, loadSession } = useAuth()
const cartStore = useCartStore()

// Inject searchQuery from App.vue
const searchQuery = inject<Ref<string>>('searchQuery', ref(''))
const showUserMenu = ref(false)

const showSearch = computed(() => route.path === '/shop' || route.path === '/')

const cartCount = computed(() => {
  return cartStore.items.reduce((sum, item) => sum + item.cantidad, 0)
})

const navItems = computed(() => {
  const items = [
    { label: 'Tienda', route: '/shop' },
    { label: 'Carrito', route: '/cart' },
  ]
  
  if (currentUser.value) {
    items.push({ label: 'Mis Compras', route: '/purchased' })
  } else {
    items.push({ label: 'Iniciar Sesión', route: '/login' })
  }
  
  return items
})

const isActive = (path: string) => {
  return route.path === path
}

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const handleLogout = () => {
  logout()
  showUserMenu.value = false
  router.push('/')
}

onMounted(() => {
  loadSession()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.user-menu')) {
    showUserMenu.value = false
  }
}
</script>

<style scoped>
.navbar {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.navbar-brand {
  flex-shrink: 0;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-primary);
}

.navbar-nav {
  display: flex;
  gap: 8px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--color-border-light);
}

.nav-link.active {
  color: var(--color-primary);
  background: var(--color-background);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.search-input {
  width: 200px;
  padding: 8px 12px 8px 36px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 0.875rem;
  color: var(--text-primary);
  background: var(--color-background);
  transition: all 0.2s ease;
}

.search-input::placeholder {
  color: var(--text-muted);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  width: 240px;
}

.user-menu {
  position: relative;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.user-info:hover {
  background: var(--color-border-light);
}

.user-info i:first-child {
  color: var(--text-secondary);
}

.user-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.user-info i:last-child {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  min-width: 180px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 200;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 16px;
  font-size: 0.875rem;
  color: var(--text-primary);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background: var(--color-border-light);
}

.dropdown-item.logout {
  color: var(--color-error);
}

.dropdown-item i {
  font-size: 0.875rem;
}

.cart-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--text-primary);
  border-radius: 50%;
  transition: all 0.2s ease;
}

.cart-icon:hover {
  background: var(--color-border-light);
}

.cart-icon i {
  font-size: 1.125rem;
}

.cart-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: var(--color-primary);
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 16px;
  }
  
  .navbar-nav {
    display: none;
  }
  
  .search-input {
    width: 140px;
  }
  
  .search-input:focus {
    width: 180px;
  }
  
  .user-name {
    display: none;
  }
}
</style>

