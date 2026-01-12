<template>
  <nav class="sticky top-0 z-50 glass-card border-b border-white/6">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a 
          href="#top" 
          class="flex items-center gap-3 text-white font-semibold text-lg tracking-wider hover:opacity-70 transition-opacity duration-300"
        >
          <div class="glass-item w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
            A
          </div>
          <span class="hidden sm:block robust-title">ANTONIO</span>
        </a>
        
        <!-- Navigation Links -->
        <div class="flex items-center gap-8">
          <a 
            href="#sobre-mi" 
            class="text-sm font-medium tracking-wide text-white/60 hover:text-white transition-all duration-300 robust-title"
          >
            SOBRE MÍ
          </a>
          
          <a 
            href="#proyectos" 
            class="text-sm font-medium tracking-wide text-white/60 hover:text-white transition-all duration-300 robust-title"
          >
            PROYECTOS
          </a>
          
          <a 
            href="#contacto" 
            class="glass-item px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Navbar con estilo PS3 Home
</script>

<style scoped>
.robust-title {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: opacity 0.3s ease;
}

.robust-title:hover {
  opacity: 0.7;
}
</style>
