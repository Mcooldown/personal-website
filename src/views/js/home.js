import Button from "@/components/Button.vue"
import ProjectList from "@/components/ProjectList.vue"
import projectData from "@/data/projects.json"
import { onMounted } from "vue"
import config from "@/data/config"

export default {
  name: "Home",
  components: {
    Button,
    ProjectList
  },
  setup() {
    const projects = projectData.projects.filter((project) => project.selected)

    onMounted(() => {
      window.scrollTo(0, 0)
    })

    function viewResume () {
      const a = document.createElement("a")
      a.href = "Resume - Vincent Hadinata.pdf"
      window.open(a.href)
    }

    return {
      config,
      projects,
      viewResume
    }
  },
}