<template>
  <div class="p-4">
    <h1>Contacto</h1>
    <div class="contact-info">
      <p><strong>Email:</strong> {{ cvData.contact.email }}</p>
      <p><strong>Teléfono:</strong> {{ cvData.contact.phone }}</p>
      <p><strong>LinkedIn:</strong> <a :href="cvData.contact.linkedin" target="_blank">{{ cvData.contact.linkedin }}</a></p>
      <p><strong>GitHub:</strong> <a :href="cvData.contact.github" target="_blank">{{ cvData.contact.github }}</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import cvData from '@/data/cv.json'
</script>

<style scoped>
.contact-info {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
