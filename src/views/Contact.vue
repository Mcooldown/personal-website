<template>
  <div class="cContact" v-animate-onscroll="'zoomInUp'">
    <div class="container">
      <h1 class="cTitle cTextDarkGray fw-bold">
        Contact <span class="cTextBlue">Me</span>
      </h1>
      <p class="text-muted mt-3 mb-5">
        Reach me out through this contact if you like to work with me!
      </p>
      <h5 class="cTextDarkGray fw-bold mt-4">
        <i class="fa fa-envelope"></i>
        Email :&nbsp;
        <a
          href="mailto:vincenthadinata30@gmail.com"
          class="cTextBlue cLogoSocial"
        >
          vincenthadinata30@gmail.com
        </a>
      </h5>
      <h5 class="cTextDarkGray fw-bold mt-4">
        <i class="fab fa-linkedin"></i>
        LinkedIn :&nbsp;
        <a
          href="https://www.linkedin.com/in/vincenthadinata/"
          class="cTextBlue cLogoSocial"
        >
          https://www.linkedin.com/in/vincenthadinata/
        </a>
      </h5>
      <h5 class="cTextDarkGray fw-bold mt-4">
        <i class="fab fa-github"></i>
        GitHub :&nbsp;
        <a href="https://github.com/Mcooldown" class="cTextBlue cLogoSocial">
          https://github.com/Mcooldown
        </a>
      </h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cContact {
  padding: 3rem 0 8rem 0;
}
</style>