import { projects } from "@/data/projects.json"
import { onMounted, ref } from "vue"
import config from "@/data/config"
import { useRoute, useRouter } from "vue-router"

export default {
  name: 'ProjectDetailPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const project = ref(null)

    function setProject () {
      project.value = projects.find(project => project.slug === route.params.slug)
      
      if(!project.value) {
        router.push(config.page.notFound)
      }
    }

    onMounted(() => {
      window.scrollTo(0, 0)
      setProject()
    })

    return {
      project,
      config
    }
  },
}