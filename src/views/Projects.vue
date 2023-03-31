<template>
  <div class="projects">
    <div class="projects__title">
      {{ config.projects["title-1"] }} <span class="blue">{{ config.home.projects["title-2"] }}</span>
    </div>
    <div class="projects__subtitle">
      {{ config.projects.subtitle }}
    </div>
    <ProjectList :projects="projects" />
  </div>
</template>

<script src="./js/projects.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables";
@import "~@/styles/responsive";

.projects {
  margin: 10rem auto 12rem;
  padding: 0 2rem;

  @include widescreen {
    max-width: $widescreen;
    padding: 0;
  }

  @include mobile {
    margin: 7rem 0;
    padding: 0 0.5rem;
  }

  &__title {
    font-size: 36px;
    font-family: $font-bold;
    color: $color-dark-gray;
    margin-bottom: 4px;

    @include mobile {
      font-size: 28px;
    }

    .blue {
      color: $color-blue;
      font-family: $font-bold;
    }
  }

  &__subtitle {
    font-size: 16px;
    margin-bottom: 28px;
    color: $color-gray;

    @include mobile {
      margin-bottom: 20px;
    }
  }
}
</style>