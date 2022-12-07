<script>
export default {
  name: "Navigation",
};
</script>

<template>
  <nav>
    <router-link to="/0">Section One</router-link> |
    <router-link to="/1">Section Two</router-link> |
    <router-link to="/2">Section Three</router-link> |
    <router-link to="/3">Section Four</router-link> |
    <router-link to="/4">Section Five</router-link> |
    <router-link to="/5">Section Six</router-link>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
