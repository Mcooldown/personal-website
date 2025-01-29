<template>
  <footer class="footer">
    <div class="footer__copyright">
      {{ config.footer.copyright(currentYear) }}
    </div>
  </footer>
</template>

<script src="./js/footer.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/responsive.scss";

.footer {
  text-align: center;
  margin: 0 auto 1.5rem;
  padding: 0 2rem;
  
  @include widescreen {
    max-width: $widescreen;
    margin: 1.4rem auto;
    padding: 0;
  }
  @include mobile {
    padding: 0 0.5rem;
  }

  &__copyright {
    color: $color-gray;
    font-size: 16px;

    @include mobile {
      font-size: 14px;
      margin-top: 32px;
    }
  }
}
</style>