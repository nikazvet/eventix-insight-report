<script>
export default {
  name: "DefaultLayout",
};
</script>

<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<style scoped>
.container {
  width: 20rem;
  margin: 0 auto;
  color: var(--color-primary);
  background-color: blue;
}
</style>
