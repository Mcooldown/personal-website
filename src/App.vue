<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cBgDarkGray {
  background-color: #393e46;
}

.cBgLightGray {
  background-color: #f8f8f8;
}

.cBgBlue {
  background-color: #0092ca;
}

.cTextDarkGray {
  color: #393e46;
}

.cTextBlue {
  color: #0092ca;
}

.cLogoSocial {
  transition: 200ms ease all;
}

.cLogoSocial:hover {
  color: #005c81 !important;
}
</style>
