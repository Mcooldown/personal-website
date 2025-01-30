import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import config from "@/data/config"

export default {
  name: "Navbar",
  setup() {
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

    return {
      visibleShadow,
      goToHomePage,
      config
    }
  },
}