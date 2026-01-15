<script setup lang="ts">
import { ref, computed } from 'vue';
import Navbar from './components/Navbar.vue';

const projects = [
  { 
    title: 'PROYECTO_01', 
    description: 'Frontend Vue · Tailwind · TypeScript',
    color: 'bg-[#ffde00] text-black'
  },
  { 
    title: 'PROYECTO_02', 
    description: 'Java · Processing · MongoDB',
    color: 'bg-[#ff2a2a] text-white'
  },
  { 
    title: 'PROYECTO_03', 
    description: 'React Application · Redux · API REST',
    color: 'bg-[#0066ff] text-white'
  },
  { 
    title: 'PROYECTO_04', 
    description: 'E-commerce Platform · Stripe · Firebase',
    color: 'bg-[#00ff66] text-black'
  },
  { 
    title: 'PROYECTO_05', 
    description: 'Dashboard Admin · Chart.js · Express',
    color: 'bg-[#bf00ff] text-white'
  },
  { 
    title: 'PROYECTO_06', 
    description: 'Mobile App · React Native · GraphQL',
    color: 'bg-[#ffffff] text-black'
  }
];

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % projects.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + projects.length) % projects.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

const currentProject = computed(() => projects[currentSlide.value]);
</script>

<template>
  <div id="top" class="min-h-screen bg-[#0a0a0a] text-white font-helvetica">
    <!-- Navbar -->
    <Navbar />

    <!-- Header -->
    <header class="min-h-[80vh] flex items-center bg-[#0a0a0a]">
      <div class="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Texto principal -->
          <div class="animate-fade-in">
            <div class="inline-block bg-[#ffde00] text-black px-4 py-2 text-sm font-bold tracking-wider mb-6">
              FRONTEND DEVELOPER
            </div>
            
            <h1 class="text-6xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
              ANTONIO<br/>
              <span class="text-[#ffde00]">NAVARRO</span>
            </h1>
            
            <p class="text-xl text-gray-400 mb-8 max-w-md uppercase tracking-wide">
              VUE · TAILWIND · TYPESCRIPT · REACT
            </p>
            
            <a 
              href="#proyectos" 
              class="inline-block bg-[#ff2a2a] text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-[#0066ff] transition-colors duration-300"
            >
              VER PROYECTOS
            </a>
          </div>
          
          <!-- Gran bloque de color -->
          <div class="hidden lg:block animate-slide-in">
            <div class="relative">
              <div class="w-full h-96 bg-[#ffde00]"></div>
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0066ff]"></div>
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-[#ff2a2a]"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Sección Sobre mí -->
    <section id="sobre-mi" class="py-24 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 class="text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-12 animate-fade-in">
          SOBRE <span class="text-[#ffde00]">MÍ</span>
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="animate-fade-in" style="animation-delay: 0.1s;">
            <p class="text-2xl leading-relaxed uppercase tracking-wide mb-6">
              DESARROLLADOR FRONTEND ESPECIALIZADO EN CREAR EXPERIENCIAS WEB MODERNAS Y ACCESIBLES.
            </p>
            <p class="text-lg text-gray-400 uppercase tracking-wide mb-6">
              ME APASIONA VUE.JS, TAILWIND CSS Y TYPESCRIPT. CREAR INTERFACES LIMPIAS, FUNCIONALES Y ESTÉTICAS.
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-4 animate-fade-in" style="animation-delay: 0.2s;">
            <div class="bg-[#ffde00] text-black p-6">
              <span class="text-4xl font-bold block mb-2">1+</span>
              <span class="text-sm uppercase tracking-wider">AÑOS EXP</span>
            </div>
            <div class="bg-[#ff2a2a] text-white p-6">
              <span class="text-4xl font-bold block mb-2">10+</span>
              <span class="text-sm uppercase tracking-wider">PROYECTOS</span>
            </div>
            <div class="bg-[#0066ff] text-white p-6">
              <span class="text-4xl font-bold block mb-2">100%</span>
              <span class="text-sm uppercase tracking-wider">DEDICACIÓN</span>
            </div>
            <div class="bg-[#00ff66] text-black p-6">
              <span class="text-4xl font-bold block mb-2">∞</span>
              <span class="text-sm uppercase tracking-wider">PASIÓN</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Proyectos (Carrusel) -->
    <section id="proyectos" class="py-24 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-5xl lg:text-7xl font-bold uppercase tracking-tighter animate-fade-in">
            PROYEC<span class="text-[#ff2a2a]">TOS</span>
          </h2>
          
          <!-- Controles del carrusel -->
          <div class="flex gap-4 animate-slide-in">
            <button 
              @click="prevSlide" 
              class="w-14 h-14 bg-white text-black flex items-center justify-center text-2xl font-bold hover:bg-[#ffde00] transition-colors duration-300"
            >
              ←
            </button>
            <button 
              @click="nextSlide" 
              class="w-14 h-14 bg-white text-black flex items-center justify-center text-2xl font-bold hover:bg-[#ffde00] transition-colors duration-300"
            >
              →
            </button>
          </div>
        </div>
        
        <!-- Carrusel grande -->
        <div class="relative animate-fade-in" style="animation-delay: 0.2s;">
          <!-- Tarjeta principal -->
          <div 
            :class="['w-full h-[500px] flex items-center justify-center transition-colors duration-500', currentProject.color]"
          >
            <div class="text-center px-8">
              <span class="inline-block bg-black/10 px-3 py-1 text-sm font-bold uppercase tracking-wider mb-4">
                PROYECTO {{ String(currentSlide + 1).padStart(2, '0') }}
              </span>
              <h3 class="text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-4">
                {{ currentProject.title }}
              </h3>
              <p class="text-xl lg:text-2xl uppercase tracking-wide opacity-80">
                {{ currentProject.description }}
              </p>
              <button class="mt-8 bg-black/20 px-8 py-3 text-lg font-bold uppercase tracking-wider hover:bg-black/40 transition-colors duration-300">
                VER DETALLES
              </button>
            </div>
          </div>
          
          <!-- Indicadores -->
          <div class="flex justify-center gap-3 mt-6">
            <button 
              v-for="(project, index) in projects" 
              :key="index"
              @click="goToSlide(index)"
              :class="[
                'w-4 h-4 transition-all duration-300',
                index === currentSlide ? 'bg-[#ffde00] scale-125' : 'bg-gray-600 hover:bg-gray-500'
              ]"
            ></button>
          </div>
        </div>
        
        <!-- Mini navegación del carrusel -->
        <div class="flex justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <span class="text-gray-500 uppercase tracking-wider">
            {{ currentSlide + 1 }} / {{ projects.length }}
          </span>
          <div class="flex gap-2">
            <span 
              v-for="(_, index) in projects" 
              :key="index"
              :class="[
                'w-2 h-2 transition-all duration-300',
                index === currentSlide ? 'bg-[#ffde00]' : 'bg-gray-700'
              ]"
            ></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Contacto -->
    <section id="contacto" class="py-24 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 class="text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-12 animate-fade-in">
          CONTAC<span class="text-[#0066ff]">TO</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" style="animation-delay: 0.2s;">
          <a 
            href="mailto:antonio@email.com" 
            class="bg-[#ffde00] text-black p-8 hover:bg-white transition-colors duration-300 group"
          >
            <span class="text-sm font-bold uppercase tracking-wider text-black/60 mb-2 block">EMAIL</span>
            <span class="text-xl font-bold uppercase tracking-wide group-hover:text-black">TONINAVHD@EMAIL.COM</span>
          </a>
          
          <a 
            href="https://github.com/toninavhd" 
            target="_blank"
            class="bg-[#ff2a2a] text-white p-8 hover:bg-white hover:text-[#ff2a2a] transition-colors duration-300 group"
          >
            <span class="text-sm font-bold uppercase tracking-wider text-white/60 mb-2 block">GITHUB</span>
            <span class="text-xl font-bold uppercase tracking-wide group-hover:text-[#ff2a2a]">GITHUB.COM/TONINAVHD</span>
          </a>
          
          <a 
            href="https://soundcloud.com/uloee" 
            target="_blank"
            class="bg-[#0066ff] text-white p-8 hover:bg-white hover:text-[#0066ff] transition-colors duration-300 group"
          >
            <span class="text-sm font-bold uppercase tracking-wider text-white/60 mb-2 block">SOUNDCLOUD</span>
            <span class="text-xl font-bold uppercase tracking-wide group-hover:text-[#0066ff]">@ULOEE</span>
          </a>
          
          <a 
            href="https://uloe999.tumblr.com/" 
            target="_blank"
            class="bg-[#00ff66] text-black p-8 hover:bg-white transition-colors duration-300 group"
          >
            <span class="text-sm font-bold uppercase tracking-wider text-black/60 mb-2 block">TUMBLR</span>
            <span class="text-xl font-bold uppercase tracking-wide group-hover:text-black">@ULOE999</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-[#0a0a0a] border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-[#ffde00] flex items-center justify-center text-black font-bold text-lg">
              A
            </div>
            <span class="text-lg font-bold uppercase tracking-wider">ANTONIO NAVARRO</span>
          </div>
          
          <p class="text-gray-500 uppercase tracking-wider text-sm">
            © 2026 — TODOS LOS DERECHOS RESERVADOS
          </p>
          
          <a 
            href="#top" 
            class="bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#ffde00] transition-colors duration-300"
          >
            ↑ TOP
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.font-helvetica {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>

