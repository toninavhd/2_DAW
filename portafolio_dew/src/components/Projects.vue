<script setup lang="ts">
import cvData from '@/data/cv.json'
import TarjetaProyecto, { type Proyecto } from './TarjetaProyecto.vue'

// Colores vibrantes para decoración
const decorColors = ['bg-brutal-red', 'bg-brutal-yellow', 'bg-brutal-green', 'bg-brutal-blue', 'bg-brutal-pink', 'bg-brutal-orange']
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12 relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-60 -left-20 w-80 h-80 bg-brutal-red opacity-3 rotate-12 animate-float"></div>
      <div class="absolute bottom-60 -right-20 w-96 h-96 bg-brutal-yellow opacity-3 -rotate-6 animate-float" style="animation-delay: 2s;"></div>
    </div>

    <!-- Título principal -->
    <div class="mb-12 relative">
      <h1 class="text-6xl md:text-8xl font-display font-bold text-brutal-black dark:text-white tracking-tighter relative z-10">
        PROYEC<span class="text-brutal-red">TOS</span>
      </h1>
      <!-- Sombra decorativa -->
      <div class="absolute -bottom-2 left-0 text-6xl md:text-8xl font-display font-bold text-brutal-blue opacity-30 -z-10 transform translate-x-4 translate-y-4">
        PROYECTOS
      </div>
    </div>

    <!-- Contador de proyectos con estilo -->
    <div class="mb-8 flex flex-wrap gap-4">
      <div class="bg-brutal-black dark:bg-white border-4 border-brutal-black dark:border-white px-6 py-4 shadow-brutal-lg">
        <span class="text-4xl font-display font-bold text-brutal-yellow dark:text-brutal-blue">{{ cvData.projects.cards.length }}</span>
        <span class="font-bold ml-2 text-white dark:text-black uppercase tracking-wider">Proyectos</span>
      </div>
      <div class="flex items-center">
        <div v-for="i in 6" :key="i" class="w-4 h-4 border-2 border-brutal-black dark:border-white ml-1" :class="decorColors[i % 6]"></div>
      </div>
    </div>

    <!-- Grid de tarjetas de proyectos -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(proyecto, index) in cvData.projects.cards"
        :key="proyecto.id"
        class="transform transition-all duration-300 hover:-translate-y-2"
        :style="{ animationDelay: `${index * 0.15}s` }"
      >
        <TarjetaProyecto :proyecto="proyecto as Proyecto" />
      </div>
    </div>

    <!-- Estadísticas decorativas -->
    <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="(stat, index) in [
          { value: '100%', label: 'DEDICACIÓN', color: 'bg-brutal-yellow' },
          { value: '∞', label: 'PASIÓN', color: 'bg-brutal-red' },
          { value: '2+', label: 'AÑOS', color: 'bg-brutal-green' },
          { value: 'JS', label: 'MASTER', color: 'bg-brutal-blue' },
        ]"
        :key="stat.label"
        class="text-center p-6 border-4 border-brutal-black dark:border-white transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-brutal"
        :class="stat.color"
      >
        <span class="text-4xl md:text-5xl font-display font-bold block">{{ stat.value }}</span>
        <span class="text-xs font-bold uppercase tracking-wider">{{ stat.label }}</span>
      </div>
    </div>

    <!-- Barra decorativa final -->
    <div class="mt-12 flex gap-1">
      <div v-for="i in 24" :key="i" class="flex-1 h-3 border-2 border-brutal-black dark:border-white" :class="decorColors[i % 6]"></div>
    </div>
  </div>
</template>
