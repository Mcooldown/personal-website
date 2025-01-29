import Button from "@/components/Button.vue"
import { computed, onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import config from "@/data/config"

export default {
  name: "Navbar",
  components: { 
    Button
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const visibleShadow = ref(false)

    function handlePageScroll () {
      visibleShadow.value = window.scrollY > 10
    }

    function goToHomePage () {
      router.push(config.page.home)
    }

    onMounted(() => {
      window.addEventListener('scroll', handlePageScroll)
    })

    const navItems = computed(() => ([
      {
        title: "HOME",
        icon: "fa fa-home",
        action: () => router.push(config.page.home),
        isActive: route.path === config.page.home
      },
      {
        title: "PROJECTS",
        icon: "fa fa-tasks",
        action: () => router.push(config.page.projects),
        isActive: route.path === config.page.projects
      }
    ]))

    return {
      visibleShadow,
      navItems,
      goToHomePage,
      config
    }
  },
}