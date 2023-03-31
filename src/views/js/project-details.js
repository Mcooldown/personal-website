import projectData from "@/data/projects.json"
import projectDetailData from "@/data/project-details.json"
import { onMounted, ref } from "vue"
import Button from "@/components/Button.vue"
import config from "@/data/config"
import { useRouter } from "vue-router"

export default {
  name: 'ProjectDetails',
  props: ["slug"],
  components: {
    Button
  },
  setup(props) {
    const router = useRouter()
    const project = ref(null)
    const projectDetails = ref([])

    function handleSetProjectDetail () {
      project.value = 
      projectData.projects.find((project) => project.slug === props.slug)
      if(project.value) {
        projectDetails.value = 
          projectDetailData.project_details.filter((detail) => detail.project_id === project.value.id)
      }
    }
    
    function openLink (link) {
      const a = document.createElement("a")
      a.href = link
      window.open(a.href)
    }

    function goToProjectPage () {
      router.push(config.page.projects)
    }

    onMounted(() => {
      window.scrollTo(0, 0)
      handleSetProjectDetail()
    })

    return {
      config,
      project,
      projectDetails,
      openLink,
      goToProjectPage
    }
  },
}