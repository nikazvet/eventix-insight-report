<script>
export default {
  name: "DefaultLayout",
};
</script>

<template>
  <section class="container">
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.content {
  width: 20rem;
  height: 20rem;
  /* margin: auto; */
  color: var(--color-primary);
  background-color: blue;
}
</style>
