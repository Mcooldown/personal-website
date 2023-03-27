import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'
import NotFound from "@/views/NotFound.vue"
import config from "@/data/config"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projects/:slug',
    name: 'Project Details',
    component: ProjectDetails,
    props: true,
  },
  {
    path:'/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound
  }
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
