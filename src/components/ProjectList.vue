<template>
  <div class="row">
    <div class="col-md-6 my-3" v-for="project in projects" :key="project.id">
      <ProjectItem :project="project" />
    </div>
  </div>
</template>

<script src="./js/project-list.js"></script>

<style>
</style>