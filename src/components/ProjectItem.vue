<template>
  <div class="cProjectItem p-lg-4 p-3">
    <router-link
      :to="{ name: 'Project Details', params: { slug: project.slug } }"
      class="text-decoration-none"
    >
      <img
        :src="require('@/assets/projects/' + project.thumbnail)"
        class="cProjectThumbnail w-100 mb-4"
        :alt="project.title"
      />
      <h2 class="mt-2 fw-bold cTitleProject cTextDarkGray">
        {{ project.title }}
      </h2>
      <p class="text-muted cDescription">{{ project.short_description }}</p>
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
  border-radius: 8px;
  box-shadow: 2px 2px 5px 2px rgb(221, 221, 221);
  background: white;
}

.cTitleProject {
  height: 1.4em;
  line-height: 1.4;
  overflow: hidden;
}

.cDescription {
  height: 2.8em;
  line-height: 1.4;
  overflow: hidden;
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