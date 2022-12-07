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

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
