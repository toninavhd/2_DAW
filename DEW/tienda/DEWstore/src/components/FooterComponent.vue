<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <span class="brand-name">STORE</span>
        <p class="brand-tagline">Moda contemporánea</p>
      </div>
      
      <div class="footer-links">
        <div class="footer-section">
          <h4>Atención al cliente</h4>
          <a href="#">Contacto</a>
          <a href="#">Envíos</a>
          <a href="#">Devoluciones</a>
        </div>
        <div class="footer-section">
          <h4>Legal</h4>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} STORE. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  margin-top: auto;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 48px 24px 24px;
}

.footer-brand {
  margin-bottom: 32px;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-primary);
}

.brand-tagline {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 4px;
}

.footer-links {
  display: flex;
  gap: 64px;
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-border);
}

.footer-section h4 {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.footer-section a {
  display: block;
  font-size: 0.875rem;
  color: var(--text-primary);
  margin-bottom: 8px;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  color: var(--text-secondary);
}

.footer-bottom {
  text-align: center;
}

.footer-bottom p {
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .footer-container {
    padding: 32px 16px 24px;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 24px;
  }
}
</style>

