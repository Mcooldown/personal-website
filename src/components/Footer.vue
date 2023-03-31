<template>
  <footer class="footer">
    <div class="footer__title">
      {{ config.footer.title }}
    </div>
    <div class="footer__description">
      {{ config.footer.description }}
    </div>
    <div class="footer__contacts">
      <div
        v-for="(contact, index) of config.footer.contacts"
        :key="`contact-${index+1}`"
      >
        <a
          :href="contact.link"
          class="contacts__item"
          target="_blank"
        >
          <i :class="['fa-2x', contact.icon]"/>
        </a>
      </div>
    </div>
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
  margin: 0 auto 1.5rem auto;
  padding: 0 2rem;
  
  @include widescreen {
    max-width: $widescreen;
    margin: 2rem auto;
    padding: 0;
  }
  @include mobile {
    padding: 0 0.5rem;
  }

  &__title {
    font-family: $font-bold;
    color: $color-dark-gray;
    font-size: 32px;

    @include mobile {
      font-size: 28px;
    }
  }
  
  &__description {
    margin-top: 8px;
    color: $color-gray;
    font-size: 16px;

    @include mobile {
      margin-top: 4px;
    }
  }

  &__contacts {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 20px;

    @include mobile {
      margin-top: 20px;
    }

    .contacts {
      &__item {
        transition: 300ms ease all;
        color: $color-blue;
        
        &:hover {
          color: #004f6e;
        }
      }
    }
  }

  &__copyright {
    margin-top: 40px;
    color: $color-gray;

    @include mobile {
      font-size: 14px;
      margin-top: 32px;
    }
  }
}
</style>