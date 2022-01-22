<template>
  <div class="cSkillList">
    <h2 class="cTextBlue fw-bold text-center mb-md-5 mb-4">
      {{ category }}
    </h2>
    <div class="d-flex flex-wrap align-items-center justify-content-center">
      <div v-for="skill in skills" :key="skill.title" class="m-2 text-center">
        <img
          :src="require('@/assets/skills/' + skill.logo)"
          alt=""
          class="cSkillLogo"
        />
        <p class="fw-bold mt-3">
          {{ skill.title }}
        </p>
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
  width: 80px;
  height: 80px;
  object-fit: contain;
}
</style>