<script setup lang="ts">
import cvData from '@/data/cv.json'
import TarjetaProyecto, { type Proyecto } from './TarjetaProyecto.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Título principal -->
    <h1 class="text-6xl md:text-8xl font-bold text-brutal-black mb-12 tracking-tighter">
      PROYEC<span class="text-brutal-red">TOS</span>
    </h1>

    <!-- Contador de proyectos -->
    <div class="mb-8 flex gap-4">
      <div class="bg-brutal-yellow border-3 border-brutal-black px-6 py-3 shadow-brutal">
        <span class="text-2xl font-bold">{{ cvData.projects.cards.length }}</span>
        <span class="font-bold ml-2">PROYECTOS</span>
      </div>
    </div>

    <!-- Grid de tarjetas de proyectos -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <TarjetaProyecto
        v-for="proyecto in cvData.projects.cards"
        :key="proyecto.id"
        :proyecto="proyecto as Proyecto"
      />
    </div>

    <!-- estadisticas decorativas -->
    <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-brutal-blue text-white border-3 border-brutal-black p-4 text-center">
        <span class="text-3xl font-bold block">100%</span>
        <span class="text-sm font-bold">DEDICACIÓN</span>
      </div>
      <div class="bg-brutal-green text-brutal-black border-3 border-brutal-black p-4 text-center">
        <span class="text-3xl font-bold block">∞</span>
        <span class="text-sm font-bold">PASIÓN</span>
      </div>
      <div class="bg-brutal-orange text-white border-3 border-brutal-black p-4 text-center">
        <span class="text-3xl font-bold block">4+</span>
        <span class="text-sm font-bold">AÑOS</span>
      </div>
      <div class="bg-brutal-purple text-white border-3 border-brutal-black p-4 text-center">
        <span class="text-3xl font-bold block">JS</span>
        <span class="text-sm font-bold">MASTER</span>
      </div>
    </div>
  </div>
</template>
