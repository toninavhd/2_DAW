<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-content">
        <span class="hero-label">Find Your Way</span>
        <h1 class="hero-title">Luxury On Concrete</h1>
        <p class="hero-subtitle">
          Descubre las últimas tendencias del lujo urbano<br />
          en nuestra colección exclusiva
        </p>
        <RouterLink to="/shop" class="hero-cta">
          Ver colección
        </RouterLink>
      </div>
    </section>

    <section class="featured">
      <div class="featured-header">
        <h2>Destacados</h2>
        <RouterLink to="/shop" class="view-all">
          Ver todo <i class="pi pi-arrow-right"></i>
        </RouterLink>
      </div>
      <div class="featured-grid">
        <RouterLink to="/shop" class="featured-item">
          <div class="featured-image">
            <img src="@/assets/images/camiseta.avif" alt="Camiseta ACNE Studios" />
          </div>
          <h3>Camiseta ACNE Studios</h3>
          <p>220.00€</p>
        </RouterLink>
        <RouterLink to="/shop" class="featured-item">
          <div class="featured-image">
            <img src="@/assets/images/3xl.jpg" alt="Balenciaga 3XL" />
          </div>
          <h3>Balenciaga 3XL</h3>
          <p>990.00€</p>
        </RouterLink>
        <RouterLink to="/shop" class="featured-item">
          <div class="featured-image">
            <img src="@/assets/images/chaqueta.avif" alt="Balenciaga Bomber de Cuero" />
          </div>
          <h3>Chaqueta de Cuero</h3>
          <p>1500.00€</p>
        </RouterLink>
      </div>
    </section>

    <section class="features">
      <div class="features-grid">
        <div class="feature-item">
          <i class="pi pi-truck"></i>
          <h3>Envío gratuito</h3>
          <p>En pedidos superiores a 50€</p>
        </div>
        <div class="feature-item">
          <i class="pi pi-undo"></i>
          <h3>Devoluciones</h3>
          <p>30 días para devolver</p>
        </div>
        <div class="feature-item">
          <i class="pi pi-lock"></i>
          <h3>Pago seguro</h3>
          <p>Transacciones cifradas</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  min-height: calc(100vh - 64px);
}

.hero {
  background: linear-gradient(to bottom, #f8f8f8, #fafafa);
  padding: 120px 24px;
  text-align: center;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 32px;
}

.hero-cta {
  display: inline-block;
  padding: 16px 40px;
  background: var(--color-primary);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.hero-cta:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

.featured {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 24px;
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.featured-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
}

.view-all {
  font-size: 0.875rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.view-all:hover {
  color: var(--text-primary);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.featured-item {
  cursor: pointer;
  color: inherit;
}

.featured-image {
  aspect-ratio: 3/4;
  background: var(--color-border-light);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-item:hover .featured-image img {
  transform: scale(1.05);
}

.featured-item h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 4px;
}

.featured-item p {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.features {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.features-grid {
  max-width: 1400px;
  margin: 0 auto;
  padding: 64px 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

.feature-item {
  text-align: center;
}

.feature-item i {
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 16px;
}

.feature-item h3 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.feature-item p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 80px 16px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .featured {
    padding: 48px 16px;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
