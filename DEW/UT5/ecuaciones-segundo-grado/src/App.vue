<template>
  <div class="calculator-container">
    <header class="header">
      <h1>🧮 Calculadora de Ecuaciones de Segundo Grado</h1>
      <p>Resuelve ecuaciones de la forma: ax² + bx + c = 0</p>
    </header>

    <main class="main-content">
      <div class="input-section">
        <h2>Ingresa los Coeficientes</h2>
        
        <form @submit.prevent="solveEquation" class="equation-form">
          <div class="coeff-group">
            <label for="coeff-a">Coeficiente a:</label>
            <input
              id="coeff-a"
              v-model.number="coefficients.a"
              type="number"
              step="any"
              placeholder="ej: 1"
              class="coeff-input"
              required
            />
          </div>

          <div class="coeff-group">
            <label for="coeff-b">Coeficiente b:</label>
            <input
              id="coeff-b"
              v-model.number="coefficients.b"
              type="number"
              step="any"
              placeholder="ej: -5"
              class="coeff-input"
              required
            />
          </div>

          <div class="coeff-group">
            <label for="coeff-c">Coeficiente c:</label>
            <input
              id="coeff-c"
              v-model.number="coefficients.c"
              type="number"
              step="any"
              placeholder="ej: 6"
              class="coeff-input"
              required
            />
          </div>

          <button type="submit" class="solve-btn" :disabled="!isValidEquation">
            ✨ Resolver Ecuación
          </button>
        </form>

        <div class="equation-display">
          <p class="equation-text">
            Ecuación: 
            <span class="math">{{ formatEquation() }}</span>
          </p>
        </div>
      </div>

      <div class="results-section" v-if="hasResults">
        <h2>📊 Resultados</h2>
        
        <div class="result-card">
          <h3>Discriminante (Δ)</h3>
          <p class="discriminant" :class="getDiscriminantClass()">
            Δ = {{ formatNumber(discriminant) }}
          </p>
          <p class="discriminant-info">{{ getDiscriminantInfo() }}</p>
        </div>

        <div class="result-card" v-if="hasRealSolutions">
          <h3>Soluciones Reales</h3>
          <div class="solutions">
            <p class="solution">
              x₁ = {{ formatNumber(solutions.x1) }}
            </p>
            <p class="solution" v-if="hasTwoSolutions">
              x₂ = {{ formatNumber(solutions.x2) }}
            </p>
          </div>
        </div>

        <div class="result-card" v-if="hasComplexSolutions">
          <h3>Soluciones Complejas</h3>
          <div class="solutions complex">
            <p class="solution">
              x₁ = {{ formatComplexSolution(solutions.complexX1) }}
            </p>
            <p class="solution">
              x₂ = {{ formatComplexSolution(solutions.complexX2) }}
            </p>
          </div>
        </div>

        <div class="result-card">
          <h3>Proceso de Resolución</h3>
          <div class="process-steps">
            <p><strong>Fórmula general:</strong></p>
            <p class="formula">x = (-b ± √(b² - 4ac)) / 2a</p>
            <p><strong>Sustituyendo valores:</strong></p>
            <p class="substitution">
              x = ({{ formatNumber(-coefficients.b) }} ± √({{ formatNumber(coefficients.b)}}² - 4·{{ formatNumber(coefficients.a)}}·{{ formatNumber(coefficients.c)}})) / (2·{{ formatNumber(coefficients.a)}})
            </p>
            <p class="substitution">
              x = ({{ formatNumber(-coefficients.b) }} ± √{{ formatNumber(discriminant) }}) / {{ formatNumber(2 * coefficients.a) }}
            </p>
          </div>
        </div>

        <button @click="clearResults" class="clear-btn">
          🗑️ Limpiar Resultados
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Interfaces TypeScript
interface Coefficients {
  a: number
  b: number
  c: number
}

interface Solutions {
  x1: number
  x2?: number
  complexX1: { real: number; imaginary: number }
  complexX2: { real: number; imaginary: number }
}

// Estado reactivo
const coefficients = ref<Coefficients>({
  a: 1,
  b: -5,
  c: 6
})

const solutions = ref<Solutions>({
  x1: 0,
  x2: undefined,
  complexX1: { real: 0, imaginary: 0 },
  complexX2: { real: 0, imaginary: 0 }
})

const hasResults = ref(false)

// Computed properties
const discriminant = computed(() => {
  const { a, b, c } = coefficients.value
  return b * b - 4 * a * c
})

const isValidEquation = computed(() => {
  return coefficients.value.a !== 0
})

const hasRealSolutions = computed(() => {
  return discriminant.value >= 0
})

