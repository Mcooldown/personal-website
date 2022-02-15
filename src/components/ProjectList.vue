<template>
  <div class="row">
    <div
      class="col-md-6 my-4 px-lg-4 px-md-3"
      v-for="project in projects"
      :key="project.id"
    >
      <ProjectItem :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem.vue";

export default {
  props: ["projects"],
  components: { ProjectItem },
};
</script>

<style>
</style>