<template>
  <div class="not-found">
    <div class="not-found__icon">
      <i class="fa fa-6x fa-exclamation-triangle" />
    </div>
    <div class="not-found__title">
      {{ config.notFound.title }}
    </div>
    <div class="not-found__description">
      {{ config.notFound.description }}
    </div>
    <Button
      :title="config.notFound.button"
      @click="goToHomePage"
      class="not-found__button"
    />
  </div>
</template>

<script src="./js/not-found.js"></script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/responsive.scss";

.not-found {
  padding: 0 2rem;
  margin: 10rem auto;
  text-align: center;

  @include widescreen {
    max-width: $widescreen;
    padding: 0;
  }

  @include mobile {
    margin: 7rem 0 3rem 0;
    padding: 0 0.5rem;
  }

  &__icon {
    color: $color-blue;
  }
  &__title {
    color: $color-dark-gray;
    font-family: $font-bold;
    margin-top: 24px;
    font-size: 28px;
  }
  &__description {
    color: $color-gray;
    margin-top: 8px;
  }
  &__button {
    margin-top: 32px;
  }
}
</style>