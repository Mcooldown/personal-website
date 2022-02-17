<template>
  <div ref="navbar">
    <Navbar />
  </div>
  <div ref="content">
    <router-view />
  </div>
  <div ref="footer">
    <Footer />
  </div>
  <div v-if="showButton" class="cButtonUp">
    <button @click="scrollToTop" class="btn cBgBlue text-white">
      <i class="fa fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  components: { Navbar, Footer, Button },
  setup() {
    const showButton = ref(false);

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      showButton.value = !(window.scrollY === 0);
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return { scrollToTop, showButton };
  },
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

.cButtonUp {
  position: fixed;
  bottom: 2vh;
  right: 3vw;
  transition: 200ms ease all;
}

.cButtonUp > button {
  font-size: 2em;
  padding: 0.25rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px rgb(221, 221, 221);
}
</style>
