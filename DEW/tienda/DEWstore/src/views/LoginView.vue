<template>
  <div class="auth-view">
    <div class="auth-card">
      <div class="auth-header">
        <h1>Iniciar Sesión</h1>
        <p>Accede a tu cuenta para gestionar tus pedidos</p>
      </div>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-field">
          <label for="email">Email</label>
          <InputText 
            id="email" 
            v-model="email" 
            type="email" 
            placeholder="tu@email.com"
            :class="{ 'p-invalid': errors.email }"
            class="form-input"
          />
          <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
        </div>

        <div class="form-field">
          <label for="password">Contraseña</label>
          <Password 
            id="password" 
            v-model="password" 
            placeholder="Tu contraseña"
            :feedback="false"
            toggleMask
            :class="{ 'p-invalid': errors.password }"
            class="form-input"
            inputClass="form-input"
          />
          <small v-if="errors.password" class="p-error">{{ errors.password }}</small>
        </div>

        <Button 
          type="submit" 
          label="Iniciar Sesión" 
          icon="pi pi-sign-in"
          class="submit-btn"
          :loading="loading"
        />

        <p v-if="errorMessage" class="error-message">
          <i class="pi pi-exclamation-circle"></i>
          {{ errorMessage }}
        </p>
      </form>

      <div class="auth-footer">
        <p>¿No tienes cuenta? <RouterLink to="/register">Regístrate</RouterLink></p>
      </div>

      <div class="demo-credentials">
        <p><strong>Cuenta demo:</strong></p>
        <p>Email: demo@store.com</p>
        <p>Contraseña: demo123</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuth } from '../composables/authComposable'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'

const router = useRouter()
const { login } = useAuth()
const toast = useToast()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const errors = reactive({
  email: '',
  password: ''
})

const validate = () => {
  let valid = true
  errors.email = ''
  errors.password = ''
  errorMessage.value = ''

  if (!email.value) {
    errors.email = 'El email es obligatorio'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email = 'Introduce un email válido'
    valid = false
  }

  if (!password.value) {
    errors.password = 'La contraseña es obligatoria'
    valid = false
  } else if (password.value.length < 6) {
    errors.password = 'Mínimo 6 caracteres'
    valid = false
  }

  return valid
}

const handleLogin = async () => {
  if (!validate()) return

  loading.value = true
  errorMessage.value = ''

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Demo validation - accept any credentials
  if (email.value && password.value.length >= 6) {
    login({
      correoElectronico: email.value,
      passwordHash: password.value,
      nombre: email.value.split('@')[0]
    })
    
    toast.add({
      severity: 'success',
      summary: '¡Bienvenido!',
      detail: `Hola, ${email.value.split('@')[0]}`,
      life: 3000
    })
    
    router.push('/shop')
  } else {
    errorMessage.value = 'Credenciales inválidas'
  }

  loading.value = false
}
</script>

<style scoped>
.auth-view {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: var(--color-background);
}

.auth-card {
  width: 100%;
  max-width: 420px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 40px;
}

.auth-header {
  text-align: center;
  margin-bottom: 32px;
}

.auth-header h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.auth-header p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
}

.p-error {
  color: var(--color-error);
  font-size: 0.75rem;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 4px;
  color: var(--color-error);
  font-size: 0.875rem;
}

.auth-footer {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
}

.auth-footer p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.auth-footer a {
  color: var(--color-primary);
  font-weight: 500;
}

.auth-footer a:hover {
  text-decoration: underline;
}

.demo-credentials {
  margin-top: 20px;
  padding: 16px;
  background: var(--color-border-light);
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.demo-credentials p {
  margin-bottom: 4px;
}

.demo-credentials strong {
  color: var(--text-primary);
}

@media (max-width: 480px) {
  .auth-card {
    padding: 24px;
  }
}
</style>

