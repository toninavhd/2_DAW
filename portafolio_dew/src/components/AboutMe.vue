<script setup lang="ts">
import cvData from '@/data/cv.json'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Título principal -->
    <h1 class="text-6xl md:text-8xl font-bold text-brutal-white mb-8 tracking-tighter" style="-webkit-text-stroke: 2px white;">
      SOBRE <span class="text-brutal-red" style="-webkit-text-stroke: 0;">MÍ</span>
    </h1>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Foto perfil -->
      <div class="relative">
        <div class="border-3 border-brutal-black p-2 bg-brutal-yellow shadow-brutal-lg">
          <div class="relative overflow-hidden">
            <img
              :src="cvData.about.photo"
              :alt="cvData.about.name"
              class="w-full md:w-2/3 aspect-square object-cover grayscale contrast-125 mx-auto"
            />
            <!-- Efecto overlay -->
            <div
              class="absolute inset-0 bg-brutal-blue opacity-0 hover:opacity-10 transition-opacity duration-300"
            ></div>
          </div>
        </div>
        <!-- Elementos decorativos -->
        <div
          class="absolute -top-4 -right-4 w-16 h-16 bg-brutal-green border-3 border-brutal-black"
        ></div>
        <div
          class="absolute -bottom-4 -left-4 w-12 h-12 bg-brutal-pink border-3 border-brutal-black"
        ></div>
      </div>

      <!-- Información -->
      <div class="space-y-6">
        <!-- Nombre y título -->
        <div class="bg-brutal-white border-3 border-brutal-black p-8 shadow-brutal">
          <h2 class="text-4xl font-bold text-brutal-black mb-2">
            {{ cvData.about.name }}
          </h2>
          <p class="text-xl font-bold text-brutal-blue uppercase tracking-widest mb-4">
            {{ cvData.about.title }}
          </p>
          <div class="w-16 h-3 bg-brutal-red"></div>
        </div>

        <!-- Descripción -->
        <div
          class="bg-brutal-black text-brutal-white border-3 border-brutal-black p-6 shadow-brutal"
        >
          <p class="text-lg leading-relaxed font-medium">
            {{ cvData.about.description }}
          </p>
        </div>

        <!-- Tags decorativos -->
        <div class="flex flex-wrap gap-3">
          <span
            class="px-4 py-2 bg-brutal-orange text-brutal-black font-bold border-2 border-brutal-black"
          >
            CREATIVO
          </span>
          <span
            class="px-4 py-2 bg-brutal-purple text-white font-bold border-2 border-brutal-black"
          >
            INNOVADOR
          </span>
          <span
            class="px-4 py-2 bg-brutal-green text-brutal-black font-bold border-2 border-brutal-black"
          >
            PASSION
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  transition: filter 0.3s ease;
}

img:hover {
  filter: grayscale(0%) contrast(1);
}
</style>

