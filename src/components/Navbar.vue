<template>
  <nav :class="['v-navbar', {'visible-shadow': visibleShadow }]">
    <div class="v-navbar__container">
      <img 
        src="@/assets/vh-logo.png"
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
  padding: 16px 0;
  width: 100%;
  z-index: 999;

  &.visible-shadow {
    box-shadow: 0 1px 8px rgba($color-gray, 0.2);
  }

  &__container {
    padding: 0 1.25rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include widescreen {
      max-width: $widescreen;
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

    @include mobile {
      gap: 16px;
    }
    .list {
      &__item {
        cursor: pointer;
        transition: 200ms ease all;

        &:hover {
          transform: scale(1.1);
        }
        .item {
          &__title {
            font-size: 16px;
            font-family: $font-bold;

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
    }
  }
}
</style>