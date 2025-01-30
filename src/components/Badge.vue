<template>
  <div class="badge">
    {{ title }}
  </div>
</template>

<script src="./js/badge.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.badge {
  border-radius: 8px;
  background-color: $color-blue;
  padding: 6px 12px;
  color: $color-white;
  font-size: 16px;
}
</style>