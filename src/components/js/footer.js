import config from "@/data/config"
import { computed } from "vue"

export default {
  name: "Footer",
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      config,
      currentYear
    }
  }
}