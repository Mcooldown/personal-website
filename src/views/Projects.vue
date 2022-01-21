<template>
  <div class="cProjects">
    <div class="container">
      <h1 class="cTitle cTextDarkGray fw-bold mb-4">
        My <span class="cTextBlue">Projects</span>
      </h1>
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";
import projectsJSON from "@/data/projects.json";
import { ref } from "vue";

export default {
  components: { ProjectList },
  setup() {
    const projects = ref(projectsJSON.projects);

    return { projects };
  },
};
</script>

<style scoped>
.cProjects {
  padding: 8rem 0;
  background: url("../assets/pattern-1.png") no-repeat,
    url("../assets/pattern-2.png") no-repeat;
  background-size: 200px, 250px;
  background-position: 100% 20%, 0% 50%;
}
</style>