<template>
  <nav class="navbar navbar-expand-lg bg-white py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <router-link :to="{ name: 'Home' }" class="text-decoration-none">
          <img src="../assets/vh-logo.png" height="40" alt="" />
        </router-link>
      </div>
      <div>
        <ul class="list-unstyled d-flex align-items-center m-0">
          <li class="my-1 me-lg-5 me-4">
            <router-link :to="{ name: 'Home' }" class="text-decoration-none">
              <h6
                class="d-none d-md-block cTextDarkGray cTextRoute fw-bold m-0"
              >
                HOME
              </h6>
              <div class="d-md-none cNavIcon">
                <i class="cTextRoute fa fa-home cTextDarkGray"></i>
              </div>
            </router-link>
          </li>
          <li class="my-1 me-lg-5 me-4">
            <router-link
              :to="{ name: 'Projects' }"
              :class="`text-decoration-none ${
                $route.path.match('projects*') ? 'router-link-exact-active' : ''
              }`"
            >
              <h6
                class="d-none d-md-block cTextRoute cTextDarkGray fw-bold m-0"
              >
                PROJECTS
              </h6>
              <div class="d-md-none cNavIcon">
                <i class="cTextRoute fa fa-tasks cTextDarkGray"></i>
              </div>
            </router-link>
          </li>
          <li class="my-1">
            <router-link :to="{ name: 'Contact' }" class="text-decoration-none">
              <h6
                class="d-none d-md-block cTextRoute cTextDarkGray fw-bold m-0"
              >
                CONTACT
              </h6>
              <div class="d-md-none cNavIcon">
                <i class="cTextRoute fa fa-phone cTextDarkGray"></i>
              </div>
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

<style scoped>
svg {
  font-size: 1.5em;
}

.cNavIcon {
  transition: 200ms ease all;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

a.router-link-exact-active > .cTextRoute {
  color: #0092ca !important;
}

a.router-link-exact-active > .cNavIcon {
  background: #0092ca;
}
a.router-link-exact-active > .cNavIcon svg {
  color: white !important;
}

.cLogoBrand {
  transition: 200ms ease all;
}

.cLogoBrand:hover {
  transform: rotateZ(360deg);
}
</style>