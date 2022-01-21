<template>
  <footer class="cBgLightGray">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h4 class="cTextGray fw-bold">CONTACT</h4>
          <ul class="list-unstyled">
            <li class="my-1">
              Mail:
              <a href="mailto:vincenthadinata30@gmail.com" class="cTextBlue"
                >vincenthadinata30@gmail.com</a
              >
            </li>
            <li class="my-1">
              Linked-in:
              <a
                href="https://www.linkedin.com/in/vincenthadinata/"
                class="cTextBlue"
                target="_blank"
                >https://www.linkedin.com/in/vincenthadinata/</a
              >
            </li>
            <li class="my-1">
              GitHub:
              <a
                href="https://github.com/Mcooldown"
                class="cTextBlue"
                target="_blank"
                >https://github.com/Mcooldown</a
              >
            </li>
          </ul>
        </div>
        <div>
          Copyright &copy; {{ new Date().getFullYear() }} Vincent Hadinata
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  padding: 4rem 0 2rem 0;
}
</style>