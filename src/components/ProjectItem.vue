<template>
  <div
    class="project-item"
    @click="goToProjectDetailPage"
  >
    <img
      :src="imageUrl"
      class="project-item__thumbnail"
      :alt="project.title"
    />
    <div class="project-item__title">
      {{ project.title }}
    </div>
    <div class="project-item__description">
      {{ project.short_description }}
    </div>
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
@import "@/styles/variables.scss";
@import "@/styles/responsive.scss";

.project-item {
  transition: 200ms ease all;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 1px 1px 10px $color-shadow;
  background: $color-white;
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
  }
  
  &__title {
    margin-top: 12px;
    color: $color-dark-gray;
    font-family: $font-bold;
    font-size: 28px;

    @include mobile {
      font-size: 24px;
    }
  }
  
  &__description {
    color: $color-gray;
    font-size: 16px;
    margin-top: 4px;
  }

  &__tech-stacks {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 24px;

    .tech-stacks {
      &__item {
        border-radius: 8px;
        background-color: $color-blue;
        padding: 4px 12px;
        color: $color-white;
        font-size: 16px;
      }
    }
  }
}
</style>