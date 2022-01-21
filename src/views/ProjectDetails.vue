<template>
  <div
    :class="
      'cDetailHeaderWrapper ' +
      (project ? '' : 'min-vh-100 d-flex align-items-center')
    "
  >
    <div class="container">
      <div v-if="project" class="row align-items-center cDetailHeader">
        <div class="col-md-6">
          <img
            :src="require('@/assets/projects/' + project.thumbnail)"
            alt="thumbnail"
            class="w-100"
          />
        </div>
        <div class="col-md-6 ps-lg-4">
          <h1 class="cTextDarkGray fw-bold">{{ project.title }}</h1>
          <p class="text-muted">{{ project.short_description }}</p>

          <h5 class="cTextDarkGray fw-bold">Tech Stack:</h5>
          <div class="d-flex">
            <div v-for="tech in project.tech_stack" :key="tech">
              <div class="cTechPills me-2">
                {{ tech }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center" v-else>
        <h1 class="cTextGray fw-bold text-center mb-4">PROJECT NOT FOUND</h1>
        <Button title="BACK TO PROJECTS" />
      </div>
    </div>
  </div>
</template>

<script>
import projectsJSON from "@/data/projects.json";
import projectDetailsJSON from "@/data/project-details.json";
import { onMounted, ref } from "vue";
import Button from "@/components/Button.vue";

export default {
  props: ["slug"],
  components: { Button },
  setup(props) {
    const project = ref(null);
    const projectDetails = ref([]);

    onMounted(() => {
      project.value = projectsJSON.projects.find(
        (project) => project.slug === props.slug
      );
      if (project.value != null) {
        projectDetails.value = projectDetailsJSON.project_details.filter(
          (detail) => {
            return detail.project_id === project.value.id;
          }
        );
      }
    });

    return { project, projectDetails };
  },
};
</script>

<style scoped>
.cDetailHeaderWrapper {
  background: url("../assets/pattern-1.png") no-repeat,
    url("../assets/pattern-2.png") no-repeat, #eeeeee;
  background-size: 200px, 250px;
  background-position: 100% 20%, 0% 50%;
}
.cDetailHeader {
  padding: 9rem 0 7rem 0;
}
</style>