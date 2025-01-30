<template>
  <div class="not-found">
    <div>
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
  </div>
</template>

<script src="./js/not-found-page.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/responsive.scss";

.not-found {
  padding: 0 2rem;
  text-align: center;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    color: $color-blue;
  }
  &__title {
    color: $color-dark-gray;
    font-family: $font-bold;
    margin-top: 32px;
    font-size: 36px;
  }
  &__description {
    color: $color-gray;
    margin-top: 16px;
    font-size: 20px;
  }
  &__button {
    margin-top: 32px;
  }
}
</style>