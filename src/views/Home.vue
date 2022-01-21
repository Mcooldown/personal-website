<template>
  <div class="min-vh-100 cBgLightGray pt-4 d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h4 class="fw-bold cTextBlue">Hello, I'm Vincent Hadinata</h4>
          <h1 class="cTitle cTextDarkGray fw-bold mb-3">
            Computer Science Student interested in Full Stack Development
          </h1>
          <p class="text-muted">
            Currently, I am studying full stack development, which is making
            applications both on the front-end and back-end. During college, I
            served as IT Manager at BINUS English Club, where I was involved in
            all web projects belonging to the organization, besides that I was
            also involved in several web application development projects from
            lectures. I also made several personal projects after completing
            courses outside of college.
          </p>
          <Button title="DOWNLOAD MY RESUME" :onClick="downloadResume" />
        </div>
        <div class="col-lg-6 d-lg-block ps-lg-4 d-none">
          <img
            src="@/assets/profile-bnw.png"
            class="w-100 cImgLanding"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="cSectionProjects bg-white">
    <div class="container">
      <h1 class="cTitle cTextDarkGray fw-bold mb-4">
        Selected <span class="cTextBlue">Projects</span>
      </h1>
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ProjectList from "@/components/ProjectList.vue";
import projectsJSON from "@/data/projects.json";
import { ref } from "vue";

export default {
  name: "Home",
  components: { Button, ProjectList },
  setup() {
    const downloadResume = () => {
      const a = document.createElement("a");
      a.href = "CV_VincentHadinata.pdf";
      a.download = "CV - Vincent Hadinata.pdf";
      a.click();
    };

    const projects = ref(projectsJSON.projects.slice(0, 2));
    console.log(projects.value);

    return { downloadResume, projects };
  },
};
</script>

<style scoped>
.cTitle {
  font-size: 48px;
}

.cSectionProjects {
  padding: 8rem 0;
  background: url("../assets/pattern-1.png") no-repeat,
    url("../assets/pattern-2.png") no-repeat;
  background-size: 200px, 250px;
  background-position: 100% 20%, 0% 50%;
}

.cImgLanding {
  transition: 200ms ease all;
  cursor: pointer;
}

.cImgLanding:hover {
  transform: rotate3d(2, 10, 2, 10deg);
}
</style>
