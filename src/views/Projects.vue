<template>
  <div class="cProjects">
    <div class="container">
      <div class="d-flex">
        <h1 class="cTitle cTextDarkGray fw-bold">
          {{ config.projects["title-1"] }}
        </h1>
        <h1 class="cTitle cTextBlue fw-bold ms-2">
          {{ config.projects["title-2"] }}
        </h1>
      </div>
      <p class="text-muted mt-3 mb-4">
        {{ config.projects.subtitle }}
      </p>
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script src="./js/projects.js"></script>

<style scoped>
.cProjects {
  padding: 10rem 0 6rem 0;
}

@media (max-width: 767.98px) {
  .cProjects {
    padding: 8rem 0 4rem 0;
  }
}
</style>