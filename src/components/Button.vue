<template>
  <button class="button">
    <i
      v-if="icon"
      :class="[icon, { 'button__icon': !!title}]"
    />
    {{ title }}
  </button>
</template>

<script src="./js/button.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/responsive.scss";

.button {
  border: 1px solid $color-blue;
  padding: 10px 16px;
  transition: 200ms ease all;
  color: $color-blue;
  background: transparent;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: $color-blue;
    color: $color-white;
  }

  &__icon {
    padding-right: 4px;
  }

  @include mobile {
    font-size: 14px;
    padding: 8px 14px;
  }
}
</style>