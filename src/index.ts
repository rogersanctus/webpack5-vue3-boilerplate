import { createApp } from 'vue'
import App from '@/App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

import '@/main.scss'

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
