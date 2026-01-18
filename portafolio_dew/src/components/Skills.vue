<script setup lang="ts">
import cvData from '@/data/cv.json'
import TarjetaHabilidad, { type Habilidad } from './TarjetaHabilidad.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Título principal -->
    <h1 class="text-6xl md:text-8xl font-bold text-brutal-black mb-12 tracking-tighter">
      HABIL<span class="text-brutal-blue">IDADES</span>
    </h1>

    <!-- Grid de tarjetas de habilidades -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <TarjetaHabilidad
        v-for="habilidad in cvData.skills.cards"
        :key="habilidad.id"
        :habilidad="habilidad as Habilidad"
      />
    </div>

    <!-- Leyenda de niveles -->
    <div class="mt-12 bg-brutal-white border-3 border-brutal-black p-6 shadow-brutal">
      <h3 class="text-xl font-bold text-brutal-black mb-4">LEYENDA DE NIVELES</h3>
      <div class="flex flex-wrap items-center gap-6">
        <div class="flex items-center gap-2">
          <div class="w-6 h-3 border-2 border-brutal-black bg-brutal-green"></div>
          <span class="font-bold text-sm">Experto</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-3 border-2 border-brutal-black bg-brutal-yellow"></div>
          <span class="font-bold text-sm">Avanzado</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-3 border-2 border-brutal-black bg-brutal-orange"></div>
          <span class="font-bold text-sm">Intermedio</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-3 border-2 border-brutal-black bg-gray-200"></div>
          <span class="font-bold text-sm">Básico</span>
        </div>
      </div>
    </div>
  </div>
</template>
