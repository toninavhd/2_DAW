<script setup lang="ts">
import cvData from '@/data/cv.json'
import { ref } from 'vue'

// Datos para estadísticas animadas
const stats = [
  { value: '2+', label: 'AÑOS', color: 'bg-brutal-red' },
  { value: '20+', label: 'PROYECTOS', color: 'bg-brutal-yellow' },
  { value: '100%', label: 'DEDICACIÓN', color: 'bg-brutal-green' },
]

// Tags de personalidad
const tags = [
  { label: 'CREATIVO', color: 'bg-brutal-orange hover:bg-brutal-yellow' },
  { label: 'INNOVADOR', color: 'bg-brutal-pink hover:bg-brutal-purple' },
  { label: 'APASIONADO', color: 'bg-brutal-blue hover:bg-brutal-cyan' },
  { label: 'DETALLISTA', color: 'bg-brutal-green hover:bg-brutal-yellow' },
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12 relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-20 -left-20 w-80 h-80 bg-brutal-yellow opacity-5 rotate-45 animate-float"></div>
      <div class="absolute bottom-20 -right-20 w-64 h-64 bg-brutal-pink opacity-5 -rotate-12 animate-float" style="animation-delay: 1s;"></div>
    </div>

    <!-- Título principal -->
    <div class="mb-12 relative">
      <h1 class="text-6xl md:text-8xl font-display font-bold text-brutal-black dark:text-white tracking-tighter relative z-10">
        SOBRE <span class="text-brutal-red">MÍ</span>
      </h1>
      <!-- Sombra decorativa -->
      <div class="absolute -bottom-2 left-0 text-6xl md:text-8xl font-display font-bold text-brutal-yellow opacity-30 -z-10 transform translate-x-4 translate-y-4">
        SOBRE MÍ
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <!-- Foto perfil con efectos -->
      <div class="relative">
        <!-- Marco decorativo -->
        <div class="absolute -top-4 -left-4 w-full h-full border-4 border-brutal-black dark:border-white -z-10"></div>
        
        <div class="bg-brutal-gray-light border-4 border-brutal-black dark:border-white p-4 shadow-brutal-lg">
          <div class="relative overflow-hidden group">
            <img
              :src="cvData.about.photo"
              :alt="cvData.about.name"
              class="w-full aspect-square object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <!-- Efecto overlay -->
            <div class="absolute inset-0 bg-gradient-to-tr from-brutal-pink/20 to-brutal-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- Elementos decorativos flotantes -->
        <div class="absolute -top-6 -right-6 w-20 h-20 bg-brutal-green border-4 border-brutal-black animate-float"></div>
        <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-brutal-pink border-4 border-brutal-black animate-float" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-1/2 -right-8 w-12 h-12 bg-brutal-yellow border-4 border-brutal-black rotate-45 animate-pulse"></div>

        <!-- Estadísticas -->
        <div class="mt-8 grid grid-cols-3 gap-4">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center p-4 border-4 border-brutal-black dark:border-white"
            :class="[stat.color, 'hover:transform hover:-translate-y-1 hover:shadow-brutal transition-all duration-200']"
          >
            <span class="block text-3xl font-display font-bold">{{ stat.value }}</span>
            <span class="text-xs font-bold uppercase">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Información -->
      <div class="space-y-6">
        <!-- Nombre y título -->
        <div class="bg-brutal-black dark:bg-white border-4 border-brutal-black dark:border-white p-8 shadow-brutal-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <h2 class="text-3xl md:text-4xl font-bold text-white dark:text-black mb-2 font-display">
            {{ cvData.about.name }}
          </h2>
          <p class="text-lg font-bold text-brutal-yellow uppercase tracking-widest mb-4">
            {{ cvData.about.title }}
          </p>
          <div class="flex gap-2">
            <div class="w-8 h-4 bg-brutal-red"></div>
            <div class="w-8 h-4 bg-brutal-blue"></div>
            <div class="w-8 h-4 bg-brutal-green"></div>
          </div>
        </div>

        <!-- Descripción -->
        <div class="bg-brutal-white dark:bg-brutal-gray-dark border-4 border-brutal-black dark:border-white p-6 shadow-brutal hover:shadow-brutal-lg transition-shadow duration-200">
          <p class="text-lg leading-relaxed font-medium text-brutal-black dark:text-white">
            {{ cvData.about.description }}
          </p>
        </div>

        <!-- Tags decorativos -->
        <div class="flex flex-wrap gap-3">
          <span
            v-for="tag in tags"
            :key="tag.label"
            class="px-5 py-3 font-bold text-sm uppercase tracking-wider border-4 border-brutal-black dark:border-white transition-all duration-200 cursor-default"
            :class="[tag.color, 'hover:transform hover:-translate-y-1 hover:shadow-brutal']"
          >
            {{ tag.label }}
          </span>
        </div>

        <!-- Franja decorativa -->
        <div class="flex gap-1">
          <div v-for="i in 20" :key="i" class="flex-1 h-2 border-2 border-brutal-black dark:border-white" :class="['bg-brutal-red', 'bg-brutal-yellow', 'bg-brutal-green', 'bg-brutal-blue', 'bg-brutal-pink'][i % 5]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  transition: filter 0.5s ease;
}

img:hover {
  filter: grayscale(0%) contrast(1);
}
</style>

