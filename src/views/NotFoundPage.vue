<template>
  <div class="not-found">
    <div>
      <div class="not-found__icon">
        <i class="fa fa-6x fa-exclamation-triangle" />
      </div>
      <div class="not-found__title">
        Page Not Found
      </div>
      <div class="not-found__description">
        Sorry, your requested page doesn't exist. Please go to another page.
      </div>
      <Button
        title="BACK TO HOME"
        @click="goToHomePage"
        class="not-found__button"
        icon="fa fa-home"
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
    font-size: 32px;
  }
  &__description {
    color: $color-gray;
    margin-top: 16px;
    font-size: 18px;
  }
  &__button {
    margin-top: 24px;
  }
}
</style>