import Button from "@/components/Button.vue"
import { useRouter } from "vue-router"
import config from "@/data/config"
import { useStore } from "vuex"
import { onMounted, onUnmounted } from "vue"

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
      store.commit('setVisibleFooter', false)
    })
    
    onUnmounted (() => {
      store.commit('setVisibleNavbar', true)
      store.commit('setVisibleFooter', true)
    })

    return {
      config,
      goToHomePage
    }
  }
}