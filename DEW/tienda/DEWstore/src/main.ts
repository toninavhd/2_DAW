import { createApp } from 'vue'
import { router } from './router/mainRouter'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Aura from '@primeuix/themes/aura'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/base.css'

import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(ToastService)
app.use(createPinia())
app.use(router)

app.mount('#app')
