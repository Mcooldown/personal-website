<template>
  <div v-if="project" class="project-detail-page">
    <div class="project-detail-page__header">
      <div class="section-wrapper">
        <div class="header__breadcrumbs">
          <RouterLink :to="config.page.home"
            ><i class="fa fa-home"></i>&nbsp;Home</RouterLink
          >
          <i class="fa fa-chevron-right"></i>
          <span>Project - {{ project.title }}</span>
        </div>
        <div class="header__landing">
          <img
            :src="require(`@/assets/projects/${project.thumbnail}`)"
            alt=""
            class="landing__image"
          />
          <div>
            <h1 class="landing__title">{{ project.title }}</h1>
            <p class="landing__description">{{ project.short_description }}</p>
            <p class="landing__tech-stack-title">
              Tech Stack:
            </p>
            <div class="landing__tech-stack-list">
              <Badge
                v-for="tech in project.tech_stack"
                :key="tech"
                :title="tech"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-wrapper project-detail-page__details">
      <div
        v-if="project.full_description"
        class="box details__full-description"
      >
        <div v-html="project.full_description"></div>
      </div>
      <div v-if="project.links?.length" class="box details__link">
        <div v-for="(link, index) of project.links" :key="`link-${index}`">
          <span class="link__label">{{ link.label }}</span
          >:&nbsp;&nbsp;<a
            :href="link.value"
            target="_blank"
            class="link__value"
            >{{ link.value }}</a
          >
        </div>
      </div>
      <template v-if="project.images?.length">
        <img
          v-for="image of project.images"
          :src="require(`@/assets/projects/${image}`)"
          alt=""
          class="details__image"
        />
      </template>
    </div>
    <div class="project-detail-page__copyright">
      {{ config.copyright(new Date().getFullYear()) }}
    </div>
  </div>
</template>

<script src="./js/project-detail-page.js"></script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/responsive.scss';

.box {
  background-color: $color-white;
  border-radius: 8px;
  padding: 20px;
}

.project-detail-page {
  background-color: $color-light-gray;
  min-height: 100vh;

  &__header {
    position: relative;
    z-index: 3;
    box-shadow: 0 4px 4px 0px $color-shadow;
    background-color: $color-white;
    padding: 120px 0 100px;

    @include mobile {
      padding: 100px 0 40px;
    }

    .header {
      &__breadcrumbs {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        font-size: 16px;

        a {
          text-decoration: none;
          color: $color-blue;

          svg {
            color: $color-blue;
          }
        }
        svg {
          color: $color-dark-gray;
        }
        span {
          color: $color-gray;
        }
      }

      &__landing {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 48px;
        margin-top: 32px;

        @include mobile {
          flex-direction: column;
          gap: 24px;
          margin-top: 24px;
        }

        .landing {
          &__image {
            width: 50%;
            border-radius: 8px;
            border: 1px solid $color-light-gray;

            @include mobile {
              width: 100%;
            }
          }
          &__title {
            color: $color-blue;
            font-family: $font-black;
            text-transform: uppercase;
            font-size: 44px;
            margin: 0;

            @include mobile {
              font-size: 32px;
            }
          }
          &__description {
            color: $color-gray;
            font-size: 18px;
            margin: 16px 0 0;

            @include mobile {
              margin-top: 12px;
              font-size: 16px;
            }
          }
          &__tech-stack {
            &-title {
              margin: 28px 0 0;
              font-size: 20px;
              color: $color-dark-gray;
              font-family: $font-bold;

              @include mobile {
                font-size: 18px;
                margin-top: 24px;
              }
            }
            &-list {
              margin-top: 8px;
              display: inline-flex;
              align-items: center;
              flex-wrap: wrap;
              gap: 8px;
            }
          }
        }
      }
    }
  }

  &__details {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include mobile {
      padding-top: 2rem;
      padding-bottom: 2rem;
      gap: 20px;
    }

    .details {
      &__full-description {
        font-size: 18px;
        color: $color-dark-gray;
      }
      &__link {
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-size: 18px;

        .link {
          &__label {
            color: $color-dark-gray;
          }
          &__value {
            font-family: $font-bold;
            color: $color-blue;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      &__image {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
  &__copyright {
    text-align: center;
    color: $color-dark-gray;
    padding: 20px 0;
    font-size: 16px;
  }
}
</style>
