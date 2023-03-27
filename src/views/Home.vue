<template>
  <div class="cLanding bg-white d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6">
          <div class="cTop cTextGray mb-2">
            {{ config.home.landing.top }}
          </div>
          <h1 class="cTitle cTextDarkGray fw-bold mb-2">
            {{ config.home.landing.title }}
          </h1>
          <h1 class="cSubTitle cTextBlue fw-bold mb-3 mb-lg-4">
            {{ config.home.landing.subtitle }}
          </h1>
          <div class="cTextDescription cTextGray">
            {{ config.home.landing.description }}
          </div>
          <div class="mt-4">
            <Button
              :title="config.home.landing.button"
              @click="viewResume"
              icon="fa fa-file"
            />
          </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <img
            src="@/assets/profile-color.webp"
            class="w-100 cImgLanding ms-3"
            alt="Vincent Hadinata"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="cSectionProjects">
    <div class="container">
      <div class="d-flex">
        <h1 class="cSubTitle cTextDarkGray fw-bold mb-md-4 mb-3">
          {{ config.home.projects["title-1"] }}
        </h1>
        <h1 class="cSubTitle cTextBlue fw-bold mb-md-4 mb-3 ms-2">
          {{ config.home.projects["title-2"] }}
        </h1>
      </div>
      <ProjectList :projects="projects" />
      <div class="d-flex justify-content-center mt-md-4 mt-3">
        <router-link :to="{ name: 'Projects' }">
          <Button :title="config.home.projects.button" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script src="./js/home.js"></script>

<style scoped>
.cTop {
  font-size: 24px;
}

.cTitle {
  font-size: 48px;
}

.cSubTitle {
  font-size: 36px;
}

.cTextDescription {
  font-size: 18px;
}

.cLanding {
  padding: 12rem 0 4rem 0;
}

.cSectionProjects {
  padding: 6rem 0 12rem 0;
}

.cImgLanding {
  transition: 200ms ease all;
  cursor: pointer;
  padding: 0 48px;
}

.cImgLanding:hover {
  transform: scale(1.03);
}

@media (max-width: 767.98px) {
  .cTop {
    font-size: 18px !important;
  }
  .cTitle {
    font-size: 32px !important;
  }
  .cSubTitle {
    font-size: 28px !important;
  }
  .cTextDescription {
    font-size: 16px !important;
  }
  .cSectionProjects {
    padding: 6rem 0 !important;
  }
}

@media (max-width: 1199.98px) {
  .cLanding {
    padding: 10rem 0 2rem 0;
  }
  .cSectionProjects {
    padding: 6rem 0;
  }
  .cTop {
    font-size: 18px;
  }
  .cTitle {
    font-size: 32px;
  }
  .cSubTitle {
    font-size: 28px;
  }
  .cTextDescription {
    font-size: 16px;
  }
  .cImgLanding {
    padding: 0 24px;
  }
}
</style>
