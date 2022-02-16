<template>
  <div class="cSkillList">
    <h2 class="cTextBlue fw-bold text-center mb-4">
      {{ category }}
    </h2>
    <div
      class="
        bg-white
        d-flex
        flex-wrap
        align-items-center
        justify-content-center
        cSkillBox
        px-md-4 px-3
        py-3
      "
    >
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="mx-3 my-2 text-center"
      >
        <img
          :src="require('@/assets/skills/' + skill.logo)"
          alt=""
          class="cSkillLogo"
        />
        <p class="fw-bold mt-3 mb-0 cTextDarkGray">
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
  width: 72px;
  height: 72px;
  object-fit: contain;
}

.cSkillBox {
  border-radius: 10px;
  box-shadow: 0px 0px 8px 2px rgb(221, 221, 221);
}

.cSkillList {
  transition: 200ms ease all;
  cursor: pointer;
}
.cSkillList:hover {
  transform: scale(1.02);
}
</style>