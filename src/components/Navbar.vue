<template>
  <nav class="navbar navbar-expand-lg cBgLightGray fixed-top py-3">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="text-decoration-none">
        <div class="d-flex align-items-center">
          <img
            src="@/assets/logo-brand.png"
            class="cLogoBrand"
            height="40"
            alt=""
          />
          <h5 class="fw-bold cTextDarkGray m-0 ms-2">VINCENT HADINATA</h5>
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#websiteNavbar"
        aria-controls="websiteNavbar"
        aria-expanded="false"
      >
        <span class="cTextDarkGray">☰</span>
      </button>
      <div class="collapse navbar-collapse" id="websiteNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="my-1 me-lg-5">
            <router-link :to="{ name: 'Home' }" class="text-decoration-none">
              <h6 class="cTextDarkGray fw-bold m-0">HOME</h6>
            </router-link>
          </li>
          <li class="my-1 me-lg-5">
            <router-link
              :to="{ name: 'Projects' }"
              class="text-decoration-none"
            >
              <h6 class="cTextDarkGray fw-bold m-0">PROJECTS</h6>
            </router-link>
          </li>
          <li class="my-1">
            <router-link :to="{ name: 'Blog' }" class="text-decoration-none">
              <h6 class="cTextDarkGray fw-bold m-0">BLOG</h6>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
a.router-link-exact-active > h6 {
  color: #0092ca !important;
}
</style>