<template>
  <div
    class="
      min-vh-100
      cBgLightGray
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <div class="container text-center">
      <i class="fa fa-8x fa-tools cTextBlue"></i>
      <h1 class="cTextGray fw-bold mt-4">Under Construction</h1>
      <p class="text-muted mb-4">Coming soon</p>
      <router-link
        :to="{ name: 'Home' }"
        class="d-flex justify-content-center text-decoration-none"
      >
        <Button title="BACK TO HOME" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: { Button },
};
</script>

<style>
</style>