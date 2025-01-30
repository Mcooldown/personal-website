<template>
  <div class="home">
    <div class="home__landing-wrapper">
      <div class="home__landing section-wrapper">
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
          <div class="content__actions">
            <Button
              :title="config.home.landing.button"
              @click="viewResume"
              icon="fa fa-file"
            />
            <a
              v-for="(contact, index) of config.contacts"
              :key="`nav-item-contact-${index+1}`"
              :href="contact.link"
              class="actions__contact-item"
              target="_blank"
            >
              <i :class="['fa-2x', contact.icon]"/>
            </a>
          </div>
        </div>
        <img
          src="@/assets/landing-image.webp"
          class="landing__image"
          alt=""
        />
      </div>
    </div>
    <div class="section-wrapper home__projects">
      <h2 class="projects__title">
        {{ config.home.projects.title }}
      </h2>
      <div class="projects__list">
        <ProjectItem
          v-for="project in sortedProjectsByLatest"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
    <div class="home__copyright">
      {{ config.copyright(new Date().getFullYear()) }}
    </div>
  </div>
</template>

<script src="./js/home-page.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables";
@import "~@/styles/responsive";

.section-wrapper {
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

.home {
  background-color: $color-light-gray;

  &__landing {
    display: flex;
    justify-content: space-around;
    gap: 32px;
    margin-top: 120px;

    &-wrapper {
      position: relative;
      z-index: 3;
      box-shadow: 0 4px 4px 0px $color-shadow;
      background-color: $color-white;
    }
    
    .landing {
      &__content {
        align-self: center;
        margin-bottom: 80px;

        .content {
          &__greetings {
            color: $color-dark-gray;
            font-size: 24px;
            
            @include mobile {
              font-size: 20px
            }
          }
          &__title {
            color: $color-blue;
            font-family: $font-black;
            font-size: 72px;
            max-width: 400px;
            
            @include mobile {
              font-size: 52px
            }
          }
          &__subtitle {
            color: $color-dark-gray;
            font-family: $font-bold;
            font-size: 24px;
            margin-top: 8px;
          }
          &__description {
            color: $color-gray;
            margin-top: 24px;
            font-size: 18px;

            @include mobile {
              margin-top: 16px;
            }
          }
          &__actions {
            margin-top: 32px;
            display: flex;
            align-items: center;
            gap: 24px;
            flex-wrap: wrap;

            @include mobile {
              margin-top: 24px;
              gap: 16px;
            }

            .actions {
              &__contact-item {
                color: $color-gray;

                &:hover {
                  color: $color-blue;
                }
              }
            }
          }
        }
      }

      &__image {
        width: 35%;
        align-self: flex-end;
        margin-right: 32px;

        @include mobile {
          display: none;
        }
      }
    }
  }

  &__projects {
    padding-top: 4rem;
    padding-bottom: 4rem;

    @include mobile {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
    }

    .projects {
      &__title {
        font-size: 44px;
        font-family: $font-black;
        color: $color-blue;
        margin: 0 0 24px;

        @include mobile {
          font-size: 36px;
          margin-bottom: 20px;
        }
      }
      &__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        
        @include mobile {
          grid-template-columns: 1fr;
        }
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
