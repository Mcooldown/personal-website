<template>
  <div class="home">
    <div class="home__landing-wrapper">
      <div class="home__landing section-wrapper">
        <div class="landing__content">
          <div class="content__greetings">
            Hello, I'm
          </div>
          <div class="content__title">
            VINCENT HADINATA
          </div>
          <div class="content__subtitle">
            Software Engineer
          </div>
          <div class="content__description">
            I'm currently working as a Software Engineer at Mekari, with a strong interest in learning and implementing new technologies in software development. I look forward to collaborating with you. Please feel free to reach out to me.
          </div>
          <div class="content__actions">
            <Button
              title="VIEW RESUME"
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
        MY PROJECTS
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

.home {
  background-color: $color-light-gray;

  &__landing {
    display: flex;
    justify-content: space-around;
    gap: 56px;
    padding-top: 120px;

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
              font-size: 44px
            }
          }
          &__subtitle {
            color: $color-dark-gray;
            font-family: $font-bold;
            font-size: 26px;
            margin-top: 8px;

            @include mobile {
              font-size: 22px;
            }
          }
          &__description {
            color: $color-gray;
            margin-top: 24px;
            font-size: 18px;

            @include mobile {
              margin-top: 16px;
              font-size: 16px;
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

                svg {
                  width: 28px;
                
                  @include mobile {
                    width: 24px;
                  }
                }

                &:hover {
                  color: $color-blue;
                }
              }
            }
          }
        }
      }

      &__image {
        width: 32%;
        align-self: flex-end;

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
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .projects {
      &__title {
        font-size: 44px;
        font-family: $font-black;
        color: $color-blue;
        margin: 0 0 24px;

        @include mobile {
          font-size: 28px;
          margin-bottom: 16px;
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
