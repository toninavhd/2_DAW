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
  'bg-brutal-yellow text-black border-brutal-black',
  'bg-brutal-blue text-white border-brutal-black',
  'bg-brutal-red text-white border-brutal-black',
  'bg-brutal-green text-black border-brutal-black',
  'bg-brutal-orange text-white border-brutal-black',
  'bg-brutal-pink text-white border-brutal-black',
  'bg-brutal-cyan text-black border-brutal-black',
  'bg-brutal-magenta text-white border-brutal-black',
]

const getTechColor = (index: number): string => {
  return techColors[index % techColors.length]
}
</script>

<template>
  <article
    class="bg-brutal-white dark:bg-brutal-gray-dark border-4 border-brutal-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
  >
    <!-- Decoración de esquina -->
    <div class="absolute top-0 right-0 w-16 h-16 bg-brutal-yellow opacity-20 transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
    
    <div class="p-6 relative z-10">
      <!-- Título del proyecto -->
      <h3 class="text-2xl font-display font-bold text-brutal-black dark:text-white mb-3 uppercase tracking-wide group-hover:text-brutal-red dark:group-hover:text-brutal-yellow transition-colors">
        {{ proyecto.title }}
      </h3>

      <!-- Descripción -->
      <p class="text-brutal-black dark:text-gray-300 mb-4 leading-relaxed font-medium">
        {{ proyecto.description }}
      </p>

      <!-- Tecnologías -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="(tech, index) in proyecto.technologies"
          :key="tech"
          :class="['px-3 py-1 text-sm font-bold border-2 border-brutal-black dark:border-white', getTechColor(index)]"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Enlace al proyecto -->
      <a
        :href="proyecto.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block w-full text-center py-4 px-6 text-lg font-bold uppercase tracking-wider transition-all duration-200 border-4 border-brutal-black dark:border-white"
        :class="[
          'bg-brutal-black dark:bg-white text-brutal-white dark:text-brutal-black',
          'hover:bg-brutal-pink hover:text-white hover:border-brutal-pink',
          'active:transform active:translate-x-1 active:translate-y-1'
        ]"
      >
        {{ proyecto.linkText }} →
      </a>
    </div>

    <!-- Efecto de borde brillante al hover -->
    <div class="absolute inset-0 border-4 border-transparent group-hover:border-brutal-yellow transition-all duration-300 pointer-events-none"></div>
  </article>
</template>

<style scoped>
/* Efecto de brillo al hover */
article::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

article:hover::before {
  left: 100%;
}
</style>
