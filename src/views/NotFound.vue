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
    <div class="container">
      <h1 class="cTextGray fw-bold text-center mb-4">PAGE NOT FOUND</h1>
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