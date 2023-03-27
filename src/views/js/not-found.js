import Button from "@/components/Button.vue"
import { useRouter } from "vue-router"
import config from "@/data/config"

export default {
  name: "NotFound",
  components: {
    Button
  },
  setup () {
    const router = useRouter()

    function goToHomePage () {
      router.push(config.page.home)
    }

    return {
      config,
      goToHomePage
    }
  }
}