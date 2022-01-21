<template>
  <button @click="onClick">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: ["title"],
  emits: ["onClick"],
  setup(props, { emit }) {
    const onClick = () => {
      emit("onClick");
    };

    return { onClick };
  },
};
</script>

<style scoped>
button {
  border: 2px solid #0092ca;
  padding: 8px 15px;
  transition: 200ms ease all;
  color: #0092ca;
}
button:hover {
  background-color: #0092ca;
  color: white;
}
</style>