const hasTwoSolutions = computed(() => {
  return discriminant.value > 0
})

const hasComplexSolutions = computed(() => {
  return discriminant.value < 0
})

// Métodos
const solveEquation = (): void => {
  const { a, b, c } = coefficients.value
  const D = discriminant.value

  if (D >= 0) {
    // Soluciones reales
    solutions.value.x1 = (-b + Math.sqrt(D)) / (2 * a)
    if (D > 0) {
      solutions.value.x2 = (-b - Math.sqrt(D)) / (2 * a)
    } else {
      solutions.value.x2 = undefined
    }
  } else {
    // Soluciones complejas
    const realPart = -b / (2 * a)
    const imaginaryPart = Math.sqrt(Math.abs(D)) / (2 * a)
    
    solutions.value.complexX1 = {
      real: realPart,
      imaginary: imaginaryPart
    }
    solutions.value.complexX2 = {
      real: realPart,
      imaginary: -imaginaryPart
    }
  }

  hasResults.value = true
}

const clearResults = (): void => {
  hasResults.value = false
  solutions.value = {
    x1: 0,
    x2: undefined,
    complexX1: { real: 0, imaginary: 0 },
    complexX2: { real: 0, imaginary: 0 }
  }
}

const formatEquation = (): string => {
  const { a, b, c } = coefficients.value
  let equation = ''
  
  // Término ax²
  if (a === 1) equation += 'x²'
  else if (a === -1) equation += '-x²'
  else equation += `${a}x²`
  
  // Término bx
  if (b !== 0) {
    if (b > 0) equation += ' + '
    else equation += ' - '
    
    const absB = Math.abs(b)
    if (absB === 1) equation += 'x'
    else equation += `${absB}x`
  }
  
  // Término c
  if (c !== 0) {
    if (c > 0) equation += ' + '
    else equation += ' - '
    equation += Math.abs(c)
  }
  
  equation += ' = 0'
  return equation
}

const formatNumber = (num: number): string => {
  if (Math.abs(num) < 1e-10) return '0'
  if (Math.abs(num - Math.round(num)) < 1e-10) return Math.round(num).toString()
  return num.toFixed(4).replace(/\.?0+$/, '')
}

const formatComplexSolution = (complex: { real: number; imaginary: number }): string => {
  const real = formatNumber(complex.real)
  const imag = formatNumber(Math.abs(complex.imaginary))
  
  if (complex.imaginary === 0) return real
  if (complex.real === 0) return `${imag}i`
  
  return `${real} ${complex.imaginary > 0 ? '+' : '-'} ${imag}i`
}

const getDiscriminantClass = (): string => {
  if (discriminant.value > 0) return 'positive'
  if (discriminant.value === 0) return 'zero'
  return 'negative'
}

const getDiscriminantInfo = (): string => {
  if (discriminant.value > 0) return 'La ecuación tiene dos soluciones reales distintas'
  if (discriminant.value === 0) return 'La ecuación tiene una solución real (raíz doble)'
  return 'La ecuación tiene dos soluciones complejas conjugadas'
}
</script>

<style scoped>
.calculator-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.main-content {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
}

.input-section, .results-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.input-section h2, .results-section h2 {
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.equation-form {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.coeff-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.coeff-group label {
  font-weight: 600;
  color: #555;
}

.coeff-input {
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: border-color 0.3s;
}

.coeff-input:focus {
  outline: none;
  border-color: #667eea;
}

.solve-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.solve-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.solve-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.equation-display {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.equation-text {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.math {
  color: #667eea;
  font-family: 'Courier New', monospace;
}

.result-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.result-card h3 {
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.discriminant {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.discriminant.positive {
  background: #d4edda;
  color: #155724;
}

.discriminant.zero {
  background: #fff3cd;
  color: #856404;
}

.discriminant.negative {
  background: #f8d7da;
  color: #721c24;
}

.discriminant-info {
  text-align: center;
  color: #666;
  font-style: italic;
  margin: 0;
}

.solutions {
  text-align: center;
}

.solution {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 6px;
}

.solutions.complex .solution {
  color: #667eea;
  font-family: 'Courier New', monospace;
}

.process-steps {
  font-size: 0.95rem;
  line-height: 1.6;
}

.formula {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  margin: 1rem 0;
  border: 2px solid #667eea;
}

.substitution {
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  overflow-x: auto;
}

.clear-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.clear-btn:hover {
  background: #c82333;
}

@media (max-width: 768px) {
  .calculator-container {
    padding: 1rem;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .input-section, .results-section {
    padding: 1.5rem;
  }
  
  .equation-form {
    grid-template-columns: 1fr;
  }
}
</style>
