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
  /* padding: 5rem; */
}

.content {
  width: 100%;
  height: 100%;
  color: var(--color-primary);
}
</style>
