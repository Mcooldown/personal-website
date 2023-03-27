import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import Button from "@/components/Button.vue"
import { onMounted, onUnmounted, ref } from "vue"

export default {
  components: { Navbar, Footer, Button },
  setup() {
    const showButton = ref(false)

    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })

    const handleScroll = () => {
      showButton.value = !(window.scrollY === 0)
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    return { scrollToTop, showButton }
  },
}