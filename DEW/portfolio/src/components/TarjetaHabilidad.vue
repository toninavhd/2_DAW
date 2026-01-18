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
</script>

<template>
  <article
    class="bg-brutal-white border-3 border-brutal-black shadow-brutal p-6 hover:shadow-brutal-lg transition-shadow duration-200"
  >
    <div class="flex items-start gap-4">
      <!-- Logo de la tecnología -->
      <div
        class="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-brutal-black p-2 border-3 border-brutal-black"
      >
        <img
          :src="habilidad.logo"
          :alt="habilidad.name"
          class="max-w-full max-h-full object-contain"
          @error="$event.target.style.display = 'none'"
        />
      </div>

      <!-- Información de la habilidad -->
      <div class="flex-1 min-w-0">
        <h3 class="text-xl font-bold text-brutal-black mb-1">
          {{ habilidad.name }}
        </h3>

        <p class="text-sm text-gray-700 mb-3 leading-snug">
          {{ habilidad.description }}
        </p>

        <!-- Indicador de nivel -->
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-brutal-black uppercase">Nivel:</span>
          <div class="flex gap-1">
            <div
              v-for="i in 4"
              :key="i"
              class="w-6 h-3 border-2 border-brutal-black"
              :class="[i <= habilidad.level ? levelColors[habilidad.level - 1] : 'bg-gray-200']"
            ></div>
          </div>
          <span class="text-xs font-bold text-brutal-black bg-brutal-yellow px-2 py-0.5">
            {{ habilidad.levelLabel }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
img {
  filter: grayscale(100%) contrast(1.2);
}
</style>
