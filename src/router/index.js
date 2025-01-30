import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProjectDetailPage from '@/views/ProjectDetailPage.vue'
import NotFoundPage from "@/views/NotFoundPage.vue"
import config from "@/data/config"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path:'/404',
    name: 'Not Found',
    component: NotFoundPage
  },
  {
    path: '/:slug',
    name: 'Project Detail',
    component: ProjectDetailPage,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.path === config.page.home) {
    document.title = config.name
  } else {
    document.title = `${to.name} - ${config.name}`
  }
  next()
})

export default router
