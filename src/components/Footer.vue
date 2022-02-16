<template>
  <footer class="bg-white text-center">
    <div class="container">
      <div class="d-md-flex justify-content-center align-items-center">
        <h4 class="fw-bold cTextDarkGray">
          "Work hard in silence, let your success be your noise."
        </h4>
        <p class="cTextBlue m-0">- Frank Ocean</p>
      </div>
      <div class="text-center text-muted mt-4">
        Copyright &copy; {{ new Date().getFullYear() }} Vincent Hadinata
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  padding: 2rem 0;
}
</style>