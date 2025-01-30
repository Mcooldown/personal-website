<template>
  <RouterLink
    :to="`/${project.slug}`"
    class="project-item"
  >
    <img
      :src="require(`@/assets/projects/${project.thumbnail}`)"
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
      <Badge 
        v-for="tech in project.tech_stack"
        :key="tech"
        :title="tech"
      />
    </div>
  </RouterLink>
</template>

<script src="./js/project-item.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/responsive.scss";

.project-item {
  transition: 200ms ease all;
  cursor: pointer;
  border-radius: 8px;
  background: $color-white;
  padding: 1.5rem;
  text-decoration: none;
  
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
    margin-top: 16px;
    color: $color-dark-gray;
    font-family: $font-bold;
    font-size: 28px;

    @include mobile {
      font-size: 26px;
    }
  }
  
  &__description {
    color: $color-gray;
    font-size: 18px;
    margin-top: 8px;

    @include mobile {
      font-size: 16px;
    }
  }

  &__tech-stacks {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }
}
</style>