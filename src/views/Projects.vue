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
  padding: 8rem 0;
  background: url("../assets/pattern-1.png") no-repeat,
    url("../assets/pattern-2.png") no-repeat;
  background-size: 200px, 250px;
  background-position: 100% 20%, 0% 50%;
}

/* @media (max-width: 360.98px) {
}

@media (max-width: 575.98px) {
} */

@media (max-width: 767.98px) {
  .cProjects {
    background-size: 100px, 100px;
    background-position: 105% 10%, -5% 95%;
  }
}

@media (max-width: 991.98px) {
  .cProjects {
    background-size: 125px, 150px;
    background-position: 105% 20%, -5% 95%;
  }
}

/* @media (max-width: 1199.98px) {
}

@media (max-width: 1399.98px) {
} */
</style>