<template>
  <div class="project-list">
    <ProjectItem
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script src="./js/project-list.js"></script>

<style lang="scss" scoped>
@import "~@/styles/responsive.scss";

.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @include mobile {
    grid-template-columns: 1fr;
  }
}
</style>