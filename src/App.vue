<template>
  <div ref="navbar">
    <Navbar />
  </div>
  <div ref="content" class="wrapper">
    <router-view v-slot="{ Component, route }">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </router-view>
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

<script src="./js/app.js"></script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

.wrapper {
  min-height: 100vh;
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

.cTextGray {
  color: #8e8e8e;
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
  right: 4vw;
  transition: 200ms ease all;
}

.cButtonUp > button {
  font-size: 1.5em;
  padding: 0.25rem 1rem;
  border-radius: 8px;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 0.75s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
