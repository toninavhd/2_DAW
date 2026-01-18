<script setup lang="ts">
import { computed } from 'vue'

// Interfaz para la estructura de datos del proyecto
export interface Proyecto {
  id: number
  title: string
  description: string
  technologies: string[]
  link: string
  linkText: string
}

interface Props {
  proyecto: Proyecto
}

const props = defineProps<Props>()

// Colores vibrantes para las etiquetas de tecnologías
const techColors = [
  'bg-brutal-yellow text-brutal-black',
  'bg-brutal-blue text-white',
  'bg-brutal-red text-white',
  'bg-brutal-green text-brutal-black',
  'bg-brutal-orange text-white',
  'bg-brutal-purple text-white',
  'bg-brutal-pink text-white',
]

const getTechColor = (index: number): string => {
  return techColors[index % techColors.length]
}
</script>

<template>
  <article
    class="bg-brutal-white border-3 border-brutal-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-200"
  >
    <div class="p-6">
      <!-- Título del proyecto -->
      <h3 class="text-2xl font-bold text-brutal-black mb-3 uppercase tracking-wide">
        {{ proyecto.title }}
      </h3>

      <!-- Descripción -->
      <p class="text-brutal-black mb-4 leading-relaxed">
        {{ proyecto.description }}
      </p>

      <!-- Tecnologías -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="(tech, index) in proyecto.technologies"
          :key="tech"
          :class="['px-3 py-1 text-sm font-bold border-2 border-brutal-black', getTechColor(index)]"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Enlace al proyecto -->
      <a
        :href="proyecto.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block w-full text-center bg-brutal-black text-brutal-white font-bold py-3 px-4 border-3 border-brutal-black hover:bg-brutal-white hover:text-brutal-black transition-colors duration-200"
      >
        {{ proyecto.linkText }} →
      </a>
    </div>
  </article>
</template>

<style scoped></style>
