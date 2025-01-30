import { projects } from "@/data/projects.json"
import { onMounted, ref } from "vue"
import config from "@/data/config"
import { useRoute, useRouter } from "vue-router"
import Badge from "@/components/Badge.vue"

export default {
  name: 'ProjectDetailPage',
  components: {
    Badge
  },
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