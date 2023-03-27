import ProjectList from "@/components/ProjectList.vue"
import projectData from "@/data/projects.json"
import { onMounted } from "vue"
import config from "@/data/config"

export default {
  components: { 
    ProjectList
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    })

    return {
      config,
      projects: projectData.projects
    }
  },
}