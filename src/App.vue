<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */

.cBgDarkGray {
  background-color: #393e46;
}

.cBgLightGray {
  background-color: #eeeeee;
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

@import "~bootstrap/dist/css/bootstrap.css";
</style>
