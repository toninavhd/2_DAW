<script setup lang="ts">
import cvData from '@/data/cv.json'

// Función para descargar CV (simulada - en producción apuntaría a un PDF real)
const downloadCV = () => {
  // Crear contenido del CV como texto
  const cvContent = `
CURRICULUM VITAE
================

${cvData.about.name}
${cvData.about.title}

CONTACTO
--------
Email: ${cvData.contact.email}
GitHub: ${cvData.contact.github}
LinkedIn: ${cvData.contact.linkedin}

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

  // Crear blob y descargar
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
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Título principal -->
    <h1 class="text-6xl md:text-8xl font-bold text-brutal-black mb-12 tracking-tighter">
      EXPERIE<span class="text-brutal-green">NCIA</span>
    </h1>

    <!-- Botón descargar CV -->
    <div class="mb-12">
      <button
        @click="downloadCV"
        class="inline-flex items-center gap-3 bg-brutal-black text-brutal-white px-8 py-4 text-xl font-bold border-3 border-brutal-black hover:bg-brutal-white hover:text-brutal-black transition-all shadow-brutal hover:shadow-brutal-lg"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="square"
            stroke-linejoin="miter"
            stroke-width="3"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
        DESCARGAR CV
      </button>
    </div>

    <!-- Timeline de experiencia -->
    <div class="relative">
      <!-- Línea vertical -->
      <div class="absolute left-8 top-0 bottom-0 w-3 bg-brutal-black hidden md:block"></div>

      <!-- Items de experiencia -->
      <div class="space-y-8">
        <div
          v-for="(exp, index) in cvData.experience"
          :key="exp.position"
          class="relative md:pl-24"
        >
          <!-- Marcador en timeline -->
          <div
            class="absolute left-4 top-6 w-8 h-8 border-3 border-brutal-black z-10 hidden md:flex items-center justify-center"
            :class="[
              index === 0 ? 'bg-brutal-red' : index === 1 ? 'bg-brutal-yellow' : 'bg-brutal-blue',
            ]"
          >
            <div class="w-3 h-3 bg-brutal-black"></div>
          </div>

          <!-- Tarjeta de experiencia -->
          <div
            class="bg-brutal-white border-3 border-brutal-black p-6 shadow-brutal hover:shadow-brutal-lg transition-shadow"
          >
            <!-- Header con cargo y empresa -->
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 class="text-2xl font-bold text-brutal-black uppercase">
                  {{ exp.position }}
                </h3>
                <p
                  class="text-xl font-bold text-brutal-red"
                  :class="{ 'text-brutal-yellow': index === 1 }"
                >
                  {{ exp.company }}
                </p>
              </div>
              <div class="bg-brutal-black text-brutal-white px-4 py-2 font-bold">
                {{ exp.period }}
              </div>
            </div>

            <!-- Descripción -->
            <p class="text-gray-700 leading-relaxed border-t-2 border-gray-200 pt-4">
              {{ exp.description }}
            </p>

            <!-- Decoración -->
            <div class="mt-4 flex gap-2">
              <div
                v-for="i in 3"
                :key="i"
                class="w-4 h-4 bg-brutal-green border border-brutal-black"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Franja decorativa final -->
    <div class="mt-16 flex gap-1">
      <div class="flex-1 h-6 bg-brutal-red border-t border-b border-brutal-black"></div>
      <div class="flex-1 h-6 bg-brutal-yellow border-t border-b border-brutal-black"></div>
      <div class="flex-1 h-6 bg-brutal-green border-t border-b border-brutal-black"></div>
      <div class="flex-1 h-6 bg-brutal-blue border-t border-b border-brutal-black"></div>
      <div class="flex-1 h-6 bg-brutal-purple border-t border-b border-brutal-black"></div>
    </div>
  </div>
</template>
