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
              v-for="(contact, index) of config.footer.contacts"
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
          src="@/assets/landing-image.png"
          class="landing__image"
          alt=""
        />
      </div>
    </div>
    <div class="home__projects-wrapper">
      <div class="section-wrapper home__projects">
      </div>
    </div>
    <!-- <div class="home__projects-wrapper">
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
    </div> -->
  </div>
</template>

<script src="./js/home.js"></script>

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
    padding: 0 0.5rem;
  }
}

.home {
  &__landing {
    display: flex;
    justify-content: space-around;
    gap: 32px;
    margin-top: 120px;

    &-wrapper {
      position: relative;
      z-index: 3;
      box-shadow: 0 4px 4px 0px $color-shadow;
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
              font-size: 16px
            }
          }
          &__title {
            color: $color-blue;
            font-family: $font-black;
            font-size: 72px;
            
            @include mobile {
              font-size: 32px
            }
          }
          &__subtitle {
            color: $color-dark-gray;
            font-family: $font-bold;
            font-size: 24px;
            margin-top: 8px;
            
            @include mobile {
              font-size: 28px;
              line-height: 2.4rem;
            }
          }
          &__description {
            color: $color-gray;
            margin-top: 24px;
            font-size: 18px;
          }
          &__actions {
            margin-top: 32px;
            display: flex;
            align-items: center;
            gap: 24px;

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
    height: 800px;
    
    &-wrapper {
      background-color: $color-light-gray;
    }
  }

  // &__projects {
  //   &-wrapper {
  //     padding: 0 2rem;
  //     margin: 10rem auto 12rem;
  //     background-color: $color-light-gray;
  //   }
  //   @include widescreen {
  //     max-width: $widescreen;
  //     padding: 0;
  //   }

  //   @include mobile {
  //     margin-bottom: 8rem;
  //     padding: 0 0.5rem;
  //   }

  //   @include mobile {
  //     margin: 6rem 0;
  //   }
    
  //   .projects {
  //     &__title {
  //       font-size: 36px;
  //       font-family: $font-bold;
  //       color: $color-dark-gray;
  //       margin-bottom: 20px;

  //       @include mobile {
  //         font-size: 28px;
  //       }

  //       .blue {
  //         color: $color-blue;
  //         font-family: $font-bold;
  //       }
  //     }

  //     &__button {
  //       margin-top: 36px;
  //       text-align: center;
  //     }
  //   }
  // }
}
</style>
