<script setup lang="ts">
import cvData from '@/data/cv.json'

// Colores para cada experiencia
const expColors = ['bg-brutal-red', 'bg-brutal-yellow', 'bg-brutal-blue', 'bg-brutal-green']

// Función para descargar CV
const downloadCV = () => {
  const cvContent = `
CURRICULUM VITAE
================

${cvData.about.name}
${cvData.about.title}

CONTACTO
--------
Email: ${cvData.contact.email}
GitHub: ${cvData.contact.github}

SOBRE MÍ
--------
${cvData.about.description}

EXPERIENCIA LABORAL
-------------------
${cvData.experience
  .map(
    (exp) => `
${exp.position}
${exp.company} | ${exp.period}
${exp.description}
`,
  )
  .join('\n')}

HABILIDADES
-----------
${cvData.skills.cards.map((h) => `${h.name} - ${h.levelLabel}`).join('\n')}

PROYECTOS DESTACADOS
--------------------
${cvData.projects.cards
  .map(
    (p) => `
${p.title}
${p.description}
Tecnologías: ${p.technologies.join(', ')}
Link: ${p.link}
`,
  )
  .join('\n')}
  `

  const blob = new Blob([cvContent], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'CV_Antonio_Navarro.txt'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12 relative overflow-hidden">
    <!-- Elementos decorativos de fondo -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-40 -right-20 w-80 h-80 bg-brutal-green opacity-3 rotate-45 animate-float"></div>
      <div class="absolute bottom-40 -left-20 w-72 h-72 bg-brutal-cyan opacity-3 -rotate-12 animate-float" style="animation-delay: 1.5s;"></div>
    </div>

    <!-- Título principal -->
    <div class="mb-12 relative">
      <h1 class="text-6xl md:text-8xl font-display font-bold text-brutal-black dark:text-white tracking-tighter relative z-10">
        EXPERIE<span class="text-brutal-green">NCIA</span>
      </h1>
      <!-- Sombra decorativa -->
      <div class="absolute -bottom-2 left-0 text-6xl md:text-8xl font-display font-bold text-brutal-blue opacity-30 -z-10 transform translate-x-4 translate-y-4">
        EXPERIENCIA
      </div>
    </div>

    <!-- Botón descargar CV -->
    <div class="mb-12">
      <button
        @click="downloadCV"
        class="group relative inline-flex items-center gap-3 bg-brutal-black dark:bg-white text-white dark:text-black px-8 py-4 text-lg font-bold uppercase tracking-wider border-4 border-brutal-black dark:border-white transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-brutal-hover"
      >
        <svg class="w-8 h-8 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="3" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        DESCARGAR CV
        <!-- Efecto decorativo -->
        <div class="absolute -bottom-1 -right-1 w-full h-full border-4 border-brutal-yellow -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200"></div>
      </button>
    </div>

    <!-- Timeline de experiencia -->
    <div class="relative">
      <!-- Línea vertical -->
      <div class="absolute left-8 top-0 bottom-0 w-4 bg-brutal-black dark:bg-white hidden md:block"></div>

      <!-- Items de experiencia -->
      <div class="space-y-8">
        <div
          v-for="(exp, index) in cvData.experience"
          :key="exp.position"
          class="relative md:pl-28"
        >
          <!-- Marcador en timeline -->
          <div
            class="absolute left-4 top-6 w-8 h-8 border-4 border-brutal-black dark:border-white z-10 hidden md:flex items-center justify-center"
            :class="expColors[index % 4]"
          >
            <div class="w-3 h-3 bg-brutal-black dark:bg-white"></div>
          </div>

          <!-- Tarjeta de experiencia -->
          <div
            class="bg-brutal-white dark:bg-brutal-gray-dark border-4 border-brutal-black dark:border-white p-6 shadow-brutal hover:shadow-brutal-lg transition-all duration-300 hover:-translate-y-1"
          >
            <!-- Header con cargo y empresa -->
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 class="text-2xl font-display font-bold text-brutal-black dark:text-white uppercase">
                  {{ exp.position }}
                </h3>
                <p
                  class="text-xl font-bold"
                  :class="index === 0 ? 'text-brutal-red' : index === 1 ? 'text-brutal-yellow' : 'text-brutal-blue'"
                >
                  {{ exp.company }}
                </p>
              </div>
              <div class="bg-brutal-black dark:bg-white text-white dark:text-black px-4 py-2 font-bold border-2 border-brutal-black dark:border-white">
                {{ exp.period }}
              </div>
            </div>

            <!-- Descripción -->
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed border-t-4 border-brutal-gray-light dark:border-gray-600 pt-4">
              {{ exp.description }}
            </p>

            <!-- Decoración -->
            <div class="mt-4 flex gap-2">
              <div
                v-for="i in 4"
                :key="i"
                class="w-6 h-6 border-2 border-brutal-black dark:border-white"
                :class="expColors[(index + i) % 4]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Franja decorativa final -->
    <div class="mt-16 flex gap-1">
      <div v-for="i in 12" :key="i" class="flex-1 h-6 border-2 border-brutal-black dark:border-white" :class="expColors[i % 4]"></div>
    </div>
  </div>
</template>

