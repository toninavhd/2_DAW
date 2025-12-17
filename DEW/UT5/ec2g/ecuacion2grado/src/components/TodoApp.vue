<template>
  <div class="todo-app">
    <h2>{{ title }}</h2>
    
    <!-- Formulario para agregar tareas -->
    <form @submit.prevent="addTask" class="task-form">
      <input 
        v-model="newTask" 
        type="text" 
        placeholder="Nueva tarea..."
        class="task-input"
      />
      <button type="submit" class="add-btn">Agregar</button>
    </form>

    <!-- Lista de tareas -->
    <div class="task-list">
      <div 
        v-for="(task, index) in tasks" 
        :key="task.id"
        class="task-item"
        :class="{ completed: task.completed }"
      >
        <input 
          type="checkbox" 
          v-model="task.completed"
          @change="toggleTask(index)"
        />
        <span class="task-text">{{ task.text }}</span>
        <button @click="removeTask(index)" class="remove-btn">✕</button>
      </div>
    </div>

    <!-- Estadísticas -->
    <div class="stats">
      <p>Tareas completadas: {{ completedCount }} de {{ totalCount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Interfaz TypeScript para la tarea
interface Task {
  id: number
  text: string
  completed: boolean
}

// Props con tipado
interface Props {
  title?: string
  maxTasks?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Lista de Tareas',
  maxTasks: 10
})

// Estado reactivo
const newTask = ref<string>('')
const tasks = ref<Task[]>([])
let nextId = 1

// Computed properties
const totalCount = computed(() => tasks.value.length)
const completedCount = computed(() => 
  tasks.value.filter(task => task.completed).length
)

// Métodos tipados
const addTask = (): void => {
  if (newTask.value.trim() && tasks.value.length < props.maxTasks) {
    tasks.value.push({
      id: nextId++,
      text: newTask.value.trim(),
      completed: false
    })
    newTask.value = ''
  }
}

const removeTask = (index: number): void => {
  tasks.value.splice(index, 1)
}

const toggleTask = (index: number): void => {
  // Lógica adicional para toggle si es necesaria
  console.log(`Tarea ${index} toggled:`, tasks.value[index].completed)
}
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.todo-app h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

.task-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.task-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.add-btn {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.add-btn:hover {
  background: #0056b3;
}

.task-list {
  margin-bottom: 1rem;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  transition: all 0.2s;
}

.task-item:hover {
  background: rgba(0, 123, 255, 0.1);
}

.task-item.completed .task-text {
  text-decoration: line-through;
  color: #666;
}

.task-text {
  flex: 1;
  font-size: 1rem;
}

.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 0.8rem;
}

.remove-btn:hover {
  background: #c82333;
}

.stats {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}
</style>
