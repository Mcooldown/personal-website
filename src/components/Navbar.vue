<template>
  <nav :class="['v-navbar', {'visible-shadow': visibleShadow }]">
    <div class="v-navbar__container">
      <img 
        src="@/assets/logo.png"
        class="v-navbar__logo"
        alt=""
        @click="goToHomePage"
      />
      <div class="v-navbar__list">
        <a
          v-for="(contact, index) of config.contacts"
          :key="`nav-item-contact-${index+1}`"
          :href="contact.link"
          class="list__item"
          target="_blank"
        >
          <i :class="['fa-2x', contact.icon]"/>
        </a>
      </div>
    </div>
  </nav>
</template>

<script src="./js/navbar.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/responsive.scss";

.v-navbar {
  background: $color-white;
  position: fixed;
  top: 0;
  left: 0;
  padding: 16px 0;
  width: 100%;
  z-index: 999;

  &.visible-shadow {
    box-shadow: 0 1px 8px rgba($color-gray, 0.2);
  }

  &__container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    @include mobile {
      padding: 0 1.25rem;
    }

    @include widescreen {
      max-width: $widescreen;
      padding: 0;
    }
  }

  &__logo {
    height: 36px;
    cursor: pointer;
    transition: 200ms ease all;

    &:hover {
      transform: scale(1.25);
    }
  }

  &__list {
    display: flex;
    gap: 32px;
    align-items: center;

    @include mobile {
      gap: 24px;
    }
    .list {
      &__item {
        color: $color-gray;
        
        svg {
          width: 28px;
        }
          
        &:hover {
          color: $color-blue;
        }
      }
    }
  }
}
</style>