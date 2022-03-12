<template>
  <div class="cLanding bg-white d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h3 class="fw-bold cTextBlue mb-2">Hello, I'm Vincent Hadinata</h3>
          <h1 class="cTitle cTextDarkGray fw-bold mb-3">
            Full Stack Development Enthusiast
          </h1>
          <p class="text-muted">
            I have an interest in full stack development, and I'm currently
            exploring this field, where I learn various technologies to create
            applications on both the front end and back end. I have also been
            involved in several group projects and personal projects as a result
            of my learning. Please contact me if you are interested in working
            with me!
          </p>
          <div class="d-flex cWrapperBtnSocial flex-wrap align-items-center">
            <Button
              title="VIEW RESUME"
              icon="fa fa-file"
              class="my-2"
              :onClick="viewResume"
            />
            <ul class="list-unstyled d-flex cWrapperListSocial my-2">
              <li class="me-3">
                <a
                  href="mailto:vincenthadinata30@gmail.com"
                  class="cTextBlue cLogoSocial"
                  target="_blank"
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
            </ul>
          </div>
        </div>
        <div class="col-lg-6 d-lg-block d-none">
          <img
            src="@/assets/profile-color.webp"
            class="w-100 cImgLanding p-5 ms-4"
            alt="Vincent Hadinata"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="cSectionProjects bg-white">
    <div class="container">
      <h1 class="cTitle cTextDarkGray fw-bold mb-md-4 mb-3">
        Selected <span class="cTextBlue">Projects</span>
      </h1>
      <ProjectList :projects="projects" />
      <div class="d-flex justify-content-center mt-md-4 mt-3">
        <router-link :to="{ name: 'Projects' }">
          <Button title="SEE MORE PROJECTS" />
        </router-link>
      </div>
    </div>
  </div>
  <div class="cSectionSkills">
    <div class="container">
      <h1 class="cTitle cTextDarkGray fw-bold mb-md-4 mb-3 text-center">
        Tech <span class="cTextBlue">Skills</span>
      </h1>
      <div class="row justify-content-center">
        <div class="col-md-10 my-3">
          <SkillList category="Front-End" :skills="frontEndSkills" />
        </div>
        <div class="col-md-10 my-3">
          <SkillList category="Back-End" :skills="backEndSkills" />
        </div>
        <div class="col-md-10 my-3">
          <SkillList category="Language" :skills="languageSkills" />
        </div>
        <div class="col-md-10 my-3">
          <SkillList category="Software" :skills="softwareSkills" />
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

    const viewResume = () => {
      const a = document.createElement("a");
      a.href = "Resume - Vincent Hadinata.pdf";
      window.open(a.href);
    };

    // Fetch Data
    const projects = ref(
      projectsJSON.projects.filter((project) => {
        return project.selected === true;
      })
    );
    const frontEndSkills = ref(
      skillsJSON.skills.filter((skill) => {
        return skill.category === "Front-End";
      })
    );
    const backEndSkills = ref(
      skillsJSON.skills.filter((skill) => {
        return skill.category === "Back-End";
      })
    );
    const languageSkills = ref(
      skillsJSON.skills.filter((skill) => {
        return skill.category === "Language";
      })
    );
    const softwareSkills = ref(
      skillsJSON.skills.filter((skill) => {
        return skill.category === "Software";
      })
    );

    return {
      viewResume,
      projects,
      frontEndSkills,
      backEndSkills,
      softwareSkills,
      languageSkills,
    };
  },
};
</script>

<style scoped>
.cTitle {
  font-size: 42px;
}

.cSectionProjects {
  padding: 4rem 0 4rem 0;
}

.cImgLanding {
  transition: 200ms ease all;
  cursor: pointer;
}

.cImgLanding:hover {
  transform: scale(1.03);
}

.cSectionSkills {
  padding: 4rem 0 10rem 0;
}

.cWrapperBtnSocial {
  display: flex;
}
.cWrapperListSocial {
  margin-left: 1.5rem;
}
.cLanding {
  padding-bottom: 2rem;
}

@media (max-width: 360.98px) {
  .cTitle {
    font-size: 32px !important;
  }
  .cWrapperBtnSocial {
    display: block;
  }
  .cWrapperListSocial {
    margin-left: 0;
  }
}

/* @media (max-width: 575.98px) {
} */

@media (max-width: 767.98px) {
  .cTitle {
    font-size: 36px;
  }

  .cSectionProjects {
    padding: 2rem 0;
  }
  .cSectionSkills {
    padding: 2rem 0;
  }
}

@media (max-width: 991.98px) {
  .cSectionProjects {
    padding: 3rem 0;
  }
  .cSectionSkills {
    padding: 3rem 0;
  }

  .cLanding {
    padding-top: 3rem;
  }
}

/* @media (max-width: 1199.98px) {
} */

/* @media (max-width: 1399.98px) {
} */
</style>
