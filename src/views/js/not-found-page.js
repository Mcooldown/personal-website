import Button from "@/components/Button.vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { onMounted, onUnmounted } from "vue"
import config from "@/data/config"

export default {
  name: "NotFound",
  components: {
    Button
  },
  setup () {
    const router = useRouter()
    const store = useStore()

    function goToHomePage () {
      router.push(config.page.home)
    }

    onMounted (() => {
      store.commit('setVisibleNavbar', false)
    })
    
    onUnmounted (() => {
      store.commit('setVisibleNavbar', true)
    })

    return {
      goToHomePage
    }
  }
}