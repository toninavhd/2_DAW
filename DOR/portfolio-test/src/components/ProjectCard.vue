<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div 
    class="project-card p-6 relative overflow-hidden group cursor-pointer rounded-xl
           transition-colors duration-0"
    :class="$attrs.class"
  >
    <!-- Efecto de carga / overlay -->
    <div class="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 
                transition-transform duration-0 z-10 rounded-xl"></div>
    
    <!-- Contenido -->
    <div class="relative z-20">
      <!-- Número de proyecto -->
      <span class="inline-block text-xs font-bold mb-3 px-2 py-1 border-2 border-current rounded">
        PROJ
      </span>
      
      <!-- Título -->
      <h3 
        class="text-xl font-bold uppercase tracking-wider mb-3 group-hover:text-black
               transition-colors duration-0"
      >
        {{ title }}
      </h3>
      
      <!-- Descripción -->
      <p 
        class="text-sm leading-relaxed group-hover:text-black transition-colors duration-0"
      >
        {{ description }}
      </p>
      
      <!-- Flecha decorativa -->
      <div class="mt-4 text-2xl group-hover:text-black transition-colors duration-0">
        →
      </div>
    </div>
    
    <!-- Efecto de borde activo -->
    <div class="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-current 
                opacity-0 group-hover:opacity-100 transition-opacity duration-0 rounded-tr-xl"></div>
    <div class="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-current 
                opacity-0 group-hover:opacity-100 transition-opacity duration-0 rounded-bl-xl"></div>
  </div>
</template>

<style scoped>
.project-card {
  min-height: 180px;
}

.project-card:hover {
  outline: 4px solid currentColor;
  outline-offset: -4px;
}
</style>

