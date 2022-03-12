<template>
  <div class="cSkillList">
    <div class="bg-white cSkillBox px-md-4 px-3 py-3">
      <h3 class="cTextBlue fw-bold text-center mb-4 mt-2">
        {{ category }}
      </h3>
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div
          v-for="skill in skills"
          :key="skill.title"
          class="mx-3 my-2 text-center"
        >
          <img
            :src="require('@/assets/skills/' + skill.logo)"
            :alt="skill.title"
            class="cSkillLogo"
          />
          <p class="fw-bold mt-3 mb-0 cTextDarkGray">
            {{ skill.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category", "skills"],
};
</script>

<style scoped>
.cSkillLogo {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.cSkillBox {
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgb(221, 221, 221);
}

.cSkillList {
  transition: 200ms ease all;
  cursor: pointer;
}
.cSkillList:hover {
  transform: scale(1.02);
}

@media (max-width: 767.98px) {
  .cSkillLogo {
    width: 48px;
    height: 48px;
  }
}
</style>