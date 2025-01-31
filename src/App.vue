<template>
  <div v-if="visibleNavbar" ref="navbar">
    <Navbar />
  </div>
  <div ref="content" class="wrapper">
    <router-view v-slot="{ Component, route }">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </router-view>
  </div>
  <div v-if="showButton" class="button-up">
    <button @click="scrollToTop">
      <i class="fa fa-arrow-up" />&nbsp;&nbsp;Scroll to top
    </button>
  </div>
</template>

<script src="./js/app.js"></script>

<style lang="scss">
@import "~@/styles/variables.scss";
@import "~@/styles/responsive";

html {
  scroll-behavior: smooth;
}

* {
  font-family: "Montserrat-Regular";
}

body {
  margin: 0;
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
    font-size: 18px;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
}

.section-wrapper {
  padding: 0 2rem;
  margin: auto;
  
  @include widescreen {
    max-width: $widescreen;
    padding: 0;
  }
  
  @include mobile {
    padding: 0 1rem;
  }
}

</style>
