<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center">
    <div class="container text-center">
      <i class="fa fa-8x fa-exclamation-triangle cTextBlue"></i>
      <h2 class="cTextDarkGray fw-bold text-center mt-4">{{ config.notFound.title }}</h2>
      <p class="cTextGray mb-4 mt-3">
        {{ config.notFound.description }}
      </p>
      <Button
        :title="config.notFound.button"
        @click="goToHomePage"
      />
    </div>
  </div>
</template>

<script src="./js/not-found.js"></script>

<style>
</style>