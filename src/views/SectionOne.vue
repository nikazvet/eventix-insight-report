<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
export default {
  name: "SectionOne",
  components: {
    DefaultLayout,
  },
};
</script>

<template>
  <DefaultLayout>
    <div>Hello 1</div>
  </DefaultLayout>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
  padding: 5rem;
  background-color: blue;
}
</style>
