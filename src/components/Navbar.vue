<template>
  <nav class="navbar navbar-expand-lg cBgLightGray fixed-top py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <router-link :to="{ name: 'Home' }" class="text-decoration-none">
          <img
            src="@/assets/logo-brand.png"
            class="cLogoBrand"
            height="40"
            alt=""
          />
        </router-link>
      </div>
      <div>
        <ul class="list-unstyled d-flex m-0">
          <li class="my-1 me-lg-5 me-4">
            <router-link :to="{ name: 'Home' }" class="text-decoration-none">
              <h6 class="d-none d-md-block cTextDarkGray fw-bold m-0">HOME</h6>
              <i class="d-md-none fa fa-home cTextDarkGray"></i>
            </router-link>
          </li>
          <li class="my-1 me-lg-5 me-4">
            <router-link
              :to="{ name: 'Projects' }"
              class="text-decoration-none"
            >
              <h6 class="d-none d-md-block cTextDarkGray fw-bold m-0">
                PROJECTS
              </h6>
              <i class="d-md-none fa fa-tasks cTextDarkGray"></i>
            </router-link>
          </li>
          <li class="my-1 me-lg-5 me-4">
            <router-link :to="{ name: 'Blog' }" class="text-decoration-none">
              <h6 class="d-none d-md-block cTextDarkGray fw-bold m-0">BLOG</h6>
              <i class="d-md-none fa fa-blog cTextDarkGray"></i>
            </router-link>
          </li>
          <li class="my-1">
            <a href="#" @click="onClickContact" class="text-decoration-none">
              <h6 class="d-none d-md-block cTextDarkGray fw-bold m-0">
                CONTACT
              </h6>
              <i class="d-md-none fa fa-phone cTextDarkGray"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    const onClickContact = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    return { onClickContact };
  },
};
</script>

<style scoped>
svg {
  font-size: 1.5em;
}

a.router-link-exact-active > h6 {
  color: #0092ca !important;
}
a.router-link-exact-active > svg {
  color: #0092ca !important;
}

.cLogoBrand {
  transition: 200ms ease all;
}

.cLogoBrand:hover {
  transform: rotateZ(360deg);
}
</style>