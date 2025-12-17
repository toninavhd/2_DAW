
<template>
  <div id="app">
    <header class="app-header">
      <h1>Mi Nueva Aplicación Vue.js</h1>
      <p>Desarrollada con Vue 3 + Composition API + TypeScript</p>
    </header>
    
    <main class="app-main">
      <div class="grid">
        <div class="card">
          <h2>Contador</h2>
          <p>Ejemplo de estado reactivo con TypeScript</p>
          <button @click="incrementCounter" class="btn">
            Contador: {{ counter }}
          </button>
        </div>

        <TodoApp 
          title="Mi Lista de Tareas"
          :max-tasks="5"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TodoApp from './components/TodoApp.vue'

// TypeScript interface para tipado
interface Props {
  title?: string
}

// Props con valores por defecto
const props = withDefaults(defineProps<Props>(), {
  title: 'Aplicación Vue'
})

// Estado reactivo usando Composition API
const counter = ref<number>(0)

// Métodos tipados
const incrementCounter = (): void => {
  counter.value++
}
</script>

<style scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
}

.app-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #42b983;
}

.app-header h1 {
  color: #42b983;
  margin-bottom: 0.5rem;
}

.app-main {
  display: flex;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;
}

.btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  margin-top: 1rem;
}

.btn:hover {
  background: #35a372;
}
</style>
