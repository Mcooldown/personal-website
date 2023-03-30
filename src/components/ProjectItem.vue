<template>
  <div
    class="project-item"
    @click="goToProjectDetailPage"
  >
    <img
      :src="require(`@/assets/projects/${project.thumbnail}`)"
      class="project-item__thumbnail"
      :alt="project.title"
    />
    <h2 class="project-item__title">
      {{ project.title }}
    </h2>
    <p class="project-item__description">
      {{ project.short_description }}
    </p>
    <div class="project-item__tech-stacks">
      <div 
        v-for="tech in project.tech_stack"
        :key="tech"
        class="tech-stacks__item"
      >
        {{ tech }}
      </div>
    </div>
  </div>
</template>

<script src="./js/project-item.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/responsive.scss";

.project-item {
  transition: 200ms ease all;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 2px $color-shadow;
  background: $color-white;
  height: 100%;
  padding: 1.5rem;
  
  @include mobile {
    padding: 1rem;
  }

  &:hover {
    transform: scale(1.02);
  }

  a {
    text-decoration: none;
  }

  &__thumbnail {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  &__title {
    color: $color-dark-gray;
    font-weight: bold;
  }

  &__description {
    color: $color-gray;
  }

  &__tech-stacks {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .tech-stacks {
      &__item {
        border-radius: 8px;
        background-color: $color-blue;
        padding: 4px 10px;
        color: $color-white;
      }
    }
  }
}
</style>