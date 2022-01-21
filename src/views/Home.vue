<template>
  <div class="min-vh-100 cBgLightGray pt-4 d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h4 class="fw-bold cTextBlue">Hello, I'm Vincent Hadinata</h4>
          <h1 class="cTitle cTextDarkGray fw-bold mb-3">
            Computer Science Student interested in Full Stack Development
          </h1>
          <p class="cTextDarkGray">
            Currently, I am studying full stack development, which is making
            applications both on the front-end and back-end. During college, I
            served as IT Manager at BINUS English Club, where I was involved in
            all web projects belonging to the organization, besides that I was
            also involved in several web application development projects from
            lectures. I also made several personal projects after completing
            courses outside of college.
          </p>
          <Button title="DOWNLOAD MY RESUME" :onClick="onClickButtonLanding" />
        </div>
        <div class="col-lg-6 d-lg-block ps-lg-4 d-none">
          <img src="@/assets/profile-bnw.png" class="w-100" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: { Button },
  setup() {
    const onClickButtonLanding = () => {
      console.log("halo");
    };

    return { onClickButtonLanding };
  },
};
</script>

<style scoped>
.cTitle {
  font-size: 48px;
}
</style>
