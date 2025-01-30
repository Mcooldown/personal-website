import Button from "@/components/Button.vue"
import ProjectItem from "@/components/ProjectItem.vue"
import { projects } from "@/data/projects.json"
import { computed, onMounted } from "vue"
import config from "@/data/config"

export default {
  name: "Home",
  components: {
    Button,
    ProjectItem
  },
  setup() {
    const sortedProjectsByLatest = computed(() => projects.sort((a, b) => b.id - a.id))

    onMounted(() => {
      window.scrollTo(0, 0)
    })

    function viewResume () {
      const a = document.createElement("a")
      a.href = config.path.resume
      window.open(a.href)
    }

    return {
      config,
      sortedProjectsByLatest,
      viewResume
    }
  },
}