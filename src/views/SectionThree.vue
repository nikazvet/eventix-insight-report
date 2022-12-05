<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
export default {
  name: "SectionTwo",
  components: {
    DefaultLayout,
  },
};
</script>

<template>
  <DefaultLayout>
    <div>Hello 3</div>
  </DefaultLayout>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
  padding: 5rem;
  background-color: yellow;
}
</style>
