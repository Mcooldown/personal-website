<template>
  <div class="bg-white">
    <div class="container">
      <div v-if="project" class="row align-items-center cDetailHeader">
        <div class="col-md-6 my-3">
          <img
            :src="require('@/assets/projects/' + project.thumbnail)"
            alt="thumbnail"
            class="w-100 cDetailThumbnail"
          />
        </div>
        <div class="col-md-6 my-3 ps-lg-4">
          <h1 class="cTextDarkGray fw-bold">{{ project.title }}</h1>
          <p class="text-muted">{{ project.short_description }}</p>

          <h5 class="cTextDarkGray fw-bold">Tech Stack:</h5>
          <div class="d-flex flex-wrap">
            <div v-for="tech in project.tech_stack" :key="tech">
              <div class="cTechPills me-2 mb-2">
                {{ tech }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          text-center
          min-vh-100
          d-flex
          justify-content-center
          align-items-center
        "
        v-else
      >
        <div class="text-center">
          <h1 class="cTextGray fw-bold text-center mb-4">PROJECT NOT FOUND</h1>
          <Button
            title="BACK TO PROJECTS"
            @click="$router.push({ name: 'Projects' })"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="cDetailContent" v-if="project">
    <div class="container">
      <div v-if="projectDetails.length">
        <div v-for="detail in projectDetails" :key="detail.id" class="mb-5">
          <h2 class="cTextDarkGray fw-bold">{{ detail.section_name }}</h2>

          <!-- TEXT -->
          <div
            v-for="textItem in detail.text"
            :key="textItem.title"
            class="my-4"
          >
            <h4 class="cTextBlue fw-bold">{{ textItem.title }}</h4>
            <p class="text-muted">{{ textItem.content }}</p>
          </div>

          <!-- LINK -->
          <div
            v-for="linkItem in detail.link"
            :key="linkItem.title"
            class="my-4"
          >
            <h4 class="cTextBlue fw-bold">{{ linkItem.title }}</h4>
            <p class="text-muted">
              <a :href="linkItem.content" target="_blank" class="text-reset">{{
                linkItem.content
              }}</a>
            </p>
          </div>

          <!-- IMAGES -->
          <div
            v-for="imageItem in detail.images"
            :key="imageItem.title"
            class="my-4"
          >
            <div class="mb-5 pb-3">
              <h4 class="cTextBlue fw-bold mb-3">
                {{ imageItem.title }}
              </h4>
              <img
                :src="require('@/assets/projects/' + imageItem.location)"
                class="w-100"
                alt="image"
              />
              <p class="text-muted mt-3">{{ imageItem.caption }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h5 class="cTextDarkGray text-center">No details available</h5>
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
      window.scrollTo(0, 0);

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
.cDetailHeader {
  padding: 3rem 0 2rem 0;
}

.cDetailThumbnail {
  transition: 200ms ease all;
  cursor: pointer;
  box-shadow: 0px 0px 8px 2px rgb(221, 221, 221);
}

.cDetailThumbnail:hover {
  transform: rotate3d(10, 20, 5, 10deg);
}

.cDetailContent {
  padding: 2rem 0 4rem 0;
}
</style>