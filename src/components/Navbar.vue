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
        <div
          v-for="(item, index) of navItems"
          :key="`nav-item-${index+1}`"
          :class="['list__item', { 'active': item.isActive }]"
          @click="item.action"
        >
          <div class="item__title">
            {{ item.title }}
          </div>
          <div class="item__icon">
            <i :class="[item.icon]" />
          </div>
        </div>
        <a
          v-for="(contact, index) of config.footer.contacts"
          :key="`nav-item-contact-${index+1}`"
          :href="contact.link"
          class="list__contact-item"
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
      padding: 0 1rem;
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
    gap: 48px;
    align-items: center;

    @include mobile {
      gap: 16px;
    }
    .list {
      &__item {
        cursor: pointer;
        color: $color-dark-gray;

        &:hover {
          color: $color-blue;
        }
        .item {
          &__title {
            font-size: 16px;
            font-family: $font-bold;
            letter-spacing: 1.5px;

            @include mobile {
              display: none;
            }
          }
          &__icon {
            display: none;
            transition: 200ms ease all;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            
            @include mobile {
              display: flex;
            }

            svg {
              font-size: 1em;
            }
          }
        }

        &.active {
          .item {
            &__title {
              color: $color-blue;
            }
            &__icon {
              background: $color-blue;

              svg {
                color: $color-white;
              }
            }
          }
        }
      }
      &__contact-item {
        color: $color-gray;

        &:not(:first-of-type) {
          margin-left: -24px;
        }

        svg {
          width: 24px;
        }
          
        &:hover {
          color: $color-blue;
        }
      }
    }
  }
}
</style>