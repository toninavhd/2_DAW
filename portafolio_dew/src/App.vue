<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Theme Toggle
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

// Mobile Menu
const isMenuOpen = ref(false)

const menuItems = [
  { label: 'SOBRE MÍ', route: '/AboutMe', color: 'bg-brutal-yellow', hover: 'hover:bg-brutal-orange' },
  { label: 'HABILIDADES', route: '/Skills', color: 'bg-brutal-blue', hover: 'hover:bg-cyan-400' },
  { label: 'PROYECTOS', route: '/Projects', color: 'bg-brutal-red', hover: 'hover:bg-brutal-pink' },
  { label: 'EXPERIENCIA', route: '/Experience', color: 'bg-brutal-green', hover: 'hover:bg-brutal-yellow' },
  { label: 'CONTACTO', route: '/Contact', color: 'bg-brutal-pink', hover: 'hover:bg-brutal-purple' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen bg-brutal-white dark:bg-brutal-black font-sans transition-colors duration-300">
    <!-- Header Animado -->
    <header class="sticky top-0 z-50">
      <!-- Barra decorativa superior -->
      <div class="h-2 flex">
        <div class="flex-1 bg-brutal-red animate-pulse-slow"></div>
        <div class="flex-1 bg-brutal-yellow"></div>
        <div class="flex-1 bg-brutal-green"></div>
        <div class="flex-1 bg-brutal-blue"></div>
        <div class="flex-1 bg-brutal-pink"></div>
      </div>

      <nav class="bg-brutal-white dark:bg-brutal-gray-dark border-b-4 border-brutal-black dark:border-white transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-between items-center h-20">
            <!-- Logo Animado -->
            <router-link
              to="/"
              class="group relative"
            >
              <div class="bg-brutal-black dark:bg-white text-brutal-white dark:text-brutal-black px-6 py-3 text-2xl font-display font-bold border-4 border-brutal-black dark:border-white hover:transform hover:-skew-x-6 transition-transform duration-200">
                <span class="animate-pulse">PORTFOLIO</span>
              </div>
              <!-- Efecto decorativo -->
              <div class="absolute -bottom-2 -right-2 w-full h-full border-4 border-brutal-yellow -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200"></div>
            </router-link>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center gap-3">
              <router-link
                v-for="(item, index) in menuItems"
                :key="item.route"
                :to="item.route"
                class="relative px-5 py-3 text-sm font-bold uppercase tracking-wider border-4 border-brutal-black dark:border-white transition-all duration-200 group overflow-hidden"
                :class="[
                  item.color,
                  item.hover,
                  'hover:-translate-y-1 hover:shadow-brutal-hover active:translate-y-0 active:shadow-none'
                ]"
                active-class="shadow-brutal-lg translate-x-1 translate-y-1"
              >
                <span class="relative z-10">{{ item.label }}</span>
                <!-- Efecto hover interno -->
                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              </router-link>
            </div>

            <!-- Theme Toggle Button -->
            <button
              @click="toggleTheme"
              class="w-14 h-14 flex items-center justify-center border-4 border-brutal-black dark:border-white bg-brutal-gray-light hover:bg-brutal-yellow dark:hover:bg-brutal-pink transition-all duration-200 group"
              :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
            >
              <!-- Sol (modo claro) -->
              <svg
                v-if="!isDark"
                class="w-7 h-7 text-brutal-yellow animate-spin-slow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" stroke-width="3" />
                <path stroke-linecap="round" stroke-width="3" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              <!-- Luna (modo oscuro) -->
              <svg
                v-else
                class="w-7 h-7 text-brutal-white group-hover:text-brutal-pink transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- Mobile menu button -->
            <div class="lg:hidden flex items-center gap-2">
              <!-- Theme toggle mobile -->
              <button
                @click="toggleTheme"
                class="w-12 h-12 flex items-center justify-center border-3 border-brutal-black dark:border-white bg-brutal-gray-light"
              >
                <svg v-if="!isDark" class="w-6 h-6 text-brutal-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
                <svg v-else class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </button>
              <button
                @click="isMenuOpen = !isMenuOpen"
                class="w-12 h-12 flex items-center justify-center bg-brutal-black dark:bg-white text-white dark:text-black border-3 border-brutal-black dark:border-white"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    v-if="!isMenuOpen"
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    stroke-width="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                  <path
                    v-else
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    stroke-width="3"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Navigation -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <div v-if="isMenuOpen" class="lg:hidden pb-4">
              <div class="grid grid-cols-2 gap-3">
                <router-link
                  v-for="(item, index) in menuItems"
                  :key="item.route"
                  :to="item.route"
                  class="flex items-center justify-center py-4 text-sm font-bold uppercase tracking-wider border-3 border-brutal-black dark:border-white transition-all"
                  :class="[item.color, item.hover]"
                  @click="isMenuOpen = false"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </transition>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1 relative">
      <!-- Elementos decorativos de fondo -->
      <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div class="absolute top-40 -right-20 w-64 h-64 bg-brutal-yellow opacity-5 rotate-45 animate-float"></div>
        <div class="absolute bottom-40 -left-20 w-48 h-48 bg-brutal-pink opacity-5 -rotate-12 animate-float" style="animation-delay: 1s;"></div>
      </div>

      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer Animado -->
    <footer class="bg-brutal-black dark:bg-brutal-gray-dark text-white py-12 border-t-4 border-brutal-black dark:border-white transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Redes sociales decorativas -->
        <div class="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/toninavhd"
            target="_blank"
            class="w-14 h-14 flex items-center justify-center bg-white text-black border-4 border-white hover:bg-brutal-pink hover:text-white hover:border-brutal-pink transition-all duration-200 group"
          >
            <svg class="w-7 h-7 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="mailto:toninavhd@gmail.com"
            class="w-14 h-14 flex items-center justify-center bg-white text-black border-4 border-white hover:bg-brutal-blue hover:text-white hover:border-brutal-blue transition-all duration-200 group"
          >
            <svg class="w-7 h-7 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          <a
            href="https://uloe999.tumblr.com/"
            target="_blank"
            class="w-14 h-14 flex items-center justify-center bg-white text-black border-4 border-white hover:bg-brutal-cyan hover:text-white hover:border-brutal-cyan transition-all duration-200 group"
          >
            <img 
              src="https://logos-world.net/wp-content/uploads/2020/09/Tumblr-Emblem.png" 
              alt="Tumblr"
              class="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
              @error="$event.target.style.display = 'none'"
            />
          </a>
        </div>

        <!-- Texto del footer -->
        <div class="text-center">
          <p class="font-display text-3xl font-bold mb-2 tracking-tighter hover:text-brutal-pink transition-colors cursor-default">
            PASIÓN - CREATIVIDAD - VISIÓN
          </p>
          <p class="font-mono text-sm opacity-60 mb-4">
            © {{ currentYear }} ANTONIO NAVARRO • DESARROLLADOR FRONTEND
          </p>
          
          <!-- Decoración con formas geométricas -->
          <div class="flex justify-center gap-2">
            <div class="w-4 h-4 bg-brutal-red animate-bounce" style="animation-delay: 0s;"></div>
            <div class="w-4 h-4 bg-brutal-yellow animate-bounce" style="animation-delay: 0.1s;"></div>
            <div class="w-4 h-4 bg-brutal-green animate-bounce" style="animation-delay: 0.2s;"></div>
            <div class="w-4 h-4 bg-brutal-blue animate-bounce" style="animation-delay: 0.3s;"></div>
            <div class="w-4 h-4 bg-brutal-pink animate-bounce" style="animation-delay: 0.4s;"></div>
          </div>
        </div>

        <!-- Barra decorativa inferior -->
        <div class="mt-8 flex">
          <div class="flex-1 h-3 bg-brutal-red"></div>
          <div class="flex-1 h-3 bg-brutal-yellow"></div>
          <div class="flex-1 h-3 bg-brutal-green"></div>
          <div class="flex-1 h-3 bg-brutal-blue"></div>
          <div class="flex-1 h-3 bg-brutal-pink"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Transiciones de página */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Animación de rotación lenta */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>
