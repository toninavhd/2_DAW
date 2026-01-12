<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const currentCategory = ref(0);

const categories = [
  { icon: '◉', label: 'INICIO' },
  { icon: '◈', label: 'SOBRE MÍ' },
  { icon: '◇', label: 'PROYECTOS' },
  { icon: '✉', label: 'CONTACTO' }
];

const setCategory = (index: number) => {
  currentCategory.value = index;
};

const stats = [
  { number: '3+', label: 'AÑOS EXP' },
  { number: '20+', label: 'PROYECTOS' },
  { number: '100%', label: 'DEDICACIÓN' },
  { number: '∞', label: 'PASIÓN' }
];

const projects = [
  { title: 'PROYECTO_01', description: 'Vue · Tailwind · TypeScript' },
  { title: 'PROYECTO_02', description: 'Node.js · MongoDB' },
  { title: 'PROYECTO_03', description: 'React · Redux' },
  { title: 'PROYECTO_04', description: 'Stripe · Firebase' },
  { title: 'PROYECTO_05', description: 'Chart.js · Express' },
  { title: 'PROYECTO_06', description: 'React Native · GraphQL' }
];

const contactItems = [
  { label: 'EMAIL', value: 'antonio@email.com', href: 'mailto:antonio@email.com' },
  { label: 'GITHUB', value: 'github.com/antonio', href: 'https://github.com/antonio' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/antonio', href: 'https://linkedin.com/in/antonio' },
  { label: 'TWITTER', value: '@antonio', href: 'https://twitter.com/antonio' }
];

// Generate particles on mount
const particles = ref<Array<{left: string, animationDelay: string, animationDuration: string}>>([]);

onMounted(() => {
  const newParticles = [];
  for (let i = 0; i < 25; i++) {
    newParticles.push({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 20}s`,
      animationDuration: `${15 + Math.random() * 10}s`
    });
  }
  particles.value = newParticles;
});
</script>

<template>
  <div id="app-container" class="min-h-screen text-white font-helvetica">
    <!-- Nebula Visualizer Background -->
    <div class="visualizer-bg">
      <div class="nebula-container">
        <div class="nebula-blob nebula-1"></div>
        <div class="nebula-blob nebula-2"></div>
        <div class="nebula-blob nebula-3"></div>
        <div class="nebula-blob nebula-4"></div>
        <div class="nebula-blob nebula-5"></div>
        <div class="nebula-blob nebula-6"></div>
      </div>
      
      <!-- Floating particles -->
      <div class="particles">
        <div 
          v-for="(p, i) in particles" 
          :key="i"
          class="particle"
          :style="{ left: p.left, animationDelay: p.animationDelay, animationDuration: p.animationDuration }"
        ></div>
      </div>
      
      <!-- Shine overlay -->
      <div class="shine-overlay"></div>
    </div>

    <!-- Right-side Category Bar (XMB style) -->
    <div class="category-bar">
      <div class="categories-row">
        <div 
          v-for="(cat, index) in categories" 
          :key="cat.label"
          class="category-item"
          :class="{ active: currentCategory === index }"
          @click="setCategory(index)"
        >
          <span class="category-icon">{{ cat.icon }}</span>
          <span class="category-label">{{ cat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Content Area (Left side) -->
    <div class="content-area">
      <!-- INICIO -->
      <div v-if="currentCategory === 0" class="hero-section">
        <p class="hero-role">FRONTEND DEVELOPER</p>
        <h1 class="hero-name">ANTONIO<br/>NAVARRO</h1>
        <p class="hero-tech">VUE · TAILWIND · TYPESCRIPT · REACT</p>
      </div>

      <!-- SOBRE MÍ -->
      <div v-if="currentCategory === 1">
        <h2 class="section-title">SOBRE MÍ</h2>
        <div class="about-content">
          <p class="about-text">
            Desarrollador frontend especializado en crear experiencias web modernas y accesibles.
          </p>
          <p class="about-subtext">
            Me apasiona Vue.js, Tailwind CSS y TypeScript. Creo interfaces limpias, funcionales y estéticas.
          </p>
          <div class="stats-grid">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- PROYECTOS -->
      <div v-if="currentCategory === 2">
        <h2 class="section-title">PROYECTOS</h2>
        <div class="projects-grid">
          <div 
            v-for="(project, index) in projects" 
            :key="project.title"
            class="project-card"
          >
            <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>

      <!-- CONTACTO -->
      <div v-if="currentCategory === 3">
        <h2 class="section-title">CONTACTO</h2>
        <div class="contact-grid">
          <a 
            v-for="item in contactItems" 
            :key="item.label"
            :href="item.href"
            target="_blank"
            class="contact-item"
          >
            <span class="contact-label">{{ item.label }}</span>
            <span class="contact-value">{{ item.value }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Info -->
    <div class="footer-info">
      <div class="footer-name">ANTONIO NAVARRO</div>
      <div class="footer-copyright">© 2025</div>
    </div>

    <!-- Navigation Hint -->
    <div class="nav-hint">← → NAVEGAR</div>
  </div>
</template>

<style scoped>
.font-helvetica {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>
