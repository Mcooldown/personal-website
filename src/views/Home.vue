<template>
  <div class="cLanding cBgLightGray pt-4 d-flex align-items-center">
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
          <div class="d-md-flex flex-wrap align-items-center">
            <Button
              title="DOWNLOAD MY RESUME"
              class="my-2"
              :onClick="downloadResume"
            />
            <ul class="list-unstyled d-flex ms-md-3 my-2">
              <li class="me-3">
                <a
                  href="mailto:vincenthadinata30@gmail.com"
                  class="cTextBlue cLogoSocial"
                  ><i class="fa fa-envelope fa-2x"></i
                ></a>
              </li>
              <li class="me-3">
                <a
                  href="https://www.linkedin.com/in/vincenthadinata/"
                  class="cTextBlue cLogoSocial"
                  target="_blank"
                >
                  <i class="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li class="me-3">
                <a
                  href="https://github.com/Mcooldown"
                  class="cTextBlue cLogoSocial"
                  target="_blank"
                  ><i class="fab fa-github fa-2x"></i
                ></a>
              </li>
              <li class="me-3">
                <a
                  href="https://instagram.com/vincenthadinata"
                  class="cTextBlue cLogoSocial"
                  target="_blank"
                  ><i class="fab fa-instagram fa-2x"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 d-lg-block ps-lg-4 d-none">
          <img
            src="@/assets/profile-color.webp"
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
      <div class="d-flex justify-content-center mt-4">
        <router-link :to="{ name: 'Projects' }">
          <Button title="SEE MORE PROJECTS" />
        </router-link>
      </div>
    </div>
  </div>
  <div class="cSectionSkills">
    <div class="container">
      <h1 class="cTitle cTextDarkGray fw-bold mb-md-5 mb-4 text-center">
        Tech <span class="cTextBlue">Skills</span>
      </h1>
      <div class="row">
        <div class="col-md-6 my-3">
          <SkillList category="Framework" :skills="frameworkSkills" />
        </div>
        <div class="col-md-6 my-3">
          <SkillList category="Language" :skills="languageSkills" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ProjectList from "@/components/ProjectList.vue";
import projectsJSON from "@/data/projects.json";
import SkillList from "@/components/SkillList";
import skillsJSON from "@/data/skills.json";
import { onMounted, ref } from "vue";

export default {
  name: "Home",
  components: { Button, ProjectList, SkillList },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const downloadResume = () => {
      const a = document.createElement("a");
      a.href = "CV_VincentHadinata.pdf";
      a.download = "Resume - Vincent Hadinata.pdf";
      a.click();
    };

    // Fetch Data
    const projects = ref(projectsJSON.projects.slice(0, 4));
    const frameworkSkills = ref(
      skillsJSON.skills.filter((skill) => {
        return skill.category === "Framework";
      })
    );
    const languageSkills = ref(
      skillsJSON.skills.filter((skill) => {
        return skill.category === "Language";
      })
    );

    return { downloadResume, projects, frameworkSkills, languageSkills };
  },
};
</script>

<style scoped>
.cTitle {
  font-size: 48px;
}

.cLanding {
  min-height: 120vh;
}

.cSectionProjects {
  padding: 8rem 0 4rem 0;
  background: url("../assets/pattern-1.png") no-repeat,
    url("../assets/pattern-2.png") no-repeat;
  background-size: 150px, 200px;
  background-position: 100% 20%, -5% 100%;
}

.cImgLanding {
  transition: 200ms ease all;
  cursor: pointer;
}

.cImgLanding:hover {
  transform: rotate3d(2, 10, 2, 10deg);
}

.cSectionSkills {
  padding: 4rem 0 10rem 0;
}

@media (max-width: 360.98px) {
  .cLanding {
    min-height: 150vh !important;
  }

  .cTitle {
    font-size: 32px !important;
  }
}

/* @media (max-width: 575.98px) {
} */

@media (max-width: 767.98px) {
  .cSectionProjects {
    background-size: 120px, 150px !important;
    background-position: 110% 10%, -30% 100% !important;
  }
  .cTitle {
    font-size: 36px;
  }
  .cLanding {
    min-height: 160vh;
  }
}

@media (max-width: 991.98px) {
  .cSectionProjects {
    padding: 4rem 0;
    background-size: 150px, 150px;
    background-position: 105% 10%, -5% 100%;
  }

  .cSectionSkills {
    padding: 4rem 0;
  }
}

@media (max-width: 1199.98px) {
  .cLanding {
    min-height: 120vh;
  }
}

/* @media (max-width: 1399.98px) {
} */
</style>
