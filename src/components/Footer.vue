<template>
  <footer class="cBgLightGray">
    <div class="container">
      <div class="d-lg-flex justify-content-between align-items-center">
        <div class="my-4">
          <h4 class="cTextGray fw-bold">GET IN TOUCH</h4>
          <p class="text-muted mb-3">
            I'm looking forward to start working with you.
          </p>
          <ul class="list-unstyled d-flex">
            <li class="me-3">
              <a href="mailto:vincenthadinata30@gmail.com" class="cTextBlue"
                ><i class="fa fa-envelope fa-2x"></i
              ></a>
            </li>
            <li class="me-3">
              <a
                href="https://www.linkedin.com/in/vincenthadinata/"
                class="cTextBlue"
                target="_blank"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li class="me-3">
              <a
                href="https://github.com/Mcooldown"
                class="cTextBlue"
                target="_blank"
                ><i class="fab fa-github fa-2x"></i
              ></a>
            </li>
            <li class="me-3">
              <a
                href="https://instagram.com/vincenthadinata"
                class="cTextBlue"
                target="_blank"
                ><i class="fab fa-instagram fa-2x"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="text-lg-end my-4">
          <h4 class="fw-bold cTextDarkGray">
            "Work hard in silence, let your success be your noise."
          </h4>
          <p class="cTextBlue">- Frank Ocean</p>
        </div>
      </div>
      <hr />
      <div class="text-lg-center">
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