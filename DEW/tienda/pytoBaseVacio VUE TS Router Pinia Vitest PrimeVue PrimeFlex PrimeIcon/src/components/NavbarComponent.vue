<template>
  <div class="navbar-container">
    <div class="card">
      <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
          <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </RouterLink>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
          </a>
        </template>
      </Menubar>
    </div>
    
    <div class="search-bar">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText 
          v-model="searchQuery" 
          placeholder="Buscar productos..." 
          @input="handleSearch"
        />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menubar } from 'primevue'
import InputText from 'primevue/inputtext'
import Ripple from 'primevue/ripple'
import { RouterLink } from 'vue-router'

const vRipple = Ripple

const searchQuery = ref('')

const emit = defineEmits<{
  (e: 'search-change', query: string): void
}>()

const handleSearch = () => {
  emit('search-change', searchQuery.value)
}

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Shop',
    icon: 'pi pi-shopping-cart',
    route: '/shop',
  },
  {
    label: 'Cart',
    icon: 'pi pi-cart-plus',
    route: '/cart',
  },
  {
    label: 'Register',
    icon: 'pi pi-user-plus',
    route: '/register',
  },
  {
    label: 'Login',
    icon: 'pi pi-sign-in',
    route: '/login',
  },
  {
    label: 'Purchased',
    icon: 'pi pi-check-circle',
    route: '/purchased',
  },
])
</script>

<style scoped>
.navbar-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.search-bar {
  padding: 0 10px;
}

.search-bar :deep(.p-inputtext) {
  width: 100%;
  max-width: 300px;
}
</style>
