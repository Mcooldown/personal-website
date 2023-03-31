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
  <div v-if="showButton" class="button-up">
    <button @click="scrollToTop">
      <i class="fa fa-arrow-up" />
    </button>
  </div>
</template>

<script src="./js/app.js"></script>

<style lang="scss">
@import "~@/styles/variables.scss";

html {
  scroll-behavior: smooth;
}

* {
  font-family: "OpenSans-Regular";
}

.wrapper {
  min-height: 100vh;
}

.button-up {
  position: fixed;
  bottom: 2vh;
  right: 4vw;
  transition: 200ms ease all;
  
  button {
    background: $color-blue;
    color: $color-white;
    font-size: 1.5em;
    padding: 0.25rem 1rem;
    border-radius: 8px;
    border: none;
  }
}

</style>
