import { useRouter } from "vue-router"
import config from "@/data/config"
import { computed } from "vue"

export default {
  name: "ProjectItem",
  props: ["project"],
  setup ({ project }) {
    const router = useRouter()
    const imageUrl = computed(() => new URL(`/src/assets/projects/${project.thumbnail}`, import.meta.url))
    
    function goToProjectDetailPage () {
      router.push(config.page.projectDetails(project.slug))
    }

    return {
      imageUrl,
      goToProjectDetailPage
    }
  }
}