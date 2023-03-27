<template>
  <button>
    <i
      v-if="icon"
      :class="`${icon} ${!!title && 'me-2'}`"
    >
    </i>
    {{ title }}
  </button>
</template>

<script src="./js/button.js"></script>

<style scoped>
button {
  border: 2px solid #0092ca;
  padding: 8px 15px;
  transition: 200ms ease all;
  color: #0092ca;
  background: transparent;
  border-radius: 5px;
}
button:hover {
  background-color: #0092ca;
  color: white;
}
</style>