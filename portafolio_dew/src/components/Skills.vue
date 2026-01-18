<script setup lang="ts">
import cvData from '@/data/cv.json'
import TarjetaHabilidad, { type Habilidad } from './TarjetaHabilidad.vue'

// Colores de fondo según el índice para crear un patrón
const bgColors = [
  'bg-brutal-yellow',
  'bg-brutal-blue',
  'bg-brutal-red',
  'bg-brutal-green',
  'bg-brutal-orange',
  'bg-brutal-pink',
  'bg-brutal-cyan',
  'bg-brutal-magenta',
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12 relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-40 -right-20 w-96 h-96 bg-brutal-blue opacity-3 rotate-45 animate-float"></div>
      <div class="absolute bottom-40 -left-20 w-72 h-72 bg-brutal-pink opacity-3 -rotate-12 animate-float" style="animation-delay: 1.5s;"></div>
    </div>

    <!-- Título principal -->
    <div class="mb-12 relative">
      <h1 class="text-6xl md:text-8xl font-display font-bold text-brutal-black dark:text-white tracking-tighter relative z-10">
        HABIL<span class="text-brutal-blue">IDADES</span>
      </h1>
      <!-- Sombra decorativa -->
      <div class="absolute -bottom-2 left-0 text-6xl md:text-8xl font-display font-bold text-brutal-pink opacity-30 -z-10 transform translate-x-4 translate-y-4">
        HABILIDADES
      </div>
    </div>

    <!-- Barra decorativa -->
    <div class="flex gap-1 mb-12">
      <div v-for="i in 10" :key="i" class="flex-1 h-4 border-2 border-brutal-black dark:border-white" :class="bgColors[i % 8]"></div>
    </div>

    <!-- Grid de tarjetas de habilidades -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(habilidad, index) in cvData.skills.cards"
        :key="habilidad.id"
        class="transform transition-all duration-300 hover:-translate-y-2"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <TarjetaHabilidad :habilidad="habilidad as Habilidad" />
      </div>
    </div>

    <!-- Leyenda de niveles -->
    <div class="mt-12 bg-brutal-black dark:bg-white border-4 border-brutal-black dark:border-white p-8 shadow-brutal-lg">
      <h3 class="text-2xl font-display font-bold text-white dark:text-black mb-6 uppercase tracking-wider">
        Leyenda de Niveles
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="flex items-center gap-3">
          <div class="w-8 h-4 border-2 border-white bg-brutal-green"></div>
          <span class="font-bold text-white dark:text-black text-sm uppercase">Experto</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-4 border-2 border-white bg-brutal-yellow"></div>
          <span class="font-bold text-white dark:text-black text-sm uppercase">Avanzado</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-4 border-2 border-white bg-brutal-orange"></div>
          <span class="font-bold text-white dark:text-black text-sm uppercase">Intermedio</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-4 border-2 border-white bg-gray-400"></div>
          <span class="font-bold text-white dark:text-black text-sm uppercase">Básico</span>
        </div>
      </div>
    </div>

    <!-- Decoración final -->
    <div class="mt-12 flex justify-center">
      <div class="flex gap-2">
        <div v-for="i in 8" :key="i" class="w-8 h-8 border-4 border-brutal-black dark:border-white transform hover:rotate-180 transition-transform duration-300" :class="bgColors[i % 8]"></div>
      </div>
    </div>
  </div>
</template>
