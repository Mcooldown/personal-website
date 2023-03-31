<template>
  <div class="project-details">
    <div
      v-if="!project"
      class="project-details__not-found"
    >
      <div class="not-found__icon">
        <i class="fa fa-6x fa-exclamation-triangle" />
      </div>
      <div class="not-found__title">
        {{ config.projectDetails.notFound.title }}
      </div>
      <div class="not-found__description">
        {{ config.projectDetails.notFound.description }}
      </div>
      <Button
        :title="config.projectDetails.notFound.button"
        @click="goToProjectPage"
        class="not-found__button"
      />
    </div>
    <template v-if="project">
      <div class="project-details__project">
        <img
          :src="require(`@/assets/projects/${project.thumbnail}`)"
          alt=""
          class="project__image"
        />
        <div class="project__content">
          <div class="content__title">
            {{ project.title }}
          </div>
          <div class="content__description">
            {{ project.short_description }}
          </div>
          <div class="content__tech-stacks-title">
            {{ config.projectDetails.techStack }}
          </div>
          <div class="content__tech-stacks">
            <div 
              v-for="tech in project.tech_stack"
              :key="tech"
              class="tech-stacks__item"
            >
              {{ tech }}
            </div>
          </div>
        </div>
      </div>
      <div class="project-details__details">
        <div
          v-if="!projectDetails.length"
          class="details__no-details"
        >
          {{ config.projectDetails.noDetails }}
        </div>
        <template v-if="projectDetails.length">
          <div
            v-for="detail in projectDetails"
            :key="detail.id"
            class="details__detail-item"
          >
            <div class="detail-item__title">
              {{ detail.section_name }}
            </div>

            <!-- TEXT -->
            <template v-if="detail.text.length">
              <div
                v-for="textItem in detail.text"
                :key="textItem.title"
                class="detail-item__content"
              >
                <div class="content__card">
                  <div class="content__title">
                    <i class="fa fa-info-circle" />
                    {{ textItem.title }}
                  </div>
                  <div class="content__description">
                    {{ textItem.content }}
                  </div>
                </div>
              </div>
            </template>

            <!-- LINK -->
            <div class="detail-item__content">
              <div
                v-if="detail.link.length" 
                class="content__link-section"
              >
                <div
                  v-for="linkItem in detail.link"
                  :key="linkItem.title"
                  class="content__card"
                >
                  <div class="content__title">
                    <i class="fas fa-link" />
                    {{ linkItem.title }}
                  </div>
                  <Button
                    :title="config.projectDetails.openLinkButton"
                    class="content__button"
                    @click="openLink(linkItem.content)"
                  />
                </div>
              </div>
            </div>

            <!-- IMAGES -->
            <div class="detail-item__content">
              <div
                v-if="detail.images.length"
                class="content__image-section"
              >
                <div
                  v-for="imageItem in detail.images"
                  :key="imageItem.title"
                  class="content__card"
                >
                  <div class="content__title">
                    <i class="fas fa-image" />
                    {{ imageItem.title }}
                  </div>
                  <div class="content__description">
                    {{ imageItem.caption }}
                  </div>
                  <img
                    :src="require(`@/assets/projects/${imageItem.location}`)"
                    class="content__image"
                    :alt="imageItem.title"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script src="./js/project-details.js"></script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/responsive.scss";

.project-details {
  padding: 0 1.25rem;
  margin: 10rem auto;

  @include widescreen {
    max-width: $widescreen;
  }

  @include mobile {
    margin: 7rem 0 3rem 0;
  }

  &__not-found {
    text-align: center;

    .not-found {
      &__icon {
        color: $color-blue;
      }
      &__title {
        color: $color-dark-gray;
        font-family: $font-bold;
        margin-top: 24px;
        font-size: 28px;
      }
      &__description {
        color: $color-gray;
        margin-top: 8px;
      }
      &__button {
        margin-top: 32px;
      }
    }
  }

  &__project {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    
    @include mobile {
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .project {
      &__image {
        transition: 200ms ease all;
        cursor: pointer;
        box-shadow: $shadow;
        width: 50%;
        border-radius: 8px;

        &:hover {
          transform: scale(1.03);
        }

        @include mobile {
          width: 100%;
        }
      }
      &__content {
        .content {
          &__title {
            color: $color-dark-gray;
            font-family: $font-bold;
            font-size: 36px;

            @include mobile {
              font-size: 28px;
            }
          }
          &__description {
            color: $color-gray;
            font-size: 16px;
            margin-top: 4px;
          }
          &__tech-stacks-title {
            color: $color-dark-gray;
            margin-top: 32px;
            font-family: $font-bold;
            font-size: 20px;

            @include mobile {
              font-size: 16px;
              margin-top: 20px;
            }
          }
          &__tech-stacks {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 8px;

            .tech-stacks {
              &__item {
                border-radius: 8px;
                background-color: $color-blue;
                padding: 4px 12px;
                color: $color-white;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  &__details {
    margin-top: 4rem;

    .details {
      &__no-details {
        color: $color-gray;
        text-align: center;
      }
      &__detail-item {
        padding-bottom: 36px;

        .detail-item {
          &__title {
            color: $color-dark-gray;
            font-family: $font-bold;
            margin-bottom: 16px;
            font-size: 28px;

            @include mobile {
              font-size: 24px;
            }
          }
          &__content {
            margin-bottom: 20px;
            .content {
              &__link-section {
                display: grid;
                gap: 20px;
                grid-template-columns: 1fr 1fr 1fr;
              
                @include mobile {
                  grid-template-columns: 1fr;
                  gap: 12px;
                }
              }
              &__image-section {
                display: grid;
                gap: 20px;
                grid-template-columns: 1fr 1fr;
              
                @include mobile {
                  grid-template-columns: 1fr;
                }
              }
              &__card {
                border-radius: 8px;
                box-shadow: $shadow;
                padding: 1.25rem;
              }
              &__title {
                font-family: $font-bold;
                color: $color-blue;
                font-size: 20px;
                margin-bottom: 8px;
              }
              &__description {
                color: $color-gray;
              }
              &__button {
                margin-top: 8px;
              }
              &__image {
                width: 100%;
                margin-top: 16px;
              }
            }
          }
        }
      }
    }
  }
}

.cDetailHeader {
  padding: 10rem 0 2rem 0;
}

.cDetailThumbnail {
  transition: 200ms ease all;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 2px rgb(221, 221, 221);
}

.cDetailThumbnail:hover {
  transform: scale(1.03);
}

.cDetailContent {
  padding: 2rem 0 4rem 0;
}

.cCard {
  border-radius: 8px;
  box-shadow: 2px 2px 5px 2px rgb(221, 221, 221);
  padding: 1.5rem;
}

@media (max-width: 767.98px) {
  .cDetailHeader {
    padding: 8rem 0 0 0;
  }
}
</style>