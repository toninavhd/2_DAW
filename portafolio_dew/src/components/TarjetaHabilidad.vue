<script setup lang="ts">
// Interfaz para la estructura de datos de la habilidad
export interface Habilidad {
  id: number
  name: string
  logo: string
  description: string
  level: number
  levelLabel: string
}

interface Props {
  habilidad: Habilidad
}

const props = defineProps<Props>()

// Colores para el indicador de nivel
const levelColors = ['bg-brutal-green', 'bg-brutal-yellow', 'bg-brutal-orange', 'bg-brutal-red']

// Borde de color según nivel
const levelBorders = ['border-brutal-green', 'border-brutal-yellow', 'border-brutal-orange', 'border-brutal-red']

// Manejador para error de imagen
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (target) {
    target.style.display = 'none'
  }
}
</script>

<template>
  <article
    class="bg-brutal-white dark:bg-brutal-gray-dark border-4 border-brutal-black dark:border-white shadow-brutal p-6 hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300 group relative"
  >
    <div class="flex items-start gap-4">
      <!-- Logo de la tecnología -->
      <div
        class="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-brutal-black dark:bg-white p-3 border-4 border-brutal-black dark:border-white group-hover:transform group-hover:scale-110 transition-transform duration-300"
      >
        <img
          :src="habilidad.logo"
          :alt="habilidad.name"
          class="max-w-full max-h-full object-contain filter brightness-0 dark:filter-none invert dark:invert-0"
          @error="handleImageError"
        />
      </div>

      <!-- Información de la habilidad -->
      <div class="flex-1 min-w-0">
        <h3 class="text-xl font-bold text-brutal-black dark:text-white mb-1 font-display uppercase tracking-wide">
          {{ habilidad.name }}
        </h3>

        <p class="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-snug">
          {{ habilidad.description }}
        </p>

        <!-- Indicador de nivel -->
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-xs font-bold text-brutal-black dark:text-white uppercase">Nivel:</span>
          <div class="flex gap-1">
            <div
              v-for="i in 4"
              :key="i"
              class="w-6 h-4 border-2 border-brutal-black dark:border-white"
              :class="[i <= habilidad.level ? levelColors[habilidad.level - 1] : 'bg-gray-300 dark:bg-gray-600']"
            ></div>
          </div>
          <span
            class="text-xs font-bold text-black dark:text-white px-2 py-0.5 border-2 border-brutal-black dark:border-white"
            :class="levelBorders[habilidad.level - 1]"
          >
            {{ habilidad.levelLabel }}
          </span>
        </div>
      </div>
    </div>

    <!-- Decoración de esquina -->
    <div class="absolute top-0 right-0 w-0 h-0 border-l-8 border-t-8 border-l-transparent border-t-transparent" :class="levelBorders[habilidad.level - 1]"></div>
  </article>
</template>

<style scoped>
img {
  filter: grayscale(100%) contrast(1.2);
  transition: filter 0.3s ease;
}

article:hover img {
  filter: grayscale(0%) contrast(1);
}
</style>
