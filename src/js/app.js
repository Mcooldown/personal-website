import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import Button from "@/components/Button.vue"
import { computed, onMounted, onUnmounted, ref } from "vue"
import { useStore } from "vuex"
import config from "@/data/config"

export default {
  components: { Navbar, Footer, Button },
  setup() {
    const showButton = ref(false)
    const store = useStore()

    const previousScroll = ref(window.scrollY)
    const visibleNavbar = computed(() => store.getters.visibleNavbar)

    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })

    function handleScroll () {
      showButton.value = window.scrollY > 0 && previousScroll.value < window.scrollY
      previousScroll.value = window.scrollY
    }

    function scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    return {
      visibleNavbar,
      scrollToTop,
      showButton,
      config
    }
  },
}