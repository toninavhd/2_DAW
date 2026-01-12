import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'
import Contact from '@/components/Contact.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/AboutMe', component: AboutMe },
    { path: '/Skills', component: Skills },
    { path: '/Projects', component: Projects },
    { path: '/Experience', component: Experience },
    { path: '/Contact', component: Contact },
    { path: '/', redirect: '/AboutMe' },
    { path: '/:pathMatch(.*)*', redirect: '/AboutMe' },
  ],
})

export default router
