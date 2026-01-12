<script setup lang="ts">
import { ref } from 'vue';

const projects = ref([
  { 
    title: 'PROYECTO_01', 
    description: 'Frontend Vue · Tailwind · TypeScript',
    year: '2024',
    color: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)'
  },
  { 
    title: 'PROYECTO_02', 
    description: 'Fullstack JavaScript · Node.js · MongoDB',
    year: '2024',
    color: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)'
  },
  { 
    title: 'PROYECTO_03', 
    description: 'React Application · Redux · API REST',
    year: '2023',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  { 
    title: 'PROYECTO_04', 
    description: 'E-commerce Platform · Stripe · Firebase',
    year: '2023',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
]);

const stats = [
  { number: '3+', label: 'Años Exp', color: '#ff4d4d' },
  { number: '20+', label: 'Proyectos', color: '#4d79ff' },
  { number: '100%', label: 'Dedicación', color: '#4dff88' },
  { number: '∞', label: 'Pasión', color: '#ff4dff' }
];

const contactItems = [
  { icon: '✉', label: 'Email', value: 'antonio@email.com', href: 'mailto:antonio@email.com' },
  { icon: '◈', label: 'GitHub', value: 'github.com/antonio', href: 'https://github.com/antonio' },
  { icon: '●', label: 'LinkedIn', value: 'linkedin.com/in/antonio', href: 'https://linkedin.com/in/antonio' },
  { icon: '○', label: 'Twitter', value: '@antonio', href: 'https://twitter.com/antonio' }
];
</script>

<template>
  <div class="scroll-container">
    <!-- Navigation -->
    <nav class="nav">
      <a href="#" class="nav-logo">ANTONIO NAVARRO</a>
      <div class="nav-links">
        <a href="#about" class="nav-link">ABOUT</a>
        <a href="#projects" class="nav-link">PROJECTS</a>
        <a href="#contact" class="nav-link">CONTACT</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg-blob hero-blob-1"></div>
      <div class="hero-bg-blob hero-blob-2"></div>
      <div class="hero-bg-blob hero-blob-3"></div>
      
      <div class="hero-content">
        <div class="hero-top">
          <span class="hero-logo">ANTONIO NAVARRO</span>
          <span class="hero-date">2025</span>
        </div>
        
        <div class="hero-main">
          <h1 class="hero-title fade-in-up">CREATIVE<br/>DEVELOPER</h1>
          <p class="hero-subtitle fade-in-up delay-1">
            Frontend developer specializing in Vue.js, Tailwind CSS, and TypeScript. 
            Creating modern web experiences with precision and passion.
          </p>
        </div>
      </div>
      
      <span class="hero-scroll">SCROLL</span>
    </section>

    <hr class="hr-dark" />

    <!-- About Section -->
    <section id="about" class="section about-section">
      <div class="section-narrow">
        <div class="about-grid">
          <div>
            <p class="about-label fade-in-up">About</p>
          </div>
          
          <div>
            <h2 class="about-heading fade-in-up">
              Building digital experiences with <span class="accent-text">clarity</span> and purpose.
            </h2>
            
            <p class="about-text fade-in-up delay-1">
              I'm a frontend developer based in Spain, specializing in creating modern, 
              accessible, and performant web applications. My approach combines technical 
              expertise with a keen eye for design.
            </p>
            
            <p class="about-text-lg fade-in-up delay-2">
              "Simplicity is the ultimate sophistication."
            </p>
            
            <div class="stats-grid fade-in-up delay-3">
              <div v-for="stat in stats" :key="stat.label" class="stat-item">
                <div class="stat-number" :style="{ color: stat.color }">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="hr" />

    <!-- Projects Section -->
    <section id="projects" class="section projects-section">
      <div class="section-wide">
        <p class="about-label fade-in-up">Selected Work</p>
        
        <div class="projects-grid">
          <div 
            v-for="(project, index) in projects" 
            :key="project.title"
            class="project-card fade-in-up"
            :class="'delay-' + (index + 1)"
          >
            <div class="project-image" :style="{ background: project.color }"></div>
            <p class="project-number">{{ project.year }}</p>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <hr class="hr-dark" />

    <!-- Contact Section -->
    <section id="contact" class="section contact-section">
      <div class="contact-bg-blob contact-blob-1"></div>
      <div class="contact-bg-blob contact-blob-2"></div>
      
      <div class="contact-content">
        <div class="section-narrow">
          <div class="contact-grid">
            <div>
              <p class="about-label fade-in-up" style="color: rgba(255,255,255,0.5);">Get in Touch</p>
              <h2 class="about-heading fade-in-up delay-1" style="color: #ffffff;">
                Let's create something <span style="background: linear-gradient(135deg, #4dff88 0%, #ffd24d 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">meaningful</span> together.
              </h2>
              
              <div class="contact-links fade-in-up delay-2">
                <a 
                  v-for="item in contactItems" 
                  :key="item.label"
                  :href="item.href"
                  target="_blank"
                  class="contact-link"
                >
                  <span class="contact-link-icon">{{ item.icon }}</span>
                  <span class="contact-link-text">{{ item.value }}</span>
                </a>
              </div>
            </div>
            
            <form class="contact-form fade-in-up delay-3" @submit.prevent>
              <div class="form-group">
                <label class="form-label">Name</label>
                <input type="text" class="form-input" placeholder="Your name" />
              </div>
              
              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-input" placeholder="your@email.com" />
              </div>
              
              <div class="form-group">
                <label class="form-label">Message</label>
                <textarea class="form-textarea" placeholder="Tell me about your project"></textarea>
              </div>
              
              <button type="submit" class="submit-btn">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <span class="footer-logo">ANTONIO NAVARRO</span>
        
        <div class="footer-links">
          <a href="#" class="footer-link">GitHub</a>
          <a href="#" class="footer-link">LinkedIn</a>
          <a href="#" class="footer-link">Twitter</a>
        </div>
        
        <span class="footer-copyright">© 2025 — All Rights Reserved</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Hero section already has colored blobs in CSS */
</style>
