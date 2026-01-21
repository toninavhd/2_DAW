import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import CartView from '../views/CartView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import PurchasedView from '../views/PurchasedView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/shop', component: ShopView },
  { path: '/cart', component: CartView },
  { path: '/register', component: RegisterView },
  { path: '/login', component: LoginView },
  { path: '/purchased', component: PurchasedView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
