<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { label: 'Sobre mi', route: '/AboutMe' },
  { label: 'Habilidades', route: '/Skills' },
  { label: 'Proyectos', route: '/Projects' },
  { label: 'Experiencia', route: '/Experience' },
  { label: 'Contacto', route: '/Contact' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-gray-900">Portfolio</h1>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link
              v-for="item in menuItems"
              :key="item.route"
              :to="item.route"
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
            >
              {{ item.label }}
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <router-link
              v-for="item in menuItems"
              :key="item.route"
              :to="item.route"
              class="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              active-class="text-blue-600 bg-blue-50"
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
      <RouterView />
    </main>
  </div>
</template>
