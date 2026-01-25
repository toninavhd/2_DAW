<template>
  <div class="auth-view">
    <div class="auth-card">
      <div class="auth-header">
        <h1>Crear Cuenta</h1>
        <p>Únete a STORE y disfruta de nuestras ventajas</p>
      </div>

      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-field">
          <label for="name">Nombre</label>
          <InputText 
            id="name" 
            v-model="name" 
            placeholder="Tu nombre"
            :class="{ 'p-invalid': errors.name }"
            class="form-input"
          />
          <small v-if="errors.name" class="p-error">{{ errors.name }}</small>
        </div>

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
            placeholder="Mínimo 6 caracteres"
            toggleMask
            :class="{ 'p-invalid': errors.password }"
            class="form-input"
            inputClass="form-input"
          />
          <small v-if="errors.password" class="p-error">{{ errors.password }}</small>
        </div>

        <div class="form-field">
          <label for="confirmPassword">Confirmar Contraseña</label>
          <Password 
            id="confirmPassword" 
            v-model="confirmPassword" 
            placeholder="Repite tu contraseña"
            :feedback="false"
            toggleMask
            :class="{ 'p-invalid': errors.confirmPassword }"
            class="form-input"
            inputClass="form-input"
          />
          <small v-if="errors.confirmPassword" class="p-error">{{ errors.confirmPassword }}</small>
        </div>

        <div class="form-field terms">
          <Checkbox 
            v-model="acceptTerms" 
            :binary="true" 
            inputId="terms"
          />
          <label for="terms">
            Acepto los <a href="#">Términos y Condiciones</a> y la 
            <a href="#">Política de Privacidad</a>
          </label>
        </div>
        <small v-if="errors.terms" class="p-error terms-error">{{ errors.terms }}</small>

        <Button 
          type="submit" 
          label="Crear Cuenta" 
          icon="pi pi-user-plus"
          class="submit-btn"
          :loading="loading"
        />

        <p v-if="errorMessage" class="error-message">
          <i class="pi pi-exclamation-circle"></i>
          {{ errorMessage }}
        </p>
      </form>

      <div class="auth-footer">
        <p>¿Ya tienes cuenta? <RouterLink to="/login">Inicia Sesión</RouterLink></p>
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
import Checkbox from 'primevue/checkbox'
import { useToast } from 'primevue/usetoast'

const router = useRouter()
const { login } = useAuth()
const toast = useToast()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)
const loading = ref(false)
const errorMessage = ref('')

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: ''
})

const validate = () => {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''
  errors.terms = ''
  errorMessage.value = ''

  if (!name.value.trim()) {
    errors.name = 'El nombre es obligatorio'
    valid = false
  }

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

  if (password.value !== confirmPassword.value) {
    errors.confirmPassword = 'Las contraseñas no coinciden'
    valid = false
  }

  if (!acceptTerms.value) {
    errors.terms = 'Debes aceptar los términos y condiciones'
    valid = false
  }

  return valid
}

const handleRegister = async () => {
  if (!validate()) return

  loading.value = true
  errorMessage.value = ''

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Create user and login
  login({
    correoElectronico: email.value,
    passwordHash: password.value,
    nombre: name.value
  })
  
  toast.add({
    severity: 'success',
    summary: '¡Cuenta creada!',
    detail: `Bienvenido a STORE, ${name.value}`,
    life: 3000
  })
  
  router.push('/shop')
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

.terms {
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.terms label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 400;
}

.terms label a {
  color: var(--color-primary);
}

.terms label a:hover {
  text-decoration: underline;
}

.terms-error {
  margin-top: -12px;
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

@media (max-width: 480px) {
  .auth-card {
    padding: 24px;
  }
}
</style>

