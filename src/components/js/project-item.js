import { useRouter } from "vue-router"
import config from "@/data/config"

export default {
  name: "ProjectItem",
  props: ["project"],
  setup ({ project }) {
    const router = useRouter()
    
    function goToProjectDetailPage () {
      router.push(config.page.projectDetails(project.slug))
    }

    return {
      goToProjectDetailPage
    }
  }
}