<template>
  <div class="home">
    <div class="home__landing">
      <div class="landing__content">
          <div class="content__greetings">
            {{ config.home.landing.top }}
          </div>
          <div class="content__title">
            {{ config.home.landing.title }}
          </div>
          <div class="content__subtitle">
            {{ config.home.landing.subtitle }}
          </div>
          <div class="content__description">
            {{ config.home.landing.description }}
          </div>
          <div class="content__button">
            <Button
              :title="config.home.landing.button"
              @click="viewResume"
              icon="fa fa-file"
            />
          </div>
      </div>
      <img
        src="@/assets/profile-color.webp"
        class="landing__image"
        alt=""
      />
    </div>
    <div class="home__projects">
      <div class="projects__title">
        {{ config.home.projects["title-1"] }} 
        <span class="blue">
          {{ config.home.projects["title-2"] }}
        </span>
      </div>
      <ProjectList :projects="projects" />
      <div class="projects__button">
        <Button
          :title="config.home.projects.button"
          @click="goToProjectsPage"
        />
      </div>
    </div>
  </div>
</template>

<script src="./js/home.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables";
@import "~@/styles/responsive";

.home {
  padding: 0 2rem;
  margin: 10rem auto 12rem;

  @include widescreen {
    max-width: $widescreen;
    padding: 0;
  }

  @include mobile {
    margin-bottom: 8rem;
    padding: 0 0.5rem;
  }

  &__landing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
    margin-top: 10rem;

    .landing {
      &__content {
        .content {
          &__greetings {
            color: $color-gray;
            font-size: 18px;
            
            @include mobile {
              font-size: 16px
            }
          }
          &__title {
            color: $color-dark-gray;
            font-family: $font-bold;
            font-size: 36px;
            
            @include mobile {
              font-size: 32px
            }
          }
          &__subtitle {
            color: $color-blue;
            font-family: $font-bold;
            font-size: 32px;
            line-height: 2.8rem;
            
            @include mobile {
              font-size: 28px;
              line-height: 2.4rem;
            }
          }
          &__description {
            color: $color-gray;
            margin-top: 16px;
            font-size: 16px;
          }
          &__button {
            margin-top: 24px;
          }
        }
      }

      &__image {
        transition: 200ms ease all;
        cursor: pointer;
        width: 42%;

        &:hover {
          transform: scale(1.03);
        }

        @include mobile {
          display: none;
        }
      }
    }
  }

  &__projects {
    margin-top: 8rem;

    @include mobile {
      margin: 6rem 0;
    }

    .projects {
      &__title {
        font-size: 36px;
        font-family: $font-bold;
        color: $color-dark-gray;
        margin-bottom: 20px;

        @include mobile {
          font-size: 28px;
        }

        .blue {
          color: $color-blue;
          font-family: $font-bold;
        }
      }

      &__button {
        margin-top: 36px;
        text-align: center;
      }
    }
  }
}
</style>
