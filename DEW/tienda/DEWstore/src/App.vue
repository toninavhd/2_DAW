<template>
  <div class="app-container">
    <NavbarComponent />

    <main class="main-content">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

// Provide search query to all child components
const searchQuery = ref('')

provide('searchQuery', searchQuery)
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

