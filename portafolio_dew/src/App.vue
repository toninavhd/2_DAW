<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { label: 'Sobre mí', route: '/AboutMe', color: 'bg-brutal-yellow' },
  { label: 'Habilidades', route: '/Skills', color: 'bg-brutal-blue' },
  { label: 'Proyectos', route: '/Projects', color: 'bg-brutal-red' },
  { label: 'Experiencia', route: '/Experience', color: 'bg-brutal-green' },
  { label: 'Contacto', route: '/Contact', color: 'bg-brutal-purple' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-100 font-sans">
    <!-- Navigation - Estilo Brutalista -->
    <nav class="bg-brutal-white border-b-3 border-brutal-black sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link
              to="/"
              class="text-3xl font-bold text-brutal-black border-3 border-brutal-black px-4 py-2 bg-brutal-yellow hover:bg-brutal-orange transition-colors"
            >
              PORTFOLIO
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-4">
            <router-link
              v-for="item in menuItems"
              :key="item.route"
              :to="item.route"
              class="relative px-6 py-3 text-lg font-bold text-brutal-black border-3 border-brutal-black hover:shadow-brutal transition-all"
              :class="item.color"
              active-class="shadow-brutal-lg translate-x-1 translate-y-1"
            >
              {{ item.label }}
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="w-16 h-16 flex items-center justify-center bg-brutal-black text-brutal-white border-3 border-brutal-black"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  v-if="!isMenuOpen"
                  stroke-linecap="square"
                  stroke-linejoin="miter"
                  stroke-width="4"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  v-else
                  stroke-linecap="square"
                  stroke-linejoin="miter"
                  stroke-width="4"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isMenuOpen" class="md:hidden border-t-3 border-brutal-black">
          <div class="grid grid-cols-2 gap-3 p-4">
            <router-link
              v-for="item in menuItems"
              :key="item.route"
              :to="item.route"
              class="flex items-center justify-center py-4 text-lg font-bold text-brutal-black border-3 border-brutal-black hover:shadow-brutal transition-all"
              :class="item.color"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-brutal-black text-brutal-white py-8 border-t-3 border-brutal-black">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="font-bold text-lg mb-2">DISEÑADO CON ESTILO BRUTALISTA</p>
        <p class="text-sm opacity-70">© 2025 - Todos los derechos reservados</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Transiciones de página */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
