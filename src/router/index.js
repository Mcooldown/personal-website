import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";

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
    path: '/contact',
    name: 'Contact',
    component: Contact
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

router.beforeEach((to, from, next) => {
  document.title = `${to.name} - Vincent Hadinata Personal Website`
  next()
})

export default router
