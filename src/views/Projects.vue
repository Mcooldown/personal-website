<template>
  <div class="cProjects">
    <div class="container">
      <h1 class="cTitle cTextDarkGray fw-bold">
        My <span class="cTextBlue">Projects</span>
      </h1>
      <p class="text-muted mt-3 mb-4">
        These are several projects that I was involved in. Please have a look.
      </p>
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";
import projectsJSON from "@/data/projects.json";
import { onMounted, ref } from "vue";

export default {
  components: { ProjectList },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const projects = ref(projectsJSON.projects);

    return { projects };
  },
};
</script>

<style scoped>
.cProjects {
  padding: 3rem 0 6rem 0;
}
</style>