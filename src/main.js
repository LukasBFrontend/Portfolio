import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'
import './assets/fontawesome/all.min.css';
import App from './App.vue'
import HomeView from './views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

const app = createApp(App)
app.use(router)
app.mount('#app')
