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
          <i class="fa fa-8x fa-exclamation-triangle cTextBlue"></i>
          <h1 class="cTextGray fw-bold text-center mt-4">Project Not Found</h1>
          <p class="text-muted mb-4">
            Sorry, your requested project doesn't exist. Please go to another
            project.
          </p>
          <Button
            title="BACK TO PROJECTS"
            :onClick="() => $router.push({ name: 'Projects' })"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="cDetailContent" v-if="project">
    <div class="container">
      <div v-if="projectDetails.length">
        <div v-for="detail in projectDetails" :key="detail.id" class="mb-5">
          <h2 class="cTextDarkGray fw-bold mb-4">{{ detail.section_name }}</h2>

          <!-- TEXT -->
          <div v-if="detail.text.length">
            <div
              v-for="textItem in detail.text"
              :key="textItem.title"
              class="my-3 cCard"
            >
              <h4 class="cTextBlue fw-bold">
                <i class="fa fa-info-circle"></i> {{ textItem.title }}
              </h4>
              <p class="text-muted m-0">{{ textItem.content }}</p>
            </div>
          </div>

          <!-- LINK -->
          <div v-if="detail.link.length" class="row align-items-start">
            <div
              v-for="linkItem in detail.link"
              :key="linkItem.title"
              class="col-lg-4 col-md-6 my-3"
            >
              <div class="cCard">
                <h4 class="cTextBlue fw-bold">
                  <i class="fas fa-link"></i> {{ linkItem.title }}
                </h4>
                <Button
                  title="CLICK HERE TO OPEN"
                  class="mt-3"
                  :onClick="() => openLink(linkItem.content)"
                />
              </div>
            </div>
          </div>

          <!-- IMAGES -->
          <div v-if="detail.images.length" class="row">
            <div
              v-for="imageItem in detail.images"
              :key="imageItem.title"
              class="col-md-6 my-3"
            >
              <div class="cCard">
                <h4 class="cTextBlue fw-bold mb-3">
                  <i class="fas fa-image"></i> {{ imageItem.title }}
                </h4>
                <p class="text-muted mb-3">{{ imageItem.caption }}</p>
                <img
                  :src="require('@/assets/projects/' + imageItem.location)"
                  class="w-100"
                  :alt="imageItem.title"
                />
              </div>
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

    const openLink = (link) => {
      const a = document.createElement("a");
      a.href = link;
      window.open(a.href);
    };

    return { project, projectDetails, openLink };
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
  border-radius: 8px;
  box-shadow: 2px 2px 5px 2px rgb(221, 221, 221);
}

.cDetailThumbnail:hover {
  transform: scale(1.03);
}

.cDetailContent {
  padding: 2rem 0 4rem 0;
}

.cCard {
  border-radius: 8px;
  box-shadow: 2px 2px 5px 2px rgb(221, 221, 221);
  padding: 1.5rem;
}
</style>