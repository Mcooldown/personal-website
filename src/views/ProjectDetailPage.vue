<template>
  <div class="project-detail-page">
    
  </div>
</template>

<script src="./js/project-detail-page.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/responsive.scss";

.project-detail-page {
  padding: 0 2rem;
  margin: auto;

  @include widescreen {
    max-width: $widescreen;
    padding: 0;
  }

  @include mobile {
    padding: 0 1.25rem;
  }
}
</style>