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

.button {
  border: 1px solid $color-blue;
  padding: 12px 20px;
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
    padding-right: 8px;
  }
}
</style>