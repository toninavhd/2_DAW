<script setup lang="ts">
import { ref, computed } from 'vue'
import cvData from '@/data/cv.json'

// Datos del formulario
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Estado del formulario
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

// Validación simple
const isFormValid = computed(() => {
  return (
    formData.value.name.length > 0 &&
    formData.value.email.includes('@') &&
    formData.value.message.length > 10
  )
})

// Enviar formulario
const submitForm = async () => {
  if (!isFormValid.value) return

  isSubmitting.value = true
  submitStatus.value = 'idle'

  // Simular envío
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Formulario enviado:', formData.value)
    submitStatus.value = 'success'
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

// Colores para los enlaces
const linkColors = [
  'bg-brutal-red hover:bg-brutal-pink',
  'bg-white hover:bg-brutal-blue',
  'bg-brutal-blue hover:bg-brutal-cyan',
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12 relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-60 -left-20 w-80 h-80 bg-brutal-pink opacity-3 rotate-12 animate-float"></div>
      <div class="absolute bottom-60 -right-20 w-96 h-96 bg-brutal-magenta opacity-3 -rotate-6 animate-float" style="animation-delay: 2s;"></div>
    </div>

    <!-- Título principal -->
    <div class="mb-12 relative">
      <h1 class="text-6xl md:text-8xl font-display font-bold text-brutal-black dark:text-white tracking-tighter relative z-10">
        CONTAC<span class="text-brutal-pink">TO</span>
      </h1>
      <!-- Sombra decorativa -->
      <div class="absolute -bottom-2 left-0 text-6xl md:text-8xl font-display font-bold text-brutal-blue opacity-30 -z-10 transform translate-x-4 translate-y-4">
        CONTACTO
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Información de contacto -->
      <div class="space-y-6">
        <!-- Email -->
        <a
          :href="`mailto:${cvData.contact.email}`"
          class="block bg-brutal-black dark:bg-white border-4 border-brutal-black dark:border-white p-6 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-200 group"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-16 h-16 flex items-center justify-center border-4 border-brutal-black dark:border-white"
              :class="linkColors[0]"
            >
              <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <p class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">Email</p>
              <p class="text-xl font-bold text-white dark:text-black group-hover:text-brutal-pink transition-colors">{{ cvData.contact.email }}</p>
            </div>
          </div>
        </a>

        <!-- GitHub -->
        <a
          :href="cvData.contact.github"
          target="_blank"
          class="block bg-brutal-black dark:bg-white border-4 border-brutal-black dark:border-white p-6 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-200 group"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-16 h-16 flex items-center justify-center border-4 border-brutal-black dark:border-white"
              :class="linkColors[1]"
            >
              <svg class="w-8 h-8 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <p class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">GitHub</p>
              <p class="text-xl font-bold text-white dark:text-black group-hover:text-brutal-blue transition-colors">Ver perfil</p>
            </div>
          </div>
        </a>

        <!-- Tumblr -->
        <a
          href="https://uloe999.tumblr.com/"
          target="_blank"
          class="block bg-brutal-black dark:bg-white border-4 border-brutal-black dark:border-white p-6 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-200 group"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-16 h-16 flex items-center justify-center border-4 border-brutal-black dark:border-white overflow-hidden"
              :class="linkColors[2]"
            >
              <img 
                src="https://logos-world.net/wp-content/uploads/2020/09/Tumblr-Emblem.png" 
                alt="Tumblr"
                class="w-full h-full object-contain"
                @error="$event.target.style.display = 'none'"
              />
            </div>
            <div>
              <p class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">Tumblr</p>
              <p class="text-xl font-bold text-white dark:text-black group-hover:text-brutal-cyan transition-colors">Ver blog</p>
            </div>
          </div>
        </a>

        <!-- Información adicional -->
        <div class="bg-brutal-yellow border-4 border-brutal-black dark:border-white p-8 shadow-brutal-lg mt-8">
          <p class="font-display text-2xl font-bold text-black mb-2">¡HABLEMOS!</p>
          <p class="font-bold text-black">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en enviarme un mensaje. Respondo en menos de 24h.
          </p>
          <!-- Decoración -->
          <div class="mt-4 flex gap-2">
            <div class="w-4 h-4 bg-brutal-red border-2 border-black"></div>
            <div class="w-4 h-4 bg-brutal-blue border-2 border-black"></div>
            <div class="w-4 h-4 bg-brutal-green border-2 border-black"></div>
          </div>
        </div>
      </div>

      <!-- Formulario de contacto -->
      <div class="bg-brutal-black dark:bg-white border-4 border-brutal-black dark:border-white p-8 shadow-brutal-lg">
        <h2 class="text-3xl font-display font-bold text-white dark:text-black mb-6 uppercase tracking-wider">
          Envíame un mensaje
        </h2>

        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Nombre -->
          <div>
            <label class="block font-bold text-white dark:text-black mb-2 uppercase text-sm">
              Nombre *
            </label>
            <input
              v-model="formData.name"
              type="text"
              required
              class="w-full px-4 py-4 border-4 border-white dark:border-brutal-black font-bold focus:outline-none focus:shadow-brutal transition-shadow bg-brutal-gray-light dark:bg-gray-100 text-white dark:text-black placeholder-gray-400"
              placeholder="TU NOMBRE"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block font-bold text-white dark:text-black mb-2 uppercase text-sm">
              Email *
            </label>
            <input
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-4 border-4 border-white dark:border-brutal-black font-bold focus:outline-none focus:shadow-brutal transition-shadow bg-brutal-gray-light dark:bg-gray-100 text-white dark:text-black placeholder-gray-400"
              placeholder="TU@EMAIL.COM"
            />
          </div>

          <!-- Asunto -->
          <div>
            <label class="block font-bold text-white dark:text-black mb-2 uppercase text-sm"> Asunto </label>
            <input
              v-model="formData.subject"
              type="text"
              class="w-full px-4 py-4 border-4 border-white dark:border-brutal-black font-bold focus:outline-none focus:shadow-brutal transition-shadow bg-brutal-gray-light dark:bg-gray-100 text-white dark:text-black placeholder-gray-400"
              placeholder="ASUNTO DEL MENSAJE"
            />
          </div>

          <!-- Mensaje -->
          <div>
            <label class="block font-bold text-white dark:text-black mb-2 uppercase text-sm">
              Mensaje *
            </label>
            <textarea
              v-model="formData.message"
              required
              rows="5"
              class="w-full px-4 py-4 border-4 border-white dark:border-brutal-black font-bold focus:outline-none focus:shadow-brutal transition-shadow bg-brutal-gray-light dark:bg-gray-100 text-white dark:text-black placeholder-gray-400 resize-none"
              placeholder="TU MENSAJE AQUÍ..."
            ></textarea>
          </div>

          <!-- Botón enviar -->
          <button
            type="submit"
            :disabled="!isFormValid || isSubmitting"
            class="w-full py-4 px-6 text-xl font-bold uppercase tracking-wider border-4 border-white dark:border-brutal-black transition-all"
            :class="[
              isSubmitting
                ? 'bg-gray-500 cursor-wait text-white'
                : submitStatus === 'success'
                  ? 'bg-brutal-green text-black border-brutal-green'
                  : isFormValid
                    ? 'bg-white text-black hover:bg-brutal-pink hover:border-brutal-pink hover:shadow-brutal-lg'
                    : 'bg-gray-500 text-gray-300 cursor-not-allowed',
            ]"
          >
            <span v-if="isSubmitting">Enviando...</span>
            <span v-else-if="submitStatus === 'success'">¡Mensaje enviado!</span>
            <span v-else>Enviar mensaje →</span>
          </button>

          <!-- Mensaje de estado -->
          <div
            v-if="submitStatus === 'error'"
            class="bg-brutal-red text-white p-4 font-bold border-4 border-white"
          >
            Error al enviar. Inténtalo de nuevo.
          </div>
        </form>
      </div>
    </div>

    <!-- Decoración final -->
    <div class="mt-16 flex gap-2">
      <div
        v-for="i in 12"
        :key="i"
        class="flex-1 h-4 border-2 border-brutal-black dark:border-white"
        :class="['bg-brutal-red', 'bg-brutal-yellow', 'bg-brutal-green', 'bg-brutal-blue', 'bg-brutal-pink'][i % 5]"
      ></div>
    </div>
  </div>
</template>

