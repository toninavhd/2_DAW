<template>
  <div class="app-container">
    <NavbarComponent @search-change="handleSearchChange" />

    <main class="main-content">
      <RouterView ref="routerView" />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

const routerView = ref<InstanceType<typeof RouterView> | null>(null)

const handleSearchChange = (query: string) => {
  // Buscar el componente ShopView y actualizar su búsqueda
  const currentView = routerView.value?.component?.subTree
  if (currentView && currentView.searchQuery !== undefined) {
    currentView.searchQuery = query
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
