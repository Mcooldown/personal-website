<template>
  <div class="cProjectItem">
    <router-link
      :to="{ name: 'Project Details', params: { slug: project.slug } }"
      class="text-decoration-none"
    >
      <img
        :src="require('@/assets/projects/' + project.thumbnail)"
        class="cProjectThumbnail w-100 mb-4"
        alt="thumbnail"
      />
      <h2 class="mt-2 fw-bold cTextDarkGray">{{ project.title }}</h2>
      <p class="text-muted">{{ project.short_description }}</p>
      <div class="d-flex flex-wrap">
        <div v-for="tech in project.tech_stack" :key="tech">
          <div class="cTechPills me-2 mb-2">
            {{ tech }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style>
.cProjectItem {
  transition: 200ms ease all;
  cursor: pointer;
}

.cProjectThumbnail {
  box-shadow: 0px 0px 4px 2px rgb(221, 221, 221);
}

.cProjectItem:hover {
  transform: scale(1.02);
}

.cTechPills {
  border-radius: 5px;
  background-color: #0092ca;
  padding: 2px 10px;
  color: white;
}
</style>